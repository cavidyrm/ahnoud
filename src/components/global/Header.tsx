import Link from "next/link";
import Image from "next/image";

import { getLocale, getTranslations } from "next-intl/server";

import s from '@/styles/global/header.module.scss'

const Header = async () => {
    const locale = await getLocale()
    const t = await getTranslations('Header')
    const items: string[] = ['about-us', 'what-we-do', 'our-services', 'contact-us']

    return (
        <header className={s['header']}>
            <div className={s['inner-container']}>
                <Image
                    className={s['logo-image']}
                    src="/logo-title.svg"
                    width={250}
                    height={183}
                    alt="Ahnoud"
                    priority={true}
                />

                <ul className={s['links']}>
                    {
                        items.map(item => (
                            <li className={s['link']}>{t(item)}</li>
                        ))
                    }
                </ul>

                <Link className={s['locale-link']} href={locale === 'en' ? '/fa' : '/en'}>{locale === 'en' ? 'EN' : 'FA'}</Link>
            </div>
        </header>
    )
}

export default Header;