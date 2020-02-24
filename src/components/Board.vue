<template>
    <div class="board">
        <list v-if="userList.length > 0" :list="userList"  />

        <div v-else class="board__error">
            <p>Отсутствуют контакты</p>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';

    export default {
        data() {
            return {}
        },

        computed: {
            userList() {
                return this.$store.getters.users;
            }
        },

        components: {
            List
        },

       
    }
</script>

<style scoped >
    .board {
        margin: 10px 30px; 
    }
</style>