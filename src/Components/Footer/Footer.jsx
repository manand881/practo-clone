import styles from "./Footer.module.css";

const Footer = () => {
    return <footer className={styles.footerContainer}>
        <div className={styles.footerItems}>
            <div>
                <h3>Practo</h3>
                <ul>
                    <li>About</li> <br/>
                    <li>Blog</li> <br/>
                    <li>Carrers</li> <br/>
                    <li>Press</li> <br/>
                    <li>Contact Us</li> <br/>
                </ul>
            </div>
            <div>
                <h3>For patients</h3>
                <ul>
                    <li>Search for doctors</li> <br/>
                    <li>Search for clinics</li> <br/>
                    <li>Search for hospitals</li> <br/>
                    <li>Book Diagnostic Tests</li> <br/>
                    <li>Book Full Body Checkups</li> <br/>
                    <li>Practo Plus</li> <br/>
                    <li>Covid Hospital listing</li> <br/>
                    <li>Read health articles</li> <br/>
                    <li>Read about medicines</li> <br/>
                    <li>Practo drive</li> <br/>
                    <li>Health app</li> <br/>
                </ul>
            </div>
            <div>
                <h3>For doctors</h3>
                <ul>
                    <li>Practo Profile</li> <br/>
                </ul>
                <h3>For clinics</h3>
                <ul>
                    <li>Ray by Practo</li> <br/>
                    <li>Practo Reach</li> <br/>
                    <li>Ray Tab</li> <br/>
                    <li>Practo Pro</li> <br/>
                </ul>
            </div>
            <div>
                <h3>For hospitals</h3>
                <ul>
                    <li>Insta by Practo</li> <br/>
                    <li>Qikwell by Practo</li> <br/>
                    <li>Practo Profile</li> <br/>
                    <li>Practo Reach</li> <br/>
                    <li>Practo Drive</li> <br/>
                </ul>
            </div>
            <div>
                <h3>More</h3>
                <ul>
                    <li>Help</li> <br/>
                    <li>Developers</li> <br/>
                    <li>Privacy Policy</li> <br/>
                    <li>Terms & Conditions</li> <br/>
                    <li>Healthcare Directory</li> <br/>
                    <li>Pracot Health Wiki</li> <br/>
                    <li>Corporate Wellness</li> <br/>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul>
                    <li>Facebook</li> <br/>
                    <li>Twitter</li> <br/>
                    <li>LinkedIn</li> <br/>
                    <li>Youtube</li> <br/>
                    <li>Github</li> <br/>
                </ul>
            </div>
        </div>
        <div className={styles.footerLogo}>
            <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt="practo-logo" />
            <h3>Copyright © 2017, Practo. All rights reserved.</h3>
        </div>

    </footer>
}

export { Footer };