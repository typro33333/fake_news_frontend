import React,{useState,useEffect} from "react";
import Header from "../../components/header/header";
import './primary.css';
import {SearchClient} from '../../proto/serve_grpc_web_pb';
import {Data} from '../../proto/serve_pb';

export default function Primary(){
    
    const [text,onChangetext] = useState('');

    useEffect(()=>{
        (async () => {
            var client = new SearchClient('0.0.0.0:8080');
            var req = new Data();
            req.setMessage("social media help solve the Gabby Petito case");
            req.setResultNumber(3)
            const metadata = {'Search-header':'SearchResult'}
            await client.search(req,metadata,(error, result) => {
              console.log(result)
            })
        })();
    },[])
    return(
        <div>
            <Header/>
            <div className="space-60"></div>
            <div className="title-coronacheck"><span className="highlight-color">CoronaCheck</span>: Computational Fact Checking for Statistical <span className="highlight-color">Coronavirus</span> Claims</div>
            <div className="des-coronacheck">Verify statistical claims about the coronavirus spread and effects on data from the <u style={{cursor:"pointer"}}>official sources</u>.</div>
            <div className="search">
                <input className="item-search" placeholder="Search..." onChange={async(event)=>{
                    await onChangetext(event.target.value);
                }}/>
                <div className="btn-search">
                    <p className="txt-search">Search</p>
                </div>
            </div>
            <div className="title-result">
                <div className="txt-result">
                There are multiple possible interpretations for this claim.
                </div>
                <div className="layout-card">
                    <div className="box-card">
                        <p>Interpretation</p>
                        <p>Relevant tables :</p>
                        <p>Time :</p>
                        <p>Country :</p>
                        <p>According to this interpretation, the given statement seems to be false</p>
                        <p>The death rate in US is higher than in Germany</p>
                        <button>More Detail</button>
                    </div>
                    <div className="box-card">

                    </div>
                    <div className="box-card">
                    
                    </div>
                    <div className="box-card">
                    
                    </div>
                </div>
            </div>
            <div className="space-100"></div>
        </div>
    )
}