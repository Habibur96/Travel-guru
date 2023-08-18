import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faComments, faEnvelope, faHouseChimney, faPhone, faShare, faSubscript, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

import { faAndroid, faFacebook, faGithub, faInstagram, faJava, faLinkedin, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

    return (

        <div class="pt-4 bg-danger mt-5" >

            <div class="row ">
                <div class="col-lg-3   pt-5">
                    <h4 style={{ color: '#0C0C0C' }} >My YouTube Chenal</h4> <br />

                    <div>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faThumbsUp} /> Like</h4>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faShare} /> Share</h4>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faComment} /> Comment</h4>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faSubscript} /> Subscribed</h4>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faComments} /> Feedback</h4>
                    </div>
                </div>
                <div class="col-lg-3 pt-5">
                    <h4 style={{ color: '#0C0C0C' }} >Social</h4> <br />
                    <div>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faFacebook} /> Facebook</h4>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faTwitter} /> Twitter</h4>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faYoutube} /> Youtube</h4>
                        <h4><FontAwesomeIcon style={{ height: 25 }} icon={faInstagram} /> Instagram</h4>
                    </div>
                </div>


                <div class="col-lg-3  pt-5">
                    <h4 style={{ color: '#0C0C0C' }} >Upcomming Topics</h4> <br />

                    <h4><FontAwesomeIcon icon={faAndroid} style={{ height: 25 }} /> Androied</h4>
                    <h4> Redux</h4>
                    <h4><FontAwesomeIcon icon={faJava} style={{ height: 25, color: '#0C0C0C' }} /> JavaFx</h4>
                    <h4>Operating System</h4>
                </div>
                <div class="col-lg-3 col-sm-3 ms-auto ">

                    {/* Contact part */}
                    <div class=" pt-5 pb-5 ">
                        <h4 style={{ color: '#0C0C0C' }} >Contact</h4> <br />
                        <div>

                            <h4><FontAwesomeIcon icon={faHouseChimney} style={{ height: 25 }} />  West Dewvhog, Narayangonj</h4>

                            <h4><FontAwesomeIcon icon={faEnvelope} style={{ height: 25 }} /> habiburrahman2@gmail.com</h4>

                            <h4><FontAwesomeIcon icon={faPhone} style={{ height: 25 }} /> +01882043784, 01687322068</h4>

                            <h4><FontAwesomeIcon icon={faTelegram} style={{ height: 25 }} /> +01882043784, 01687322068</h4>

                        </div>
                    </div>

                </div>

            </div>

            <hr style={{ height: '4px', marginLeft: '80px', marginRight: '80px', color: 'black' }} className='mt-5' />



            {/* Social Link */}
            <div className='mt-5 pt-5 mb-5' style={{ color: '#0C0C0C' }}>

                <h4 className='mb-4 black' style={{ color: '#0C0C0C' }}>Follow Me</h4>

                <a style={{ color: '#0C0C0C' }} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/habiburrahman.nayan.58/" > <FontAwesomeIcon style={{ height: 45, paddingRight: 15 }} icon={faFacebook} /></a>

                <a style={{ color: '#0C0C0C' }} href="https://github.com/Habibur96" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon style={{ height: 45, paddingRight: 15 }} icon={faGithub} /> </a>

                <a style={{ color: '#0C0C0C' }} href="https://www.linkedin.com/in/habibur-nayan-ab769b215/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ height: 45, paddingRight: 15 }} icon={faLinkedin} />  </a>

                <a style={{ color: '#0C0C0C' }} href="https://github.com/Habibur96" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon style={{ height: 45, paddingRight: 15 }} icon={faEnvelope} />    </a>

                <a style={{ color: '#0C0C0C ' }} href="https://www.youtube.com/watch?v=ZzaPdXTrSb8&ab_channel=ProgrammingwithMosh" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon style={{ height: 45, paddingRight: 15 }} icon={faYoutube} />  </a>

            </div>

            <h3 className='' style={{ color: '#0C0C0C', paddingBottom: '120px' }}>©Study With Nayan 2022. All rights reserved</h3>

        </div>

    );
};

export default Footer;