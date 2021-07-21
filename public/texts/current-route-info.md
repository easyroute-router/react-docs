## Current route info
From every child component you can access current 
route state.

In any component wrapped with `<EasyrouteProvider>`, 
on any level of nesting, you can use `useCurrentRoute` 
hook. It is a custom implementation of Observable 
pattern, so you can "subscribe" to current route object. 
It goes like this:

```javascript
import useCurrentRoute from '@easyroute/react/useCurrentRoute'

export default function Component(props) {
    const currentRoute = useCurrentRoute()
    
    return <p>{ currentRoute.fullPath }</p>
}
```

If you want to use it in class-based component, simply wrap your component
like this and pass route object as a prop:

```javascript
class MyComponent extends React.Component {
    constructor({ currentRoute }) {
        console.log(currentRoute)
    }
    // ...
}

export default function WrappedComponent() {
    const currentRoute = useCurrentRoute()
    return <MyComponent currentRoute={currentRoute} />
}
```
