// Dependencies imports
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

// Other imports

// Component constructor
function WebAppContainer(){
    return(   
        <div class="d-flex flex-column">
            <div class="container-fluid">Upper bond</div>
            <div class="container-fluid"> <Outlet /> </div>
            <div class="container-fluid fixed-bottom">Lower bond</div>
        </div>
    )
}

export default WebAppContainer;