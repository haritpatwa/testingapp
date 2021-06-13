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
            <div class="jumbotron">
                    <h1 >Welcome to Book Store !</h1>
                    <p><span>A room without books is like a body without a soul.</span></p>
                    
                    <p>Explore what we have !</p>
                    <button className="btn btn-info" onClick={this.goToBooks}>Go to Books</button>
                </div>  
          
        )}
    render() {
        return (this.htmlContent());
    }
}
export default Home;