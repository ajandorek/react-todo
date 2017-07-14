var React = require('react');

var TodoForm = React.createClass({
    handleSubmit: function (e) {
        var todo = this.refs.todo.value;
        e.preventDefault();
        if (todo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAddTodo(todo);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form ref='form' onSubmit={this.handleSubmit}>
                    <input type='text' ref='todo' placeholder='What do you need to do?' />
                    <button className='button expanded'>Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = TodoForm; 