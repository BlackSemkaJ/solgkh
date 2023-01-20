<template>
    <div class="g-main">
        <div class="container">
            <main class="g-content">
                <Slaider></Slaider>
                <CardLinks></CardLinks>
                <BalansSection></BalansSection>
                <Digits-section></Digits-section>
            </main>
        </div>
    </div>
</template>

<script>
        import Slaider from '../components/Slaider.vue'
        import CardLinks from './CardLinks.vue'
        import BalansSection from './BalansSection.vue'
import DigitsSection from './DigitsSection.vue'
        export default {
            name: "Container",
            components: {
                Slaider,
                CardLinks,
                BalansSection,
                DigitsSection,
            },
        
        }
</script>

<style scoped>
    .g-main{
        padding-top: 84.2031px;
        min-height: 411.203px;
    }   
    .container {
        width: 100%;
        padding-right: 10px;
        padding-left: 10px;
        margin-right: auto;
        margin-left: auto;
    }
    @media (min-width: 1220px){
        .container {
            max-width: 1190px;
        }
    }
    .main .g-content, .no-padding-bottom .g-content {
        padding-bottom: 0;
    }

</style>