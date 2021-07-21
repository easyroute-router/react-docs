## Getting started

#### Creating a router
To create a router, open your main file (f.e. "index.jsx") and add the following code:
```javascript
// ./router.js

import Router from '@easyroute/core'
import hashMode from '@easyroute/core/hash-mode'

import Index from './pages/Index.jsx'
import About from './pages/About.jsx'

export const router = new Router({
    mode: hashMode, // pass mode function here
    omitTrailingSlash: true, // should we remove the last slash in the url, 
                             // e.g. "/my/path/" => "/my/path"
    routes:[
        {
            path: '/',
            component: Index,
            name: 'Index'
        },
        {
            path: '/about/me',
            component: About,
            name: 'About me'
        },
        {
            path: '/lazy-load',
            component: () => import('src/LazyPage.jsx'),
            name: 'This is a lazy-loading page'
        }
    ]
})
```

The `mode` key allows you to specify the navigation mode:
* `@easyroute/core/hash-mode`: based on everything that comes after the "#" sign in the URL (`window.location.hash`)
* `@easyroute/core/history-mode`: based on [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
* `@easyroute/core/silent-mode`: navigation mode without updating the URL in the browser bar

### Adding routes
The `routes` key is an array of the registered routes.
In the example above we defines two routes:
- link `//yoursite.com/#/` will render the `Index` component
- link `//yoursite.com/#/about/me` will render the `About` component

### Next step
Then, in your root component, wrap all data in `EasyrouteProvider` component and pass
the router instance as a prop. Don't worry: it doesn't create a real DOM-element and  won't break your styles, it's just a logical wrapper.

**App.jsx**
```jsx
import { EasyrouteProvider } from "@easyroute/react";
import router from './router'

// ...
ReactDOM.render(
  <React.StrictMode>
      <EasyrouteProvider router={router}>
          <App />
      </EasyrouteProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```
**It is important** to wrap your **root** component with `<EasyrouteProvider>`. Without it the `<RouterOutlet>` and `<RouterLink>` will have no access to the router instance.

### Last step
Now, when you start an app, you will see errors in console.
This is happening because you don't specify the place where to
render a component matched with the current URL path.

To specify the place where to put matched router component we do this with the `<RouterOutlet />` element. Put it in any level inside the `<EasyrouteProvider/>`:

```jsx
import { RouterOutlet } from "@easyroute/react";

function App(props) {
    return <div className="app">
        ...
        <RouterOutlet />
        ...
    </div>
}
```

If the current URL path matched with several components from the `routes` array,
you can provide the `name` prop in `<RouterOutlet name="..."/>` to select the appropriate route. Otherwise the first mathed component will be rendered.
