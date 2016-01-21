var React = require('react');

var NumberField = React.createClass({
  getInitialState: function(){
    return {value: ""};
  },
  handleChange: function(e){
    this.setState({value: e.target.value});
  },
  render: function(){
    return (
      <div className="form-group">
        <input type="number" className="form-control" placeholder="Enter a number" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = NumberField;