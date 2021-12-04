import React from "react";
import emailjs from 'emailjs-com';

function Contact(){
    const sendEmail =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_3pt0jhc','template_0obefpw',e.target,'user_BLcKkchTZxUT33evV4e1z').then((res)=>console.log(res)).catch(err=>console.log(err))


    }
    return(
        <div id="contact" className="contact-container">
            <h2 className="contact-heading">Contact</h2>
            <form onSubmit={sendEmail}>
            <div className="name">
            <div class="form__group">
                <input type="text" class="form__input" name="name" id="name" placeholder="Full name" required="" autoComplete="off"/>
                <label for="name" class="form__label">Full Name</label>
            </div>
            <div class="form__group">
                <input type="text" class="form__input" name="user_email"id="name" placeholder="Email" required="" autoComplete="off"/>
                <label for="name" class="form__label">Email</label>
            </div>
            </div>
            <div class="form__group">
                <input type="text" class="form__input" name="subject" id="name" placeholder="Subject" required="" autoComplete="off"/>
                <label for="name" class="form__label">Subject</label>
            </div>
            <div class="form__group">
                <textarea type="text" class="form__input form__body" name="message" id="name" placeholder="Body" required="" autoComplete="off"/>
                <label for="name" class="form__label">Body</label>
            </div>
            <div className="send">
            <button type="submit" className="send-btn">Send</button>
            </div>
            </form>
        </div>
    )
}

export default Contact