import Image from "next/image";

import { getLocale, getTranslations } from "next-intl/server";

import s from '@/styles/intro.module.scss'

import Button from "./global/Button";

const Intro = async () => {
    const locale = await getLocale();
    const t = await getTranslations('Main.Intro')

    return (
        <section className={s['intro-container']}>
            <div className={s['inner-container']}>
                <p className={s['title']}>
                    {
                        t.rich('title', {
                            tag: (chunks) => <span>{chunks}</span>
                        })
                    }
                </p>
                <p className={s['description']}>{t('description')}</p>
                <Button darkMode={true}>{t('button')}</Button>
            </div>
            <div className={s['image-container']}>
                <div className="container">
                    <Image src="/intro-img.png" width="1103" height="509" alt="Intro Image" />
                </div>
            </div>
        </section>
    )
}

export default Intro;