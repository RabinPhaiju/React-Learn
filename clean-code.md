# React Clean Code
1. Dont use useState unless you really need.
    - If we are using useState to store input fields and those fields are only used when we submit the form. 
    - In this case, we ca use useRef to refference to that input tag and catch its value.

2. use function version of useState->set
    - eg: setCount(prev=>prev+1)
    - In react, if we use multiple useCount, React will batch them all and apply the state.
    
3. State dont update immediately
    - it works async.

4. Dont use object as useEffect dependency.
    - every time the page re-renders, the object is not as same as the last object before update.
    - Insead use useMemo to memorize the values of that object , so that, new object is only created if one of the dependency change occur.

5. Dont use useState in unmounted component.
    - If comp_A is fetching data from server and the component is unmounted but the server request changes the component.
    - Use new AbortController()'s signal to abort those request from the component in useEffect.