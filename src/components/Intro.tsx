'use client'

import { useRef, useLayoutEffect } from "react";

import Image from "next/image";

import { useTranslations } from "next-intl";

import s from '@/styles/intro.module.scss'

import Button from "./global/Button";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const Intro = () => {
    const t = useTranslations('Main.Intro')

    const imageContainer = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            let image = null

            if (imageContainer.current) {
                image = imageContainer.current.querySelector('img')
            }

            gsap.to(image, {
                y: () => -(image!.offsetHeight - imageContainer.current!.offsetHeight - 200),
                ease: 'none',
                scrollTrigger: {
                    trigger: imageContainer.current,
                    scrub: true,
                    pin: false,
                    start: 'top center',
                },
            })
        })

        return () => ctx.revert()
    })

    return (
        <section className={s['intro-section']}>
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
                <div ref={imageContainer} className={s['image-inner-container']}>
                    <Image priority={true} src="/intro-img.avif" width="1103" height="509" alt="Intro Image" />
                </div>
            </div>
        </section>
    )
}

export default Intro;