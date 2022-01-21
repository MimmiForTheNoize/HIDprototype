import * as React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";


const Quizz = () => {






    return (
        <div className='mainDiv'>
            <div className='header'>
                <div className='question'>
                    Welches Bilderbuch würde dein Kind am meisten interessieren?
                </div>
            </div>
            <div className='quizzContent'>
                <div className='answers'>

                    <div className="collection">
                        <a href="#!" className="collection-item">Eine Detektiv Geschichte</a>
                        <a href="#!" className="collection-item">Geschichte über Fußball</a>
                        <a href="#!" className="collection-item">Märchen mit Prinzessinen und Hexen</a>
                        <a href="#!" className="collection-item">Keines der Angegebenen</a>
                    </div>
                </div>
                <div className='quizzActions row'>

                    <Link to='/'>
                        <div className='col s2'>
                            <button className="btn waves-effect waves-light left" type="submit" name="action">
                                Abbrechen
                            </button>
                        </div>

                        <div className='col s2'>
                            <button className="btn waves-effect waves-light left" type="submit" name="action">
                                Zurück
                            </button>
                        </div>

                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Quizz
