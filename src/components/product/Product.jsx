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

        {/* This was to add stuff behind the image if you 
        want to animate the image to move on hover */}
            {/* <div className="p-icon">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                    <FaGithub size="2em"/>
                </a>
            </div> */}
            

        </div>
    )
}

export default Product
