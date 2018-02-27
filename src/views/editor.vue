<template>
    <div class="container clearfix">
        <navbar></navbar>
        <button v-draggable="{onStart: onDragStart}">按钮</button>
        <div v-droppable="{onEnter: onDragEnter, onLeave: onDragLeave, onDrop: onDrop}" style="padding: 10px; border: 1px dotted red; height: 100px;"></div>

        <template v-if="tree">
            <m-node-item :root="tree"></m-node-item>
        </template>

        <button @click="addChild">add</button>
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar'
import ModuleList from '@/components/moduleList'
import Preview from '@/components/preview'
import { mapGetters } from 'vuex'
// import eventBus from '@/eventBus'
import mNodeItem from '@/components/module/mNodeItem'

import NodeModel from '@/model/node'

let n = 0

export default {
    name: 'Editor',
    components: {
        Navbar,
        ModuleList,
        Preview,
        mNodeItem
    },
    data() {
        return {
            tree: null
        }
    },
    computed: {
        ...mapGetters(['drake'])
    },
    mounted() {
        this.tree = new NodeModel('ul', {})
        this.tree.addChild(new NodeModel('div', {
            isDroppable: true,
            domProps: {
                innerHTML: 'test'
            }
        }))
    },
    methods: {
        onDragStart(e) {
            console.log('on drag start')
        },
        onDragEnter(e) {
            e.target.style.backgroundColor = '#ccc'
        },
        onDragLeave(e) {
            e.target.style.backgroundColor = ''
        },
        onDrop(e) {
            e.target.style.backgroundColor = ''
        },
        addChild() {
            this.tree.addChild(new NodeModel('li', {
                isDraggable: true,
                domProps: {
                    innerHTML: `${n++} li`
                }
            }))
        }
    }
}
</script>
