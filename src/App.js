import './App.css';
import './Respon.css'
import { Childhood } from './Component/Childhood.js';
import { Home } from './Component/Home.js';
import { Info } from './Component/Info.js';
import { Life } from './Component/Life.js';
import { National } from './Component/National.js';
import { Playing } from './Component/Playing.js';
import { Success } from './Component/Success.js';
import { Header2 } from './Component/Header2.js';
import { Personal2 } from './Component/Personal2.js';


function App() {
 
  return (
    <div className="App">
       <Header2/>
       <Home/>
       <Personal2/>
       <Childhood/>
       <Playing/>
       <Success/>
       <National/>
       <Life/>
       <Info/>

    </div>
  );
}

export default App;
