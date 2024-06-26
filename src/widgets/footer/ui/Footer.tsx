import { FC } from "react";
import { Divider, Link } from "@nextui-org/react";

import { footerItems } from "../lib";
import { Logo } from "@shared/ui";

import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer custom-container">
      <div className="footer__info">
        <Logo mode="dark" />
        <div className="footer__info_columns">
          {footerItems.map((item) => (
            <div key={item.id} className="footer__columns_column">
              <p className="footer__column_title">{item.title}</p>
              <div className="footer__column_items">
                {item.sections.map((section) => (
                  <Link
                    key={section.id}
                    size="sm"
                    className="footer__column_item"
                    href={section.path}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Divider className="footer__divider" />
      <div className="footer__rules">
        <div className="footer__rules_warranty">
          <p className="footer__rules_txt">
            {`${new Date().getFullYear()} TechZone`}
          </p>
          <p className="footer__rules_txt opacity-50">
            Все права защищены.
          </p>
        </div>
        <Link size="sm" href="/policy" className="footer__rules_txt">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};

export { Footer };
