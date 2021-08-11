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

- unfortunately no free api , so fake database with a local json file : 'database.json'

//#########################

- fake api problem :fake json , fetch from there

http://www.omdbapi.com/?i=tt3896198&apikey=b88fec9

`https://www.omdbapi.com/?apikey=b88fec9&s=${search}`

-steps :  
input : arr of obj + input
output:
how retrieve database data :
iterate through databaase
if database.id === setProduct
setListcard [ key]

-card functionality,button redirect to cart, cart site

// problem :

- passing "allProducts" via Context not working,so via props

render: div container-card div , div decre,div product info,div increment , div delete-btn

// problem : retrieve only the first 2 photos

- next :
- refactor with reducer ?Do I need it ?
- delete : array allProducts is in the parent / delete fu happen in List, passed down to Card as props
- deleteProducts when fired update the array of obj allProducts, need to be rerendered ( delete function inside useEffect ? )

- Bonus: addding price :map return {...item,price:Math.random}

-next : finish style comp Card

- create wrapper create /
- inside Card, display flex-wrap
- add a button : Basket with logo

then Move on to basket :
<>search ranoom number 2 decimal
