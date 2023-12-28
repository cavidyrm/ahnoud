import { useTranslations } from 'next-intl';

import s from '@/styles/global/input.module.scss'
import IconInformation from '../icons/IconInformation';

interface Props {
    name: string,
    label: string,
    caption?: boolean,
    textarea?: boolean
}

const Input = ({ name, label, caption, textarea  }: Props) => {
    const t = useTranslations('Main.Form')

    return (
        <div className={s["input-container"]}>
            <label htmlFor={name}>{ t(label) }</label>
            {
                textarea ?
                <textarea name={name} id={name} rows={3} />
                :
                <input type="text" id={name} name={name} />
            }
            {
                caption &&
                <div className={s["information-container"]}>
                    <IconInformation width="16" height="16" stroke="#297BF7" />
                    <p>{ t("caption") }</p>
                </div>
            }
        </div>
    )
}

export default Input;