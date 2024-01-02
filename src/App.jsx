import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    const getData = async () =>{
    try {
      const {data} = await axios.get(process.env.REACT_APP_API_URL)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }
    getData()
  }, [])
  
  return (
    <div className="App">
      <h1>Mondo Moneta</h1>
      <div className="card-container">
      {(data != null)
      ?<>{data.map((dato, index) =>
        <div className="card" key={index}>
        <h4>{dato.name}</h4>
        <p>Date: {dato.date}</p>
        <p>Value: {dato.value}</p>
      </div>
      )}</>
      : <> <h1>Loading ...</h1> </>}
    </div>
    </div>
  );
}

export default App;
