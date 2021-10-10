import React from "react";

export default class Secondpage extends React.Component{
    constructor(props){
        super(props);
        this.props={};
    }
    render(){
        return(
            <div>
                <h1>This is Second page</h1>
                <button onClick={()=>{
                    this.props.history.push("/home");
                }}>Go back</button>
            </div>
        );
    }
}