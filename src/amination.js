import React from "react"

function Amination() {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
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
    return (
      <div className="slide-show-container">
				<div className="slide-show slide-1" style={{display: "none"}}>
                    <img 
                        className="slide-img-background" 
                        src="animi pics/slide 1/slide-background.png" 
                        alt="banner"
                    />
					<div className="slide-product">
                        <img src="animi pics/slide 1/slide-shoe1.png" alt="slides"/>
                    </div>
					<div className="info">
						<span>DISCOUNT<br/>FOR COMFORT</span>
						<span>Get your footwears at 20% off</span>
						<a href="#">shop now</a>
					</div>
				</div>

				<div className="slide-show slide-2" style={{display:"none"}}>
                    <img 
                        className="slide-img-background" 
                        src="animi pics/slide 2/slide-background2.jpg" 
                        alt="banner"
                    />
					<div className="slide-product">
                        <img src="animi pics/slide 2/slide-shoe2.png" alt="slides"/>
                    </div>
					<div className="info">
						<span>BESPOKE<br/>FOOTWEARS</span>
						<span>Your feet deserves the best</span>
						<a href="#">shop now</a>
					</div>
				</div>

				<div className="slide-show slide-3" style={{display: "none"}}>
                    <img 
                        className="slide-img-background" 
                        src="animi pics/slide 3/slide-background3.png" 
                        alt="banner"
                    />
					<div className="slide-product">
                        <img src="animi pics/slide 3/slide-shoe3.png" alt="slides"/>
                    </div>
					<div className="info">
						<span>LOOK<br/>DIFFERENT</span>
						<span>The confidence you need to walk the world</span>
						<a href="#">shop now</a>
					</div>
				</div>

				<div className="slide-show slide-4" style={{display: "flex"}}>
                    <img 
                        className="slide-img-background" 
                        src="animi pics/slide 4/slide-background4.jpg" 
                        alt="banner"
                    />

				</div>
			</div>
    )
} 

export default Amination