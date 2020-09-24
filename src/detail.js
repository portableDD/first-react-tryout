import React, { useState} from "react"
import  ReactDom from "react-dom"
import Data from "./data"



function Detail() {
        const [data]= useState(Data);
        const urlParams = new URLSearchParams(window.location.search);
        const param = urlParams.get('name');
        const productItems = document.getElementsByClassName('products-items')
        const productSingle = React.createElement('div', {className: "product-single"});
        const featuredImage = React.createElement('div', {className: "featured-image"});
        const content = React.createElement('div', {className: "content"});
        const contentInfo = React.createElement('div', {className: "info"});
        const productSingleImage = React.createElement('img', {})
        const desc = React.createElement('p', {className: "desc"})
        const link = React.createElement('a', {})
       
        let singleItem = data.filter(item => {
            if (item.name === param) {
                productSingleImage.setAttribute('src', item.image)
                link.setAttribute('href', 'payment.html?name='+item.name)
        
                contentInfo.innerHTML = `
                        <span>Product:${item.name} </span>
                                <br>
                                <span>vendor: Tetrax magnificent</span>
                                <br>
                                <span>price: <span id="price">${item.price}</span> </span>
                                <br>
                        `
                link.innerHTML = window.location.href.includes('product')?
                    `<button type="submit">purchase</button>` :
                     link.style.visibility = "hidden"
        
        
                ReactDom.render(SwitchContent(item.desc,link), desc)
                ReactDom.render(contentInfo, content)
                ReactDom.render(desc, content)
                ReactDom.render(link, content)
                ReactDom.render(productSingleImage, featuredImage)
                ReactDom.render(featuredImage, productSingle)
                ReactDom.render(productSingle, productItems)
                ReactDom.render(content, productItems)
            }
            return item
        });
        function SwitchContent(data) {
            if (window.location.href.includes('product')) {
               
                return data +
                  `<p><b>Delivery is 5-7 days nationwide. <br/>
                              The sizes that are available include:42-45</b>
                           </p>
                        `
            }
            return  PaymentForm()
        }
        
        
        function PaymentForm() {
            const urlParams = new URLSearchParams(window.location.search);
            const param = urlParams.get('name');
            alert(param)
            let itemSize = '<option>Select shoe size</option>'
            data.forEach(item => {
                item.size.forEach(option => {
                    if(param === item.name) {
                        itemSize += `<option>${option}</option>`
                    }
                })
            })
            return `
                <div className="pay-bitch">
                <div className="error"></div>
                    <p className="name">
                        <input oninput="clearError()" className="field" type="text"  placeholder="Full Name">
                    </p>
                    <p className="phone">
                        <input oninput="clearError()" className="field" type="text"  placeholder="Phone Number">
                    </p>
                    <p className="email">
                        <input oninput="clearError()" className="field" type="email"  placeholder="Email Address">
                    </p>
                    <p className="house">
                        <input oninput="clearError()" className="field" type="text"  placeholder="Residential Address">
                    </p>
                    <p className="size">
                        <select id="size" name="size" className="field">
                            ${itemSize}
                        </select>
                    </p>
                    <button onclick = "submitForm()" type="submit">pay</button>
                </div>
            `
            }
        return (
            <div className = "index-page hide-toggle-menu">
               <div className= "latest-title title">
                   <h3>LATEST</h3>
               </div>
               <div className= "latest-product product-wrapper">
                    {parse(format)}
               </div>
           </div>
       )
}


export default Detail