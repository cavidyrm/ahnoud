import Link from "next/link";
import Image from "next/image";

import { useLocale } from "next-intl";

import s from '@/styles/global/header.module.scss'
import Links from "./Links";

const Header = () => {
    const locale = useLocale()

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

                <Links className="hidden md:flex" />

                <Link className={s['locale-link']} href={locale === 'en' ? '/fa' : '/en'}>{locale === 'en' ? 'EN' : 'FA'}</Link>
            </div>
        </header>
    )
}

export default Header;