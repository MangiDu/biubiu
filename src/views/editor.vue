<template>
    <div class="container clearfix">
        <navbar></navbar>
        <module-list class="pull-left" ref="moduleList"></module-list>
        <preview class="preview" ref="preview"></preview>
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar'
import ModuleList from '@/components/moduleList'
import Preview from '@/components/preview'
import { mapGetters } from 'vuex'
import eventBus from '@/eventBus'

export default {
    name: 'Editor',
    components: {
        Navbar,
        ModuleList,
        Preview
    },
    computed: {
        ...mapGetters(['drake'])
    },
    mounted() {
        const moduleListEl = this.$refs.moduleList.$el
        const previewEl = this.$refs.preview.$el

        this.$store.dispatch('initDragulaInstance', {
            containers: [moduleListEl, previewEl],
            copy: true,
            moves(el, source, handle, sibling) {
                // 在模块列表中且是用handle拖动的
                return moduleListEl.contains(el) && handle.classList.contains('handle')
            },
            accepts(el, target, cource, sibling) {
                return previewEl.contains(target)
            }
        }).then(() => {
            // this.drake.on('drag', (el, source) => {
            //     console.log(el)
            //     console.log(source)
            // })
            this.drake.on('drop', (el, target, source, sibling) => {
                console.log(target)
                // if (target) {
                //     target.removeChild(el)
                // }
                // const moduleKey = el.getAttribute('data-module-key')
                // // console.log(moduleKey)
                // // this.
                // eventBus.$emit('drop:finished', {
                //     moduleKey,
                //     target,
                //     sibling
                // })
            })
        })
    }
}
</script>
