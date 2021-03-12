
import { Provider } from 'react-redux';
import store from '../config/redux/store';
import Routes from '../config/Routes';
import './App.css';

function App() {
  console.log(Routes);

  return ( 
    <Provider store={store} >
      <Routes />
    </Provider>
    
  );
}

export default App;
