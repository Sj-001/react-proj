import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Conditional Rendering</h1>
      {
        (()=>{
          if(false){
            return <h1>The element is rendered</h1>
          }
          else{
            return <h1>hihi</h1>
          }
        })()
      }
    </div>
  );
}

export default App;
