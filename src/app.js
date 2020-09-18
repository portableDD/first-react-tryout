import React from "react"
import Header from "./header"
import Amination from "./amination"
import  Detail from "./detail"
import "./oni.css"
// import "./app.css"

class App extends React.Component {
    constructor () {
         super()
         this.state = {
            slideIndex: 0
        }
    }
    showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide-show");
      
        for (i = 0; i < slides.length; i++) {
            if (this.state.slideIndex < slides.length) {
                slides[i].style = {display: "none"}; 
            }  else if (this.state.slideIndex > slides.length){
                this.setState({ slideIndex : 1 })
                this.setState((prevState) => ({
                    slideIndex: prevState.slideIndex + 1
                })); 
                slides[this.state.slideIndex-1].style = {display: "flex"}; 
            }
           setTimeout(this.showSlides(), 3000);// Change image every 2 seconds
        }
        
    }
    render() {
            return(
                <div>
                <Header />
                <Amination />
                <Detail />
                </div>
            )
        }      
}


export default App