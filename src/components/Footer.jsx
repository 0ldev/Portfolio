import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://github.com/0ldev"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://br.linkedin.com/in/albert-katri-212341101"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-icon"
      >
        <FaTwitter size={30} />
      </a>
    </footer>
  );
}

export default Footer;
