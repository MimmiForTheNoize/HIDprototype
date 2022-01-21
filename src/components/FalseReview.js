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
            <p className='loginInfo'>  Um eine Rezension zu erstellen musst du dich <a href='#'>anmelden</a>.</p>
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
                        <div className='radioStars'>
                            <label>
                                <input name="group1" type="radio" onChange={(e) => setStars(true)}/>
                                <span>1 Stern </span>
                                <input name="group2" type="radio" onChange={(e) => setStars(true)}/>
                                <span>2 Sterne </span>
                                <input name="group3" type="radio" onChange={(e) => setStars(true)}/>
                                <span>3 Sterne </span>
                                <input name="group4" type="radio" onChange={(e) => setStars(true)}/>
                                <span>4 Sterne </span>
                                <input name="group5" type="radio" onChange={(e) => setStars(true)}/>
                                <span>5 Sterne </span>
                            </label>
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
                                <option value='choco'>Vegetarisch</option>
                                <option value='straw'>kein Schweinefleisch</option>
                                <option value='vanilla'>Glutenfrei</option>
                                <option value='vanilla'>Antihistamin</option>
                            </select>
                        </div>

                        <div className='privateLabel'>
                            <label>
                                <input name="group1" type="radio"/>
                                <span>Red</span>
                                <input name="group1" type="radio"/>
                                <span>Yellow</span>
                            </label>
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


                        <div className='container pricerange'>
                            <p className="range-field">
                                <label>Preiseklasse</label>
                                <input type="range" id="test5" min="0" max="100"/>
                            </p>
                        </div>

                    </div>
                    <div className='publishBtn'>
                        <Link to={routeThrough()}>
                            <PrimaryBtn color={'red'} text={'Veröffentlichen'}
                                        className={'waves-effect waves-light btn-large center landingPageBtn'}/>
                        </Link>
                    </div>


                </div>
            </form>



        </div>
    )
}

export default FalseReview
