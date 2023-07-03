import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';




const onSearch = ({value, allCountries, countries, setCountries}) => {
  console.log(value);
  setCountries([]);
  let c = []
  allCountries.forEach(country => {
    if (country.name.common.toLowerCase().includes(value.toLowerCase())) {
      console.log(country.name.common);
      c.push(country);
    }
  });
  setCountries(c);
  console.log(c);
};

const Results = ({countries, setCountries, value, setValue}) => {
  const handleShowCountry = (country) => {
    setValue(country);
    setCountries(countries.filter(c => c.name.common === country));
  }

  if (countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div> 
    )
  } else if (countries.length === 1) {
    let country = countries[0];
    return (
      <Country country={country}/>
    )
  } else {
    return (
      countries.map(country => {
        return (
          <div key={country.name.common}>
            {country.name.common} <button onClick={() => {handleShowCountry(country.name.common)}}>show</button>
          </div>
        )
      })
    )
  }
}

const Country = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map(language => {
          return (
            <li key={language}>{language}</li>
          )
        }
        )}
      </ul>
      <img src={country.flags.png} alt="flag" width="100" height="100"></img>
    </div>
  )
}


function App() {

  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => {
        // console.log(response.data);
        setAllCountries(response.data);
      })
  }, [])


  const handleChange = (event) => {
    setValue(event.target.value);
    onSearch({value: event.target.value, allCountries: allCountries, countries: countries, setCountries: setCountries});
  }


  return (
    <>
      <form>
        Finding: <input value={value} onChange={handleChange} />
      </form>
      <Results countries={countries} setCountries={setCountries} value={value} setValue={setValue}/>
    </>
  );
}

export default App;
