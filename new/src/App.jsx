
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffee from './components/Coffee';

function App() {

  const coffees = useLoaderData();


  return (
    <div className='text-center text-4xl mt-5'>
      <h1 className='font-extrabold'>This is Coffee Store</h1>
      <h2>Total coffee {coffees.length}</h2>

      <div className='grid md: grid-cols-2 m-10 '  >
        {
          coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee}></Coffee>)
        }
      </div>

    </div>
  )
}

export default App
