import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) =>state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Total = { counter }</h2>
      <div className="card">
        <button onClick={() =>dispatch(increment())}>
          Increment
        </button>
        <button onClick={() =>dispatch(incrementByAmount({a:1}))}>
          Increment by 10
        </button>
      </div>
    </>
  )
}

export default App
