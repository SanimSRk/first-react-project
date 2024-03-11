import { useEffect } from 'react';
import { useState } from 'react';
import Countrys from '../countrys/Countrys';

const Country = () => {
  const [country, setCountry] = useState([]);
  const [mark, setMark] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountry(data));
  }, []);
  const handilVisitedCountry = country => {
    const visitedss = [...mark, country];
    setMark(visitedss);
  };

  return (
    <div>
      <h2>Country:{country.length} </h2>
      <div className="box">
        <h2>visited contry:{mark.length}</h2>

        {mark.map(count => (
          <div className="box" key={mark}>
            <img src={count.flags.png} alt="" /> <br /> {count.name.common}
          </div>
        ))}
      </div>
      <div className="box2">
        {country.map(country => (
          <Countrys
            key={country.car.cca2}
            handilVisitedCountry={handilVisitedCountry}
            country={country}
          ></Countrys>
        ))}
      </div>
    </div>
  );
};

export default Country;
