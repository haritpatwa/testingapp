# Assignment 1.7



* I have submitted assignment 1 with my feature Cart Management, Here I have created Home page, which just displays some headings. After that I have added Search Page which will have multiple books as search result. User can browse through different pages and use add to cart and remove cart functionality.

I have implement Cart Management feature which have five task:
* *Search and Browse Book*
* *Add to Cart*
* *View Cart*
* *Remove from Cart*
* *Checkout Cart*



* *Date Created*: 04 Jun 2021

* *Last Modification Date*: 07 Jun 2021

* *URL*: <https://a1haritpatwa.herokuapp.com//>
* *Repo URL*: https://github.com/haritpatwa/A1_Harit_Patwa/



## Authors


* [Harit Rakeshbhai Patwa](hr495851@dal.ca) - *(Developer)*



## Getting Started



### Prerequisites



1. I have used BrowserRouter as Router,Switch,Route,Redirect 'react-router-dom' for routing.
2. I have used react-bootstrap components from https://react-bootstrap.github.io/

Please install dependencies according to that.



### Installing


* Installing Router: run 'npm install react-router-dom' on the terminal on project directory.
* Installing Bootstrap: run 'npm install react-bootstrap bootstrap@4.6.0' on the terminal on the project directory.

### Steps


* I have create multiple components for the react app such as Header, Book, Cart, Checkout, Home
* For the Book Component, I havenot linked to database, rather used file 'src/components/Books/BooksData.json' where I had stored dummy data and parsed it with the json parser and displayed it on Cart Component. Used React Router Dom for routing to different pages.
* I had focused on the resposiveness of the page, none of components of the page gets hidden while resizing the page.
* Payment Gateway and Search button on Homepage is still in progress.
* I am providing the references for the two image files which were used during the development of the application. (1)book.jpeg (2) cartlogo


## Running the tests

* The application has been deployed on <https://a1haritpatwa.herokuapp.com /> and can be tested here. 



## Test roadmap:

* There will be Home page open when we run heroku link. After that we have to click on Books button, It will redirect towards Search Page of our application. There will be number of 3x3 grids(All are responsive). We can add the product on the cart by clicking 'add to cart button'. It will increase the cart size by one. We can click on the cart and view the cart. We can also remove items from the cart by clicking remove button. Cart shows the total amount whith the item quantity. Lastly, We can click on Checkout button, It will automatically redirect us towards homepage. 




* The webpage passes W3C front-end validations. The front-end validation test was done on <https://validator.w3.org/nu/?doc=https%3A%2F%2Fa1haritpatwa.herokuapp.com%2FHome>



* I have tested the responsiveness of the website by inpsecting the elements in various size, in all format no components were overlapping or getting hidden.



## Deployment



I have used "https://github.com/mars/create-react-app-buildpack" buildpack for deploying heroku app.



## Built With



* [React](https://reactjs.org/) - The frontend framework used is React

* [Bootstrap](https://react-bootstrap.github.io/) - Bootstrap was used to build the Navigation Bar and Modals used in the feature.

* [Xtensio](https://xtensio.com/)

* [W3C validations](https://validator.w3.org/nu/?doc=https%3A%2F%2Fa1haritpatwa.herokuapp.com%2FHome)

* [Figma](https://www.figma.com/)

* [Draw.io](https://app.diagrams.net/)



## Sources Used



* [Background-image](https://unsplash.com/photos/DCzpr09cTXY) - Books.jpeg which was used in Book.js
* [Background-image](http://www.w3.org/2000/svg) - cart icon for header.js




