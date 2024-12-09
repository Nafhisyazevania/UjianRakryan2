import React from 'react';

//Style
import '../dist/css/main.css';
import "font-awesome/css/font-awesome.min.css";
import { Button, Card } from 'react-bootstrap';

//Gambar
import logo from "../assets/Logo.png";
import profile from "../assets/profile.png";
import uiux from "../assets/uiux.png";
import webdesign from "../assets/webdesign.png";
import appdesign from "../assets/appdesign.png";
import grafis from "../assets/Grafis.png";
import web1 from "../assets/Web Designs1.png";
import web2 from "../assets/Web Designs2.png";
import web3 from "../assets/Web Designs3.png";

function homepage() {
    //Data Card 1
    const cardData = [
        { img: uiux, title: 'UI/UX', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: webdesign, title: 'Web Design', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: appdesign, title: 'App Design', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: grafis, title: 'Graphic Design', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' }
    ];

    //Data Card 2
    const cardweb = [
        { img: web1, title: "AirCalling Landing Page Design" },
        { img: web2, title: "Business Landing Page Design" },
        { img: web3, title: "Ecom Web Page Design" }
    ];

    return (
        <div>
            {/* Halaman Home */}
            <div className="Home d-flex flex-column flex-lg-row align-items-center p-5" id="home">
                <div className="text-home m-5 p-6 text-center text-lg-start">
                    <h5>Hi, I am</h5>
                    <h4 className="text-warning">Fawzi Sayed</h4>
                    <h1 className="fw-bold fs-1">Website Developer</h1>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                        Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
                    </p>
                    <Button variant="warning" className="mt-3">Hire Me</Button>
                </div>
                <div className="profile-section text-center m-5 mt-lg-0">
                    <img src={profile} alt="Profile" className="img-fluid" style={{ width: "500px", height: "auto" }} />
                    <div className="d-flex justify-content-center gap-4 pt-3">
                        <a href="https://www.facebook.com" class="text-black"><i class="fa fa-facebook"></i></a>
                        <a href="https://www.twitter.com" class="text-black"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com" class="text-black"><i class="fa fa-instagram"></i></a>
                        <a href="https://www.linkedin.com" class="text-black"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            {/* Halaman Service*/}
            <div className="p-5 bg-banner" id="service">
                <div className="pt-5 text-center mb-5">
                    <h1 className="fw-bold">Services</h1>
                    <p className="mx-auto text-muted" style={{ maxWidth: '600px' }}>
                        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
                        Aliquet donec morbi convallis pretium.
                    </p>
                </div>
                <div className="d-flex flex-wrap justify-content-center gap-4">
                    {cardData.map((item, index) => (
                        <Card
                            key={index}
                            className="border-0 shadow-sm"
                            style={{ width: '13rem', borderRadius: '7px', backgroundColor: 'white' }}
                        >
                            <Card.Body>
                                <div className="d-flex mb-3">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                                    />
                                </div>
                                <h5 className="fw-bold">{item.title}</h5>
                                <p className="text-muted mb-0">
                                    {item.text}
                                </p>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>


            {/* Projects */}
            <div className="p-5" id='project'>
                <div className='text-center'>
                    <h1 className='fw-bold pt-3'>My Projects</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, asperiores.</p>
                </div>
                <div className='d-flex flex-wrap gap-3 justify-content-center align-items-center'>
                    <Button variant="light">All</Button>
                    <Button variant="light">UI/UX</Button>
                    <Button variant="warning">Web Design</Button>
                    <Button variant="light">App Design</Button>
                    <Button variant="light">Graphic Design</Button>
                </div>
                <div className='d-flex flex-wrap gap-3 p-5 justify-content-center align-items-center'>
                    {cardweb.map((item, index) => (
                        <Card
                            key={index}
                            className='border-0 shadow-sm'
                            style={{ width: '16rem' }}
                        >
                            <Card.Img
                                variant="top"
                                src={item.img}
                            />
                            <Card.Body>
                                <p className="text-warning">Web Design</p>
                                <Card.Title className='p-2'>{item.title}</Card.Title>
                                <Button variant="warning">Detail</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Banner Contact */}
            <div className='bg-banner' id='contact'>
                <div className='pt-5 text-center'>
                    <h1 className='fw-bold'>Let's Design Together</h1>
                    <p className='px-3 px-md-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet rerum iusto hic natus animi molestias impedit laudantium nihil sit, incidunt dolor, cupiditate praesentium atque accusamus porro unde vitae minus consequuntur.
                    </p>
                </div>
                <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center py-5 gap-3">
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="p-2 rounded-2 w-100 w-sm-auto"
                        style={{ maxWidth: '350px' }}
                    />
                    <Button variant="warning" className="ms-sm-3">
                        Contact Me
                    </Button>
                </div>
            </div>

            <div className='p-5' id='aboutme'>
                <div className="d-flex justify-content-center mb-4">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ maxWidth: '200px' }} />
                </div>
                <div className='d-flex flex-wrap justify-content-center gap-3 mb-4 text-center'>
                    <p className="m-0">Home</p>
                    <p className="m-0">About Me</p>
                    <p className="m-0">Service</p>
                    <p className="m-0">Projects</p>
                    <p className="m-0">Testimonials</p>
                    <p className="m-0">Contact</p>
                </div>
                <div className="social-icons d-flex justify-content-center gap-3">
                    <a href="https://www.facebook.com" className="text-black">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.twitter.com" className="text-black">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com" className="text-black">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com" className="text-black">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default homepage