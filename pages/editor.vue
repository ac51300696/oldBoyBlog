<template>
    <section class="editro_container">
        <raw-editor></raw-editor>
        <render-editor></render-editor>
    </section>
</template>
<script>
import axios from '~plugins/axios'
import rawEditor from '../components/rawEditor'
import renderEditor from '../components/renderEditor'
export default {
    name: 'id',
    head() {
        return {
            title: `编辑`
        }
    },
    components: {
        rawEditor,
        renderEditor
    }
}
</script>
<style scoped>
.editro_container{
    min-height: 500px;
}
</style>
