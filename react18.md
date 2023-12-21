
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
* outer tag  - wrap with outer tag, since only one element should return 
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
### component property

specify attribute 

`<Greet name="John">`

### props.children

props is immutable
## JSX

jsx : 
* 
1. react element  
2. object
3. DOM




### vs js
Class - className
for - htmlFor
camelCase property name
onclick - onClick
tabindex - tabIndex

## state

useState Hook
useEffect
useTransition
 

### hook
 
## event
compare to event handler in js
in js, in react
lowercase onclick, camelcase onClick
string,            function

### pass parameter to eventHandler

## parent and child component communication



