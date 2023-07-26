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
function Contact() {

    return (
        <>
            <div class="container text-center">
                <div class="row align-items-start">
                    <div className='contact-aboutus-top text-break'>
                        <div className='aboutus-title-container'>
                            <h6 className='display-1 aboutus-title'>Siempre es un placer atenderlo</h6>
                            <p className='h6 aboutus-paragraph'>
                                Con mas de 40 anos de experiencia en el area electronica, nos especializamos en brindar una excelente atencion a nuestros clientes
                            </p>
                        </div>
                        
                    </div>
                    <div class="col">
                        <div className='leftmost-container'>
                            <div class="text-break">
                                <h4 className='display-6 leftmost-title'>Visitenos</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div className='contact_form_container container-sm'>
                            <form className="contact_form" action='/contact' method='post' autoComplete='off'>
                                <div className="mb-3">
                                    <label htmlFor="email" className="input_label"><strong>Correo electrónico</strong></label>
                                    <input name='email' type="email" className="form-control" aria-describedby="emailHelp"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="input_label"><strong>Nombre</strong></label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telephone" className="input_label"><strong>Teléfono</strong></label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="input_label"><strong>Asunto</strong></label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="input_label"><strong>Mensaje</strong></label>
                                    <textarea name='message' className="form-control message_field text-break"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary"><strong>Enviar</strong></button>
                            </form>
                            <div className="form-text data_clause"><strong>* Sus datos no serán compartidos.</strong></div>
                        </div>
                    </div>
                    <div class="col">
                        One of three columns
                    </div>
                    <div className='contact-aboutus text-break'>
                        <h6 className=''>Hello</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;