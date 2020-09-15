import React, { Component} from "react"
import data from "./data"
import parse from 'html-react-parser';


class Format extends Component{
    
    constructor(){
        super()
        this.state = {
          data  : data
        }
    }

FormatItem() {
    let items = ""
    let fullPath = window.location.href
    let pos = fullPath.lastIndexOf('/') + 1
    let category = fullPath.substr(pos)
    category = category.substring(0, category.indexOf('.'));

    switch (category) {
        case 'index':
            
            break;
        case 'shoes':
            this.setState.data = data.filter(item => {
                return item.category ==='shoe'
            })
            break;
        case 'sandal':
            this.setState.data = data.filter(item => {
                return item.category === 'sandal'
            })
            break;
        case 'slipper':
            this.setState.data = data.filter(item => {
                return item.category ==='slipper'
            })
            break;
        default:
            break;
    }
    for ( let i = 0; i < this.state.data.length; i++) {
        items += `<div className ="items">
        <a href= "product.html?name=${this.state.data[i].name}">
                <div className= "featured-image">
                    <img src= "${this.state.data[i].image}"/>
                </div>
                <div className = "info">
                    <span>${this.state.data[i].name}</span>
                    <span>\u20A6 ${this.state.data[i].price}</span>
                </div>
            </a>
    </div>`
 } 
    return items;

}

    render() {

        return (
             <div className = "index-page hide-toggle-menu">
                <div className= "latest-title title">
                    <h3>LATEST</h3>
                </div>
                <div className= "latest-product product-wrapper">
                    {parse(this.FormatItem())}
                </div>
            </div>
        )
    }
}

export default Format