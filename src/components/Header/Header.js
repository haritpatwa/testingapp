import React, { Component } from 'react';
import {DropdownButton,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css';
class Header extends Component {


    constructor(props) {

        super(props);
        this.state = {
            cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart"))["cart"].length : 0
        }
    };

    cartClicked = () => {
        window.location.href = "/Cart"
    }
    showMessage = () => {
        alert("Sorry! Database hasn't been added ");
    }


    htmlContent = () => {
        return (
            <div className="form">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/">Dal Book Barn</a>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="/Books">Books</a>
                            </li>
                        </ul>
                    </div>

                    <input class="form-control form-control-lg" type="text" placeholder="Search for new book..." aria-label=".form-control-lg example"></input>
                    <button type="button" class="btn btn-outline-light" onClick={this.showMessage}>Search</button>
                   
                    <DropdownButton id="dropdown-basic-button" title="Harit Patwa" variant = "Secondary">
                        <Dropdown.Item href="/profile">Update Profile</Dropdown.Item>
                        <Dropdown.Item href="/admin">My Orders</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Add books</Dropdown.Item>
                    </DropdownButton>
                    <button className="btn btn-light set-btn-style" onClick={this.cartClicked}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <sup><span class="badge badge-info">{this.state.cartItems}</span></sup>
                    </button>

                </nav>



            </div>
        )
    }

    render() {
        return (this.htmlContent());
    }
}
export default Header;