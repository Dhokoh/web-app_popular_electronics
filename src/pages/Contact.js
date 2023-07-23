// Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css'

// Other imports

// Component constructor
function Contact(){
    
    return(
        <>
            <div className='contact_form_container container-sm'>
                <form action='/contact' method='post' autoComplete='off'>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input name='email' type="email" class="form-control" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telephone" className="form-label">Teléfono</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Pedido</label>
                        <textarea  name='message' className="form-control message_field text-break"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <div className="form-text data_clause">Sus datos no serán compartidos.</div>
            </div>         
        </>
    )
}

export default Contact;