import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer_container">
                    <div className="footer_hello">Оставьте свой отзыв</div>
                    <div className="footer_second_container">
                        <div className="footer_description">
                            Отзыв — это письменное либо устное высказывание
                            основанное на выражении личностного
                            эмоционально-оценочного отношения к увиденному,
                            <br />
                            услышанному или пережитому опыту. Это, мнение о
                            ком-нибудь или о чем-нибудь, анализ, разбор, оценка
                            продукта или оказанной услуги. О́тзыв — чужое мнение
                            <br />о товаре или услуге, искреннее или купленное.
                            В наше время используется как инструмент маркетинга
                            О́тзыв — условный секретный ответ на пароль (пропуск)
                            в войсках[1]
                        </div>
                        <div class="footer_inputs">
                            <input
                                className="footer_name"
                                type="text"
                                name="Ваше имя"
                                placeholder="Ваше имя"
                            />
                            <input
                                className="footer_telephone"
                                type="tel"
                                name="Ваш телефон"
                                placeholder="Ваш телефон"
                            />
                            <div className="footer_inputs_text">
                                *Мы никому не передаем ваши данные. <br />И не
                                сохраняем ваш номер в базу.
                            </div>
                            <div className="footer_district">
                                <a href="https://www.facebook.com/">
                                    Связаться с нами
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
