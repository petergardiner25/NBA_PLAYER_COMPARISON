This React app uses the https://www.balldontlie.io/ open source API to gather data on NBA players from the current/most recent season. 

Within APP.js there is useEffect() hook that calls two different API endpoints to get player information and stats everytime the player ID state is updated. These hooks use arrays to store multiple objects. 

The players state object is then passed as props to the Player components where they are compared and handled. 

There is a search component that handles any input into a search bar, and calls the API to find the desired players. 
The search results are passed into a results list. 
Callbacks are passed from the APP.js down to the children in order to lift state when a new player is selected from the search. 


