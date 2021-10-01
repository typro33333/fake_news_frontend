import React from "react";
import './header.css';

const items = [
    {
        name:"How to use",
        link:"#"
    },
    {
        name:"Document",
        link:"#"
    },
    {
        name:"Github",
        link:"#"
    }
]

function Navagation() {
    const listItems = items.map((item) =>
      <li key={item.name} className="item_nav"><a className="link_nav" href={item.link}>{item.name}</a></li>
    );
    return (
      <ul className="list_items_nav">{listItems}</ul>
    );
}
        
export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.props={

        }
        this.scrollFunction = this.scrollFunction.bind(this);
    }

    componentDidMount(){
        window.onscroll = () => {this.scrollFunction()};
    }

    scrollFunction = () => {
        console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop > 90){
            document.getElementById('header_container').style.height = '60px';
        }else{
            document.getElementById('header_container').style.height = '90px';
        }
    }

    render(){
        return(
            <div className="header-container" id="header_container">
                <div className="layout-header">
                    <div className="logo">
                        Logo
                    </div>
                    <div className="navagation-item">
                        {Navagation()}
                    </div>
                </div>
            </div>
        )
    }
}
