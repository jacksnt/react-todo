var React = require('react');
var TodoList = require('TodoList');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return{
      todos:[
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Meet up with friends'
        }, {
          id: 4,
          text: 'Eat lunch'
        }
      ]
    };
  },
  render: function(){
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = ToDoApp;
