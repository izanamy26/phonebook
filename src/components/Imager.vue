<template>

    <div class="imager">
        <div class="imager__img_small" @click="showFull = true">
            <img :src="src" alt="">
        </div>
        
        <transition name="image">
            <div v-show="showFull" class="imager__img_full__container">
                <div class="imager__img_full">
                    <span class="imager__img_full__close" @click="showFull=false">X</span>
                    <img :src="src" alt="">
                    <p class="imager__img_full__label">{{ label }}</p>
                </div>
            </div>
        </transition>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                showFull: false
            };
        },

        props: {
            src: {
                type: String,
                required: true
            },
            label: String
        }
        
    }
</script>

<style scoped>
    .imager__img_small {
        width: 80px;
        height: 80px;
        margin: 0 20px 15px 0;
    }

    .imager__img_full {
        margin: auto auto;
        padding: 50px 30px;
        width: 70%;
        height: 70%;
        top: 50px;
        position: relative;
        background-color: #fff;
    }

    .imager__img_small img,
    .imager__img_full img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background: url("../assets/unknown.jpg") 100% 100% no-repeat;
        background-size: cover;
        object-fit: cover;
    }

    .imager__img_full__label {
       margin: 15px;
       text-align: center;
    }
    
    .imager__img_full__close {
         position: absolute;
        top: 0px;
        right: 0px;
        margin: 10px;
        cursor: pointer;
    }

    .imager__img_full__container {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0 , 0, 0.5);
    }
</style>