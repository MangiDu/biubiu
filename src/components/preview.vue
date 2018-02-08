<template>
    <div>
        <div ref="container" class="previewContent" v-drop-bag>
            <component v-for="(component, index) in list" :key="index" :is="component.name"
                :style="{'box-shadow': activeIndex === index ? '0 0 2px red' : ''}" @click="onClick"></component>
            <div style="background-color: #eee; min-height: 30px;" v-drop-bag></div>
            <div style="background-color: red; min-height: 30px;" v-drop-bag></div>
            <div style="background-color: green; min-height: 30px;" v-drop-bag></div>
        </div>
        <div class="panel">
            <button @click="addOne">add</button>
            <button @click="show">show</button>
            <div>
                {{ editingOne && editingOne.uid }}
            </div>
            <input v-if="editingOne" type="text" v-model="editingOne.text">
        </div>
    </div>
</template>

<script>
import Button from '@/components/module/button'
import { mapGetters } from 'vuex'
import moduleMixin from '@/mixins/module'
export default {
    components: {
        Button
    },
    mixins: [moduleMixin],
    data() {
        return {
            list: [],
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
                console.log(content)
            })
        },
        onClick(index) {
            this.activeIndex = index
        }
    },
    mounted() {
        this.bindDrop()
    }
}
</script>
