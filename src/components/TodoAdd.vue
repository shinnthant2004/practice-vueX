<template>
    <div>
       <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="todo.title">
        <div class="input-group-append">
        <button class="btn btn-primary" @click="addTodo(todo)">Add Todo</button>
      </div>
</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        methods:mapActions(['addTodo']),
        data() {
            return {
                todo:{
                    title:""
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>