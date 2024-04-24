import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';






export default function Header() {
    return (
    <div className="flex justify-between mx-0 bg-[#252B42] text-white">
        <div className="flex">
    <a href="tel:+12255550118" className="mx-0"><FontAwesomeIcon icon={faPhone} /> (225) 555-0118</a>
    <a href="mailto:michela.zivera@example.com" className="mx-4 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />michela.zivera@example.com</a>
                </div>

        <div className="flex ml-2">
            <p>Follow Us and get a chance to win 80% off</p>
        </div>

        <div className="flex">
            <p>Follow Us:</p>
            <a href="https://www.instagram.com/" target="_blank" className="text-white">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>

            <a href="https://www.youtube.com/" target="_blank" className="text-white">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>

            <a href="https://www.facebook.com/" target="_blank" className="text-white">
            <FontAwesomeIcon icon="fa-brands fa-twitter" /></a>

            <a href="https://twitter.com/" target="_blank" className="text-white">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            </a>
        </div>
    </div>

    )    
}