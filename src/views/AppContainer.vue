<template>
    <div id="wrapper" class="wrapper">
        <Header/>
        <Sidebar></Sidebar>
        <router-view/>
    </div><!-- //wrapper -->
</template>
<script>
    import Header from '../components/Header'
    import Sidebar from '../components/Sidebar'
    export default {
        components: {
            Header,
            Sidebar
        }
    }
</script>
<style scoped>
</style>