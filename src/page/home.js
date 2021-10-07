import React from "react";

export default class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.props={};
    }
    
    render(){
        return(
            <div>
                <h1>This is Home page</h1>
                <button onClick={()=>{
                    this.props.history.push("/second");
                }}>Go to second page</button>
            </div>
        );
    }
}