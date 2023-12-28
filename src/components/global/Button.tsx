import { ReactNode } from "react";
import IconArrowDL from "../icons/IconArrowDL";

import s from '@/styles/global/button.module.scss'

interface Props {
    darkMode: boolean,
    children: ReactNode,
    isSubmit?: boolean
}

const Button = ({ darkMode, children, isSubmit }: Props) => {
    return (
        <button type={isSubmit ? 'submit' : 'button'} className={`${s['btn']} ${darkMode ? s['dark-mode'] : s['light-mode']}`}>
            {children}
            <IconArrowDL width="38" height="38" fill="none" stroke={darkMode ? "#F2F2F3" : "#020410"} />
        </button>
    )
}

export default Button;