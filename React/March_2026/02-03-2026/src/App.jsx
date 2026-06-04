import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function App() {

//useSelector reads the data from store
  const count = useSelector((state) => state.counter.value);

  //useDispatch sends action to reducer
  const dispatch = useDispatch();

  return(
    <div>
      {/*UI showing current value*/}
      <h1>{count}</h1>

      {/*Whwn clicked dispatch sends actions*/}
      <button onClick={() => dispatch(increment())}>
        Increase
      </button>
      <button onClick={() => dispatch(decrement())}>
        Decrease
        </button>
    </div>
  );
}
export default App;