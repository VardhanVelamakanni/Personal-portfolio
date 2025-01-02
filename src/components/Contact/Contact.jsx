import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'


const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "db6e9e65-7d7b-4816-b39c-bc43801a692a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message

            );
        }
    };
    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className='contact-left'>
                    <h1>Let's talk</h1>
                    <p>im currentl making porjects if intreted type ina message</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt="" /> <p>vardhan.velamkanni@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt="" /><p>+91-6301556730</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt='' /><p>Vijaywada,Andhrapradesh</p>
                        </div>
                        <div className='logo'>
                            <div className='contact-detail'>
                                <a href='https://www.instagram.com/vardhan.velamakanni/'>
                                    <img src={instagram} alt='' width={30} />
                                </a>
                            </div>
                            <div className='contact-detail'>
                                <a href='https://www.linkedin.com/in/hemavardhan-velamakanni/?originalSubdomain=in'>
                                    <img src={linkedin} alt='' width={30} />
                                </a>
                            </div>
                            <div className='contact-detail'>
                                <a href='https://github.com/VardhanVelamakanni'>
                                    <img src={github} alt='' width={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter Your Name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='text' placeholder='Enter Your email' name='name' />
                    <label htmlFor=''>Write Your Message Here!</label>
                    <textarea name='message' rows="8" placeholder='Enter your message' />
                    <button className='contact-submit'>Submit now</button>
                </form>
            </div>



        </div>
    )
}

export default Contact