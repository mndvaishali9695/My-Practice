//how to create a component
//function component
//first Letter should be  capital of a component
import "./app.css"
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Bio from "./components/Bio";
function App(){
// JSX=>Javascript xml
  return(
    <div>
      {/* /* <img src= "https://buffer.com/library/free-images/"/>
     <h1>hello this is my first component</h1> */ }
      <Navigation/>
      <Main/>
      <Bio/>
    </div>
   
  )
}

export  default App;