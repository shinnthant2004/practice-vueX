<template>
    <div>
    <select v-model="limit" class="form-control" @change="limitTodo(limit)">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
    </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        methods:mapActions(['limitTodo']),
        data() {
            return {
                limit: null
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>