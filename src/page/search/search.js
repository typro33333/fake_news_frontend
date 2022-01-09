import React from 'react';
import './search.css';
import { search } from '@core/utils/api/api';
import { Space40, Space60, Space120 } from '@core/components/atom/space/space';
import { formatString } from '@core/utils/modules/modules';
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
        console.log(data);
        const map = data[1].map((item, index) => (
          <div key={index} className="box-card">
            <div className="content-result">
              <p className="highlight-color title-content">
                Interpretation {index + 1}
              </p>
              <p style={{ marginTop: '20px' }}>
                <span className="txt-title-card-result">
                  Title: {item['title']}
                </span>
              </p>
              <p style={{ marginTop: '8px' }}>
                {' '}
                <span className="txt-time-search">Time: {item['publish_time']}</span>
              </p>
              <p style={{ marginTop: '20px' }}>Description: {formatString(item['description'])}</p>
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
        <div className="search__title">
          <div className='title__layout'>
            <h1 className="highlight-color">Information Tracking Covid-19 </h1>
            <h3 className='layout__sub-title'> Computational Fact Checking for Statistical
              <span className="highlight-color"> Covid-19 </span>Claims
            </h3>
          </div>
        </div>
        <div className="search__description">
          <p className='description__layout'>
          Verify statistical claims about the coronavirus spread and effects on
          data from the <span className='description--modifile'>official sources</span>.
          </p>
        </div>
        <Space40></Space40>
        <div className="search">
          <div className='search__layout'>
            <input
              className="input-search"
              placeholder="Sentence about covid-19"
              onChange={async (event) => {
                await this.setState({ text: event.target.value });
              }}
            />
            <div
              className="btn-search"
              onClick={async() => {
                await search(text, number).then(async res => {
                  await this.setState({ data: res});
                });
              }}
            >
              <p className="txt-search">Tracking</p>
            </div>
          </div>
        </div>
        <Space60></Space60>
        <div className="title-result">
          <h5 className="txt-result">
            There are multiple possible interpretations for this claim
          </h5>
          <Space40></Space40>
          <div className="layout-card">{listItem(data)}</div>
        </div>
        <Space120></Space120>
      </div>
    );
  }
}
