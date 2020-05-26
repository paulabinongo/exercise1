import React from "react";

function Footer(props) {
  const { position } = props;
  return (
    <footer className="footer">
      <div className={"content" + (position ? ` has-text-${position}` : "")}>
        {/* <div className="content has-text-centered"> */}
        <p>{props.text}</p>
      </div>
    </footer>
  );
}

export default Footer;
