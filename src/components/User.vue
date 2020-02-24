<template>
    <div class="profile">

        <div v-if="profile" class="profile__container">
            <h2>{{ profile.Name }}</h2>
            <div class="profile__block">
                <div class="profile__block__profile-photo_small">
                    <imager :src="profile.Photo" :label="profile.Name" />
                </div>

                <div>
                    <p><b>Email:</b> {{ profile.Email }}</p>
                    <p><b>Номер телефона:</b> {{ profile.Phone }}</p>
                </div>
            </div>
        </div>

        <div v-else class="profile__error__container">
            <div class="profile__error">
                <p class='profile__error__message'>Данные по пользователю не найдены</p>
            </div>
        </div>

        <div class="profile__to-list">
             <button class="profile__error__button" @click="redirectToList">Вернуться к списку контактов</button>
        </div>
        
    </div>
</template>

<script>
    import Imager from './Imager.vue';

    export default {
        computed: {  
            profile() {
                return this.$store.getters.user(this.$route.params.id);
            }
        },

        components: {
            Imager
        },

        methods: {
            redirectToList() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .profile__block {
        display: flex;
    }

    .profile {
        margin: 10px 30px;
    }

    .profile__to-list button {
        color: #fff;
        background-color: darkcyan;
        border: 1px solid darkcyan;
        border-radius: 5px;
        margin: 15px 0;
        padding: 10px 15px;
    }

</style>