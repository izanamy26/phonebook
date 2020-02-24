<template>
    <div class="sorter">
        <span class="sorter__item" :class="'sorter_' + type" @click='clickHandler'>{{ label }}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: 'asc'
            };
        },

        props: {
            label: String,
            by: String
        },

        methods: {
            clickHandler() {
                this.type = this.type === 'asc' ? 'desc' : 'asc';
                this.$emit('sort', this.by, this.type);
                
            }
        }
    };
</script>

<style scoped>
    .sorter {
        position: relative;
    }

    .sorter__item {
        padding: 10px 16px;
    }

    .sorter_desc::before,
    .sorter_desc::after {
        content: '';
        position: absolute;
        border: 6px solid transparent;
        left: -2px;
        top: -1px;
        border-bottom-color: #333;
    }

    .sorter_desc::after {
        border: 7px solid transparent;
        /* border-bottom-color: #6666ff; */
        top: 2px;
        left: 6px;
    }

    .sorter_asc::before,
    .sorter_asc::after {
        content: '';
        position: absolute;
        border: 6px solid transparent;
        left: -2px;
        top: 6px;
        border-top-color: #333;
    }

    .sorter_asc::after {
        border: 6px solid transparent;
        /* border-top-color: #6666ff; */
        left: 6px;
        top: 6px;
    }


</style>
