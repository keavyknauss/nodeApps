import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Todo } from '../resources/data/todo-object'

@inject(Router, Todo)

export class Todos {
    constructor(router, todos) {
        this.router = router;
        this.todos = todos;
        this.message = 'Todos';
        this.showTodoEditForm = false;
    }


    async activate() {
        await this.getTodos();
    }

    attached() {
        feather.replace()
    }

    async getTodos() {
        await this.todos.getTodos();
    }

    newTodo() {
        this.todo = {
            high: "",
            medium: "",
            active: true,
            role: "todo",
            low: "",
            
        }

        this.openEditForm();
    }

    openEditForm() {
        this.showTodoEditForm = true;
        setTimeout(() => { $("#firstName").focus(); }, 500);
    }


    changeActive(todo) {
        this.todo = todo;
        this.save();
    }

    editTodo(todo) {
        this.todo = todo;
        this.showTodoEditForm = true;
    }

    

    async save() {
        if (this.todo && this.todo.firstName && this.todo.lastName
            && this.todo.email && this.todo.password) {
            await this.todos.saveTodo(this.todo);
            await this.getTodos();
            this.back();
        }
    }


    async delete() {
        if (this.todo) {
            await this.todos.delete(this.todo);
            await this.getTodos();
            this.back();
        }
    }


    back() {
        this.showTodoEditForm = false;
    }


    logout() {
        this.router.navigate('home');
    }
}