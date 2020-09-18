import React, { useState} from "react"
import Data from "./data"



function FormatItem() {
    const [data, setdata] = useState(Data);
    let items = ""
    let fullPath = window.location.href
    let pos = fullPath.lastIndexOf('/') + 1
    let category = fullPath.substr(pos)
    category = category.substring(0, category.indexOf('.'));

    switch (category) {
        case 'index':
            
            break;
        case 'shoes':
            setdata.data = data.filter(item => {
                return item.category ==='shoe'
            })
            break;
        case 'sandal':
            setdata.data = data.filter(item => {
                return item.category === 'sandal'
            })
            break;
        case 'slipper':
            setdata.data = data.filter(item => {
                return item.category ==='slipper'
            })
            break;
        default:
            break;
    }
    for ( let i = 0; i < data.length; i++) {
        items += `<div className ="items">
        <a href= "product.html?name=${data[i].name}">
                <div className= "featured-image">
                    <img src= "${data[i].image}"/>
                </div>
                <div className = "info">
                    <span>${data[i].name}</span>
                    <span>\u20A6 ${data[i].price}</span>
                </div>
            </a>
    </div>`
 } 
    return items;
}

        
export default FormatItem