<template>
    <button>{{ options.text.value }}</button>
</template>

<script>
import moduleMixin from '@/mixins/module'
export default {
    mixins: [moduleMixin],
    data() {
        return {
            options: {
                text: {
                    label: '文本',
                    value: '按钮',
                    use: 'input'
                }
            }
        }
    }
}
</script>
