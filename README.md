# React View Routing
===

- make sure 'react-router-dom' is in dependencies, if not, npm install it
- in App.jsx (or any component that will use client side routing): ```import { Route, HashRouter } from 'react-router-dom';```
- set up your routes:

```<HashRouter>
    <Route path="/" exact>
        <Home />
    </Route>
    <Route path="/animals">
        <Animals />
    </Route>
    <Route path="/plants">
        <Plants />
    </Route>
</HashRouter>```

- set up links as usual for nav bar:

```      
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/#/animals">Animals</a></li>
    <li><a href="/#/plants">Plants</a></li>
</ul>
```