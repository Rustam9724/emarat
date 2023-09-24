import Form from "./Form";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function FormPopUp() {
    const { popupSwitcher } = useContext(SiteContext);
    
    return (
        <div className="form-pop-up-wrapper">
            <div className="form-pop-up">
                <div className="form-pop-up__header">
                    <div className="form-pop-up__header__container _container">
                        <div className="form-pop-up__title title">Свяжитесь с нами</div>
                        <div className="form-pop-up__subtitle">Благодарим вас за проявленный интерес к нашей компании. Мы будем рады обсудить с вами возможность сотрудничества и ответить на все ваши вопросы.</div>
                    </div>
                </div>
                <Form />
                <div className="form-pop-up__cross" onClick={() => popupSwitcher('close')}></div>
            </div>
            <div className="substrate" onClick={() => popupSwitcher('close')}></div> 
        </div>
    )
}