// Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css'

// Other imports and requirements



//Needed variables

let SMTP_username = 'webappemailtester@gmail.com';
let SMTP_password = 'C1DA36F37AB876798CEE59F85516D47DC19C';
let SMTP_sec_token = '92b8e81c-681b-47da-b537-dd693c54902f';
let SMTP_server = 'smtp.elasticemail.com';
let SMTP_port = 2525;

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
                        <label htmlFor="subject" className="form-label">Asunto</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Mensaje</label>
                        <textarea  name='message' className="form-control message_field text-break"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                <div className="form-text data_clause">Sus datos no serán compartidos.</div>
            </div>     
        </>
    )
}

export default Contact;