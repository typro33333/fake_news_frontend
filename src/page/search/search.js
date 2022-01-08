import React from 'react';
import './search.css';
import { SearchClient } from '@core/proto/serve_grpc_web_pb';
import { Data } from '@core/proto/serve_pb';

const metaData = [
  'title',
  'description',
  'link',
  'blog_title',
  'blog_link',
  'author',
  'publish_time'
];

function format(data) {
  var array = [];
  var obj = {};
  // var obj = {};
  console.log(data[0][1]);
  for (var i = 0; i < data[0].length; i++) {
    for(var j = 0; j < metaData.length; j++) {
      obj[metaData[j]] = data[0][i][j+1];
    }
    array.push(Object.assign({}, obj));
    obj = {};
  }
  return array;
}

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      number: 3,
      data: [],
      percent: 0,
      tracking: false,
    };
  }

  render() {
    const { text, number, data } = this.state;
    const listItem = (data) => {
      if (data.length === 0) {
        return (
          <div className="no_result">
            No have result, please start your search!
          </div>
        );
      } else if (data.length > 0) {
        const map = data.map((item, index) => (
          <div key={index} className="box-card">
            <div className="content-result">
              <p className="highlight-color title-content">
                Interpretation {index + 1}
              </p>
              <p style={{ marginTop: '20px' }}>
                <span className="txt-title-card-result">
                  Title: {item['1']}
                </span>
              </p>
              <p style={{ marginTop: '8px' }}>
                {' '}
                <span className="txt-time-search">Time: {item['7']}</span>
              </p>
              <p style={{ marginTop: '20px' }}>Description: {item['2']}</p>
              <p style={{ marginTop: '20px' }}>
                {' '}
                - Cording to this interpretation, the given statement seems to
                be <span className={this.state.tracking ? 'txt-green' : 'txt-red'}>{this.state.tracking}</span>
              </p>
              <p style={{ marginTop: '20px' }}>Query: {text}</p>
              <button
                className="btn-readmore-search"
                style={{ marginTop: '20px', marginBottom: '20px' }}
              >
                More Detail
              </button>
            </div>
          </div>
        ));
        return map;
      }
      return 0;
    };

    return (
      <div>
        <div className="title-coronacheck">
          <h1>Corona Information Tracking Computational
          Fact Checking for Statistical{' '}
          <span className="highlight-color">Coronavirus</span> Claims
          </h1>
        </div>
        <div className="des-coronacheck">
          Verify statistical claims about the coronavirus spread and effects on
          data from the <u style={{ cursor: 'pointer' }}>official sources</u>.
        </div>
        <div className="search">
          <input
            className="item-search"
            placeholder="Search..."
            onChange={async (event) => {
              await this.setState({ text: event.target.value });
            }}
          />
          <div
            className="btn-search"
            onClick={async () => {
              console.log('clicked');
              var client = new SearchClient('http://backend.ttst.asia');
              var req = new Data();
              req.setMessage(text);
              req.setResultNumber(number);
              const metadata = { 'custom-header-1': 'SearchResult' };
              await client.search(req, metadata, (error, result) => {
                if (error) {
                  return 0;
                }
                this.setState({percent: result.array[0][1]});
                this.setState({tracking: result.array[0][2]});
                return this.setState({ data: format(result.array[0][0]) });
              });
            }}
          >
            <p className="txt-search">Search</p>
          </div>
        </div>
        <div className="title-result">
          <div className="txt-result">
            There are multiple possible interpretations for this claim:
          </div>
          <div className="layout-card">{listItem(data)}</div>
        </div>
        <div className="space-100"></div>
      </div>
    );
  }
}
