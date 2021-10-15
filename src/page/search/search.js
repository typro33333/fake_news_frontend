import React from "react";
import "./search.css";
import {SearchClient} from "../../proto/serve_grpc_web_pb";
import {Data} from "../../proto/serve_pb";

function format(data){
    var array = [];
    for(var i=0;i<data.length;i++){
        array.push(Object.assign({},data[i]));
    }
    return array;
}

export default class Search extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            text:"",
            number:6,
            data:[]
        };
    }
    
    render(){

        const {text,number,data} = this.state;

        const listItem = (data) => {
            if(data.length === 0){
                return(
                    <div className="no_result">No have result, please start your search!</div>
                );
            }else if(data.length > 0){ 
                const map = data.map((item,index)=>
                    <div key={index} className="box-card">
                        <div className="content-result">
                            <p className="highlight-color title-content">Interpretation {index+1}</p>
                            <p style={{marginTop:"20px"}}><span className="txt-title-card-result">Title: {item["1"]}</span></p>
                            <p style={{marginTop:"8px"}}> <span className="txt-time-search">Time: {item["7"]}</span></p>
                            <p style={{marginTop:"20px"}}>Description: {item["2"]}</p>
                            <p style={{marginTop:"20px"}}> - Cording to this interpretation, the given statement seems to be <span className="txt-red">false</span></p>
                            <p style={{marginTop:"20px"}}>{text}</p>
                            <button className="btn-readmore-search" style={{marginTop:"20px",marginBottom:"20px"}}>More Detail</button>
                        </div>
                    </div>
                );
                return map;
            }
            return 0;
        };

        return(
            <div>
                <div className="space-60"></div>
                <div className="title-coronacheck"><span className="highlight-color">CoronaCheck</span>: Computational Fact Checking for Statistical <span className="highlight-color">Coronavirus</span> Claims</div>
                <div className="des-coronacheck">Verify statistical claims about the coronavirus spread and effects on data from the <u style={{cursor:"pointer"}}>official sources</u>.</div>
                <div className="search">
                    <input className="item-search" placeholder="Search..." onChange={async(event)=>{
                        await this.setState({text:event.target.value});
                    }}/>
                    <div className="btn-search" onClick = {
                        async()=>{
                        var client = new SearchClient("http://0.0.0.0:8080");
                        var req = new Data();
                        req.setMessage(text);
                        req.setResultNumber(number);
                        const metadata = {"custom-header-1":"SearchResult"};
                        await client.search(req,metadata,(error, result) => {
                            if(error){
                                return 0;
                            }
                            return this.setState({data:format(result.array[0][0])});
                        });
                    }}>
                        <p className="txt-search">Search</p>
                    </div>
                </div>
                <div className="title-result">
                    <div className="txt-result">
                    There are multiple possible interpretations for this claim:
                    </div>
                    <div className="layout-card">
                        {listItem(data)}
                    </div>
                </div>
                <div className="space-100"></div>
            </div>
        );
    }
}