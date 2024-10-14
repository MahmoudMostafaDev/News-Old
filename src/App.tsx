import LargeBtn from "./components/ui/LargeBtn"


function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <LargeBtn text="Test" onClick={() => console.log("test")} />
    </>
  )
}

export default App
