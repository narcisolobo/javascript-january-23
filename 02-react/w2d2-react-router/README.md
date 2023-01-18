# React Router

If you remember way back when to our first day of React, we talked about how React is a single page application. All the declarative descriptions of how each "page" should look is sent over to the client in the very first request, in a bundle of JavaScript.

React then manipulates the DOM for us when it needs to. So then the question becomes, how do we create the illusion of navigation to different "pages" in our app? So far, everything we've done has been tied to one URL - localhost:3000.

React doesn't have a native implementation for creating the illusion of going to different pages. For that, we need to import a third-party library. It's called React Router.

To install, open a terminal and navigate to your project folder and type `npm install react-router-dom`.

## Using React Router

After installation, the first thing we should do is edit our `index.js` file like below:

index.js:
```jsx
import { BrowserRouter } from 'react-router-dom';
// other imports removed for brevity

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

Now that we have wrapped our App component in React Router's BrowserRouter component, our entire React app can take advantage of React Router.

Let's switch to `App.js` and implement some basic routing features.

App.js:
```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={'/home'} element={ <Home /> } />
    </Routes>
  );
}
```

Let's break down what we did here. First, we imported two components, Routes and Route, from react-router-dom.

We then set up a parent `<Routes></Routes>` (plural) component and placed a `<Route />` (singular) component inside. All of our route components must be children of this parent routes component.

The `<Route />` component has two props, a `path` prop and an `element` prop. The `path` prop defines the URL, and the `element` prop defines the component that should render at that URL.

If we type `http://localhost:3000/home` in our address bar, the Home component will render.

We can set up as many of these routes as we like, we just have to make sure they're all children of the parent routes component.

App.js:
```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={'/home'} element={ <Home /> } />
      <Route path={'/about'} element={ <About /> } />
      <Route path={'/services'} element={ <Services /> } />
      <Route path={'/contact'} element={ <Contact /> } />
    </Routes>
  );
}
```

Now we have set up four different routes in our app, each mapping a path to a component.

## The Link Component

All that is well and good, but we cannot expect our users to type different URLs in the address bar. We need to give them hyperlinks to click. Let's talk about React Router's Link component.

Let's build a way to get to every "page" in the Home component.

Home.jsx:
```jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Link to={'/home'}>Home</Link>
    <Link to={'/about'}>About</Link>
    <Link to={'/services'}>Services</Link>
    <Link to={'/contact'}>Contact</Link>
  );
};
```

If you think you recognize the above, you're right. They look just like an anchor tag in HTML. Instead of the HTML `<a></a>` tags, we have React Router's `<Link></Link>` tags. Instead of the anchor tag's `href` attribute, we have Link component's `to` prop. It behaves (and compiles) exactly the same as an anchor tag. The only difference is that our browser will not refresh when we click a Link tag.

## The `useParams` Hook

Oftentimes, we need to pull parameters out of the URL. When building CRUD applications, we're constantly pulling the ID of an object out of the URL.

React Router has a hook for that, and it's called, `useParams`.

In any component that needs to pull parameters out of the URL, import the useParams hook and initialize it in your function component.

Let's say we're building a CRUD application of recipes. In App.js, we could map a Route component to a path with an `:id` parameter.

App.js:
```jsx
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path={'/recipes/:id'} element={ <ShowRecipe /> } />
    </Routes>
  );
}
```

The colon `:` after the slash in the path tells React Router that it should treat `id` as a parameter. Typing `http://localhost:3000/recipes/1` will render the `<ShowRecipe />` component.

Inside the component, we can pull that ID out of the URL like so:

ShowRecipe.jsx:
```jsx
import { useParams } from 'react-router-dom';

const ShowRecipe = () => {
  const params = useParams();
  return (
    <h2>You are viewing recipe id: {params.id}</h2>
  );
};
```

We could also choose to destructure the parameter if we like.

ShowRecipe.jsx:
```jsx
import { useParams } from 'react-router-dom';

const ShowRecipe = () => {
  const { id } = useParams();
  return (
    <h2>You are viewing recipe id: {id}</h2>
  );
};
```

## The `useNavigate` Hook

Let's say we have a form in our recipe CRUD app for users to add their own recipe. After they submit the form, we would want to "redirect" the user to a list component showing all the recipes. For that, we'll have to import and initialize React Router's `useNavigate` hook.

NewRecipe.jsx:
```jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRecipe = () => {
  const [recipe, setRecipe] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.prevent.default();
    navigate('/recipes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Recipe Name:</label>
      <input
        type="text"
        value={recipe}
        onChange={e => e.target.value}  
      />
      <input type="submit" value="Add Recipe">
    </form>
  );
};
```

In `handleSubmit` we used the `navigate` function returned by the `useNavigate` hook to "redirect" the user to a new URL.

## More React Router

The above features should be enough for most of the apps we'll be building, but React Router has many more features.

This afternoon, I'll be going through some of the features I've been able to explore. Here at the Dojo, we're not only here to learn, but to "learn how to learn". A big part of learning how to learn is by reading the documentation of tools we're using.

I encourage you to complete the [tutorial](https://reactrouter.com/en/v6.3.0/getting-started/tutorial) at React Router's website and then read the documentation, especially the [overview](https://reactrouter.com/en/v6.3.0/getting-started/overview) section.