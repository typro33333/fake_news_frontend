import React from "react";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";

export default function Layout(props){
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}