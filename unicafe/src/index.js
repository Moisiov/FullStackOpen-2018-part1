import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = ({text}) => (
    <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistics = ({hyva, neutraali, huono}) => {
    let summa = hyva+neutraali+huono;
    let keskiarvo;
    let positiivisia;
    if(summa === 0) {
        keskiarvo = 0;
        positiivisia = 0;
    } else {
        keskiarvo = (hyva+huono*(-1))/(summa);
        keskiarvo = keskiarvo.toFixed(2);
        positiivisia = (hyva/summa)*100;
        positiivisia = positiivisia.toFixed(2);
    }
    if(summa > 0) {
        return (
            <table>
                <tbody>
                    <Statistic text={"Hyvä"} value={hyva} />
                    <Statistic text={"Neutraali"} value={neutraali} />
                    <Statistic text={"Huono"} value={huono} />
                    <Statistic text={"Keskiarvo"} value={keskiarvo} />
                    <Statistic text={"Positiivisia"} value={positiivisia+" %"} />
                </tbody>
            </table>
        );
    }
    return (
        <table>
            <tbody>
                <Statistic text={"Yhtään palautetta ei ole annettu"} />
            </tbody>
        </table>
    );
}

const Statistic = ({text, value=''}) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    palaute = (arvo) => {
        return () => {
            console.log('palaute');
            if (arvo === 1) {
                this.setState({ hyva: this.state.hyva+1});
            } else if (arvo === 2) {
                this.setState({ neutraali: this.state.neutraali+1});
            } else if (arvo === 3) {
                this.setState({ huono: this.state.huono+1});
            }
        }
    }

    render() {
        console.log('rendering');

        return (
            <div>
                <Otsikko text={"Anna palautetta"} />
                <Button handleClick={this.palaute(1)} text={"Hyvä"} />
                <Button handleClick={this.palaute(2)} text={"Neutraali"} />
                <Button handleClick={this.palaute(3)} text={"Huono"} />
                <Otsikko text={"Statistiikka"} />
                <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali}
                            huono={this.state.huono} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)