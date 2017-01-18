# GSS (Gulp-SASS Starter)
Simple starter project featuring Gulp tasks and SASS (SCSS), CSS, JS and HTML minification and concatenation

## Features
* Automatically **watch** for saved changes in **scss**, and generate minified and concatenated CSS
* Concatenate, minify and version CSS files
* Concatenate, minify and version JS files
* Generate CSS from SCSS
* Insert minified and concatinated CSS and JS and minify HTML
* Finally, generate minified HTML, CSS and JS files **ready for production**

### Goodies
* Sass Mixin for Generating Color Palettes using https://github.com/jordiesaenz/palette-town
* Sass Mixin for colors from http://flatuicolors.com
* **More to come!**

## Installation
Clone repository and run **npm install** inside project folder

## How to use
GSS (Gulp-SASS Starter) has several convenience Gulp tasks for faster development.
You can run them separately or all-in, depending on your need or preference.
First, you need to put all the SASS (SCSS) files inside **sass** folder, JavaScript inside the **js** folder, HTML in root.
Do whatever you want with your SCSS, JS and HTML.
Run the following tasks to get the desired results:

#### Watch for changes in SCSS
```
    gulp watch
```
This will look up for any saved changes for any files with **.scss** extension in *scss* folder, and automatically generate a CSS file named **app.css** inside *css* folder

#### Manually convert SCSS to CSS
```
    gulp styles
```
Convert all **.scss** files inside *scss* folder into usable CSS inside *css* folder

#### Concatenate, minify and version CSS
```
    gulp css
```
Running this task will put all code from CSS files inside the *css* folder into one file named **app.css** and add versioning to it

#### Concatenate, minify and version JS
```
    gulp js
```
This task will put all code from JS files inside the *js* folder into one file named **app.js** and add versioning to it

#### Insert minified and concatinated CSS and JS and minify HTML
```
    gulp html
```

#### Ready for production?
Simply run
```
    gulp default
```
and voilà. You are ready to go live!
This task runs the **css** and **js** tasks in parallel and the **html** task after they have finished, and minifies HTML, CSS and JS

Each taks will log any error encountered and inform you in the console.

#### Configuration
For fine grained source and destination paths, edit **src** and **dest** variables inside **gulpfile.js**


### TODO
* Add more usefull mixins, and maybe include Bootstrap v4 as a possibiilty
* Add hot loading because pressing F5 all the time is so boring
* Add confniguration feature that will enable sequentual order of minimized and concatinated CSS files. Currently, CSS files are concatinated in alphabetical order, which may be problematic due to overriding styles


### Changelog

#### v0.2
* Added **colors.scss** mixin
* Added **_palettetown.scss** mixin

####v0.1
* Added **watch** task
* Added **js** task
* Added **css** task
* Added **html** task
* Added **styles** task
* Added **default** task


### PRs welcomed!


### Licence
MIT