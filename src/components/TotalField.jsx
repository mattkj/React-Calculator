var React = require('react');

var TotalField = React.createClass({
  getInitialState: function(){
    return {value: ""};
  },
  render: function(){
    return (
      <div className="form-group">
        <input className="form-control" placeholder="Total" type="text" value={this.state.value} readOnly />
      </div>
    );
  }
});

module.exports = TotalField;