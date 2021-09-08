<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo: function() {
            this.$emit('removeAll');
            // localStorage.clear();
        }
    }

}
</script>

<style scoped>
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: #FFFFFF;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBtn {
        color: #ec8080;
        display: block;
    }

</style>