import React, { Component } from "react";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css"

export default class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                {this.LoadMainContent()}
                <Footer/>
            </React.Fragment>
        );
    }
    
     LoadMainContent = () => {
        let view;
        switch(window.location.hash){
            case "":
            case "#home":
                view = <Home/>
            break;

            // case "#search":
                // view = <Search/>
            // break;

            // case "#contact":
            //     view = <Contact/>;
            // break;
                    
            default:
                view = <h1>404 not found</h1>;
            break;
        }
        return view;
    }
}