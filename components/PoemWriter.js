const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleValue = this.handleValue.bind(this)
    this.valid = this.valid.bind(this)
  }

  handleValue(event){
    // event.persist()
    this.setState({
      value: event.target.value
    })
  }

  valid(){
    var wordsOfRowOne
    var wordsOfRowTwo
    var wordsOfRowThree

    var rows = this.state.value.split("\n")

    rows.length == 3 ? wordsOfRowOne = rows[0].trim().split(" ").length : null
    rows.length == 3 ? wordsOfRowTwo = rows[1].trim().split(" ").length :  null
    rows.length == 3 ? wordsOfRowThree = rows[2].trim().split(" ").length :  null

    if (rows.length === 3 && wordsOfRowOne === 5 && wordsOfRowTwo === 3 && wordsOfRowThree === 5){
      return true
    }
    else {
      return false
    }
  }

  render() {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.value} onChange={this.handleValue}/>
          {!this.valid() ? <div id="poem-validation-error" style={{color: 'red'}} > This poem is not written in the right structure!
      </div>: null}

        </div>
      )
    }
}

module.exports = PoemWriter;
