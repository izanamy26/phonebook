<template>
    <div class="list">
        <finder class="list__finder" placeholder="Поиск по ФИО" @find='findItem' />

        <div class="list__sorter">
            <sorter class="list__sorter__item" label='По ФИО' by='name' @sort='sortList' />
            <sorter class="list__sorter__item" label='По дате рождения' by='date' @sort='sortList' />
        </div>

        <p v-if="currentItems.length === 0">Данные не найдены</p>
        <div class="list__items" v-for="(item, index) in currentItems" :key="index">
            <list-item class="list__items__item" :item="item" />
        </div>

        <div class="list__paginator">
            <paginator :per-page='ItemsPerPage' :count="count" @change-page="changedPage" />
        </div>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue';
    import Paginator from './Paginator.vue';
    import Sorter from './Sorter.vue';
    import Finder from './Finder.vue'

    export default {

        data () {
            return {
                beginIndex: 0,
                endIndex: 6,
                ItemsPerPage: 6,
                finding: ''
            }
        },
        
        components: {
            ListItem,
            Paginator,
            Sorter,
            Finder
        },

        props: {
            list: Array
        },

        computed: {
            currentItems() {
                return this.filtredList.slice(this.beginIndex, this.endIndex);
            },

            count() {
                return this.filtredList.length;
            },

            filtredList() {
                return this.list.filter((item) => {
                    return item.Name.toLowerCase().indexOf(this.finding.toLowerCase()) !== -1;
                });
            }
        },

        methods: {
            changedPage(beginIndex, endIndex) {
                this.beginIndex = beginIndex;
                this.endIndex = endIndex;
            },

            sortList(by, type) {
                this.$store.commit('sortData', { by, type });
            },

            findItem(finding) {
                this.finding = finding;
            }
        }
    }
</script>

<style scoped>
    .list__finder {
        margin: 20px 0;
    }

    .list__sorter {
        display: flex;
    }

    .list__items__item {
        margin: 15px 0;
    }
</style>

