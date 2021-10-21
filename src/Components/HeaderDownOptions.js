import React, { Component } from 'react'

export default class HeaderDownOptions extends Component {
    render() {
        return (
            <div className="options">
                {this.props.option}
            </div>
        )
    }
}
