import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Sobre from "./components/Sobre"
import Tccia from "./components/Tccia"


const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sobre />
      {/* <Tccia /> */}
    </div>
  )
}

export default page
