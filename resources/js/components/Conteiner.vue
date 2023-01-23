<template>
    <div class="g-main">
        <div class="container">
            <main class="g-content">
                <Slaider></Slaider>
                <CardLinks></CardLinks>
                <BalansSection></BalansSection>
                <Digits-section></Digits-section>
                <NewSection></NewSection>
            </main>
        </div>
    </div>
</template>

<script>
import Slaider from './main/Slaider.vue'
import CardLinks from './main/CardLinks.vue'
import BalansSection from './main/BalansSection.vue'
import DigitsSection from './main/DigitsSection.vue'
import NewSection from './main/NewSection.vue'
export default {
    name: "Container",
    components: {
        Slaider,
        CardLinks,
        BalansSection,
        DigitsSection,
        NewSection,
    },

}
</script>

<style>

</style>