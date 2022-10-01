# star-wars-d3

npm run build
npm run watch 
npm run start


served on http://localhost:8080/








## Dependencies

| Component     | Use                              | Documentation |
| ------------- | -------------------------------- | ------------------------------------------------ |
| Webpack v5.0  | Building and bundling the assets | [https://webpack.js.org/guides/](Webpack Guides) | 
| Lodash 4.17   | Used as a replacement for jQuery | [https://lodash.com/](Lodash home page)



## Webpack

Webpack configured 
* Bundle html, js, css, images into the distribution folder
* Automatically cleans the distribution folder betweeen builds
* Includes a watcher to aid development by auto building when files change
* Includes a rudimentary development server

Not covered
* Code splitting (on demand loads etc)



##  ToDo

Had to take out     devtool: 'inline-source-map',
because the output budle was 1.3 Mb. Wtf ?