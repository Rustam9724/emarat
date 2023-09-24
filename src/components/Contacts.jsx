import Form from "./Form";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Contacts() {

    return (
        <section className="contacts">
            <div className="contacts__header header">
                <Header />
                <div className="contacts__header__background header__background"></div>
            </div>
            <div className="contacts__main">
                <div className="contacts__main__container _container">
                    <div className="contacts__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <a className="undertitle__link">Контакты</a>
                    </div>
                    <div className="contacts__title-block">
                        <div className="contacts__title title">Свяжитесь с нами</div>
                        <p className="contacts__title-block__gratitude">Благодарим вас за проявленный интерес к нашей компании. Мы будем рады обсудить с вами возможность сотрудничества и ответить на все ваши вопросы.</p>
                    </div>
                    <hr />
                    <div className="contacts__warhses">
                        <div className="contacts__warehouse contacts__warehouse_central">
                            <h3 className="contacts__warehouse__title">Центральный склад</h3>
                            <p className="contacts__warehouse__address">г. Саратов, п. Дубки<br/>ул. Центральная, 23Б<br/>Почтовый индекс: 410530</p>
                            <div className="contacts__warehouse__data">
                                <h4 className="contacts__warehouse__data__title">Контактные данные</h4>
                                <div className="contacts__warehouse__data__links">
                                    <p className="contacts__warehouse__data__item contacts__warehouse__phone">8 927 000 00 00</p>
                                    <p className="contacts__warehouse__data__item contacts__warehouse__email">Emaratcompany@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__secondary">
                            <div className="contacts__warehouse">
                                <h3 className="contacts__warehouse__title">Склад в Воронеже:</h3>
                                <p className="contacts__warehouse__address">г. Саратов, п. Дубки. ул. Центральная, 23Б</p>
                                <div className="contacts__warehouse__data">
                                    <h4 className="contacts__warehouse__data__title">Контактные данные</h4>
                                    <div className="contacts__warehouse__data__links">
                                        <p className="contacts__warehouse__data__item contacts__warehouse__phone">7 927 059 02 46</p>
                                        <p className="contacts__warehouse__data__item contacts__warehouse__email">Emaratcompany@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts__warehouse">
                                <h3 className="contacts__warehouse__title">Склад в Москве:</h3>
                                <p className="contacts__warehouse__address">г. Саратов, п. Дубки. ул. Центральная, 23Б</p>
                                <div className="contacts__warehouse__data">
                                    <h4 className="contacts__warehouse__data__title">Контактные данные</h4>
                                    <div className="contacts__warehouse__data__links">
                                        <p className="contacts__warehouse__data__item contacts__warehouse__phone">7 926 154 63 35</p>
                                        <p className="contacts__warehouse__data__item contacts__warehouse__email">Emaratcompany@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts__warehouse">
                                <h3 className="contacts__warehouse__title">Склад в Ростове-на-Дону:</h3>
                                <p className="contacts__warehouse__address">г. Саратов, п. Дубки. ул. Центральная, 23Б</p>
                                <div className="contacts__warehouse__data">
                                    <h4 className="contacts__warehouse__data__title">Контактные данные</h4>
                                    <div className="contacts__warehouse__data__links">
                                        <p className="contacts__warehouse__data__item contacts__warehouse__phone">7 927 116 95 41</p>
                                        <p className="contacts__warehouse__data__item contacts__warehouse__email">Emaratcompany@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
            <div className="contacts__map-block">
                <div className="contacts__map" style={{position: 'relative', overflow: 'hidden'}}>
                    <iframe 
                        src="https://yandex.uz/map-widget/v1/?ll=46.068450%2C51.675676&mode=search&oid=1791540535&ol=biz&z=15.04" 
                        frameBorder="1" 
                        allowFullScreen={true} 
                        style={{position: 'relative'}}>
                    </iframe>
                </div>
                <div className="contacts__warehouse contacts__warehouse_central">
                    <h3 className="contacts__warehouse__title">Центральный склад</h3>
                    <p className="contacts__warehouse__address">г. Саратов, п. Дубки ул. Центральная, 23Б Почтовый индекс: 410530</p>
                    <div className="contacts__warehouse__data">
                        <h4 className="contacts__warehouse__data__title">Контактные данные</h4>
                        <div className="contacts__warehouse__data__links">
                            <p className="contacts__warehouse__data__item contacts__warehouse__phone">8 927 000 00 00</p>
                            <p className="contacts__warehouse__data__item contacts__warehouse__email">Emaratcompany@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}