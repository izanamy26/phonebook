<template>
    <ul v-show="count > perPage" class="paginator">
        <li v-show="activePage > 1" @click="getIndexes(activePage - 1)"><button class="paginator__button paginator__button__prev">&laquo;</button></li>
        <li v-for="(page, index) in pages" :key="index">
            <span class="paginator__dots" v-if="page === '...'">{{ page }}</span>
            <button class="paginator__button paginator__button__page" :class="{ active: activePage == page }" v-if="page !== '...'" @click="getIndexes(page)">{{ page }}</button>
        </li>
        <li v-show="activePage < pagesCount" @click="getIndexes(activePage + 1)"><button class="paginator__button paginator__button__next">&raquo;</button></li>
    </ul>

</template>

<script>
    export default {

        data() {
            return {
                activePage: 1,
            };
        },

        computed: {
            pagesCount() {
                return Math.ceil(this.count/this.perPage);
            },

            pages() {
                let pages = [1, this.pagesCount];
                const prev = this.activePage - 1;
                const next = this.activePage + 1;

                if (!pages.includes(this.activePage)) {
                    pages.push(this.activePage);
                }
                
                if (!pages.includes(prev) && this.activePage > 1) {
                    pages.push(prev);
                }

                if (!pages.includes(next) && this.activePage < this.pagesCount) {
                    pages.push(next);
                }

                pages.sort();

                for (var i = 0; i <= pages.length - 1; i++) {
                    if ((pages[i] !== '...' || pages[i + 1] !== '...') && pages[i + 1] - pages[i] > 1) {
                        pages.splice(i + 1, 0, '...');
                    }
                }

                return pages;
            }
        },
        
        watch: {
            count() {
                this.activePage = 1;
                this.$emit('change-page', 0, this.perPage);
            }
        },

        props: {
           perPage: Number,
           count: Number,
        },

        mounted() {
            this.getIndexes(this.activePage);
        },
        
        methods: {
            getIndexes(pageNumber) {
                const beginIndex = (pageNumber - 1) * this.perPage;
                const endIndex = (pageNumber === this.pagesCount) ? this.count : pageNumber * this.perPage;
                this.activePage = pageNumber;

                this.$emit('change-page', beginIndex, endIndex);
            }
        }
    
        
    }
</script>

<style scoped>
    .paginator li {
        list-style-type: none;
        float: left;
    }

    .paginator__button {
        color: #fff;
        background-color: darkcyan;
        border: 1px solid darkcyan;
        border-radius: 5px;
        margin: 5px 15px;
    }

    .paginator__button.active {
        color: darkcyan;
        background-color: #fff;
    }

    .paginator__dots {
        color: darkcyan;
        font-weight: bold;
        
    }
</style>

