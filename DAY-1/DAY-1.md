# Learning  
* React.createElement() returns Javascript Object 
* ReactDom.createRoot() returns the root of the application. 
* render method is a way to convert Javascript object to html tag.  
* If we Put anything in root(div) in main.js is replaced by the render(content).  
* Order of file Matters.

## What is createElement 
React element is the function that basically help us to create the html tag(not actually), but JS object. 
So, is it return the tag?  No its not 

* It returns the javascript objects 
So why we have seen that as a Tag?  
```javascript   
// Syntax
React.createElement(name of the tag , {atribute}, children) 
```

## Root 
React uses a virtual DOM to optimise rendering and this required only one root , so how we create the root in our app 
```javascript  
// Syntax
  ReactDom.createRoot(One element)
```

## render
*  This is an method that help to convert the javscript tag into the html tag 
this is the basic property of  the react.  
```javascript 
// syntax 
root.render(fileName or element)
```

## All in One

```javascript 
// createElement Api 
const element = React.createElement('div' , {id : first} , "This is the way to create the html tag");

// createRoot 
const root = ReactDom.createRoot(document.getElementById("root"));  

root.render(element);

``` 


## How to make nested element? and Multiple childs
Simple put element inplace of content. Or pass the createElement inplace of Content of the Tag and for multiple child pass Array of React.createElement
 * what it means ?  
 createElement Like Above We did.   
 Example
```javascript
 const element = React.createElement('div' , {id : first} , React.createElement("h1" , {} , "Hello")); 
 
 ```

## Experiments That I did  
* if You put the App.js file before the react installation(CDNs) then you can not see anything in your app releted to react, and get Error 
"React is not defined".


#### Why replaced , not Appended   
React expects to fully manage the elements it renders. 

Inserting without replacing could lead to mismatches between the virtual DOM and real DOM, which would cause UI inconsistencies and unexpected behavior.

## Why react is Library? 
Because react can work for small portion of our web page, it is independent the portion you make root react is applicapble to them only other code not affected.  
It can work in existing app also. It has not need to develope whole app in itself , like other frameworks.
