import React, { Component } from "react";
import HeaderDownOptions from "./HeaderDownOptions";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [
                "Customer Details",
                "Quotes",
                "Drawing 2D",
                "Orders",
                "Design",
                "Payouts",
                "Payout",
                "Production",
                "Dispatch",
                "Installation",
                "History",
                "Escalation",
                "Snags",
            ],
        };
    }
    render() {
        return (
            <div className="d-flex flex-column fixed-top full-header">
                <div className="header w-100 pl-4 pr-4 d-flex justify-content-between ">
                    <div>
                        <i className="fa fa-bars pr-3"></i>
                        <img
                            src="https://roster-dev-3.homelane.com/assets/img/Bitmap.png"
                            height="100%"
                            width="173px"
                            alt="logo"
                        />
                    </div>
                    <div className="d-flex align-self-center justify-content-between">
                        <i class="fa fa-bell p-3"></i>
                        <div className="d-flex align-self-center justify-content-between">
                            <div className="dropdown d-flex align-items-center">
                                <button
                                    className="custom-dropdown userview d-flex align-items-center"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Hi, Harsh
                                    <i
                                        className="fa fa-user-circle p-2"
                                        style={{
                                            fontSize: "25px",
                                            color: "black",
                                        }}
                                    ></i>
                                </button>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <a className="dropdown-item" href="#">
                                        My Account
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Log Out
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 d-flex flex-row justify-content-between header-middle">
                    <div className="d-flex flex-column">
                        <div className="mb-1 name">freelancer roster seven</div>
                        <div className="mb-1 nameId">ID: Ben-f-3000381716</div>
                        <div>
                            <button className="btn-pushed-to-production">
                                pushed to production
                            </button>
                            <button className="btn-cancellation-in-progress">
                                cancellation in progress
                            </button>
                        </div>
                        <div className="address">
                            Address:Bengaluru, Karnataka, India
                        </div>
                        <div className="address">
                            Last Checkin : 7-October-2021 10:30 AM
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn-launch">Launch IQ</button>
                        <button className="btn-launch-spacecraft">
                            Launch Spacecraft
                        </button>
                        <button className="btn-check-in">Check In</button>
                    </div>
                </div>
                <div className="header-down d-flex justify-content-around">
                    {this.state.options.map((element) => (
                        <HeaderDownOptions option={element} />
                    ))}
                </div>
            </div>
        );
    }
}
