import './App.css';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { withdraw,deposite } from './rtk/slices/bank_slice';
import Products from './components/products';
function App() {
  const state= useSelector(state=>state.bank);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>bank account balance : {state}</h1>
        <button onClick={()=> dispatch(withdraw(100))}>withdraw</button>
        <button onClick={()=> dispatch(deposite(100))}>deposite</button>
        <Products></Products>
      </header>
    </div>
  );
}
export default App;
 