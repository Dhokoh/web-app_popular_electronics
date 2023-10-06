// Dependencies imports
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

// Other imports and requirements

// Component constructor
function Contact() {

    const backendURL = 'https://web-app-popular-electronics-backend.onrender.com/contacto'    //Deployment
    const testurl = 'http://localhost:3000/contacto' //testing
    const [contactFormData, setContactFormData] = useState({
        email: "",
        name: "",
        telephone: "",
        subject: "",
        message: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setContactFormData({
            ...contactFormData,
            [name]: value
        });
    };
    
    //Function that handles inquiries by clients, 
    //the idea is for it to send a message via whatsapp to the
    //store's whatsapp number.
    const sendInquiry = async (event) => {
        event.preventDefault(event);

        try {
            const backend_res = await fetch(testurl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(contactFormData)
            });

            if (backend_res.ok) {
                //Successful, server code 200
                console.log("email sent successfully")
                return (
                    <>
                        <h1>EMAIL SENT!</h1>
                    </>
                );
            } else {
                //Unsuccessful, server code 500 or similar
                console.error('Sending email failure');
                return (
                    <>
                        <h1>Something went wrong</h1>
                    </>
                );
            }

        } catch (e) {
            console.error('Error sending email: ' + e)
        }
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
            <div className='container-fluid page-separator'></div>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className='contact-aboutus-top text-break'>
                        <div className='aboutus-title-container'>
                            <h6 className='display-1 aboutus-title'><strong>Siempre es un placer atenderlo</strong></h6>
                            <p className='h6 aboutus-paragraph'>
                                Con más de 40 años de experiencia en el mercado, brindamos un excelente servicio, honesto y profesional para todas sus necesidades. Siempre estamos listos para servirle y buscamos estar a la vanguardia en tecnología para brindarle lo mejor en repuestos y componentes, herramientas, módulos y mucho más. Y ahora, desde este 2023, entramos al mundo del internet para estar más cerca a usted.
                            </p>
                            <div className='street-view-container'>
                                <iframe className='street-view-frame' src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sco!4v1690564526013!5m2!1ses-419!2sco!6m8!1m7!1sjgBf5_TjFjxCFqfoGtqPvg!2m2!1d3.453214218420218!2d-76.52762168384007!3f356.4315955042956!4f2.805537180297435!5f0.7820865974627469" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="350vw" height="350vw"></iframe>
                            </div>
                        </div> 
                    </div>
                    <div className="col column">
                        <div className='contactform-title-container'>
                        <h4 className='display-6 leftmost-title'><strong>Contactenos</strong></h4>
                        <p className='h6 aboutus-paragraph'>Escribanos, con gusto atenderemos su solicitud dentro de las próximas 24 horas. </p>
                        </div>
                        <div className='contact_form_container container-sm'>
                            <form name='contacto' className="contact_form" action={backendURL} onSubmit={sendInquiry} method='post' autoComplete='off'>
                                <div className="mb-3">
                                    <label htmlFor="email" className="input_label"><strong>Correo electrónico</strong></label>
                                    <input name='email' value={contactFormData.email} onChange={handleChange} type="email" className="form-control" aria-describedby="emailHelp"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="input_label"><strong>Nombre</strong></label>
                                    <input name='name' value={contactFormData.name} onChange={handleChange} type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telephone" className="input_label"><strong>Teléfono</strong></label>
                                    <input name='telephone' value={contactFormData.ph_number} onChange={handleChange} type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="input_label"><strong>Asunto</strong></label>
                                    <input name='subject' value={contactFormData.subject} onChange={handleChange} type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="input_label"><strong>Mensaje</strong></label>
                                    <textarea name='message' value={contactFormData.message} onChange={handleChange} className="form-control message_field text-break"></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary submit-msg-btn"><strong>Enviar</strong></button>
                            </form>
                            <div className="form-text data_clause"><strong>* Sus datos no serán compartidos.</strong></div>
                        </div>
                    </div>
                    <div className="col column">
                        <div className='leftmost-container'>
                            <div className="text-break">
                                <h4 className='display-6 contact-aboutustitle'><strong>Visítenos</strong></h4>
                                <p className='h6 aboutus-paragraph'>Estamos ubicados en la ciudad de Cali, en el barrio San Nicolás, en la Calle 17 # 5 - 23, frente a la Papelería Fernandez.</p>
                                <div className='aboutus-map-container'>
                                    <iframe className='map-frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5735135378586!2d-76.53012472582866!3d3.453346951209062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a667d8c8a32f%3A0x8cbc5147fa4b7512!2sCl.%2017%20%235-23%2C%20COMUNA%203%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1690561315717!5m2!1ses-419!2sco" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"width="350vw" height="250vw"></iframe>
                                </div>
                                
                                <div className='schedule-container'>  
                                    <h6 className='h6'><strong>Horarios de atención</strong>
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
                                                <p className='h6'>Sábados: 8:00 AM - 5:00 PM</p>
                                            </li>
                                            <li className='list-group-item text-nowrap'>
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
                            Su opinión es muy importante para nosotros, pues su perspectiva nos ayuda a mejorar continuamente.
                        </p>
                        <div className='contact_form_container container-sm'>
                            <form className="contact_form" action='/contacto' method='post' autoComplete='off'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="input_label"><strong>Nombre</strong></label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="review" className="input_label"><strong>Su opinión</strong></label>
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