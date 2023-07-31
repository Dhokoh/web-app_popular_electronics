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
        //TODO
        return (
            ""
        )
    }

    //This function's behaviour is expected to 
    //render all the reviews left by clients. 
    //The reviews are to be stored in a DB that will allow CRUD 
    //operations
    const renderReviews = () => {
        //TODO
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
                            <h6 className='display-1 aboutus-title'><strong>Siempre es un placer atenderlo</strong></h6>
                            <p className='h6 aboutus-paragraph'>
                                Con mas de 40 anos de experiencia en el mercado, brindamos un excelente servicio, honesto y profesional para todas sus necesidades. Siempre estamos listos para servirle y buscamos estar a la vanguardia en tecnologia para brindarle lo mejor en repuestos y componentes, herramientas, modulos y mucho mas. Y ahora, desde este 2023, entramos al mundo del internet para estar mas cerca a usted.
                            </p>
                            <div className='street-view-container'>
                                <iframe className='street-view-frame' src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sco!4v1690564526013!5m2!1ses-419!2sco!6m8!1m7!1sjgBf5_TjFjxCFqfoGtqPvg!2m2!1d3.453214218420218!2d-76.52762168384007!3f356.4315955042956!4f2.805537180297435!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="350vw" height="350vw"></iframe>
                            </div>
                        </div> 
                    </div>
                    <div class="col column">
                        <div className='contactform-title-container'>
                        <h4 className='display-6 leftmost-title'><strong>Contactenos</strong></h4>
                        <p className='h6 aboutus-paragraph'>Puede escribirnos, con gusto atenderemos su solicitud dentro de las proximas 24 horas. </p>
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
                                <div className="d-flex mb-3 justify-content-center">
                                    
                                    <div className='container'>
                                        <p className='h6 contact-method-preferred'>Cual de los siguientes prefiere para ser contactado?</p>
                                        <label className="form-check-label whatsapp-label" htmlFor='whatsapp'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                                </svg>
                                            </label>
                                            <input className="form-check-input contact-checkbox" type="checkbox" name="whatsapp"></input>
                                        

                                        
                                            <label className="form-check-label whatsapp-label" htmlFor='email'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffffff" class="bi bi-envelope-at" viewBox="0 0 16 16">
                                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                                </svg>
                                            </label>
                                            <input className="form-check-input contact-checkbox" type="checkbox" name="email"></input>
                                    </div>
                                    
                                </div>
                                <button type="submit" className="btn btn-primary submit-msg-btn"><strong>Enviar</strong></button>
                            </form>
                            <div className="form-text data_clause"><strong>* Sus datos no serán compartidos.</strong></div>
                        </div>
                    </div>
                    <div class="col column">
                        <div className='leftmost-container'>
                            <div class="text-break">
                                <h4 className='display-6 contact-aboutustitle'><strong>Visitenos</strong></h4>
                                <p className='h6 aboutus-paragraph'>Estamos ubicados en la ciudad de Cali, en el barrio San Nicolas, en la Calle 17 # 5 - 23, frente a la Papeleria Fernandez.</p>
                                <div className='aboutus-map-container'>
                                    <iframe className='map-frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5735135378586!2d-76.53012472582866!3d3.453346951209062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a667d8c8a32f%3A0x8cbc5147fa4b7512!2sCl.%2017%20%235-23%2C%20COMUNA%203%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1690561315717!5m2!1ses-419!2sco" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"width="350vw" height="250vw"></iframe>
                                </div>
                                
                                <div className='schedule-container'>  
                                    <h6 className='h6'><strong>Horarios de atencion</strong>
                                        <svg className='clock-icon' xmlns="http://www.w3.org/2000/svg" style={{marginLeft:"1vw"}} width="20" height="20" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg> 
                                    </h6>
                                    
                                    <div className='schedule-subcontainer'>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>
                                                <p className='h6'>Lunes a Viernes: 8:00 AM - 6:00 PM</p> 
                                            </li>
                                            <li className='list-group-item'>
                                                <p className='h6'>Sabados: 8:00 AM - 5:00 PM</p>
                                            </li>
                                            <li className='list-group-item'>
                                                <p className='h6'>Domingos y festivos: 9:00 AM - 1:00 PM</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div> 
                                   
                            </div>
                        </div>
                    </div>
                    <div className="col column">
                        <h4 className='display-6 contact-aboutustitle'><strong>Testimonios</strong></h4>
                        <p className='h6 aboutus-paragraph'>
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

                                <button type="submit" className="btn btn-primary comment-submit-btn" onClick={renderReviews}><strong>Enviar</strong></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;