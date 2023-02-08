import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Location from './components/Location'
import NumberPages from './components/NumberPages'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import { getRandomNumber } from './utils/handleRandom.js'



function App() {

  const RESIDENT_PERPAGER = 12

  const [universe, setUniverse] = useState()
  const [location, setLocation] = useState("")
  const [page, setPage] = useState(1)

  const handleSubmit = e => {
    e.preventDefault()
    setLocation(e.target.locationId.value)
  }

  useEffect(() => {
    setPage(1)
    const dimension = location === "" ? getRandomNumber(126) : location
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then(res => setUniverse(res.data))
      .catch(err => console.log(err))
  }, [location])

  return (
    <div className="App">
      <div className="app__nav"><img src="/image-1.png" alt="" /></div>
      <div className="app__content">
        <h1 className='app__title'>Rick and Morty  DIMENSIONS</h1>
        <ResidentForm handleSubmit={handleSubmit} />
        <Location universe={universe} />
        <NumberPages setPage={setPage} universe={universe} RESIDENT_PERPAGER={RESIDENT_PERPAGER} />
        <Pagination page={page} RESIDENT_PERPAGER={RESIDENT_PERPAGER} universe={universe} />
        <NumberPages setPage={setPage} universe={universe} RESIDENT_PERPAGER={RESIDENT_PERPAGER} />
      </div>
    </div>
  )
}

export default App
