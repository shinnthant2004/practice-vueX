import axios from "axios"
export default {
    state:{
        todos:[]
    },
    getters:{
        Todos(state){
          return state.todos
        }
    },
    mutations:{
        SetTodos(state,todos){
            state.todos=todos
        },
        AddTodo(state,todo){
            state.todos.unshift(todo)
        },
        DeleteTodo(state,removeId){
            state.todos=state.todos.filter(t=>{
                return t.id!=removeId
            })
        },
        ChangeTodo(state,todo){
           state.todos.foreach(td=>{
             if(td.id===todo.id){
               td=todo
             }
           })
        }
    },
    actions:{
     async getTodos({commit}){
         let res=await axios.get('https://jsonplaceholder.typicode.com/todos');
         let todos=res.data;
         commit('SetTodos',todos)
      },
      async addTodo({commit},todo){
        let res=await axios.post('https://jsonplaceholder.typicode.com/todos',todo);
        commit('AddTodo',res.data)
      },
      async deleteTodo({commit},removeId){
        let res=await axios.delete(`https://jsonplaceholder.typicode.com/todos/${removeId}`);
        commit('DeleteTodo',removeId)
      },
      async limitTodo({commit},limit){
        let res=await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}`);
        commit('SetTodos',res.data)
      },
      async updateTodo({commit},todo){
        let res=await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`,todo);
        commit('ChangeTodo',res.data)
      }
    }
}