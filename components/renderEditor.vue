<template>
    <div id="render-editor" v-html='this.$store.state.renderHtml'>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                renderHtml: this.$store.state.renderHtml
            }
        }
    }
</script>
<style>
    #render-editor {
        float:right;
        width:50%;
        height:400px;
        overflow: scroll;
        border: 1px solid black;
    }
</style>