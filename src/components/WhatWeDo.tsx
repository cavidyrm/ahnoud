'use client'

import { useTranslations } from "next-intl";

import s from '@/styles/whatWeDo.module.scss';
import Image from "next/image";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import { useState, useRef, useLayoutEffect } from "react";

const WhatWeDo = () => {
    const t = useTranslations('Main.WhatWeDo');

    const [scrollHeight, setScrollHeight] = useState<number>(0);
    const section = useRef<HTMLElement>(null)
    const imageContainer = useRef<HTMLDivElement>(null)
    const stepsContainer = useRef<HTMLDivElement>(null)

    const setHeight = () => {
        if (stepsContainer.current) {            
            setScrollHeight((stepsContainer.current.scrollHeight / 4 * 3 - 180))
        }
    }
    
    useLayoutEffect(() => {
        setHeight();

        window.addEventListener('resize', setHeight)

        const ctx = gsap.context(() => {
            const step = gsap.utils.toArray('#step')

            gsap.to(step, {
                scrollTrigger: {
                    trigger: section.current,
                    start: 'top top',
                    pin: true,
                    end: '+=3000px',
                    scrub: 1,
                },
                y: -scrollHeight
            })

            let image = null
            if (imageContainer.current) {
                image = imageContainer.current.querySelector('img');
            }

            // gsap.from(image, {
            //     yPercent: -30,
            //     ease: 'none'
            // })
            // gsap.to(image, {
                
            // })
            // gsap.fromTo(image, {
            //     scrollTrigger: {
            //         trigger: section.current,
            //         start: 'top top',
            //         pin: true,
            //         end: '+=3000px',
            //         scrub: 1,
            //     },
            //     yPercent: -30,
            //     ease: 'none'
            // }, {
            //     yPercent: 30,
            //     ease: 'none'
            // })
        }, section) 

        return () => ctx.revert()
    }, [scrollHeight])

    return (
        <section ref={section} id="what-we-do" className={s["whatWeDo-section"]}>
            <div id="testing" className={s["inner-container"]}>
                <div ref={imageContainer} className={s["image-container"]}>
                    <Image className={s["image"]} src="/whatWeDo.png" width="466" height="816" alt="Ahnoud What We Do?" />
                </div>
                <div className={s["text-container"]}>
                    <h6 className={s["title"]}>{ t('title') }</h6>
                    <p className={s["description"]}>{ t('description') }</p>
                    <div ref={stepsContainer} className={s["steps-container"]}>
                        <div id="step" className={s["step"]}>
                            <p className={s["step-counter"]}>01.</p>
                            <div className={s["step-txt"]} dangerouslySetInnerHTML={{ __html: t.raw('first') }} />
                        </div>
                        <div id="step" className={s["step"]}>
                            <p className={s["step-counter"]}>02.</p>
                            <div className={s["step-txt"]} dangerouslySetInnerHTML={{ __html: t.raw('second') }} />
                        </div>
                        <div id="step" className={s["step"]}>
                            <p className={s["step-counter"]}>03.</p>
                            <div className={s["step-txt"]} dangerouslySetInnerHTML={{ __html: t.raw('third') }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;