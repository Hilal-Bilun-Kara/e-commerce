import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";

export default function Customer() {
  return (
    <div className="flex flex-wrap gap-4 sm:flex-col text-[#737373] justify-between mx-auto py-4 px-[12%]">
      <FontAwesomeIcon icon={faHooli} size="5x" className="vector" />
      <FontAwesomeIcon icon={faLyft} size="5x" className="vector" />
      <FontAwesomeIcon icon={faPiedPiperHat} size="5x" className="vector" />
      <FontAwesomeIcon icon={faStripe} size="5x" className="vector" />
      <FontAwesomeIcon icon={faAws} size="5x" className="vector" />
      <FontAwesomeIcon icon={faRedditAlien} size="5x" className="vector" />
    </div>
  );
}
