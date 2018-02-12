<template>
    <li style="min-height: 20px; background-color: blue;" v-drop-bag ref="container">
        <component v-for="(component, index) in list" :key="index" :is="component.name"></component>
    </li>
</template>

<script>
import moduleMixin from '@/mixins/module'
export default {
    mixins: [moduleMixin]
}
</script>
