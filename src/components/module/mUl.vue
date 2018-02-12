<template>
    <ul style="min-height: 100px; border: 1px dotted red;" v-drop-bag ref="container">
        <component v-for="(component, index) in list" :key="index" :is="component.name"></component>
    </ul>
</template>

<script>
import moduleMixin from '@/mixins/module'
export default {
    mixins: [moduleMixin]
}
</script>
