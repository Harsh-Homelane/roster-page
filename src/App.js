import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body/Body";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}
