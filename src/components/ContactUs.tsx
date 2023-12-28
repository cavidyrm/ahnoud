'use client'

import { useTranslations } from 'next-intl';

import s from '@/styles/contactUs.module.scss';

import Button from './global/Button';
import Input from './global/Input';
import { FormEvent } from 'react';

const ContactUs = () => {
    const t = useTranslations('Main.Form');

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
    }

    return (
        <section id='contact-us' className={s["contact-us-section"]}>
            <div className={s["inner-container"]}>
                <div className={s["form-container"]}>
                    <h6 className={s["title"]} dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
                    <form onSubmit={e => submitForm(e)}>
                        <div className={s["name-input"]}>
                            <Input name='full-name' label='fullName' />
                        </div>
                        <div className={s["phone-input"]}>
                            <Input name='phone' label='phoneNumber' caption={true} />
                        </div>
                        <div className={s["email-input"]}>
                            <Input name='email' label='email' />
                        </div>
                        <div className={s["message-input"]}>
                            <Input name='message' label='message' textarea={true} />
                        </div>
                        <div className={s["submit-container"]}>
                            <Button darkMode={false} isSubmit={true}>{t('button')}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;