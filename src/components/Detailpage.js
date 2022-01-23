import * as React from 'react';
import chart1 from '../img/chart1.png'
import chart2 from '../img/chart2.png'
import sample2 from '../img/sample2.jpeg';
import newHog from '../img/newHog.jpeg'
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
                        Diese Grafiken zeigen das Verhältnis der angegebenen Kriterien nach Maßgebung von Rezensionen und weiteren Angaben.
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
                        <p className='searchtitle'>Wir stellen uns vor</p>
                        Unser Kindergarten Sonnenschein widmet sich dem wichtigen Thema Outdoor: Natur, Wald, Tiere Pflanzen und Wetter sind Bereiche, die man bemerkt, wenn man sich in unseren Einrichtungen befindet. Unsere Pädgagog:innen haben besondere Zusatzausbildungen dazu und können ihre Erfahrungen und Wissen den Kindern weitergeben, damit sie in einer Outdoor-bewussten Umgebung aufwachsen und so zu respektvollen Erdenbürgern heranwachsen, die ein nachhaltiges und Umwelt-bewusstes Leben führen werden. Darüber hinaus ist uns die Entwicklung der sozialen Fertigkeiten der Kinder wichtig und deshalb achten wir bei Bewerbungsgesprächen mit künftigen potentiellen Pädagog:innen, dass ein Feingefühl für Sozialverhalten vorhanden ist. Letztendlich ist die erste Zeit, in der ein Kind lernen muss, sich in eine Gruppe zu integrieren, die prägendste. Diese soll in einer guten Umgebung stattfinden. Vertrauen sie auf uns, ihr Kind wird es Ihnen später danken!

                        <p className='searchtitle'>Unser Motto</p>
                        Das Kind muss sein Wesen entfalten können wie eine Blume auf der sonnigen Wiese.


                        <p className='searchtitle'>Steckbriefe zu unseren besten Mitarbeiter*Innen</p>
                        Simone war schon immer ein Naturmensch und hat es als Kind geliebt, am Bauernhof ihrer Eltern herumzuspielen und Zeit mit Tieren zu verbringen. Im Laufe ihrer Unterstufen-Ausbildung hat sie bemerkt, auch ein Herz für Kinder zu haben und sich dadurch entschlossen, in die BAKIP St. Pölten, eine berufsbildende höhere Schule mit pädagogischer Ausbildung, zu gehen. Nebenbei hat Simone viele Ausbildungen in Kräuterkunde bzw. Vermeidung von Lebensmittelverschwendung belegt. Diese und noch viele weitere ähnliche Werte bringt sie den Kindern erfolgreich bei.
                        Gerhard hat eine Lebensmitteltechnologie-Ausbildung gemacht und während seines Studiums an der BOKU Wien hat er die Organisation „Teach for Austria“ entdeckt, die damit gestartet hat, jungen Studienabsolventen nicht nur einen 2-jährigen Wechsel als Lehrer zu ermöglichen, sondern auch einen 2-jährigen Wechsel als Kindergartenpädagog:in. Gerhard hat diese Chance genützt und war vom Beruf völlig begeistert, sodass er anschließend eine vollwertige Ausbildung zum Kindergartenpädagogen in Angriff genommen hat und jetzt ein fixer Bestandteil unseres Teams ist.
                    </div>
                    <div className='galleryItem '>
                        <div className="row">
                            <div className="col s12 m7">

                                <div className="card">
                                    <div className="card-image">
                                        <span className='searchtitle'>Gallerie</span>
                                        <img src={newHog} alt='ssldfkjsllsdj sdlfjlsfkdj'/>
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
