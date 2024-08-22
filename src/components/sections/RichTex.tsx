import React from 'react';
import Label from '../atoms/Label';

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
    return <section>

        <Label textTitle={"Contenedor de Texto"} textContent={tmp?.blocks[0]?.text} />

        <div>
            <span>Contenedor de Imagen:</span>
            <img src={ imageSection} alt="" />
        </div>

        <Label textTitle={"Contenedor de Número"} textContent={numberSection} />
    </section>
}

export default RichText