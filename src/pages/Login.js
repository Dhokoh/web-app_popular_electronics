//Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

//Other imports
import Profile from '../pages/subpages/Profile'

const backendURL = 'https://web-app-popular-electronics-backend.onrender.com/profile'    //Deployment
const testurl = 'http://localhost:3000/login' //testing
function Login(){

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setLoginData({
            ...loginData,
            [name]: value,
        })
    };

    const loginUser = () => {
        const all_users = fetch(testurl, {
            method:"POST",
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify()
        })
        if (all_users.body.email == loginData.email){
            return <>
                <Profile/>
            </>
        }
    }

    return <>
        <div className='container-fluid login-page-general-container'>
        <h3 className='fs-2 text-start login-page-title'>Bienvenido</h3>
            <div className='row justify-content-center mb-3'>
                <div className='col login-left-panel'>
                    <form action={testurl} method='post' onSubmit={loginUser}>
                        <label className='form-label mb-3 login-form-label' htmlFor='email'>Correo electronico: </label>
                        <input className='form-control mb-3 login-form-input' name='email' value={loginData.email} onChange={handleChange} type='text' required='true'/>
                        <label className='form-label mb-3 login-form-label' htmlFor='password'>Contrasena: </label>
                        <input className='form-control mb-3 login-form-input' name='password' value={loginData.password} onChange={handleChange} type='password' required='true'/>
                        <button type='submit' className='btn btn-info mb-3 login-btn'>Iniciar Sesion</button>
                    </form>
                </div>
                <div className='col login-left-panel'>
                    <h6 className='login-left-panel-title'>No tiene cuenta?</h6>
                    <ul className='list-group list-group-flush'>
                    <p className='font-weight-normal loginpage-p'><a  className="registration-link link-body-emphasis link-underline-warning" href="/login" data-toggle="modal" data-target="#create-account-client">
                    Registrarse</a> tiene sus ventajas, puede:</p>
                        <li className='list-group-item'>
                            <p className=''>Mantenerse actualizado con los productos de nuestra tienda.</p> 
                        </li>
                        <li className='list-group-item'>
                            <p>Promociones</p>
                        </li>
                        <li className='list-group-item'>
                            <p>Servicio personalizado</p>
                        </li>
                        <li className='list-group-item'>
                            <p>Y mas...</p>
                            <img src='/..' alt='some semiconductors'></img>
                        </li>
                    </ul>

                    <div class="modal fade" id="create-account-client" tabindex="-1" role="dialog" aria-labelledby="create-account-modal" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title modal-text" id="exampleModalLabel">Popular Electronics</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <h5>Bienvenido!</h5>
                                    <p>Por favor diligencie el formato y presione en el boton <span className='fst-italic'>Crear cuenta</span> una vez este completo.</p>
                                    <p className='data-wont-share'>* Sus datos no seran compartidos.</p>
                                    <form className='form mb-3' action='/login' method='post'>
                                        <label htmlFor='name' className='reg-form-label fs-6 reg-form-input'>Nombre</label>
                                        <input name='name' className='form-control mb-3' type='text'></input>
                                        <label htmlFor='ph-number' className='reg-form-label fs-6 reg-form-input'>Telefono</label>
                                        <input name='ph-number' className='form-control mb-3'></input>
                                        <label htmlFor='email' className='reg-form-label fs-6 reg-form-input'>Correo electronico</label>
                                        <input name='email' className='form-control mb-3' required='true'></input>
                                        <label htmlFor='password' className='reg-form-label fs-6 reg-form-input'>Contrasena</label>
                                        <input name='password' className='form-control mb-3' type='password'></input>
                                        <button type="submit" class="btn btn-primary">Crear cuenta</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
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