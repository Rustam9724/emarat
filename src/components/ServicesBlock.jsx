import { Link } from "react-router-dom";
import { useContext } from "react";
import { SiteContext } from "../context";

export default function ServicesBlock() {
    const { scrollingToTop } = useContext(SiteContext);
    
    return (
        <div className="services-block">
                        <Link className="services-block__item _item" to="/services/lube-assistant" onClick={scrollingToTop}>
                            <div className="services-block__item__image _item__image _ibg">
                                <img src="./assets/images/main/services_1.jpg" alt="" />
                            </div>
                            <div className="services-block__item__body _item__body">
                                <h3 className="services-block__item__title _item__title">LubeAssistant</h3>
                                <p className="services-block__item__text _item__text text">Подбор смазочных материалов, консультация по процессам, связанным с применением смазочных материалов</p>
                                <div className="services-block__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="services-block__item services-block__item_reverse _item _item_reverse" to="/services/lube-support" onClick={scrollingToTop}>
                            <div className="services-block__item__image _item__image _ibg">
                                <img src="./assets/images/main/services_2.jpg" alt="" />
                            </div>
                            <div className="services-block__item__body _item__body">
                                <h3 className="services-block__item__title _item__title">LubeSupport</h3>
                                <p className="services-block__item__text _item__text text">Комплексная поддержка в сфере оптимизации затрат по стоимости владения техники</p>
                                <div className="services-block__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="services-block__item _item" to="/services/video-check" onClick={scrollingToTop}>
                            <div className="services-block__item__image _item__image _ibg">
                                <img src="./assets/images/main/services_3.jpg" alt="" />
                            </div>
                            <div className="services-block__item__body _item__body">
                                <h3 className="services-block__item__title _item__title">Video-Check</h3>
                                <p className="services-block__item__text _item__text text">Видео-диагностика оборудования</p>
                                <div className="services-block__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                        <Link className="services-block__item services-block__item_reverse _item _item_reverse" to="/services/lube-trainer" onClick={scrollingToTop}>
                            <div className="services-block__item__image _item__image _ibg">
                                <img src="./assets/images/main/services_4.jpg" alt="" />
                            </div>
                            <div className="services-block__item__body _item__body">
                                <h3 className="services-block__item__title _item__title">LubeTrainer</h3>
                                <p className="services-block__item__text _item__text text">Техническое обучение для сотрудников вашей компании</p>
                                <div className="services-block__item__footnote _item__footnote"></div>
                            </div>
                        </Link>
                </div>
    )
}