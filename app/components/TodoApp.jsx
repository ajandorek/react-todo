var React = require('react');
var TodoList = require('TodoList');
var TodoForm = require('TodoForm');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },{
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Save the commonwealth'
                }, {
                    id: 4,
                    text: 'Learn React'
                }
            ]
        };
    },
    handleAddTodo: function(text){
        alert('new todo: ' + text)
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var { todos } = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} />
                <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;