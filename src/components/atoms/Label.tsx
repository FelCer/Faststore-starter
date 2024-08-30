import React from 'react';
import { Label as CustomLabel } from '@faststore/ui'

export interface LabelProps {
    textTitle: string
    textContent: string
}
const Label = ({ textContent, textTitle }: LabelProps) => {
    return <div data-fs-label-container>
        <CustomLabel>{textTitle}:</CustomLabel>
        <CustomLabel>{textContent}</CustomLabel>
        {/* <span>{textTitle}:</span>
        <span>{textContent}</span> */}
    </div>
}

export default Label