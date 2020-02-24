<template>
    <div class="finder">
        <input class="finder__item finder__item__text" type="text" :placeholder="placeholder" v-model='value'>
        <button class="finder__item finder__item__button" @click="findData">Найти</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },

        props: {
            placeholder: String
        },

        methods: {
            findData() {
                this.$emit('find', this.value);
            }
        }
    }
</script>

<style scoped>

    .finder__item {
        padding: 10px 20px;
        border: 1px solid darkcyan;
        border-radius: 5px;
    }

    .finder__item__button {
        color: #fff;
        background-color: darkcyan;
    }

</style>