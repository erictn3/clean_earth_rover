import React from 'react';
import Toggle from './components/toggle/toggle';
import LineChart from './components/Chart/Chart';
import './App.css';
import {allData, vessels} from './data/data';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState({
    labels: allData.TEMP.map((data)=> data.name),
    datasets: [{
      label: 'Vessel 1',
      data: allData.TEMP.map(row => row["Vessel 1"]),     
      borderColor: "#ff0000",
      showLine: false
    },
    {
      label: 'Vessel 2',
      data: allData.TEMP.map(row => row["Vessel 2"]),     
      borderColor: "#00ff00"
    },
    {
      label: 'Vessel 3',
      data: allData.TEMP.map(row => row["Vessel 3"]),     
      borderColor: "#0000ff"
    }]
  });

  const [checked, setCheck] = useState([true, true, true]);

  const onChange = (event, num) => {
    console.log("onChange", event.target.value, num);
    const data = [...checked];
    data[num] = !data[num];
    setCheck(data);
  }

  return (

    <div className="App">      
      <Toggle label="Vessel1" checked={checked[0]} onChange={(event) => onChange(event, 0)}></Toggle>
      <Toggle label="Vessel2" checked={checked[1]} onChange={(event) => onChange(event, 1)}></Toggle>
      <Toggle label="Vessel3" checked={checked[2]} onChange={(event) => onChange(event, 2)}></Toggle>
  
      <LineChart chartData={{
                labels: allData.TEMP.map((data)=> data.name),
                datasets: [{
                  label: vessels[0].name,
                  data: allData.TEMP.map(row => row["Vessel 1"]),     
                  borderColor: vessels[0].color,
                  showLine: checked[0]
                },
                {
                  label: vessels[1].name,
                  data: allData.TEMP.map(row => row["Vessel 2"]),     
                  borderColor: vessels[1].color,
                  showLine: checked[1]
                },
                {
                  label: vessels[2].name,
                  data: allData.TEMP.map(row => row["Vessel 3"]),     
                  borderColor: vessels[2].color,
                  showLine: checked[2]
                }]
              }}/>
    </div>

  );
}

export default App;
