<template>
    <div class="container clearfix">
        <navbar></navbar>
        <module-list class="pull-left"></module-list>
        <preview class="preview"></preview>
    </div>
</template>

<script>
import Navbar from '@/components/common/navbar'
import ModuleList from '@/components/moduleList'
import Preview from '@/components/preview'
export default {
    name: 'Editor',
    components: {
        Navbar,
        ModuleList,
        Preview
    }
}
</script>
