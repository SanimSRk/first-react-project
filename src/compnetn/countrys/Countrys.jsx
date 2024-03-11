import { useState } from 'react';

const Countrys = ({ country, handilVisitedCountry }) => {
  const { name, flags, region, cca3 } = country;
  const [vesited, setVisited] = useState(false);
  const handilClicked = () => {
    setVisited(!vesited);
  };
  console.log(country);
  return (
    <div className={`box ${vesited && 'visited'}`}>
      <img src={flags.png} alt="" />
      <h2>Name:{name?.common} </h2>
      <h2>region:{region} </h2>
      <h2>code:{cca3} </h2>
      <button
        onClick={() => {
          handilVisitedCountry(country);
        }}
      >
        Mark
      </button>

      <button onClick={handilClicked}>visited</button>
      {vesited && 'visited for youe'}
    </div>
  );
};

export default Countrys;
