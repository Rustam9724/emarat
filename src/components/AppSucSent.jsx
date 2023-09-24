import { useContext } from "react";
import { SiteContext } from "../context";

export default function AppSucSent() {
    const { popupSwitcher } = useContext(SiteContext);

    return (
        <div className="app-suc-sent-wrapper">
            <div className='app-suc-sent'>
                <img 
                    className="app-suc-sent__cross"
                    src="/assets/images/app-suc-sent/cross.svg" 
                    alt="" 
                    onClick={() => popupSwitcher('close')}
                />
                <img className="app-suc-sent__check-mark" src="/assets/images/app-suc-sent/check-mark.jpg" alt=""/>
                <h2 className="app-suc-sect__title title">Заявка успешно отправлена</h2>
                <p className="app-suc-sent__text">Менеджер уже получил контактные данные и свяжется с Вами в самое ближайшее время</p>
            </div>
            <div className="substrate" onClick={() => popupSwitcher('close')}></div> 
        </div> 
    )
}