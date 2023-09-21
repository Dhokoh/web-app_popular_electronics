// Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css'

// Other imports

// Component constructor
function Home(){
    return(
        <>
            <div className='container-fluid page-separator'></div>
            <div className='container-fluid'>
                <div id="carouselExampleAutoplaying" className="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={require('../assets/images/carousel_dev_0.png')} className="d-block w-100" alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={require('../assets/images/carousel_dev_1.png')} className="d-block w-100" alt="..."></img>
                        </div>
                        <div class="carousel-item">
                            <img src={require('../assets/images/carousel_dev_2.png')} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='purchase-options-area'>Purchase options and specs</div>
            <div className='tools-components-other'>Herramientas Componentes y otros productos</div>
            <div className='product-of-the-day'>Product of the day/week</div>
            <div className='brands-sold'>Brands sold</div>
            <div className='payment-methods'>Payment methods</div>
        </>
    )
}

export default Home;