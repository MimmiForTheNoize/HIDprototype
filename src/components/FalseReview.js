import * as React from 'react';
import PrimaryBtn from "./PrimaryBtn";
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

const FalseReview = () => {

    const [stars, setStars] = useState(false);
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(stars || title) {
            console.log("just something");
            console.log(stars);
            console.log(title)
        }
    }


    const routeThrough = (formChange) => {
        console.log(formChange)
        if (stars || title) {
            return "";
        } else {
            return "/search/detailpage/detailpage/reviews/addreview/falsereview";
        }
    }
    return (
        <div className='mainDiv'>
            <h3>Teile deine Meinung</h3>
            <p className='loginInfo'>  Um eine Rezension zu erstellen musst du dich <a  className='loginLink' href='#'>anmelden</a>.</p>
            <form className={'add-form'} onSubmit={onSubmit}>
                <div>
                    <div>
                    </div>
                    <div className='container addreview'>
                        <div className='starlabel'>
                            <i className="material-icons" >star_border</i>
                            *Gesamtbewertung<br />
                        </div>
                        <p className='falseLabel'>Du musst eine Gesamtbewertung angeben!</p>
                        <div className='aboveStars'>
                            <div className='radioStars row'>
                                <div className='col s2 radioStarDiv'>
                                    <label>
                                        <input value='1Star' name="stars" type="radio" onChange={(e) => setStars(true)}/>
                                        <span>1 Stern </span>
                                    </label>
                                </div>
                                <div className='col s2  radioStarDiv'>
                                    <label>
                                        <input value='2Star' name="stars" type="radio" onChange={(e) => setStars(true)}/>
                                        <span>2 Sterne </span>
                                    </label>
                                </div>
                                <div className='col s2  radioStarDiv'>
                                    <label>
                                        <input value='3Star' name="stars" type="radio" onChange={(e) => setStars(true)}/>
                                        <span>3 Sterne </span>
                                    </label>
                                </div>
                                <div className='col s2  radioStarDiv'>
                                    <label>
                                        <input value='4Star' name="stars" type="radio" onChange={(e) => setStars(true)}/>
                                        <span>4 Sterne </span>
                                    </label>
                                </div>
                                <div className='col s2  radioStarDiv'>
                                    <label>
                                        <input value='5Star' name="stars" type="radio" onChange={(e) => setStars(true)}/>
                                        <span>5 Sterne </span>
                                    </label>
                                </div>
                            </div>


                        </div>
                        <div className='container center marginrelated'>
                            <p className='falseLabel'>Du musst den Titel deiner Bewertung angeben!</p>
                            <label htmlFor="first_name">*Titel</label>
                            <input placeholder="Titel" id="first_name" type="text" className="validate mustTitle" onChange={(e) => setTitle(e.target.value)}/>
                        </div>

                        <div className='detailReview container center'>
                            <label className='textareaLabel' htmlFor="textarea1">Detailbeschreibung</label>
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                        </div>

                        <div className='foodselection dropdown'>
                            <select className='addReviewSelects'>

                                <option value='auswahl'>Speisenauswahl</option>
                                <option value='vegetarisch'>Vegetarisch</option>
                                <option value='keinSchweinefleisch'>kein Schweinefleisch</option>
                                <option value='Glutenfrei'>Glutenfrei</option>
                                <option value='antihistamin'>Antihistamin</option>
                            </select>
                        </div>

                        <div className='aboveStars'>
                            <div className='privateLabel radioStars row'>
                                <div className='col s6 radioStarDiv'>
                                    <label>
                                        <input className='col s6' value='private' name="group1" type="radio"/>
                                        <span>Private</span>
                                    </label>
                                </div>
                                <div  className='col s6 radioStarDiv'>
                                    <label>
                                        <input  value="public" name="group1" type="radio"/>
                                        <span>Öffentlich</span>
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className='addCheckbox container'>
                           <span className='checkboxLabel'>
                                <label >Ausstattung und Besonderes <br /></label>
                           </span>
                            <div className='checkboxContainer'>
                              <span>  <label>
                                    <input type="checkbox"/>
                                    <span>Außenbereich</span>
                                </label>
                              </span>
                                <span>
                                   <label>
                                    <input type="checkbox"/>
                                    <span>Barrrierefreiheit</span>
                                </label>
                                </span>

                                <span>
                              <label>
                                    <input type="checkbox"/>
                                    <span>Spielplatz</span>
                                </label>
                          </span>
                            </div>

                            <div className='checkboxContainer'>
                          <span>
                            <label>
                                <input type="checkbox"/>
                                <span>modern</span>
                            </label>
                          </span>
                                <span>
                           <label>
                                <input type="checkbox"/>
                                <span>Kinderkrippe/Babybetreuung</span>
                            </label>
                        </span>
                            </div>
                        </div>


                    </div>
                    <div className='publishBtn'>
                        <Link to={routeThrough()}>
                            <PrimaryBtn color={'#59B176'} text={'Veröffentlichen'}
                                        className={'waves-effect waves-light btn-large center landingPageBtn'}/>
                        </Link>
                    </div>


                </div>
            </form>

        </div>
    )
}

export default FalseReview
