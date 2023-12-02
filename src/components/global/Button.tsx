import { ReactNode } from "react";
import IconArrowDL from "../icons/IconArrowDL";

import s from '@/styles/global/button.module.scss'

interface Props {
    darkMode: boolean,
    children: ReactNode
}

const Button = ({ darkMode, children }: Props) => {
    return (
        <button className={`${s['btn']} ${darkMode ? s['dark-mode'] : s['light-mode']}`}>
            {children}
            <IconArrowDL width="38" height="38" fill="none" stroke="#F2F2F3" />
        </button>
    )
}

export default Button;