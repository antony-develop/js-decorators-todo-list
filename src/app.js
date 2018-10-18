import { template as lodashTemplate } from 'lodash';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <div class="row">
                <div class="col-lg-1 mt-3">
                    <h1>Todo list</h1>
                    <input type="text" class="form-control" placeholder="Add todo">                        
                    <hr>
                    <ul class="list-group">
                        <% todos.forEach(todo => { %>
                            <li class="list-group-item" style="text-decoration: <%= todo.done ? 'line-through' : 'none' %>">
                                <%= todo.text %> <i class="fa fa-close text-danger delete float-right"></i>
                            </li>
                        <% });%>
                    </ul>
                </div>
            </div>
        </div>
    `
})
class todoListComponent {
    constructor(params) {
        this.todos = [];
        this.todos.push({ text: 'Buy milk'});
        this.todos.push({ text: 'Do laundry'});
    }
}