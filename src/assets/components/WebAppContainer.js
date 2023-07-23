// Dependencies imports
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Other imports


// Component constructor
function WebAppContainer() {
    return (
        <>
        <div className='container-fluid justify-content-center' style={{background:"#B5D9FD", padding:"25px"}}>
            <nav className='nav'>
                <strong><a className='nav-link navbar-brand' href="/" style={{marginTop:'7px', }}>Popular Electronics brand</a></strong>
                <strong><a className='nav-link header-link text-primary-emphasis' aria-current='page' href='/'>Inicio</a></strong>
                <strong><a className='nav-link header-link text-primary-emphasis' aria-current='page' href='/productos'>Productos</a></strong>
                <strong><a className='nav-link header-link text-primary-emphasis' aria-current='page' href='/contacto'>Contacto</a></strong>
            </nav>
            
            <form action={require('../../pages/Home')} className="nav-item d-flex justify-content-end" role="search" style={{marginTop:"-35px"}}>
                <label for="search_bar" className='text-primary-emphasis' style={{marginRight: "10px", marginTop:"5px"}}><strong>Busca algo?</strong></label>
                <input class="form-control me-2" name='search_bar' type="text" placeholder="Buscar" style={{width: "350px", paddingRight:"10px", borderRadius:"25px"}} aria-label="Search"></input>
                <button class="btn btn-info search-btn text-primary-emphasis" type="submit"><strong>Ir</strong></button>
            </form>            
        </div>
        <Outlet />
        </>
    )
}

export default WebAppContainer;