import "./product.css"
function Product({img,link,name}) {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle" id="red"></div>
                <div className="p-circle" id="yellow"></div>
                <div className="p-circle" id="green"></div>
                <a href={link} target="_blank" rel="noreferrer">
            <div className="p-text">
                {name} 
                {/* <FaExternalLinkAlt/> */}
            </div>
            </a>
            </div>

            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>

        </div>
    )
}

export default Product
