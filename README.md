# Trade-Binder : A front-end personal project

## A virtual replication of a real-world MTG trading card collection that can be sent to friends in order to ease trading.

### Hosted Site - https://trade-binder.netlify.app/about

---

### What is Trade-Binder?

Magic: the Gathering (MTG) is a trading card game and is a big interest of mine. As you would expect from a trading card game, trading cards with friends is a pivotal part of MTG. This website allows users to replicate their own real-world trading card collections that can be sent to friends in order to facilitate and ease trading.

This website has the functionality to:

* Log in as a pre-determined user
* Search for cards to add to binder
* View and edit your binder
* View other users' binders

---

### Behind the Scenes

Cards are searched for and added using Scryfall API, an already established API, accessed through axios. The website sends a GET request to the API and stores the relevant information in state in the card search page.

This card can then be added to a pSQL database through an API I have created with express and node.js. This is done by interacting with the hosted API through a POST request and adding the card to a database of all added cards.

From here, you can then access the cards in your binder by going to the trade-binder page, where another GET request is made to the database, showing only cards from the user you are logged in as.

---

### Tailwind CSS

I created this project to focus on developing my CSS skills, in particular using a CSS framework for the first time - I chose Tailwind due to the rising popularity of this library. Tailwind and React were used to create all of the elements you can see on the website, including organising the grid of cards and users.

I created my own button component, which was then adapted slightly throughout the site to create a stylised theme. The colour pallete is minimal and simple to continue this theme.

Overall, I found working with Tailwind intuitive, I am therefore looking to use this library further. My next step in this project will be to use Javascript and Tailwind to add animations to my site.

--- 

### React Hooks

This site utilises React hooks: useState and useEffect that allows it to create and store variables. These variables can then be updated over time, and React will update our UI and the rendered html, whenever that state value is updated.

UseState is used to track the variables that are just available on the current page, such as the cards in the binder and the users to log in as. UseState is also used to operate the search function, with the reset button setting state back to null.

UseEffect is used to hold the current user logged it, as it is used across multiple pages of the website. This information determines which binder you are adding cards to, which binder you see on my page and which friends are shown (as to not show the current user).

---

### How to Interact with this Site

Log into the site by selecting one of the users available, as some features cannot be carried out as a guest. Then, try searching for a card, the search function lets you search for any existing MTG card and add it to your binder. Try searching for one of the cards on the right and adding it.

Once cards have been added to your binder, you can increase and decrease the quantity of these in your binder page. If you decrease a card with quantity of 1, it will remove it from your binder.

You can also access other users' binders, here you can view all the cards they currently have for trade and there it a button to request to trade - this currently has no functionality, but in the future it will allow you to contact your friend.

---

### Any critique and feedback would be greatly appreciated as this is an ongoing project!
