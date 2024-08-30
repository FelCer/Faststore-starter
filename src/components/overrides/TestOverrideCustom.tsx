import React from 'react'
import { BuyButton } from '@faststore/ui'

const TestOverrideCustom = (props: any) => {
    console.log('Props Custom: ')
    console.log(props)
    return (
        <>
            <section data-fs-section-override-custom>
                <BuyButton
                    {...props}
                />
                <span>
                    Este es un override custom
                </span>
            </section>
        </>
    )
}

export default TestOverrideCustom