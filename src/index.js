import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
import "./index.css";
import Sdata from './Sdata'

const root = ReactDOM.createRoot(document.getElementById('root'));
function ncard (val){
  return(
    console.log(val),
    <Card {...val} />
  )
}
root.render(
  <>
    <h1 className='heading_style'>
      List of Top 5 Netflix web Series
    </h1>

    <div className="card-container">
     { Sdata.map(ncard)}
    </div>

  </>
);
/*ReactDOM.render(
  <>
  <h1 className="heading_style"> List of top 5 Netflix Series in 2023 </h1>

   {Sdata.map((val)=>{
 return (
  <Card
 imgsrc= {val.imgsrc}
 title={val.title}
 sname={val.sname}
 links={val.links}
 />
);
   })}

   </>

,
document.getElementById('root')

);*/

