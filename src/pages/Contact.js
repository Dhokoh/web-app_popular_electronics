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
    
    //Function that handles inquiries by clients, 
    //the idea is for it to send a message via whatsapp to the
    //store's whatsapp number.
    const sendInquiry = () => {
        return (
            ""
        )
    }

    //This function's behaviour is expected to 
    //render all the reviews left by clients. 
    //The reviews are to be stored in a DB that will allow CRUD 
    //operations
    const showReviews = () => {
        return (
            ""
        ) 
    }
    return (
        <>
            <div class="container text-center">
                <div class="row align-items-start">
                    <div className='contact-aboutus-top text-break'>
                        <div className='aboutus-title-container'>
                            <h6 className='display-1 aboutus-title'>Siempre es un placer atenderlo</h6>
                            <p className='h6 aboutus-paragraph'>
                                Con mas de 40 anos de experiencia en el mercado, brindamos un excelente servicio, honesto y profesional para todas sus necesidades. Siempre estamos listos para servirle y buscamos estar a la vanguardia en tecnologia para brindarle lo mejor en repuestos y componentes, herramientas, modulos y mucho mas. Y ahora, desde este 2023, entramos al mundo del internet para estar mas cerca a usted.
                            </p>
                        </div> 
                    </div>
                    <div class="col">
                        <div className='contactform-title-container'>
                        <h4 className='display-6 leftmost-title'>Contactenos</h4>
                        <p className='aboutus-paragraph'>Puede escribirnos, con gusto atenderemos su solicitud dentro de las proximas 24 horas. </p>
                        </div>
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
                        <div className='leftmost-container'>
                            <div class="text-break">
                                <h4 className='display-6 contact-aboutustitle'>Visitenos</h4>
                                <p className='aboutus-paragraph'>Estamos ubicados en la ciudad de Cali, en el barrio San Nicolas, en la Calle 17 # 5 - 23, frente a la Papeleria Fernandez.</p>

                                <div className='aboutus-location-container'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sco!4v1690564526013!5m2!1ses-419!2sco!6m8!1m7!1sjgBf5_TjFjxCFqfoGtqPvg!2m2!1d3.453214218420218!2d-76.52762168384007!3f356.4315955042956!4f2.805537180297435!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="350vw" height="350vw"></iframe>
                                </div>

                                <div className='aboutus-map-container'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5735135378586!2d-76.53012472582866!3d3.453346951209062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a667d8c8a32f%3A0x8cbc5147fa4b7512!2sCl.%2017%20%235-23%2C%20COMUNA%203%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1690561315717!5m2!1ses-419!2sco" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"width="350vw" height="250vw"></iframe>
                                </div>       
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <h4 className='display-6 contact-aboutustitle'>Testimonios</h4>
                        <p className='aboutus-paragraph'>
                            Su opinion es muy importante para nosotros, pues su perspectiva nos ayuda a mejorar continuamente.
                        </p>
                        <div className='contact_form_container container-sm'>
                            <form className="contact_form" action='/contacto' method='post' autoComplete='off'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="input_label"><strong>Nombre</strong></label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="review" className="input_label"><strong>Su opinion</strong></label>
                                    <textarea name='review' className="form-control message_field text-break"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary comment-submit-btn" onClick={showReviews}><strong>Enviar</strong></button>
                            </form>
                        </div>
                    </div>
                    <div className='contact-aboutusfooter text-break'>
                        <h6 className=''>Hello</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;