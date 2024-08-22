import React from 'react';

export interface LabelProps {
    textTitle: string
    textContent: string
}
const Label = ({ textContent, textTitle }: LabelProps) => {
    return <section>
        <div>
            <span>{textTitle}:</span>
            <span>{textContent}</span>
        </div>
    </section>
}

export default Label