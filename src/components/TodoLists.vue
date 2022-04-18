<template>
    <div>
    <h1>VueX ToDoLists</h1>
    <div class="container">
      <div class="row">
          <TodoAdd></TodoAdd>
      </div>
      <div class="row">
          <LimitTodos></LimitTodos>
      </div>
      <div class="row">
          <div class="col-md-4 my-4" v-for="Todo in Todos" :key="Todo.id">
              <b-card :bg-variant="changeBackground(Todo)" text-variant="white" class="text-center ">
                   <b-card-text class="d-flex justify-content-between" @dblclick="toggleTodo(Todo)">
                       <span>{{ Todo.title }}</span>
                       <b-icon @click="deleteTodo(Todo.id)" icon="trash-fill" variant="danger"></b-icon>
                   </b-card-text>
              </b-card>
          </div>
      </div>
    </div>
      

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TodoAdd from './TodoAdd.vue'
import LimitTodos from './LimitTodos.vue';
    export default {
    computed: mapGetters(["Todos"]),
    methods: {
        ...mapActions(["getTodos","deleteTodo","updateTodo"]),
        changeBackground(todo){
         return todo.completed ? 'success' : 'primary'
        },
        toggleTodo(todo){
            todo.completed=!todo.completed;
            this.updateTodo(todo)
        }
    },
    mounted() {
        this.getTodos();
    },
    components: { TodoAdd, LimitTodos }
}
</script>

<style lang="scss" scoped>

</style>