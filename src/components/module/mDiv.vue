<template>
    <div>
        <span>{{ options.title.value }}</span>
        <div ref="container" class="previewContent" v-drop-bag style="background-color: #eee; border: 1px dotted #000;">
            <component v-for="(component, index) in list" :key="index" :is="component.name"></component>
        </div>
    </div>
</template>

<script>
import moduleMixin from '@/mixins/module'
export default {
    mixins: [moduleMixin],
    data() {
        return {
            options: {
                title: {
                    label: '标题',
                    value: 'title',
                    use: 'input'
                }
            }
        }
    }
}
</script>
