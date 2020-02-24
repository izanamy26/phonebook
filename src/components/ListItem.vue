<template>
    <div class="list-item">
        <div class="list-item__thumb">
            <img :src="item.Photo" alt="">
        </div>
        <div class="list-item__name">
            <b>{{ item.Name }}</b>
        </div>
        <div class="list-item__birthdate">
            {{ item.BirthDate | filterDate}}
        </div>
        
       
        <router-link class="list-item__profile-button" :to="`/user/${item.id}`">
            <span>Подробнее</span>
        </router-link>
        
    </div>    
</template>

<script>
    export default {
        data() {
            return {}
        },

        props: {
            item: Object
        },

        filters: {
            filterDate(date) {
                return date.split('T')[0]
                    .split('-')
                    .reverse()
                    .join('.');
            }
        }


    }
</script>

<style scoped>
    .list-item {
        display: flex;
        justify-content: space-between;
        align-content: center;
        font-size: 14px;
    }

    .list-item__thumb {
        width: 40px;
        height: 40px;
    }

    .list-item__thumb img{
        min-width: 100%;
        min-height: 100%;
        max-width: 100%;
        max-height: 100%;
        background: url("../assets/unknown.jpg") 100% 100% no-repeat;
        background-size: cover;
        object-fit: cover;
    }

    .list-item__profile-button {
        border: 1px solid darkcyan;
        border-radius: 5px;
        background-color: #fff;
        padding: 10px;
        cursor: pointer;
        text-decoration: none;
        color: darkcyan;
    }

    .list-item__profile-button:hover {
        background-color: darkcyan;
        transition: 0.5ms;
        color: #fff;
    }
</style>