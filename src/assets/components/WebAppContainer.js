// Dependencies imports
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

// Other imports

// Component constructor
function WebAppContainer(){
    return(   
        <div class="d-flex flex-column">
            <div class="d-flex justify-content-center fixed-top">Upper bond</div>
            <div class="d-flex align-items-center"> <Outlet /> </div>
            <div class="d-flex justify-content-center fixed-bottom">Lower bond</div>
        </div>
    )
}

export default WebAppContainer;