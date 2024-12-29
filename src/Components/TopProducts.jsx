import productsData from "../data/productsData"
import '../Stylings/topProducts.css'

const TopProducts = () => {
  return (
    <div className="px-5" style={{color:"#c5c5c5"}}>
        <h2 className="text-center h3 fw-semibold my-5 py-5">Top Products</h2>
        <div className="d-flex justify-content-evenly mx-5 px-5" id="product_section">
                <div>All</div>
                <div>Headphones</div>
                <div>Earbuds</div>
                <div>Earphones</div>
                <div>Neckbands</div>
            </div>
            <div id="product_grid">
                {
                    productsData && productsData.map(product => {
                        return(
                            <div className="product_items" key={product['id']}>
                                <img src={product['images'][0]} alt={product['title']} />
                                <div>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h3>{product['title']}</h3>
                                <p>{product['info']}</p>
                                <hr/>
                                <h4>₹{product['originalPrice']} <del className="text-secondary">₹{product['finalPrice']}</del></h4>
                                <button>Add to cart</button>
                            </div>
                        )
                    })
                }
                <div id="browse-all-products" className="product_items">
                    <div>Browse All Products →</div>
                </div>
            </div>
    </div>
  )
}

export default TopProducts