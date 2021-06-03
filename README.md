# Visibility Trigger



    This is a simple react component to trigger CSS classes in elements when they become visible.

## How to use

    In order to use this component you need to follow two simple rules:

- Your application must contain one and only one `<VisibilityTrigger />` component.

- The classes you wish to trigger within your elements must be declared inside a `data-visibility-trigger` attribute.

```jsx
import React from 'react';
import VisibilityTrigger from 'visibility-trigger';

export default function() {
    return (
        <>
            <div>
                A very, very, long div.
            <div/>

            <div data-visibility-trigger="some-css-class other-css-class">
                This element isn't visible when the page loads.
            </div>

            <VisibilityTrigger />
        </>
    );
}
```
