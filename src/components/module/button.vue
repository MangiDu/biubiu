<template>
    <button>{{ text }}{{ uid }}</button>
</template>

<script>
import moduleMixin from '@/mixins/module'
export default {
    mixins: [moduleMixin],
    data() {
        return {
            text: '按钮'
        }
    },
    mounted() {
        this.$el.addEventListener('click', () => {
            this.$emit('click', this.uid)
            this.$store.dispatch('setEditingOne', this)
        })
    }
}
</script>
