import { useContext, useState } from "react";
import { SiteContext } from "../context";
import { useLocation } from "react-router";

export default function Form() {
    const { popupSwitcher } = useContext(SiteContext);
    const [summary, setSummary] = useState('Файл не выбран');

    function inputHandler(event) {
        setSummary(event.target.files[0].name)
    }

    return (
        <form className="form">
            <div className="form__container _container">
                <div className="form__inputs">
                    <div className="form__inputs__left">
                        <label>
                            <p>Ваше имя</p>
                            <input type="text"/>
                        </label>
                        <label>
                            <p>Email</p>
                            <input type="email"/>
                        </label>
                    </div>
                    <div className="form__inputs__right">
                        <label>
                            <p>Контактный номер</p>
                            <input type="phone"/>
                        </label>
                        <label>
                            <p>Раздел</p>
                            <select defaultValue="services">
                                <option value="services">Сервисы</option>
                                <option value="distribution">Дистрибуция материалов</option>
                                <option value="purchse">Закупка материалов</option>
                                <option value="consulation">Консультация</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="form__textarea-file-block">
                    <label className="form__textarea">
                        <p>Комментарий к заявке</p>
                        <textarea></textarea>
                    </label>
                    {
                        useLocation().pathname === '/vacancies' &&
                            <div className="form__add-file-block add-file-block">
                                <p className="add-file-block__text">Здесь вы можете прикрепить ваше резюме</p>
                                <div className="add-file-block__body">
                                    <input type="file" name="file" id="input-file" className="input-file" onInput={event => inputHandler(event)}/>
                                    <label className="add-file-block__label" htmlFor="input-file">
                                        <span className="add-file-block__button-text text">Выберите файл</span>
                                        <span className="add-file-block__icon-wrapper"><img className="add-file-block__icon" src="/assets/images/form/paperclip.svg"/></span>
                                    </label>
                                    <p className="add-file-block__summary-name">{summary}</p>
                                </div>
                            </div>
                    }
                </div>
                <div className="form__buttons">
                    <input type="button" className="button" value="Отправить сообщение" onClick={() => popupSwitcher('appsent-open')}/>
                    <label  className="form__agree">
                        <input type="checkbox" />
                        <div></div>
                        <p>Нажимая кнопку ”Отправить”, я даю согласие на обработку личных данных</p>
                    </label>
                </div>
            </div>
        </form>
    )
}