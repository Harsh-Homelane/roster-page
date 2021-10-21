import React, { Component } from "react";

export default class LeftBody extends Component {
    render() {
        return (
            <div className="left-body d-flex flex-column">
                <div>
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="dropdown custom-dropdown-box">
                            <button
                                className="custom-dropdown custom-dropdown-outline dropdown-toggle d-flex justify-content-between align-items-center"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Other Orders
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Order 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Order 3
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Order 4
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-order">
                            <button className="btn-sub-order">
                                Add Suborder
                            </button>
                        </div>
                        <i
                            className="fa fa-ellipsis-v"
                            style={{ fontSize: "24px" }}
                        ></i>
                    </div>
                </div>
                <div>
                    <div className="page-header">
                        <div className="page-header-title">
                            Payment & Delivery{" "}
                            <span className="page-header-order-number">
                                (Order ID : 3162478501)
                            </span>{" "}
                        </div>
                        <div className="date"> 7 Oct 2021</div>
                    </div>
                </div>
                <div>
                    <div className="payment-steps d-flex justify-content-between align-items-center pr-4">
                        <span>A &nbsp; Design Start</span>
                        <i class="fa fa-arrow-right"></i>
                        <span>B &nbsp; Production Start</span>
                        <i class="fa fa-arrow-right"></i>
                        <span>C &nbsp; Delivery of Material</span>
                        <i class="fa fa-arrow-right"></i>
                        <span>D &nbsp; Handover</span>
                    </div>
                </div>
                <div className="progress-container">
                    <div className="d-flex">
                        <div className="progress-box-a">
                            <div className="logo-text-a">A</div>
                        </div>
                        <div className="progress-box-b">
                            <div className="logo-text-b">B</div>
                        </div>
                        <div className="progress-box-c">
                            <div className="logo-text-c">C</div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="progress progress-striped">
                            <div class="progress-bar"></div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="percentage-progress-a">10%</div>
                        <div className="percentage-progress-b">50%</div>
                        <div className="percentage-progress-c">100%</div>
                    </div>
                </div>
                <div className="all-amounts d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column">
                        <div className="price approved-amount text-left">
                            Rs 37997
                        </div>
                        <div>Total Amount Approved</div>
                    </div>
                    <div>
                        <div className="price paid-amount text-center">
                            Rs 37997
                        </div>
                        <div>Total Amount Paid</div>
                    </div>
                    <div>
                        <div className="price outstanding-amount text-right">
                            Rs 37996
                        </div>
                        <div>Total outstanding amount</div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-4 pr-4">
                    <button className="btn-payment">Send Payment Link</button>
                    <button className="btn-payment">Record Payment</button>
                </div>
                <div className="last-payment d-flex flex-column">
                    <div className="d-flex justify-content-between">
                        <div className="payment-title"> Last Payment</div>
                        <div>
                            More Payments <i className="fa fa-history"></i>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between transaction-row">
                        <div className="transaction-column">
                            <div>Payment ID</div>
                            <div>Z-BNG/022466</div>
                        </div>
                        <div className="transaction-column">
                            <div>Paid Amount</div>
                            <div>INR 30,398/-</div>
                        </div>
                        <div className="transaction-column">
                            <div>Payment Date</div>
                            <div>11 Oct 2021</div>
                        </div>
                        <div className="transaction-column">
                            <div>Order Value</div>
                            <div>75,993</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between transaction-row">
                        <div className="transaction-column">
                            <div>Pay Method</div>
                            <div>Card Swipe</div>
                        </div>
                        <div className="transaction-column">
                            <div>Transaction Number</div>
                            <div>123</div>
                        </div>
                        <div className="transaction-column">
                            <div>Bank</div>
                            <div>offline payment</div>
                        </div>
                        <div className="transaction-column">
                            <div>Status</div>
                            <div>Success</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start transaction-row">
                        <div className="transaction-column">
                            <div>Payment Approved Date</div>
                            <div>11 Oct 2021</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between transaction-left-links">
                        <div>
                            <a href="#" className="links">
                                VIEW
                            </a>
                            <a href="#" className="links">
                                DOWNLOAD
                            </a>
                        </div>
                        <a href="#" className="links transaction-right-links">
                            Adjust Payment
                        </a>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="hold-details">Hold Details</div>
                    <div className="d-flex">
                        <div className="d-flex flex-row justify-content-between hold-detail-box">
                            <div className="d-flex flex-row">
                                <div className="hold-details-column-sm">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        S.No.
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        1
                                    </div>
                                </div>
                                <div className="hold-details-column-sm">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        Start date
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        2021-10-12
                                    </div>
                                </div>
                                <div className="hold-details-column-sm">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        End date
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        -
                                    </div>
                                </div>
                                <div className="hold-details-column-sm">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        Person
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        test OPS
                                    </div>
                                </div>
                                <div className="hold-details-column-sm">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        Days
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        9
                                    </div>
                                </div>
                                <div className="hold-details-column-lg">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        Email
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        no
                                    </div>
                                </div>
                                <div className="hold-details-column-lg">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        Reason
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        Internal Cancellation Request Raised
                                    </div>
                                </div>
                                <div className="hold-details-column-ls">
                                    <div className="hold-details-top-row d-flex align-items-center">
                                        Comments
                                    </div>
                                    <div className="hold-details-bottom-row d-flex align-items-center">
                                        The customer has relocated to another
                                        city.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hold-days">
                            <div className="hold-days-text">Hold Days</div>
                            <div className="hold-days-count">9</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
