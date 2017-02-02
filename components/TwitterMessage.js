const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      chars: props.maxChars
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
      chars: this.state.chars - event.target.value.split("").length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange = {this.handleChange}/>
        <h2>{this.state.chars}</h2>
      </div>
    );
  }
}

module.exports = TwitterMessage;
