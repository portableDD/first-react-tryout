import React from "react";
import Header from "./header"
import Amination from "./amination"
import "./oni.css"

class App extends React.Component {
    slideIndex = 0;
    showSlides();
    showSlides() {
        debugger
        let i;
        let slides = document.getElementsByClassName("slide-show");
      
        for (i = 0; i < slides.length; i++) {
            if (slideIndex < slides.length) {
                slides[i].style = {display: "none"}; 
            }  else if (slideIndex > slides.length){
                slideIndex = 1;
                slideIndex++;
                slides[slideIndex-1].style = {display: "flex"}; 
            }
           setTimeout(showSlides, 3000);// Change image every 2 seconds
        }
        
    }
    render() {
            return(
                <div>
                <Header />
                <Amination />
                </div>
            )
        }
}

export default App