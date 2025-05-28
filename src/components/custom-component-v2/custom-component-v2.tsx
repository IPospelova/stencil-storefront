import { Component, h } from '@stencil/core';

@Component({
  tag: 'custom-component-v2',
  styleUrl: 'custom-component.css',
  shadow: false,
})
export class CustomComponentV2 {
  render() {
    return (
      <div class="custom-component">
        <script type="module" src="https://cdn.shopify.com/storefront/web-components.js"></script>
        <shopify-store store-domain="mock.shop" country="US" language="en"></shopify-store>
        <h4 class="custom-component-title">Stencil custom component</h4>
        <shopify-context type="product" handle="hoodie">
          <template>
            <shopify-media width="280" height="280" query="product.selectedOrFirstAvailableVariant.image"></shopify-media>
          </template> 
        </shopify-context>
      </div>
      );
  }
}
