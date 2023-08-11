//Dependencies import

import 'bootstrap/dist/css/bootstrap.min.css';

//Other import

//Component constructor
function Header (){
    return(
        <>
        <div className='header-g-container d-flex flex-row'>
            <nav className='navbar navbar-expand-lg'>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-toggler" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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