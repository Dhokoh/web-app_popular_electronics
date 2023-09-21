//Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css'

//Other imports

function Login(){
    return <>
        <div className='container-fluid login-page-general-container'>
            <div className='row justify-content-center mb-3'>
                <h4 className='text-center login-page-title'>Bienvenido</h4>
                <div className='col'>
                <form action='/login' method='post'>
                        <label className='form-label mb-3 login-form-label' htmlFor='email'>Correo electronico: </label>
                        <input className='form-control mb-3 login-form-input' name='email' type='text' required='true'/>
                        <label className='form-label mb-3 login-form-label' htmlFor='password'>Contrasena: </label>
                        <input className='form-control mb-3 login-form-input' name='password' type='password' required='true'/>
                        <button className='btn btn-info mb-3 login-btn'>Iniciar Sesion</button>
                    </form>
                </div>
                <div className='col'>
                    hola
                </div>
            </div>
        </div>
    </>
}

export default Login;