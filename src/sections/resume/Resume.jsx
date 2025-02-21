import { SectionHeader } from '../../components/section-header/SectionHeader'
import './resume.css'
import { FaBrain, FaGraduationCap } from 'react-icons/fa'

const Resume = ({ title, subtitle, note }) => {
    return (
        <section id="resume" className="resume-section bg-gradient-close">
            <SectionHeader title={title} subtitle={subtitle} note={note} />

            <h3 className="container-title">work experience <FaBrain className="icon" /></h3>
            <div className="resume-container">
                <div className="line-divider"></div>

                <div className="resume-item">
                    
                    <div className="item-content">
                        <h3 className="item-title">African Leadership Software Engineering Accelerator (Remote)</h3>
                        <p className="item-date">September 2022 - October 2023 </p>
                        <ol className="item-text">
                            <li>Completed a 12-month program focusing on software engineering  fundamentals </li>
                            <li>Built a replica of the Airbnb website using Python's Flask Web Framework and deployed it to a
                                server</li>. 
                            <li>Collaborated as a front-end developer in designing and developing the "Space Tech" blog
                             website during the final year, contributing significantly to the user interface and user
                               experience.</li>
                        </ol>
                        
                    </div>
                </div>

                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title"> IT Support Specialist</h3>
                        <p className="item-date">01/July 2024 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">GEA West Africa</h3>
                        <ul className="item-text">
    <li>Diagnosed and resolved network connectivity issues, improving system reliability and performance.</li>
    <li>Provided technical support for hardware and software troubleshooting, ensuring minimal downtime.</li>
    <li>Configured and maintained routers, modems, and other networking equipment for optimal functionality.</li>
    <li>Assisted users with IT-related concerns, delivering effective solutions in a timely manner.</li>
    <li>Tracked and monitored sales using Excel spreadsheets, analyzing data to improve sales performance.</li>
    <li>Followed up on sales inquiries and customer interactions to ensure seamless service and satisfaction.</li>
</ul>
                        
                    </div>
                </div>




                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">React Developer (Virtual Intern)</h3>
                        <p className="item-date">01/December 2023 - 31/December 2023 </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Sync Internship</h3>
                        <ul className="item-text">
                            <li>Developed multiple applications addressing real-life challenges within a month-long
                                internsip.</li>
                        <li>Leveraged API integration and React.js to create a weather application, chat
                             application, code editor, and resume generator</li>
                        <li>Demonstrated proficiency in web development and problem-solving skills, delivering
                             innovative and functional solutions within tight deadlines.</li>
                        </ul>
                        
                    </div>
                </div>
                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">Frontend Developer (Intern)</h3>
                        <p className="item-date">Agust 2023 - November 2023</p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Enovolem Virtual</h3>
                        <ul className="item-text">
                           <li>Collaborated with Enovolem to develop an e-commerce gift store website</li>
                           <li>Worked as a frontend developer, focusing on creating the user interface</li>
                           <li>Implemented design elements and features to enhance the website's appeal and
                            functionality.</li>
                            <li>Ensured user-friendly navigation and seamless browsing experience for customers.</li>
                            <li>Utilized HTML, CSS, and React.js to build responsive and visually appealing web pages.</li>
                        </ul>
                        
                    </div>
                </div>

            </div>

            <h3 className="container-title">PROFESSIONAL TRAINING AND CERTIFICATIONS<FaGraduationCap className="icon" /></h3>
            <div className="resume-container">
                {/* the education section  */}
                <div className="line-divider"></div>

                <div className="resume-item">
                    <div className="item-header">
                        <h3 className="item-title">BSC in Fashion Technology | Yaba College of Technology</h3>
                        <p className="item-date">In view </p>
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Front-end developer | Women in Tech</h3>
                 
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">Software Engineer (Certified) | ALX</h3>
                 
                    </div>
                    <div className="item-content">
                        <h3 className="item-title">UIX Designer | Digi girls</h3>
                 
                    </div>
                </div>
               
                 
            </div>


        </section>
    )
}

Resume.defaultProps = {
    title: 'resume',
    subtitle: 'More of my Credentials.',
    note: 'A quick look at my education and work experience.',

}

export default Resume
