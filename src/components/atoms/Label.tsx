import React from 'react';

export interface LabelProps {
    textTitle: string
    textContent: string
}
const Label = ({ textContent, textTitle }: LabelProps) => {
    return <div data-fs-label-container>
        <span>{textTitle}:</span>
        <span>{textContent}</span>
    </div>
}

export default Label