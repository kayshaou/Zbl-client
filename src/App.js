import StatusTracker from './components/StatusTracker';
import Header from './components/Header';
import Order from './components/Order';
import Bill from './components/Bill';
import './dist/output.css';


function App() {  
  return (<div>
     <Header />
     <Order />
     <StatusTracker />
     <Bill />
    </div>
  );
}

export default App;
