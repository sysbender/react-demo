export function ChildComponent(props) {
  return (
    <div>
      <label>
        child:
        <button onClick={props.greetHandler}>click</button>
        <input type="text" name="childtext" />
      </label>
    </div>
  );
}
