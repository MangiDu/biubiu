<template>
    <m-node :tag-name="tagName" :option="option">
        <m-node-item v-for="(item, index) in children" :key="index" :root="item"></m-node-item>
    </m-node>
</template>

<script>
/**
 * root:
 *  tagName
 *  option
 *  children
 */
import node from './node'
export default {
    name: 'MNodeItem',
    components: {
        mNode: node
    },
    props: {
        root: {
            type: Object,
            required: true
        }
    },
    computed: {
        tagName() {
            return this.root.tagName
        },
        option() {
            return this.root.option || {}
        },
        children() {
            return this.root.children || []
        }
    }
}
</script>
