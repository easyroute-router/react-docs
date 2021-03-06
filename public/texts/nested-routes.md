## Nested routes
Working with nested routes is pretty similar to Vue Router.

First, you should define `children` property in route:
```javascript
routes:[
    {
        path: '/',
        component: Index,
        name: 'Index',
        children: [
            {
                path: 'nested',
                component: Nested,
                name: 'Nested'
            }
        ]
    },
```

Then, add into `Index` component RouterOutlet:
```jsx
// Index.jsx
import { RouterOutlet } from '@easyroute/react'

function IndexComponent(props) {
    // ...
    return <div className={'index-page'}>
        // ...
        <RouterOutlet />
    </div>
}
```
Now you will see both rendered
components on the screen.

