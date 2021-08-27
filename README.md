👋 Welcome here.

### Description:

A basic shopping list of movies, done with react.

### Instructions:

Login and get your free API-Key here : https://www.omdbapi.com/ .

Inside App.js, replace "YOURAPIKEY" with your personal one : `https://www.omdbapi.com/?apikey=YOURAPIKEY&s=${entry}`

🚀 Run the app & search for a movie.

### Preview :

![Alt Text](https://media.giphy.com/media/dzFV2mmnZdncMrI1kU/giphy.gif)

### Website Live Show :

[shopping-list](https://normenme.github.io/shopping-list/)

### Learned :

- in the response from the api-fetch, I didn't get the price of the movies; so I had to add it manually ↓↓↓

// App.js :

```js
const getRandomPrice = (item) => {
item.price = (Math.random() \* 10).toFixed(2);
return item;
};
```

- store the map-logic inside a variable and then pass it through the render process.

// List.js :

```js
const result = search.map((movie) => {
  return (
    <>
      <Card movie={movie} removeUpdate={removeUpdate} />
    </>
  );
});

return <div className="wrapper-list">{result}</div>;
```
