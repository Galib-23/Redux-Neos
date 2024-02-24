import Todos from "./components/Todos"

function App() {

  return (
    <>
      <div>
        <h1>React-Redux Neos</h1>
        <Todos />
      </div>
    </>
  )
}

export default App;

/*
  ::::fetching by Redux:::

  step 1: install packages
  step 2: constants define
  step 3: async action creator (axios)
  step 4: create reducer
  step 5: create store
  step 6: provide store
  step 7: use store by useSelector()
*/