//Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css';

//Other imports

function Login(){
    return <>
        <div className='container-fluid login-page-general-container'>
            <div className='row justify-content-center mb-3'>
                <h4 className='text-center login-page-title'>Bienvenido</h4>
                <div className='col login-left-panel'>
                    <form action='/login' method='post'>
                        <label className='form-label mb-3 login-form-label' htmlFor='email'>Correo electronico: </label>
                        <input className='form-control mb-3 login-form-input' name='email' type='text' required='true'/>
                        <label className='form-label mb-3 login-form-label' htmlFor='password'>Contrasena: </label>
                        <input className='form-control mb-3 login-form-input' name='password' type='password' required='true'/>
                        <button className='btn btn-info mb-3 login-btn'>Iniciar Sesion</button>
                    </form>
                </div>
                <div className='col login-left-panel'>
                
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                    </button>


                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </>
}

export default Login;