# MyReads Project

With this bookshelf App, you can select and categorize books you have read, are currently reading or want to read. This app was built using React and uses an API server and client library.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Install and Launch the App

1. First, go ahead and `fork` this repo and then `clone` it to your computer.
2. Then, `cd` into the directory and `npm install` and then `npm start` to run the App in your web browser.

  ```
  git clone https://github.com/TechSnazzy/reactnd-project-myreads-starter
  cd reactnd-project-myreads-starter
  npm install
  npm start
  ```

## Use the App

When the page loads, your view will contain 3 book shelves.
* Currently Reading
* Want to Read
* Read

You can click the green control button to select which shelf you would like to move the book to.

If you click the `+` button in the lower-right, you will be taken to the `Search Page` where you can search for more books via a text input. When you are done, you can click the arrow which is linked back to the `Main Page`.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Backend Server

The provided file `BooksAPI.js` contains the following methods that are needed to perform necessary operations on the backend:

### Method: [getAll()](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/commands/getAll)

  ```
  getAll()
  ```

  * Returns a Promise which resolves to a JSON object containing a collection of book objects.
  * This collection represents the books currently in the bookshelves in your app.

### Method: [update()](https://developer.mozilla.org/en-US/docs/Web/API/MediaKeySession/update)

  ```
  update(book, shelf)
  ```

  * book: <Object> containing at minimum an id attribute
  * shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
  * Returns a Promise which resolves to a JSON object containing the response data of the POST request

### Method: [search()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)

  ```
  search(query)
  ```

  * query: <String>
  * Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
  * These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Resources
* I followed Maeva's Study Jam walkthrough. I learned more with this walkthrough than any other resource so far: [Study Jam 21/07 - FEND P7 - My Reads](https://www.youtube.com/watch?v=i6L2jLHV9j8)
* I chat with other Udacity students on a daily basis over at the Udacity Facebook group: [Udacity Front-End Web Developer Nanodegree Support](https://www.facebook.com/groups/402181286907166)
* I also use the Getting Started and Main Concepts area on ReactJS.org to learn React: [React documentation and related resources](https://reactjs.org/docs/getting-started.html)
* Also, Tyler McGinnis' tutorial is pretty awesome: [React Tutorial: A Comprehensive Guide to learning React.js in 2018](https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/)
* This is the original README that was included with the Starter Code for this project: [MyReads Project](https://github.com/TechSnazzy/reactnd-project-myreads-starter/blob/master/README-original.md)
