import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Sobre from "./components/Sobre"
import Tccia from "./components/Tccia"
import Tccprof from "./components/Tccprof"


const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sobre />
      <Tccia />
      <Tccprof />
    </div>
  )
}

export default page
