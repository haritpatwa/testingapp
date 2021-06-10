import React, { Component } from 'react';
import './Home.css';
class Home extends Component {
  
   
    constructor(props) {

        super(props); 
        this.state = {}
    };

    goToBooks = () => {
        window.location.href = "/Books"
    }
    
    htmlContent = () => {
        return (         
            <div className="">
                <div class="jumbotron">
                    <h1 class="display-4">Welcome to Book Store !</h1>
                    <p class="lead"><span className="set-p-style">A room without books is like a body without a soul.</span></p>
                    <hr class="my-4"/>
                    <p>Explore what we have !</p>
                    <button className="btn btn-info" onClick={this.goToBooks}>Go to Books</button>
                </div>
            </div>
        ) 
    }

    render() {
        return (this.htmlContent());
    }
}
export default Home;