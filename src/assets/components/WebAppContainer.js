// Dependencies imports
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Other imports


// Component constructor
function WebAppContainer() {
    return (
        <>
        <div className='container-fluid justify-content-center sticky-top header-navbar'>
            <nav className='nav'>
                <strong><a className='nav-link navbar-brand brand' href="/" style={{marginTop:'7px', }}>Popular Electronics brand</a></strong>
                <strong><a className='nav-link header-link' aria-current='page' href='/'>Inicio</a></strong>
                <strong><a className='nav-link header-link' aria-current='page' href='/productos'>Productos</a></strong>
                <strong><a className='nav-link header-link' aria-current='page' href='/contacto'>Contacto</a></strong>
            </nav>
            
            <form action={require('../../pages/Home')} className="nav-item d-flex justify-content-end" role="search" style={{marginTop:"-35px"}}>
                <label for="search_bar" className='searchbar-label'><strong>Busca algo?</strong></label>
                <input class="form-control mb-2 searchbar-field" name='search_bar' type="text" placeholder="Buscar" aria-label="Search"></input>
                <button class="btn btn-info search-btn" type="submit"><strong>Ir</strong></button>
            </form>            
        </div>
        <Outlet />
        </>
    )
}

export default WebAppContainer;