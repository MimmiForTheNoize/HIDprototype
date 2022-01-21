import * as React from 'react';
import chart1 from '../img/chart1.png'
import chart2 from '../img/chart2.png'
import sample2 from '../img/sample2.jpeg';
import { Link } from 'react-router-dom'
const Detailpage = () => {


    return (
        <div>

            <div className=' mainHeaderContainer'>
                <h4 className='center detailPageTitle'>Kindergarten Mond</h4>

                <div className='container headerContainer'>
                    <div className='imageContainer row'>
                        <img className='col s6' src={chart1} alt="first chart"/>
                        <img className='col s6' src={chart2} alt="second chart"/>
                    </div>

                    <div className='headertext center'>
                        aölsdjfkaölsjdföalskdjfölaksj ölkasj döflkajsdölfkj
                        asökdfjalksjdfölaksdjfdlöa skjfaöslkjdf ölakjsdölkfj
                        asdfjaösldkfjöasdl fkja.lskdjföalkjsdföljasdö lf kjasöldkfj
                    </div>


                </div>
            </div>

            <div className='lowerpart'>
                <div>
                    <Link to={'detailpage/reviews'}>
                        <p className='searchtitle'><span className='bigLink'>Zu den Rezensionen</span></p>
                    </Link>
                    <div className='detailstars'>
                        <div><i className="material-icons medium">star</i>
                            <i className="material-icons medium">star</i>
                            <i className="material-icons medium">star</i>
                            <i className="material-icons medium">star</i>
                            <i className="material-icons medium">star_half</i>
                        <span> 4,5 Sterne</span>

                        </div>
                    </div>

                </div>


                <div className='detailBody '>
                    <div className='mainText'>
                        <p className='searchtitle'>Allgemeine Informationen</p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                        <p className='searchtitle'>Motto</p>
                        Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                        placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat.

                        <p className='searchtitle'>Details</p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis.

                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At
                        accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt
                        justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero
                        voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    </div>
                    <div className='galleryItem '>
                        <div className="row">
                            <div className="col s12 m7">

                                <div className="card">
                                    <div className="card-image">

                                        <img src={sample2} alt='ssldfkjsllsdj sdlfjlsfkdj'/>
                                    </div>
                                    <div className="card-action">
                                        <Link to='/detailpage/contact'>
                                            Link kontaktiere den Kindergarten
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
)
}

export default Detailpage
