import React, { Component } from "react";
import LeftBody from "./LeftBody";
import RightBody from "./RightBody";

export default class Body extends Component {
    render() {
        return (
            <div className="lower-body d-flex flex-row">
                <LeftBody />
                <RightBody />
            </div>
        );
    }
}
