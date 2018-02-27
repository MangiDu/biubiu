<template>
    <div class="container clearfix">
        <navbar></navbar>
        <button v-draggable="{onStart: onDragStart}">按钮</button>
        <div v-droppable="{onEnter: onDragEnter, onLeave: onDragLeave, onDrop: onDrop}" style="padding: 10px; border: 1px dotted red; height: 100px;"></div>

        <m-node-item :root="tree"></m-node-item>
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar'
import ModuleList from '@/components/moduleList'
import Preview from '@/components/preview'
import { mapGetters } from 'vuex'
// import eventBus from '@/eventBus'
import mNodeItem from '@/components/module/mNodeItem'

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
            tree: {
                tagName: 'ul',
                children: [{
                    tagName: 'li',
                    option: {
                        domProps: {
                            innerHTML: 'li one'
                        }
                    }
                },
                {
                    tagName: 'li',
                    option: {
                        domProps: {
                            innerHTML: 'li two'
                        }
                    }
                },
                {
                    tagName: 'li',
                    option: {
                        domProps: {
                            innerHTML: 'li three'
                        }
                    }
                }]
            }
        }
    },
    computed: {
        ...mapGetters(['drake'])
    },
    mounted() {},
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
        }
    }
}
</script>
