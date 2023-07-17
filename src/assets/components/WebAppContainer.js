// Dependencies imports
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Other imports


// Component constructor
function WebAppContainer() {
    return (
        <>
            <nav className='nav justify-content-center sticky-top'>
                <strong><a className='nav-link nav_link' aria-current='page' href={require('../../pages/Home')}>Inicio</a></strong>
                <strong><a className='nav-link nav_link' aria-current='page' href={require('../../pages/Home')}>Productos</a></strong>
                <strong><a className='nav-link nav_link' aria-current='page' href={require('../../pages/Home')}>Contacto</a></strong>
                <form action={require('../../pages/Home')} class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button class="btn btn-info color" type="submit">Buscar</button>                   
                </form>
            </nav>
            <Outlet />
            <nav className='nav justify-content-center fixed-bottom'>Footer Nav</nav>
        </>
    )
}

export default WebAppContainer;