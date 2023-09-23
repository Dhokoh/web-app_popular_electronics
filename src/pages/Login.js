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
                    <h6 className='font-weight-bold loginpage-p'>No tiene una cuenta?</h6>
                    <p className='font-weight-normal loginpage-p'>Ser nuestro cliente premium trae muchos beneficios, 
                    como precios especiales, noticias sobre nuevos productos y muchas cosas mas. Empiece por crear su cuenta con nosotros!</p>
                
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#create-account-client">
                        Crear cuenta
                    </button>


                    <div class="modal fade" id="create-account-client" tabindex="-1" role="dialog" aria-labelledby="create-account-modal" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title modal-text" id="exampleModalLabel">Bienvenido a la familia Popular Electronics</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    A form will go here!
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