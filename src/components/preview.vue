<template>
    <div>
        <div ref="container" class="previewContent" v-drop-bag v-resize="'bottom'">
            <component v-for="(component, index) in list" :key="index" :is="component.name"></component>
        </div>
        <div class="panel">
            <button @click="addOne">add</button>
            <button @click="show">show</button>
            <div>
                uid: {{ editingOne && editingOne.uid }}
            </div>
            <ul v-if="editingOne && editingOne.options">
                <li v-for="(option, key) in editingOne.options" :key="key">
                    <span>{{ option.label }}: </span>
                    <input v-if="option.use === 'input'" type="text" v-model="option.value">
                    <span v-else>{{ option.value }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moduleMixin from '@/mixins/module'
import eventBus from '@/eventBus'
import FileSaver from 'file-saver'
import generateHtmlStr from '@/common/generateHtmlStr'
export default {
    name: 'Preview',
    mixins: [moduleMixin],
    data() {
        return {
            activeIndex: -1
        }
    },
    computed: {
        ...mapGetters(['editingOne'])
    },
    methods: {
        addOne() {
            this.list.push({
                name: 'Button'
            })
        },
        show() {
            this.activeIndex = -1
            this.$nextTick(() => {
                let content = this.$refs.container.innerHTML
                content = generateHtmlStr(content)
                console.log(content)
                let file = new File([content], 'test.html', {type: 'text/plain;charset=utf-8'})
                FileSaver.saveAs(file)
            })
        },
        onClick(index) {
            this.activeIndex = index
        }
    },
    mounted() {
        eventBus.$on('setEditingOne', (vm) => {
            console.log(vm)
            this.$store.dispatch('setEditingOne', vm)
        })
    }
}
</script>
