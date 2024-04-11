
import React, { useState } from 'react';
import covidData from './Sdata';
import './Statewise.css';

const Statewise = () => {
  const [data, setData] = useState(covidData);
  return (
    <>
      <div className="container-fluid mt-5">
      <h1 className='text-center  text-bg-dark'>Created By Suryabhan Kushwaha</h1>
        <div className="main-heading">
          <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA</span> Covid 19 Dashboard</h1>
        </div>
        <div className="table-responsive">
          <table className='table table-hover'>
            <thead className='thead-dark'>
              <tr id="i">
                <th>S.No</th>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Last Updated Time</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => (
                <tr key={ind}>
                  <td>{ind + 1}</td> {/* Increment index by 1 to get serial number */}
                  <td>{curElem.state}</td>
                  <td>{curElem.confirmed}</td>
                  <td>{curElem.recovered}</td>
                  <td>{curElem.deaths}</td>
                  <td>{curElem.active}</td>
                  <td>{curElem.lastupdatedtime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Statewise;
