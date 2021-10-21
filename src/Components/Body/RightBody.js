import React, { Component } from "react";

export default class RightBody extends Component {
    render() {
        return (
            <div className="right-body d-flex flex-column">
                <div className="timeline">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <div className="accordion-header " id="headingTwo">
                                <button
                                    className="accordion-button collapsed w-100 d-flex flex-row justify-content-between align-items-center timeline-head"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <div className="timeline-heading-text">
                                        Timeline (No Timeline)
                                    </div>
                                    <button className="timeline-heading-btn">
                                        Update Timeline
                                    </button>
                                </button>
                            </div>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body collapse-content d-flex flex-column">
                                    <div className="collapse-heading">
                                        Homelane
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Timeline
                                        </div>
                                        <div className="collapse-panel-content">
                                            No Timeline
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Updated By
                                        </div>
                                        <div className="collapse-panel-content">
                                            test OPS
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Reason
                                        </div>
                                        <div className="collapse-panel-content">
                                            Presence of certain categories of
                                            products/services in quote
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Comments
                                        </div>
                                        <div className="collapse-panel-content">
                                            HomeLane scope includes Default
                                            Timeline; Customer scope includes
                                            Hob and Chimney Supply or
                                            Installation
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Updated Date
                                        </div>
                                        <div className="collapse-panel-content">
                                            11 Oct 2021
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            First Email Sent Date
                                        </div>
                                        <div className="collapse-panel-content">
                                            -
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Last Email Sent Date
                                        </div>
                                        <div className="collapse-panel-content">
                                            -
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-heading">
                                        <div>Customer</div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Customer Agreement
                                        </div>
                                        <div className="collapse-panel-content">
                                            No
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Customer Comments
                                        </div>
                                        <div className="collapse-panel-content">
                                            -
                                        </div>
                                    </div>
                                    <div className="d-flex collapse-panel-rows">
                                        <div className="collapse-panel-options">
                                            Customer Updated Date
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-summary d-flex justify-content-between">
                    <div>
                        <i class="fa fa-file"></i>Your Order Summary
                    </div>
                    <div>
                        <button className="btn-settle">Settlement</button>
                        <button className="btn-edit">Edit</button>
                    </div>
                </div>
                <div className="overview d-flex flex-column">
                    <div className="overview-head">Overview</div>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="left-overview d-flex flex-column w-50 pr-2">
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    Current Order Value :
                                </div>
                                <div className="overview-right-content">
                                    75,993
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    10% Order Value :
                                </div>
                                <div className="overview-right-content">
                                    75,993
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    40% Order Value :
                                </div>
                                <div className="overview-right-content">
                                    75,993
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    50% Order Value :
                                </div>
                                <div className="overview-right-content">-</div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    OB Showroom :
                                </div>
                                <div className="overview-right-content">
                                    Test Showroom
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    40% Approved Date :
                                </div>
                                <div className="overview-right-content">
                                    11 Oct 2021
                                </div>
                            </div>
                        </div>
                        <div className="right-overview d-flex flex-column w-50 pl-2">
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    Booked on :
                                </div>
                                <div className="overview-right-content">
                                    7 Oct 2021
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    Signed off on :
                                </div>
                                <div className="overview-right-content">
                                    11 Oct 2021
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    Pushed to Production :
                                </div>
                                <div className="overview-right-content">
                                    11 Oct 2021
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    Production Start :
                                </div>
                                <div className="overview-right-content">
                                    11 Oct 2021
                                </div>
                            </div>
                            <div className="d-flex justify-content-between overview-content-row">
                                <div className="overview-left-content">
                                    Install Showroom :
                                </div>
                                <div className="overview-right-content">
                                    Test Showroom
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-footer">
                    <i class="fa fa-couch"></i>
                    Order was signed off on 11 Oct 2021
                </div>
            </div>
        );
    }
}
