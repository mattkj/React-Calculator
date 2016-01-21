var React = require('react');
var NumberField = require('./NumberField.jsx');
var TotalField = require('./TotalField.jsx');

var Calculator = React.createClass({
  clearAll: function(){
    this.refs.num1.setState({value: ""});
    this.refs.num2.setState({value: ""});
    this.refs.total.setState({value: ""});
  },
  operation: function(e){
    var newTotal;
    var operator = e.target.value;
    var num1Value = parseInt(this.refs.num1.state.value);
    var num2Value = parseInt(this.refs.num2.state.value);

    switch (operator){
      case "+":
        newTotal = num1Value + num2Value;
        break;
      case "-":
        newTotal = num1Value - num2Value;
        break;
      case "/":
        newTotal = num1Value / num2Value;
        break;
      case "*":
        newTotal = num1Value * num2Value;
        break;
    }

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
          <div className="col-sm-2">
            <button className="btn btn-danger btn-block" onClick={this.clearAll}>Clear</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <button className="btn btn-primary btn-block" onClick={this.operation} value="+">+ Add</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary btn-block" onClick={this.operation} value="-">- Subtract</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary btn-block" onClick={this.operation} value="/"> Divide</button>
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary btn-block" onClick={this.operation} value="*">* Multiply</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Calculator;