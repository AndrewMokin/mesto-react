import React from "react";

function Footer() {
    return (
    <footer className="footer">
      <p className="footer__copyright" dangerouslySetInnerHTML={{ "__html": "&copy; 2022 Mesto Russia" }}/>
    </footer>
    );
};

export default Footer;