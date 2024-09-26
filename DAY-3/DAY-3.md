## `How to know, our Render works fine?`  
To know if our render works fine, we can use the stament of Not rendered inside the root , because at a time only one visible, if not rendered then we can understand that we have problem with our render.

## `How to insatll react and reactDOM`
```javascript 
 // one Go multiple dependcies name we can Enter
 npm install react react-dom 
``` 

## `JSX` 
What is JSX?  

***JSX in not HTML inside Javascript, It is HTML like syntax***  It also helps to prevent cross site scripting attack, via sainatizing code and then use that code. 

`Cross site Scripting` Is the javascript injection attack.

But We have seen that  

HTML : `<h1>html</h1>` 

JSX  : `<h1> jsx </h1>`

what thing makes diffrent to each other? 
JSX is an object and Html like syntax, on other hand html is element or tag it not an object.  


### ***`Is JSx and createElement API is same Thing`*** 
No, it is not same thing, Ye but both used for same purpose.  

The reason is that in JavaScript, two objects are only equal if they reference the same object in memory, regardless of whether their content is the same 
createElement ->Js object -> Html element

JSX -> createElement -> Js object -> Html element  

## Whose Doing this transpiled or changing process? 

* **`Bable`**  is responsible for transpiled the JSX and other code into standard formate that JS engine understand.

* * If we have to use the attribute we need to use the camel case.
what is camel case? 
camel case is the writing standard in which the second attached word is Captital what it means?  

Example :   className (N is capital that's it). 

## **`Component`** 
component in react is function of javascript that return the jsx code.  
#### `Two Ways to create Components` 
*  * ***Class Component*** 
*  * ***Functional Component*** 

``` javascript 

   // Component Name starts with Capital letter
   1. const Component1 = ()=> <h1>Hello</h1> 
             OR 
   2.  const Component2  = ()=> { 
      return <h1> Hello </h1>
    } 
              OR 
   3. const Component3 = ()=> ( 
     <h1> Hello </h1>
    )

``` 

` Why not required return statment in 3 `  
***() this is the way to write the statement in multiple lines , but when comes to comiler compilation it consider it only one line and We know we dont need to return statement for one line.*** 

`What is Component Composition?` 

`=> Composing`(Put , Use) component inside another is called component composition. 

* * **Way of calling component** 
 * 1. `<Component1/>` 
 * 2. `<Component2> </Component2>` 
 * 3. `{ Component() }` 

 all are equal. 

 `=> {} These brackets enable the power to write "JS" code Inside the JSX or react ` 