import { SectionOverride } from '@faststore/core'
import TestOverrideCustom from './TestOverrideCustom';

const SECTION = 'ProductDetails' as const

/**
 * Esta es una manera de hacer overrides SectionOverride y la 
 * segunda manera es como esta en el archivoProductDetailsWithCustomButton.tsx, que es con  ProductDetailsSection, getOverriddenSection
 * 
 */

const override: SectionOverride = {
    section: SECTION,
    components: {
        // BuyButton: { props: { size: "small", iconPosition: "right" } }
        BuyButton: { Component: TestOverrideCustom },
    },
};

export { override } 