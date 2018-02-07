<template>
    <ul class="moduleList">
        <li><p>Button1</p></li>
        <li><p>Button2</p></li>
        <li><p>Button3</p></li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ModuleList',
    computed: {
        ...mapGetters(['drake'])
    },
    mounted() {
        this.drake.containers.push(this.$el)
    }
}
</script>
