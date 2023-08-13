//Dependencies import

import 'bootstrap/dist/css/bootstrap.min.css';

//Other import

//Component constructor
function Header (){
    return(
        <>
        <div className='header-g-container justify-content-lg-between sticky-top'>
            <nav className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <button className="navbar-toggler link-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#header-toggler" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container-fluid navbar-collapse" id="header-toggler"> 
                        <a className="navbar-brand navbar-collapse justify-content-start" href="/">Popular Electronics brand</a>
                            <div className='d-flex align-items-center'>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/'><strong>Inicio</strong></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/productos'><strong>Productos</strong></a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='/contacto'><strong>Contacto</strong></a>
                                    </li>
                                </ul>

                                <div className='form-container'>
                                    <nav className='navbar'>
                                        <div className='login-n-cart-holder'>
                                            <a className='login-link mb-1 container' href='/login'>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#554cb8" class="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                </svg>
                                            </a>
                                            <a className='login-link mb-1 container' href='/cart'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#554cb8" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className='d-flex'>
                                            <form className='search-form d-flex' role='search' action='/' method='get'>
                                                <input className='form-control me-2 search-bar' type='search' placeholder='buscar'></input>
                                                <button className='search-btn btn btn-primary'>Ir</button>
                                            </form>
                                        </div>
                                    </nav>
                                </div>        
                            </div>
                    </div>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Header;