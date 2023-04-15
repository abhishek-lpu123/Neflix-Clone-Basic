import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sdata from './Sdata';
import Cards from './Cards';

ReactDOM.render(
  <>
  <h1 className='heading_style'>The Top 6 Most Popular TV Shows on Netflix Right Now</h1>
  {Sdata.map((val) => {
    return (
      <Cards
        imgsrc = {val.imgscr}
        title = {val.title}
        sname = {val.sname}
        link = {val.links}
      />
    );
  })}
  </>,document.getElementById("root")
);