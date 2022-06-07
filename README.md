# Wikipedia Search App

A simple app to searching Wikipedia (using their public API)

## Tech Stack used
* Creat Ract App
* TailwindCSS (for styling)
* axios (for api request)

## Setup

You can checkout the live [demo](https://dani-wikipedia-search.netlify.app/)
or you can clone this repo localy, install dependencies  

```shell
  npm install
```
then you can spin a local server by running:

```shell
  npm start
```

## Notes

The search API request is optimised by using debounce on 300ms

## Posible Improvments

* Cache the search results
* add a `load more` button to load more results for the same search phrase
* add view state for the case when user searches for a phrase less then 3 characters (since the app supports only phrases longer than 2 chars)
