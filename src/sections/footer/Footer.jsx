import Links from '../../components/social_links/Links'
import './footer.css'
import { FaSearchLocation, FaEnvelope, FaPhone } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-container">
                <div className="footer-item">
                    <FaSearchLocation className="footer-icon" />
                    <p className="footer-title">
                        where to find me
                    </p>
                    <p className="footer-text">
                       Lagos Ikeja
                    </p>
                </div>
                <div className="footer-item">
                    <FaEnvelope className="footer-icon" />
                    <p className="footer-title">
                        email me at
                    </p>
                    <p className="footer-text footer-email">
                        chinazasundaygoodness@gmail.com
                        
                    </p>
                </div>
                <div className="footer-item">
                    <FaPhone className="footer-icon" />
                    <p className="footer-title">
                        call me at
                    </p>
                    <p className="footer-text">
                        phone: (+234) 810 80746 79
                    </p>
                </div>
            </div>

            <Links />

            <p className="copy-right">
                &copy; Chinaza Sunday 2023
                - Built with much love.
            </p>

        </div>
    )
}


export default Footer
