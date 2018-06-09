import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      {props.osat.map((osa, i) => <Osa osa={osa} key={i} />)}
    </div>
  )
}

const Yhteensa = (props) => {
  return (
    <div>
      <p>yhteensä {props.summa} tehtävää</p>
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    </div>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }


  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa summa={kurssi.osat[0].tehtavia+kurssi.osat[1].tehtavia+kurssi.osat[2].tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)