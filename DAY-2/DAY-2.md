## What's New Here  
The new features in this release include: Webopack  

See In DAY-2 , What is Parcel.cache  and dist? 
and How you get that? 

These are the outcomes of the webpacK name is parcel. 
Steps : 
```javascript  
// step 1 : install parcel
npm install parcel   

// step 2 : execute the parcel 
npx parcel index.html 

// step 3 : we get the 2 folder 
  1-> .parcel-cache  2-> dist 
```

### *What is Webpack* 
Webpack is a popular JavaScript module bundler and build tool that helps you manage and optimize your code for 
deployment. It's a crucial tool for any modern web development project. 


### **Webpack Benefits** 
* * Optimization 
* * Code Splitting
* * Tree Shaking
* * Hot Module Replacement (HMR)   
* * Caching 

***HMR :*** It means As you save the document, you see the changes automatically. 

Example : In DOm you performed some task it automatically reflects. 

### **Webpack Configuration**
Webpack configuration is done through a configuration file, usually named `webpack.config.js`. This file exports a   


## Diff Between the NPX and NPM? 
NPM stands for packkage managers that manage the packages, and NPX is the Way to execute the installed packages that we did via NPM. 

NPX: node package executer  

NPM: only package manager  ( not Node) 

## How you can Optimise the Application? 
We can optimise our via browserlist, we can mention the last specific version so, our app competible with that and reduce the package size. 

## ^ adn ~ diffrence in version
^ means minor changes happens automatically , whenever updates comes. 

~ means major changes happens automatically, whenever updates comes. 

^(carret) is recommended because minor changes not affect, but major updates of version can leads to interuption of whole project.