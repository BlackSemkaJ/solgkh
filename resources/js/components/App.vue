<template>
    <div>
        <Header></Header>
        <router-view/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '../components/main/Header.vue'
    // import Conteiner from '../components/Conteiner.vue'
    import Footer from '../components/main/Footer.vue'
    export default {
        name: "app",
        components: {
            Header,
            
            Footer
        },
        
    }
</script>

