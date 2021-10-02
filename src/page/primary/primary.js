import React,{useState,useEffect} from "react";
import Header from "../../components/header/header";
import './primary.css';
import {TrainClient} from '../../proto/train_grpc_web_pb';
import {SearchClient} from '../../proto/serve_grpc_web_pb';
import {StatusCode,InputData} from '../../proto/train_pb';

export default function Primary(){
    
    const [text,onChangetext] = useState('');

    useEffect(()=>{
        (async () => {
            var client = new TrainClient('tstsv.000ddns.net:9090');
            var req = new InputData();
            const metadata = {'Trainning-header':'Statuscode'}
            await client.training(req,metadata,(error, result) => {
              console.log(result)
            })
        })();
    },[])
    console.log(text)
    return(
        <div>
            <Header/>
            <div className="space-140"></div>
            <div></div>
            <div className="search">
                <input className="item-search" placeholder="Search..." onChange={async(event)=>{
                    await onChangetext(event.target.value);
                }}/>
                <div className="btn-search">
                    <p className="txt-search">Search</p>
                </div>
            </div>
        </div>
    )
}