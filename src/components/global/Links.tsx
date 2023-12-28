import { useTranslations } from "next-intl";

import s from '@/styles/global/links.module.scss'

interface Props {
    className?: string
}

const Links = ({ className }: Props) => {
    const t = useTranslations('Header')
    const items: string[] = ['about-us', 'what-we-do', 'our-services', 'contact-us']

    return (
        <ul className={`${s['links']} ${className}`}>
            {
                items.map((item, index) => (
                    <li key={index} className={s['link']}>
                        <a href={`#${item}`}>{t(item)}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Links;