import * as React from "react";
import { LogoMicrosoftComponent } from "../logo-microsoft";
import { cnc } from "../../../util";

const style = require("./footer.style.scss");

const Links = () => (
  <div className={style.linkArea}>
    <a className={style.link} href="" target="__blank">Terms of Use</a>
    <a className={style.link} href="" target="__blank">Privacy</a>
  </div>
);

const Statement = () => (
  <div className={style.statementArea}>
    Made with ♥ by Technolawgy
  </div>
);

export const FooterComponent = ({className = null}) => {
  return (
    <footer className={cnc(style.footer, className)}>
      <Statement />
      <a href="https:\\www.microsoft.com" target="__blank">
        {/*<LogoMicrosoftComponent colorful={false} classes={{container: style.logoContainer, svg: style.logoSvg }} />*/}
      </a>
      <Links />
    </footer>
  );
}
