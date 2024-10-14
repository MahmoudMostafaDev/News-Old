import Button from "./components/ui/Button"
import CategoryItem from "./components/ui/CategoryItem"
import LargeBtn from "./components/ui/LargeBtn"


function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <LargeBtn text="Test" onClick={() => console.log("test")} />
      <Button text="Test" onClick={() => console.log("test")} />
      <CategoryItem text="Test" onClick={() => console.log("test")} isSelected />
    </>
  )
}

export default App
