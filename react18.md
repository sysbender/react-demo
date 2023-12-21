
npx  create-react-app react-demo
 

## folder structure
* publc\
  * index.html  - element for app root
* scr\
  * index.js
    * root component - App
    * dom element which will be controlled by react
  * component - js, css, test
    * App.js
    * App.css
    * App.test.js
  * misc
    * test - setupTests.js
    * perf - reportWebVitals.js


## component 
accept input properties and return html which describe the UI

* function
* outer tag   
* export default  

```javascript
function APP(){
  return (
    <div className="App">
     
    </div>
  );
export default App;
}
```

