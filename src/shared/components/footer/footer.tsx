import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="font-semibold text-3xl mb-8">Let's stay connected!</div>
            <a className="link" href="https://github.com/chunhaoo" target="_blank">
                <span className="icon icon-github"></span>
                <span>chunhaoo</span>
            </a>
            <a
                className="link"
                href="https://www.linkedin.com/in/chin-chun-hao-93882220b/"
                target="_blank"
            >
                <span className="icon icon-linkedin"></span>
                <span>Chin Chun Hao</span>
            </a>
            <a className="link" href="mailto:w.cchunhao@gmail.com" target="_blank">
                <span className="icon icon-email"></span>
                <span>w.cchunhao@gmail.com</span>
            </a>
        </footer>
    );
};

export default Footer;
