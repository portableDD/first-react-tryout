import React from "react"
let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
    render() {
       return (
          <div>
             <ReactCSSTransitionGroup transitionName = "example"
                transitionAppear = {true} transitionAppearTimeout = {500}
                transitionEnter = {false} transitionLeave = {false}>
                     
                <h1>My Element...</h1>
             </ReactCSSTransitionGroup>
          </div>      
       );
    }
 }
 export default App;