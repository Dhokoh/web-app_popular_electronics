// Dependencies imports
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Other imports

import Header from './Header';
import Footer from './Footer';

// Component constructor
function WebAppContainer() {
    return (
        <>
        <Header/>
        <Outlet />
        <Footer />
        </>
    )
}

export default WebAppContainer;