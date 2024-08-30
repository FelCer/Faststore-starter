import React from 'react';
import Label from '../atoms/Label';
import Image from 'next/image';
import section from './section.module.scss'

import { Hero, HeroImage, HeroHeader } from '@faststore/ui'

export interface RichTexProps {
    TextSection: string
    imageSection: string
    numberSection: string
}

const RichText = (props: RichTexProps) => {
    const {
        TextSection,
        imageSection,
        numberSection,
    } = props
    console.log('props')
    console.log(props)

    const tmp = JSON.parse(TextSection)
    return <section className={section["section-richText"]}>

        {/* <Label textTitle={"Contenedor de Texto"} textContent={tmp?.blocks[0]?.text} />

        <div>
            <span>Contenedor de Imagen:</span>
            <Image
                src={imageSection}
                height={100}
                width={100}
                alt={tmp?.blocks[0]?.text}
            />
            <img src={ imageSection} alt="" /> 
        </div>

        <Label textTitle={"Contenedor de Número"} textContent={numberSection} /> */}

        <Hero>
            <HeroImage>
                <img
                    alt="Controller on a table"
                    src={imageSection}
                />
            </HeroImage>
            <HeroHeader
                title={tmp?.blocks[0]?.text}
                subtitle={numberSection}
                link="/"
                linkText="See more"
            />
        </Hero>

    </section>
}

export default RichText