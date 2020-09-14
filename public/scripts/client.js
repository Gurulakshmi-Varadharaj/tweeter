/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//Helper function to append newTweets 
const createTweetElement = (newTweet) => {
  console.log('Create Tweet is running');
  const $tweet = `
  <header>
    <img
      src='${newTweet['user']['avatars']}'>
      '${newTweet['user']['name']}'</img>
      <span>'${newTweet['user']['handle']}'</span>
  </header>
  <main>
    '${newTweet['content']['text']}'
  </main>
  <footer>
    <p>10 days ago</p>
    <p>Like</p>
  </footer>
  `
  return $tweet;
}

//Helper function to render Tweets one-by-one
const renderTweets = (tweets) => {
  for (let tweet of tweets) {
    let newTweet = createTweetElement(tweet);
    $('.tweet').append(newTweet);
  }
};

$(document).ready(() => {
  console.log('everything loaded');
  renderTweets(data);
})