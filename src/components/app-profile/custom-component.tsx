import { Component, h } from '@stencil/core';

@Component({
  tag: 'custom-component',
  styleUrl: 'custom-component.css',
  shadow: false,
})
export class CustomComponent {
  render() {
    return (
      <div class="custom-component">
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
