var React = require('react');
var NumberField = require('./NumberField.jsx');
var TotalField = require('./TotalField.jsx');

var Calculator = React.createClass({
  clearAll: function(){
    this.refs.num1.setState({value: ""});
    this.refs.num2.setState({value: ""});
    this.refs.total.setState({value: ""});
  },
  add: function(){
    var newTotal = (parseInt(this.refs.num1.state.value) + parseInt(this.refs.num2.state.value));
    this.refs.total.setState({value: newTotal});
  },
  subtract: function(){
    var newTotal = (parseInt(this.refs.num1.state.value) - parseInt(this.refs.num2.state.value));
    this.refs.total.setState({value: newTotal});
  },
  divide: function(){
    var newTotal = (parseInt(this.refs.num1.state.value) / parseInt(this.refs.num2.state.value));
    this.refs.total.setState({value: newTotal});
  },
  multiply: function(){
    var newTotal = (parseInt(this.refs.num1.state.value) * parseInt(this.refs.num2.state.value));
    this.refs.total.setState({value: newTotal});
  },
  render: function(){
    return (
      <div className="calculator col-sm-10 col-md-6 col-sm-offset-1 col-md-offset-3" ref="calculator">
        <div className="row">
          <div className="col-sm-6">
            <NumberField ref="num1" />
          </div>
          <div className="col-sm-6">
            <NumberField ref="num2" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10">
            <TotalField ref="total" />
          </div>
          <div className="col-sm-2"><button className="btn btn-danger btn-block" onClick={this.clearAll}>Clear</button></div>
        </div>
        <div className="row">
          <div className="col-sm-3"><button className="btn btn-primary btn-block" onClick={this.add}>+ Add</button></div>
          <div className="col-sm-3"><button className="btn btn-primary btn-block" onClick={this.subtract}>- Subtract</button></div>
          <div className="col-sm-3"><button className="btn btn-primary btn-block" onClick={this.divide}>\ Divide</button></div>
          <div className="col-sm-3"><button className="btn btn-primary btn-block" onClick={this.multiply}>* Multiply</button></div>
        </div>
      </div>
    );
  }
});

module.exports = Calculator;