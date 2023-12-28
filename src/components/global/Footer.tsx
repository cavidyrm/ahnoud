import s from '@/styles/global/footer.module.scss'
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import Links from './Links';

import IconWhatsapp from '../icons/IconWhatsapp';
import IconX from '../icons/IconX';
import IconInstagram from '../icons/IconInstagram';
import IconTelegram from '../icons/IconTelegram';

const Footer = () => {
    const t = useTranslations('Footer')
    const icons = [
        <IconWhatsapp key={0} width='24' height='24' fill='#E6E6E8' stroke='none' />,
        <IconX key={1} width='24' height='24' fill='#E6E6E8' stroke='none' />,
        <IconInstagram key={2} width='24' height='24' fill='#E6E6E8' stroke='none' />,
        <IconTelegram key={3} width='24' height='24' fill='#E6E6E8' stroke='none' />
    ]

    const setAriaLabel = (index: number) => {
        switch (index) {
            case 0:
                return 'Ahnoud Whatsapp'
                break;
            case 1:
                return 'Ahnoud Twitter'
                break;
            case 2:
                return 'Ahnoud Instagram'
                break;
            case 3:
                return 'Ahnoud Telegram';
                break
            default:
                break;
        }
    }

    return (
        <footer className={s['footer']}>
            <div className={s['inner-container']}>
                <Image className={s['logo']} src="/footer-logo.svg" width="80" height="115" alt='Ahnoud Footer Logo' />

                <p className={s['description']}>{t('description')}</p>

                <Links className='flex flex-col md:flex-row gap-11 mb-12' />

                <ul className={s['icons']}>
                    {
                        icons.map((IconComponent, index) => (
                            <li aria-label={setAriaLabel(index)} key={index} className={s['icon']}>
                                <a aria-label={setAriaLabel(index)} href="#">{ IconComponent }</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={s['copy-right']}>
                ©
                <span>{ t('copy-right') }</span>
            </div>
        </footer>
    )
}

export default Footer;