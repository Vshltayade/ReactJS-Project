import { footMenu } from "../data/footerData"
import '../Stylings/footer.css'

const Footer = () => {
    return(
        <footer className="d-flex flex-column px-5 py-3" style={{backgroundColor:"#141414", color:"#c5c5c5"}}>
            <div id="footer_content" className="d-flex">
                <div>
                    <h1 className='fw-semibold' style={{fontSize:'24px'}}>Tech-Shop</h1>
                    <p className="text-secondary my-3">Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
                    <input type="email" name="email" placeholder="Email Address*"/><br/>
                    <button>Subscribe</button>
                </div>
                <div className="footer-list">
                    <h4 className="fs-5">{footMenu[0]['title']}</h4>
                    <ul className="text-secondary my-2">
                        <li>{footMenu[0]['menu'][0]['link']}</li>
                        <li>{footMenu[0]['menu'][1]['link']}</li>
                        <li>{footMenu[0]['menu'][2]['link']}</li>
                        <li>{footMenu[0]['menu'][3]['link']}</li>
                        <li>{footMenu[0]['menu'][4]['link']}</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h4 className="fs-5">{footMenu[1]['title']}</h4>
                    <ul className="text-secondary my-2">
                        <li>{footMenu[1]['menu'][0]['link']}</li>
                        <li>{footMenu[1]['menu'][1]['link']}</li>
                        <li>{footMenu[1]['menu'][2]['link']}</li>
                        <li>{footMenu[1]['menu'][3]['link']}</li>
                        <li>{footMenu[1]['menu'][4]['link']}</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <h4 className="fs-5">{footMenu[2]['title']}</h4>
                    <ul className="text-secondary my-2">
                        <li>{footMenu[2]['menu'][0]['link']}</li>
                        <li>{footMenu[2]['menu'][1]['link']}</li>
                        <li>{footMenu[2]['menu'][2]['link']}</li>
                        <li>{footMenu[2]['menu'][3]['link']}</li>
                        <li>{footMenu[2]['menu'][4]['link']}</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="d-flex justify-content-between align-items-center my-2" id="last-line">
                <p className="my-auto">2024 | All Rights Reserved. Built by | <span>VISHAL TAYADE</span></p>
                <div>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
            </div>
         </footer>
    )
}

export default Footer