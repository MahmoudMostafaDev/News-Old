import Button from "./components/ui/Button"
import Card from "./components/ui/Card/Card"
import CategoryItem from "./components/ui/CategoryItem"
import Header from "./components/ui/Header/Header"
import Input from "./components/ui/Input"
import LargeBtn from "./components/ui/LargeBtn"


function App() {


  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <LargeBtn text="Test" onClick={() => console.log("test")} />
      <Button text="Test" onClick={() => console.log("test")} />
      <CategoryItem text="Test" onClick={() => console.log("test")} isSelected />

      <Input label="Test" onChangeOutter={(e) => console.log("test")} value="test" />
      <Card headline="test" desc="test" img={""} onView={() => console.log("test")} onSave={() => console.log("test")} />
    </>
  )
}

export default App
