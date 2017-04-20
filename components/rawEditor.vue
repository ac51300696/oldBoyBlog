<template>
    <div id="raw-editor">
        <textarea :value="rawHtml" @input="renderHtml" class="form-control">
        </textarea>
    </div>
</template>
<script>
import {markdown} from 'markdown';
export default {
    data() {
        return {
            rawHtml: this.$store.state.rawHtml
        }
    },
    methods: {
        renderHtml(e) {
            const _renderHtml = markdown.toHTML(e.target.value);
            window.console.log('eee' + _renderHtml)
            this.$store.commit('MARKDOWN_SUCCESS', {old: e.target.value,new:_renderHtml} )
        }
    }
}
</script>
<style>
#raw-editor {
    float: left;
    width: 45%;
    height: 100%;
}

textarea {
    width: 100%;
    height: 400px;
    border-radius: 0;
}
</style>
