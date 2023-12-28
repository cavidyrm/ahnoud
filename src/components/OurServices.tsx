import { useTranslations } from "next-intl";

import s from '@/styles/services.module.scss'
import ServiceItem from "./ServiceItem";

const services = ["OnlineShop", "Academy", "BusinessCoaching"]

const OurServices = () => {
    const t = useTranslations('Main.OurServices');

    return (
        <section id="our-services" className={s["services-container"]}>
            <div className={s["inner-container"]}>
                <div className={s["heading"]}>
                    <h6 className={s["title"]}>{ t('title') }</h6>
                    <p className={s["description"]}>{ t('description') }</p>
                </div>
                <div className={s["services"]}>
                    {
                        services.map((item, index) => (
                            <ServiceItem key={index} txt={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurServices;