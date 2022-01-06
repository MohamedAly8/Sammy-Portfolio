import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"
function ProductList() {
    return (
        <div className="pl">
           
            <div className="pl-texts">
                <h1 className="pl-title">
                    My Projects
                </h1>
                <p className="pl-desc">
                    Summary of technologies: Python, Java, React, HTML, CSS  
                </p>
            </div>
            <div className="pl-list">

            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} name={item.name}/>
            ))}

            </div>
        </div>
    )
}

export default ProductList