import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'
// import TestOverrideCustom from './TestOverrideCustom';

const ProductDetailsWithCustomButton = getOverriddenSection({
    Section: ProductDetailsSection,
    components: {
        BuyButton: { props: { size: "small", iconPosition: "right" } }
        // BuyButton: { Component: TestOverrideCustom },
    },
});

export default ProductDetailsWithCustomButton;