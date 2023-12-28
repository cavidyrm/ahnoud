import { useTranslations } from "next-intl"

import s from '@/styles/about.module.scss'
import Image from "next/image"

const AboutUs = () => {
    const t = useTranslations('Main.AboutUs')

    return (
        <section id="about-us" className={s['about-section']}>
            <div className={s['inner-container']}>
                <div className={s['text-container']}>
                    <h6 className={s['title']}>{ t('title') }</h6>
                    <p dangerouslySetInnerHTML={{ __html: t.raw('description') }} className={s['description']} />
                    <p className={s['caption']}>{ t('caption') }</p>
                </div>
                <Image className={s['about-img']} src="/Logo-about.svg" width="514" height="708" alt="Ahnoud Logo" />
            </div>
        </section>
    )
}

export default AboutUs;