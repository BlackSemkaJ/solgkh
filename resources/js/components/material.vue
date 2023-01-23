<template>
    <div class="g-main">
        <div class="container">
            <main class="g-content">
                <div class="container">
                    <nav>
                        <ol class="breadcrumb list-reset">
                            <li class="breadcrumb-item">
                                <router-link to="/">Главная</router-link>
                                <!-- <a itemprop="item" href="/" title="Главная"><span itemprop="name">Главная</span></a> -->
                                <meta itemprop="position" content="1">
                            </li>
                            <li class="breadcrumb-item active">
                                <span itemprop="name">Новости</span>
                                <meta itemprop="position" content="2">
                            </li>
                        </ol>
                    </nav>
                    <h1 id="title" class="">Новости</h1>
                    <div class="row">
                        <SlaidBar></SlaidBar>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import SlaidBar from './SlaidBar.vue'


export default {
    name: "AllNew",
    components: {
        SlaidBar,
    }
}
</script>

<style scoped>

    nav{
        display: block;
    }
    ol:not(.list-unstyled), ul:not(.list-unstyled) {
        list-style: none;
        padding-left: 0;
    }
    .breadcrumb {
        display: flex;
        flex-wrap: wrap;
        padding: 1.3rem 1.13rem;
        margin-bottom: 1.2rem;
        list-style: none;
        background-color: transparent;
        font-size: 0.9rem;
    }
    dl, ol, ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    a {
        color: #7c4da7;
        text-decoration: underline;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        cursor: pointer;
        transition: all .25s ease;
    }
    .breadcrumb-item>a:focus, .breadcrumb-item>a:hover {
        color: #9938a6;
        text-decoration: underline;
        -webkit-text-decoration-color: rgba(153,56,166,.6);
        text-decoration-color: rgba(153,56,166,.6);
    }
    .breadcrumb-item>a {
        color: #000;
        text-decoration: none;
        -webkit-text-decoration-color: transparent;
        text-decoration-color: transparent;
    }
    .breadcrumb-item+.breadcrumb-item::before {
        content: ' ';
        display: inline-block;
        background-image: url("/img/new/slesh.svg");
        width: 6px;
        height: 11px;
        margin: 0 0.6rem;
        color: #000;
        vertical-align: -1px;
    }
    .h1, h1 {
        font-size: 3.8rem;
        line-height: 1.2;
        margin: 0 0 2rem;
        font-family: Roboto Light,sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #000;
        word-wrap: break-word;
    }


    .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -10px;
        margin-left: -10px;
    }

    

</style>