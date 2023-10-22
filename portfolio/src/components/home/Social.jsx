import "./home.css";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";

const Social = () => {
  return (
    <div>
      <ul>
        <li className="socials">
          <a href="github" target="_blank">
            <FaGithub /> <span>Github</span>
          </a>
        </li>
        <li className="socials">
          <a href="twitter" target="_blank">
            <RiTwitterXLine /> <span>Twitter</span>
          </a>
        </li>
        <li className="socials">
          <a href="#discord" target="_blank">
            <BsDiscord /> <span>Discord</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
