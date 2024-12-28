import servicesData from '../data/servicesData'

const Services = () => {
    return(
        <section className='px-5' style={{color:'#c5c5c5', backgroundColor:'#252525'}}>

            <h2 className="text-center h3 fw-semibold my-5 py-5">Our Advantages</h2>

            <div className='d-flex justify-content-around my-5 py-5'>
                <div className='d-flex'>
                    <i className='fs-1 px-3' style={{color:'#cc0909'}}>{servicesData[0]['icon']}</i>
                    <div className='d-flex flex-column'>
                        <p className='fw-bold mb-1 mt-2' style={{fontSize:'15px'}}>{servicesData[0]['title']}</p>
                        <p className='text-secondary' style={{fontSize:'15px'}}>{servicesData[0]['info']}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <i className='fs-1 px-3' style={{color:'#cc0909'}}>{servicesData[1]['icon']}</i>
                    <div className='d-flex flex-column'>
                        <p className='fw-bold mb-1 mt-2' style={{fontSize:'15px'}}>{servicesData[1]['title']}</p>
                        <p className='text-secondary' style={{fontSize:'15px'}}>{servicesData[1]['info']}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <i className='fs-1 px-3' style={{color:'#cc0909'}}>{servicesData[2]['icon']}</i>
                    <div className='d-flex flex-column'>
                        <p className='fw-bold mb-1 mt-2' style={{fontSize:'15px'}}>{servicesData[2]['title']}</p>
                        <p className='text-secondary' style={{fontSize:'15px'}}>{servicesData[2]['info']}</p>
                    </div>
                </div>
                <div className='d-flex'>
                    <i className='fs-1 px-3' style={{color:'#cc0909'}}>{servicesData[3]['icon']}</i>
                    <div className='d-flex flex-column'>
                        <p className='fw-bold mb-1 mt-2' style={{fontSize:'15px'}}>{servicesData[3]['title']}</p>
                        <p className='text-secondary' style={{fontSize:'15px'}}>{servicesData[3]['info']}</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services