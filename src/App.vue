<template>
    <div class="phonebook">
        <h1>Телефонный справочник</h1>
         <router-view></router-view>
       
    </div>
</template>

<script>
    export default {
        name: 'app',
        
        created() {
            this.$store.dispatch('getUsersList');
        }
    }
</script>

<style>
    * {
        font-family:sans-serif;
    }
</style>