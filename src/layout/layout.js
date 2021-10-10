import React from "react";
import Header from "@components/header/header";
import Footer from "../components/footer/footer";

export default function Layout(props){
    return(
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}