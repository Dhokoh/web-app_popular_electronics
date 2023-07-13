// Dependencies imports
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

// Other imports

// Component constructor
function WebAppContainer(){
    return(   
        <div class="flex-column">
            <div class="container-fluid">Upper bond</div>
            <div className='p2'> <Outlet /> </div>
            <div class="container-fluid">Lower bond</div>
        </div>
    )
}

export default WebAppContainer;