import { useLocale, useTranslations } from 'next-intl';

import s from '@/styles/serviceItem.module.scss'
import Image from 'next/image';

interface Props {
    txt: string
}

const ServiceItem = ({ txt }: Props) => {
    const locale = useLocale()
    const t = useTranslations('Main.OurServices.services')

    const setTxt = (item: string) => {
        return t(txt + '.' + item)
    }

    return (
        <div className={s["service-item"]}>
            <div className={s["text-container"]}>
                <h6 className={s["title"]}>{ setTxt('title') }</h6>
                <p className={s["caption"]}>{ setTxt('caption') }</p>
                <p className={s["description"]}>{ setTxt('description') }</p>
            </div>
            <Image
                className={s["image"]}
                src={locale === "en" ? `/${txt}.png` : `/${txt}-Farsi.png` }
                width="562"
                height="622"
                alt={txt + "Ahnoud"} 
            />
        </div>
    )
}

export default ServiceItem;