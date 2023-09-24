import Header from "./Header";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { SiteContext } from "../context";

export default function Vacancies() {
    const { popupSwitcher } = useContext(SiteContext);
    const [ bodyCount, setBodyCount ] = useState(1);

    let result = [];
    for (let i = 1; i <= bodyCount; i++) {
        result.push(
            <div className="vacancies__main__body" key={i}>
                <div className="vacancies__item" onClick={() => popupSwitcher('form-open')}>
                    <h3 className="vacancies__item__title">Старший менеджер сети</h3>
                    <p className="vacancies__item__employment">Полная занятость</p>
                    <div className="vacancies__item__text-block">
                        <p className="vacancies__item__text">Мы ищем опытного и талантливого кандидата на позицию старшего менеджера сети. Ваша роль будет заключаться в обеспечении эффективной и безопасной работы сетевой инфраструктуры нашей компании. Вот требования, которые мы предъявляем к кандидатам.</p>
                     <p className="vacancies__item__text">Опыт работы: Мы ищем кандидата с не менее чем 5-летним опытом работы в области сетевого управления и администрирования. Вы должны иметь подтвержденный опыт работы сетевым инженером или администратором.</p>
                    </div>
                    <button className="vacancies__item__button button">Отправить резюме</button>
                </div>
                <div className="vacancies__item">
                    <h3 className="vacancies__item__title">Инспектор транспортных средств</h3>
                    <p className="vacancies__item__employment">Частичная занятость</p>
                    <div className="vacancies__item__text-block">
                        <p className="vacancies__item__text">Мы ищем квалифицированного и ответственного кандидата на позицию инспектора транспортных средств. Ваша роль будет заключаться в осуществлении проверок и инспекций транспортных средств для обеспечения их соответствия требованиям безопасности и нормам дорожного движения.</p>
                        <p className="vacancies__item__text">Вы должны иметь как минимум среднее образование. Желательно наличие профессионального образования или сертификации в области автомобильной инспекции или технического обслуживания транспортных средств.</p>
                    </div>
                <button className="vacancies__item__button button">Отправить резюме</button>
                </div>
                <div className="vacancies__item">
                    <h3 className="vacancies__item__title">Инженер проектов</h3>
                    <p className="vacancies__item__employment">Полная занятость</p>
                    <div className="vacancies__item__text-block">
                        <p className="vacancies__item__text">Мы ищем опытного и талантливого кандидата на позицию инженера проектов. Ваша роль будет заключаться в управлении и выполнении проектов, от начальной стадии планирования до окончательной реализации.</p>
                        <p className="vacancies__item__text">Мы ищем кандидата с не менее чем 3-летним опытом работы в области управления проектами. Вы должны иметь успешный опыт работы над проектами различной сложности и масштаба.</p>
                    </div>
                    <button className="vacancies__item__button button">Отправить резюме</button>
                </div>
                <div className="vacancies__item">
                    <h3 className="vacancies__item__title">Старший по снабжению</h3>
                    <p className="vacancies__item__employment">Частичная занятость</p>
                    <div className="vacancies__item__text-block">
                        <p className="vacancies__item__text">Мы ищем опытного и организованного кандидата на позицию старшего по снабжению. Ваша роль будет заключаться в управлении процессом снабжения, закупками и установлении эффективных поставщиков.</p>
                        <p className="vacancies__item__text">Вы должны быть хорошо знакомы с рынком и тенденциями в области снабжения и закупок. У вас должны быть навыки анализа и оценки поставщиков, а также определения стратегий закупок и установления долгосрочных партнерских отношений.</p>
                    </div>
                    <button className="vacancies__item__button button">Отправить резюме</button>
                </div>
            </div>
        )
    }

    return (
        <section className="vacancies">
            <div className="vacancies__header header">
                <Header />
                <div className="vacancies__header__background header__background"></div>
            </div>
            <div className="vacancies__main">
                <div className="vacancies__main__container _container">
                    <div className="vacncies__undertitle undertitle">
                        <Link className="undertitle__link" to="/">Главная</Link>/
                        <a className="undertitle__link">Вакансии</a>
                    </div>
                    <div className="vacancies__title-block">
                        <h2 className="vacancies__title title">Вакансии</h2>
                        <p className="vacancies__subtitle">Мы ищем талантливых и мотивированных профессионалов, которые готовы внести свой вклад в нашу компанию и развиваться вместе с нами.</p>
                    </div>
                    <hr />
                    {/* <div className="vacancies__main__body">
                        <div className="vacancies__item" onClick={() => popupSwitcher('form-open')}>
                            <h3 className="vacancies__item__title">Старший менеджер сети</h3>
                            <p className="vacancies__item__employment">Полная занятость</p>
                            <div className="vacancies__item__text-block">
                                <p className="vacancies__item__text">Мы ищем опытного и талантливого кандидата на позицию старшего менеджера сети. Ваша роль будет заключаться в обеспечении эффективной и безопасной работы сетевой инфраструктуры нашей компании. Вот требования, которые мы предъявляем к кандидатам.</p>
                                <p className="vacancies__item__text">Опыт работы: Мы ищем кандидата с не менее чем 5-летним опытом работы в области сетевого управления и администрирования. Вы должны иметь подтвержденный опыт работы сетевым инженером или администратором.</p>
                            </div>
                            <button className="vacancies__item__button button">Отправить резюме</button>
                        </div>
                        <div className="vacancies__item">
                            <h3 className="vacancies__item__title">Инспектор транспортных средств</h3>
                            <p className="vacancies__item__employment">Частичная занятость</p>
                            <div className="vacancies__item__text-block">
                                <p className="vacancies__item__text">Мы ищем квалифицированного и ответственного кандидата на позицию инспектора транспортных средств. Ваша роль будет заключаться в осуществлении проверок и инспекций транспортных средств для обеспечения их соответствия требованиям безопасности и нормам дорожного движения.</p>
                                <p className="vacancies__item__text">Вы должны иметь как минимум среднее образование. Желательно наличие профессионального образования или сертификации в области автомобильной инспекции или технического обслуживания транспортных средств.</p>
                            </div>
                            <button className="vacancies__item__button button">Отправить резюме</button>
                        </div>
                        <div className="vacancies__item">
                            <h3 className="vacancies__item__title">Инженер проектов</h3>
                            <p className="vacancies__item__employment">Полная занятость</p>
                            <div className="vacancies__item__text-block">
                                <p className="vacancies__item__text">Мы ищем опытного и талантливого кандидата на позицию инженера проектов. Ваша роль будет заключаться в управлении и выполнении проектов, от начальной стадии планирования до окончательной реализации.</p>
                                <p className="vacancies__item__text">Мы ищем кандидата с не менее чем 3-летним опытом работы в области управления проектами. Вы должны иметь успешный опыт работы над проектами различной сложности и масштаба.</p>
                            </div>
                            <button className="vacancies__item__button button">Отправить резюме</button>
                        </div>
                        <div className="vacancies__item">
                            <h3 className="vacancies__item__title">Старший по снабжению</h3>
                            <p className="vacancies__item__employment">Частичная занятость</p>
                            <div className="vacancies__item__text-block">
                                <p className="vacancies__item__text">Мы ищем опытного и организованного кандидата на позицию старшего по снабжению. Ваша роль будет заключаться в управлении процессом снабжения, закупками и установлении эффективных поставщиков.</p>
                                <p className="vacancies__item__text">Вы должны быть хорошо знакомы с рынком и тенденциями в области снабжения и закупок. У вас должны быть навыки анализа и оценки поставщиков, а также определения стратегий закупок и установления долгосрочных партнерских отношений.</p>
                            </div>
                            <button className="vacancies__item__button button">Отправить резюме</button>
                        </div>
                    </div> */}
                    {result}
                    <a className="vacancies__blind blind" onClick={() => setBodyCount(bodyCount + 1)}>Ещё варианты</a>
                </div>
            </div>
        </section>
    )
}