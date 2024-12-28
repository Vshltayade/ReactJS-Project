import productsData from "../data/productsData"
import Slider from "react-slick"
import '../Stylings/featuredProducts.css'

const FeaturedProducts = () => {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        centerPadding: '250px',
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    }

    return (

        <div className="slider-container px-5" style={{color:'#c5c5c5'}}>
            <h2 className="text-center h3 fw-semibold my-5 py-5">Featured Products</h2>
            <Slider {...settings}>
                {
                    productsData && productsData.filter(product => product['tag']==='featured-product').map(product => {
                        return(
                            <div className="my-4" key={product['id']}>
                                <h3 className="text-center h6 fw-light">{product['title']}</h3>
                                <img src={product['images'][0]} alt={product['title']} width="100%" style={{padding:'50px'}}/>
                                <h4 className="text-center h5">₹{product['originalPrice']} <del className="text-secondary h6">₹{product['finalPrice']}</del></h4>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default FeaturedProducts