Created a React app from scratch.

Process and Packages used

**Step 1 - Setup npm in the repo** 
* Create a new folder with name of the project
* Run **npm init -y**

**Step 2 - Install react and react-dom** 
* npm install react react-dom

**Step 3 - Setup babel parser to parse ES7 code to previous gen code**
* npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
* create a .babelrc and add @babel/preset-env @babel/preset-react to the presets

**Step 4 - Setup Webpack to be able to import modules from external libs**
* npm install webpack webpack-cli webpack-dev-server
* configure entry, output, mode and resolve ( Use Node's Path package for absolutes path )
* Define rule to resolve Jsx components with babel-loader

**Step 5 - Configure Webpack to support html, css, scss**
* npm install html-webpack-plugin css-loader sass-loader file-loader
* Configure module rules for html, css, scss and files ( images particularly ).

