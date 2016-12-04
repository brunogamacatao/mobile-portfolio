## Website Performance Optimization portfolio project

The task here was to optimize a mobile web app in order to make it load faster,
reduce download speed and data traffic. Another issue that the project had 
originally, was the slow screen scroll speed and changing pizza size function.

## Running the app

In order to run the app, you'll have to clone this repository or download and 
extract its zip file on a directory. After that, in a terminal and inside the 
project's directory, you'll have to type:

* npm install
* grunt
* python -m SimpleHTTPServer 8080

You'll be able to open the running app on any web browser, via the URL: 

`http://localhost:8080`

## Optmimizations performed

* index.html
  * The css files were merged and minified (via a Grunt task), at line 14;
  * The loading of the stylesheets were deferred and performed via script: the css references were put inside a `noscript` tag (line 11), and they were loaded via script (line 73);
  * The image sizes were explicitly written (to speed up page rendering) - lines 20, 32, 38, 44 and 50;
  * The pizzeria.jpg image was changed to a resized version of it (pizzeria_thumb.jpg), line 50;
* main.js 
  * Lots of arrays and dictionaries were created on the top of the script to store everything that could be precalculated, like the sliding pizzas elements (line 21), the phases values (line 24), the random pizzas elements (line 27), the pizza sizes texts (line 31), and the percentual pizza size (line 39);
  * The resizePizzas function (line 428) was changed to avoid requering the DOM elements and the new width calculation was moved to outside the loop, to improve the computational complexity;
  * The updatePositions function was changed to use the sliding pizzas array and the phases precalculated values, instead of quering them and calculating them on each iteration.