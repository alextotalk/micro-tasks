import './App.css';
import Filter from "./component/Filter/Filter";

function App() {
    // let students = [
    //     {id: useId(), name: "Alex", age: 23},
    //     {id: useId(), name: "Max", age: 25},
    //     {id: useId(), name: "Bob", age: 20},
    //     {id: useId(), name: "Mark", age: 33},
    // ]
    // let Foo1 = (subscriber: string) => {
    //     alert(`Hi!!! ${subscriber}!!!`)
    // }
    // let Foo2 = (subscriber: string,age:number) => {
    //     alert(`Hi!!! ${subscriber}!!! I am ${age} years old.`)
    // }
    // let Foo3 = () => {
    //     alert(`Hi!!!`)
    // }
    return (
        <div className="App">
            <Filter/>
            {/*<Header title="Header"/>*/}
            {/*<Body title="List" students={students}/>*/}
            {/*<Button name={"Greeting"} callBack={() => Foo1("alex")}/>*/}
            {/*<Button name={"Greeting1"} callBack={() => Foo2("max",22)}/>*/}
            {/*<Button name={"Greeting2"} callBack={() => Foo3()}/>*/}
        </div>
    );
}

export default App;
