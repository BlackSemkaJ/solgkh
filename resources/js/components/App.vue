<template>
    <div>
        <Header></Header> 
        <Conteiner></Conteiner>
    </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Conteiner from '../components/Conteiner.vue'

    export default {
        name: "app",
        components: {
            Header,
            Conteiner,
        },
        
    }
</script>