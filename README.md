👋 Welcome here.

### Description:

A basic shopping list of movies, done with react.

### Instructions:

Login and get your free API-Key here : https://www.omdbapi.com/ .

Inside App.js, replace fetch's url with your API key : `https://www.omdbapi.com/?apikey=YOURAPIKEY&s=${entry}`

🚀 Run the app & search for a movie.

### Preview :

![Alt Text](https://media.giphy.com/media/jFCtsjeryRg0cv8jTp/giphy.gif)

### Website Live Show :

### UI kit:

- Home
- Create
- List
- Form
- Card

### Built with :

Routing,Context

### Learned :

- in the response from the api-fetch, I didn't get the price of the movies; so I had to add it manually ↓↓↓

Inside App.js :

```js
const getRandomPrice = (item) => {
item.price = (Math.random() \* 10).toFixed(2);
return item;
};
```

Inside List.js :

store the map-logic inside a variable and then pass it through the render process.

```js
const result = search.map((movie, index) => {
  return (
    <>
      <Card key={index} movie={movie} removeUpdate={removeUpdate} />
    </>
  );
});

return <div className="wrapper-list">{result}</div>;
```

//#########################

-toDo steps prio :

- all invalid cases : 'too many results' bei up, input-field empty click search : add a modal

-output : prompt(data.Error) ;

- gh-care : check front-mentor readme, add code snippets

`const var= 1`

// problems:

- -next : finish style comp Card
