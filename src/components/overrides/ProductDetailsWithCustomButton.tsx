import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'
// import TestOverrideCustom from './TestOverrideCustom';

/** Section Override v2
 * 
 * https://developers.vtex.com/docs/guides/faststore/overrides-migrating-v1-to-v2
*/

const ProductDetailsWithCustomButton = getOverriddenSection({
    Section: ProductDetailsSection,
    components: {
        BuyButton: { props: { size: "small", iconPosition: "right" } }
        // BuyButton: { Component: TestOverrideCustom },
    },
});

export default ProductDetailsWithCustomButton;