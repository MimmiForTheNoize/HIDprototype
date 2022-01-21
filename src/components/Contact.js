import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import mapImage from "../img/mapImage.png";
import { SocialIcon } from 'react-social-icons';


const Contact = () => {


    return (

        <div className='mainDiv'>
            <h3>Alle Kontaktinformationen</h3>

            <div className={'contactImage'}>
               <img src={mapImage} alt='Standort' className='contactMapImage'/>
            </div>

            <div className='socialIcons'>
                <span className='socialIconSingle'>
                    <SocialIcon network='facebook' bgColor='#626663'/>
                </span>
                <span className='socialIconSingle'>
                     <SocialIcon network='instagram' bgColor='#626663'/>
                </span>
               <span className='socialIconSingle'>
                     <SocialIcon network='twitter' bgColor='#626663'/>
               </span>

            </div>

            <div className='contactCard container'>
                <div className="col s12 m7">
                    <div className="card horizontals">
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>Währinger Str. 29 <br />
                                    Tel: +431427749301<br />
                                    <a href='http://informatik.univie.ac.at/'>http://informatik.univie.ac.at/</a><br />
                                    Öffnungszeiten Sekretariat:<br />
                                    Mo-Fr: 09:00-15:00 Uhr<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Contact;
