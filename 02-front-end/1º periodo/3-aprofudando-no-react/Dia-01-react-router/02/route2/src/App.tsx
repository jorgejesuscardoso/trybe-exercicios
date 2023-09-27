import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/wallpapers" element={ <Wallpapers />}/>
    </Routes>
  )
}

export default App
