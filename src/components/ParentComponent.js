import { ChildComponent } from "./ChildComponent";
export function ParentComponent() {
  function parentGreet(name) {
    alert(`hello ${name} - from parent!`);
  }
  return (
    <div>
      <label>
        parent:
        <button>click</button>
        <input type="text" name="parenttext" />
      </label>
      <ChildComponent
        greetHandler={() => {
          parentGreet("child");
        }}
      />
    </div>
  );
}
