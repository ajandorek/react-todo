var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {TodoForm} = require('TodoForm');

describe('TodoForm', () => {
    it('should exist', () => {
        expect(TodoForm).toExist();
    });

    it('should dispatch todoForm with valid todo text', () => {
        var todoText = 'Check mail';
        var action = {
            type: 'ADD_TODO',
            text: todoText
        }
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch todoForm when invalid input', () => {
        var todoText = '';
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<TodoForm dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todo.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(todoText);
    });
});