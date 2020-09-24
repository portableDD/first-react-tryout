import React from "react"

function Header() {
    return (
        
        <header>
            <div className="site-header">
                <div className = "site-logo">
                    <a href= "index.html">
                        <img src= "logo.oni.png" alt= "the logo"/>
                    </a>
                </div>
                <nav className="site-menu">
                    
                    <form className= "search">
                        <input type="text" id= "try" value="search"/>
                        <button>Submit</button>
                    </form>

                    <ul>
                        <li><a href ="public/index.html">Home</a></li>
                        <li><a href ="public/shoes.html">Shoes</a></li>
                        <li><a href ="public/sandal.html">Sandals</a></li>
                        <li><a href ="public/slipper.html">Slippers</a></li>
                        <li><a href ="public/contact.html">Contact Us </a></li>
                        <li><a href ="public/about.html">About Us</a></li>
                    </ul>

                </nav>
            </div>
            <div className = "toggle-menu">
                
                <span></span>
            
            </div>
            
        </header>
    )
}

export default Header