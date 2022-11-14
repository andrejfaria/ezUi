
import reactLogo from './assets/react.svg'
import './App.css'
import { useAppDispacth, useAppSelector } from './app/hooks'
import { increment, amountAdded } from './features/Counter/counterSlice'
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';
import { useState } from 'react';

function App() {

  const [numDogs, setNumDogs] = useState(10)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs)

  // const count = useAppSelector((state) => state.counter.count)
  // const dispatch = useAppDispacth()

  // function handleClick() {
  //   dispatch(amountAdded(3))
  // }

  return (
    <>
      <div>
        <p>Dogs to fetch</p>
        <select
          value={numDogs}
          onChange={(e) => setNumDogs(Number(e.target.value))}
        >
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
        </select>
      </div>

      <div>
        <p>
          Number of dogs fetched: {data.length}
        </p>
        <table>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Picture
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>
                  {breed.name}
                </td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={handleClick} >
    //       count is : {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>

  )
}

export default App
