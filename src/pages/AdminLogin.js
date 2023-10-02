//Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css';

//Other imports

function AdminLogin(){
    return <>
        <div className='d-block'>
            <div className='admin-login-header'>
                <h5 className='fs-2 text-start admin-title'>Popular Electronics Admin Portal</h5>
            </div>
            <div className='container-fluid justify-content-center'>
                <div className='mb-3'>
                    <form action='/login' method='post'>
                        <label className='form-label mb-3 login-form-label' htmlFor='email'>Correo electronico: </label>
                        <input className='form-control mb-3 login-form-input' name='email' type='text' required='true' />
                        <label className='form-label mb-3 login-form-label' htmlFor='password'>Contrasena: </label>
                        <input className='form-control mb-3 login-form-input' name='password' type='password' required='true' />
                        <button className='btn btn-info mb-3 login-btn'>Iniciar Sesion</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default AdminLogin;