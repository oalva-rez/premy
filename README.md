# WEBD 164 JavaScript Fundamentals for Web Development - Final Project || Premy
<p>This project was intended to apply the concepts of JavaScript and jQuery learned throughout the spring WEBD 164 semester. Premy is a Premiere League(English Soccer League) Guessing game utilizing jQuery for DOM tree manipulation and animations. Premy uses the fetch API for the player data used in the game mechanics along with the auto complete search field.</p>
<h2>How to Play</h2>
<ol><li>The game chooses a player at random, giving no hints or clues as to who it is (The CPU choice is usually a more well-known player).</li>
  <li>The user has 7 attempts at guessing who the random player is</li>
<li>The user makes their first guess which is then displayed with the chosen players name, team, nationality, position, height, and age.</li>
<li>If the users first player guess has any attributes matching those of the random player, the respective tile will turn green. Alternatively, if the player guessed age or height is too high, an arrow pointing down will show on the relative tile. </li> 
</ol>
<h3><a href="https://oalva-rez.github.io/premy/">Play Now!</a></h3>
<h2>Learning Outcomes</h2>
<p>This project allowed me to understand the creative possibilities that API's can provide. Learning about asynchronous code, I deep dived into how the JavaScript runtime works with concepts such as the event loop, stack, and heap. This allowed me to really visualize the workings behind asynchronous code. I learned about the downfalls of writing with callbacks and how promises work. I decided to use the async/await syntax along with the fetch API in order to practice a cleaner way to work with API's.
<h3>Challenges</h3>
  <p>I wanted to implement an auto complete search field which was the most difficult task of the project. I found a snippet of code intended to create an auto fill feature however, of course, out of the box it did not work as expected. The code was outdated and contained deprecated methods. It also only matched the first letters of the user input to the intended player name. This was a problem because usually users will search via player last names. I refactored it to match at any point of the desired player name.</p>
  <h2>Whats Next?</h2>
  <ul>
  <li>Create a backend to not have API key hardcoded in client-side.</li>
  <li>Create a daily challange, with a highscore system of how many attempts it took and the time elapsed till a correct guess was made.</li>
  <li>Expand to different leagues such as La Liga (spain), MLS (USA), Bundesliga (Germany).</li>
  </ul>
  
 <i>API courtesy of <a href="https://www.api-football.com/">API-FOOTBALL</a></i>

