#### Notes

- UI Kit :

* Home
* Inputs , ShowList > ListItem > Increment, Decrement, Remove
*

- Which Component needs to be reusable:

- Functionalities : Routing,Context

- MockUp :

![Alt Text](https://media.giphy.com/media/m3aR6S8FVG9Uwp23eB/giphy.gif)
![Alt Text](https://media.giphy.com/media/3Oi4H9UAaJqR5GYFCR/giphy.gif)

- #### Instructions :

- login and get your personal API Key.
- Replace the existing key with your personal one.

//#########

-steps from 10/08:
-card functionality,button redirect to cart, cart site

// API problem : if key stored inside variable => get error 401
// const apiKey = "67d766cac1e94d4d85ac33708f9ffb83 "; //? if inserted in API error 401

// problem :

- passing "allProducts" via Context not working,so via props

I can't
but display the allProducts below : no redirect for List, inside List build the render for List; input needed is an array of obj, code it Hadi style.

-List : Card of bootstrap ?

render: div container-card div , div decre,div product info,div increment , div delete-btn

// problem : retrieve only the first 2 photos

- next :
- onClick increment pass the product.id up to the function addItem/ increment count state default 0 / handleincrement/ refactor with reducer ?Do I need it ?
