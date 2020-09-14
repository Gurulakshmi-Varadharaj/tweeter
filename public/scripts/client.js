/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//Helper function to append newTweets 
const createTweetElement = (newTweet) => {
  const $tweet = `
  <article class = 'tweet'>
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
    <p>'${newTweet['created_at']}'</p>
    <p>Like</p>
  </footer>
  </article>
  `
  return $tweet;
}

//Helper function to render Tweets one-by-one
const renderTweets = (tweets) => {
  for (let tweet of tweets) {
    let newTweet = createTweetElement(tweet);
    $('.addTweet').append(newTweet);
  }
};

//Ajax and JQuery
$(document).ready(function () {
  //Helper function for ajax GET request to fetch tweets data from /tweets/
  const loadTweets = (data) => {
    $.ajax('http://localhost:8080/tweets', { method: 'GET', data: data })
      .then((getJsonInput) => {
        renderTweets(getJsonInput);
      });
  };
  loadTweets();
  //Submission of form using JQuery events
  $('#submitTweet').on('submit', function (evt) {
    //To stop the default behaviour of form element
    evt.preventDefault();
    //Handling validation errors for user input data
    if ($('#tweet-text').val() === '') {
      return $('.errorMsg').text('Please fill text to create new tweet');
    } else if ($('.counter').val() <= 0) {
      return $('.errorMsg').text('Too long. Please respect arbitary limit for 140 chars');
    }
    const userInput = $('#tweet-text').val();
    $('#tweet-text').text(userInput);
    //Serialize form data to get query stirng
    let userText = $(this).serialize();
    //ajax POST request for appending New Tweets
    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: userText,
      success: function (data) {
        loadTweets(data);
        $('#tweet-text').val("");
        $('.counter').val('140');
        return $('.errorMsg').text("");
      },
    });
  });
});