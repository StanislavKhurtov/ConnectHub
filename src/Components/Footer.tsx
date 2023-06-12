import React from "react";
import footer from'./Footer.module.css';


export const Footer = () => {
    return (
        <div className={footer.footer}>
            <div className={footer.footer__container}>
                <div className={footer.text}>2023 Stanislav Khurtov</div>
            </div>
        </div>
    );
}
