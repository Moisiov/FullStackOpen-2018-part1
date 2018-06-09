import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: [0, 0, 0, 0, 0, 0],
      most: 0
    }
  }

  selectNew = () => {
      return () => {
          console.log('selectNew')
          let number;
          do {
            number = Math.floor((Math.random() * this.props.anecdotes.length));
          } while (number === this.state.selected)
          
          return (
              this.setState({ selected: number })
          );
      }
  }

  vote = () => {
    return () => {
        console.log('vote')
        const pointsCopy = this.state.points;
        pointsCopy[this.state.selected] += 1;
        if(pointsCopy[this.state.selected] > pointsCopy[this.state.most]) {
            return (
                this.setState({ points: pointsCopy }),
                this.setState({ most: this.state.selected })
            );
        }
        return (
            this.setState({ points: pointsCopy})
        );
    }
  }

  render() {
      console.log('render')

    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <br />
        Has {this.state.points[this.state.selected]} votes.
        <br />
        <button onClick={this.vote()}>{'Vote'}</button>
        <button onClick={this.selectNew()}>{'Next anecdote'}</button>
        <h2>{'Anecdote with most votes'}</h2>
        <br />
        {this.props.anecdotes[this.state.most]}
        <br />
        Has {this.state.points[this.state.most]} votes.

      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)