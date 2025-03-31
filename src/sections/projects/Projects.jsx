import Button from '../../components/button/Button'
import { SectionHeader } from '../../components/section-header/SectionHeader'
import './projects.css'

import studentTaxHelpImage from '../../assets/images/studenttaxhelp.png';
import rulebornImage from '../../assets/images/ruleborn.png';
import isoxImage from '../../assets/images/isox.png';
import emcaImage from '../../assets/images/emca.png';
import magnumopusImage from '../../assets/images/magnumopus.png';
import baynetfuseImage from '../../assets/images/baynetfuse.png';
import onomeImage from '../../assets/images/onome.png';
import edublokImage from '../../assets/images/Edublok.png';
import dbmnImage from '../../assets/images/dbmn.jpg';
import praiseImage from '../../assets/images/praise.png';
import zionbarsImage from '../../assets/images/zionbars.jpg';
import brandleepImage from '../../assets/images/brandleep.jpg';
import zecnetImage from '../../assets/images/zecnet.jpg';
import helpinghandsImage from '../../assets/images/helpinghands.jpg';
import koinwaImage from '../../assets/images/koinwa.jpg';

import animatedIconsImage from '../../assets/images/animated-icons.png';
import easyRecipeImage from '../../assets/images/easyrecipe.png';
import ejeImage from '../../assets/images/eje.png';
import kryptolandImage from '../../assets/images/kryptoland.png';
import translatorImage from '../../assets/images/translator.png';
import syncImage from '../../assets/images/sync.jpg';
import womenImage from '../../assets/images/womentechster.jpg';
import digiImage from '../../assets/images/digigirl.jpg';
import syncertImage from '../../assets/images/syncert.jpg';
import alxcertImage from '../../assets/images/alxcert.jpg';
import gyftstoreImage from '../../assets/images/gyftstore.jpg';



const Projects = ({ title, subtitle, note }) => {
    return (
        <div id="portfolio" className="projects-section">

            {/* WordPress projects  */}
            <SectionHeader title={title} subtitle={subtitle} paddingValue={'10px'} note={`Professional Certification.`} />
            <div className="project-container">
                <div className="project">
                    <img src={syncImage} className="project-image" alt="Certificate" />
                   
                </div>
                <div className="project">
                    <img src={womenImage} className="project-image" alt="women tech cert image" />
                    
                </div>

                <div className="project">
                    <img src={digiImage} className="project-image" alt="Digi girl image" />
                    
                </div>

                <div className="project">
                    <img src={syncertImage} className="project-image" alt="sync intern image" />
                    
                </div>

                <div className="project">
                    <img src={alxcertImage} className="project-image" alt="alx cert image" />
                    
                </div>
                



            </div>

            {/* ReactJs and Javascript projects */}
            <h3 className='category-title'> Projects Design</h3>
            <div className="project-container">

                <div className="project">
                    <img src={easyRecipeImage} className="project-image" alt="easy recipe" />
                    <p className="project-text">
                        A recipe app that fetches a list of all
                        recipes from external API and provide dynamic
                        search functionality.
                    </p>
                    <a href='https://easyrecipee.netlify.app/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                

                <div className="project">
                    <img src={zecnetImage} className="project-image" alt="zecnet tech image" />
                    <a href='https://zecnet-tech.com/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>   


                <div className="project">
                    <img src={translatorImage} className="project-image" alt="language translator" />
                    <p className="project-text">
                        A Real Estate Website.
                    </p>
                    <a href="https://folkhomesltd.com" target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>

                <div className="project">
                    <img src={studentTaxHelpImage} className="project-image" alt="student tax help" />
                    <a href='https://studenttaxhelp.ca/' target='_blank' rel="noreferrer">
                        <Button name={'Check it out'} />
                    </a>
                </div>
                
                

            </div>


        </div>
    )
}

Projects.defaultProps = {
    title: 'projects',
    subtitle: 'Check Out Some Of My Works and Professional Certification',
    note: 'A series of projects ranging from web devlopment and design to professional certification',
}

export default Projects
