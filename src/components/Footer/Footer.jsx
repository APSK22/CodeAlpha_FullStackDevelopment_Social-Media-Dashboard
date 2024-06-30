import "./Footer.scss";

function Footer({ theme }) {
  return (
    <footer>
      <div className={`text-container ${theme ? "white" : ""}`}>
        <span>Coded by </span>
        <a
          href="https://github.com/APSK22"
          className={`footer-link ${theme ? "lime-green" : ""}`}
          target="_blank"
        >
          Ajay Pratap Singh Kulharia
        </a>
      </div>
    </footer>
  );
}

export default Footer;
