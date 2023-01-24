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
                                <router-link to="/allnew">Новости</router-link>
                                <!-- <span itemprop="name">Новости</span> -->
                                <meta itemprop="position" content="2">
                            </li>
                            <li class="breadcrumb-item active">
                                <span itemprop="name">Заседание комиссии по противодействию коррупции</span>
                                <meta itemprop="position" content="2">
                            </li>
                        </ol>
                    </nav>
                    <h1 id="title" class="small">Заседание комиссии по противодействию коррупции</h1>
                    <div class="row">
                        <SlaidBar></SlaidBar>
                        <main class="g-content col-lg-9 col-12">
                            <div class="c_news">
                                <div class="wrap mb_1">
                                    <time class="date" datetime="2022-09-26">24.01.2023</time>
                                </div>
                            </div>
                            <div class="descr mb_2">
                                <p>
                                    <img width="900" alt="Команда Фермент" src="/img/new/073.jpg" height="600"
                                        title="Команда Фермент">
                                </p>
                                <p>
                                    Заседание комиссии по противодействию коррупции состоиться в кабинете директора
                                    СГУПП "ЖКХ"Комплекс" 02.02.2023 в 13:00.
                                </p>
                            </div>
                        </main>


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
/* .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
} */

.g-content {
    padding-bottom: 49px;
}

@media (min-width: 992px) {
    .g-content {
        padding-left: 32px;
    }
}

@media (min-width: 992px) {
    .col-lg-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
}

.col-12,
.col-lg-9 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

nav {
    display: block;
}

ol:not(.list-unstyled),
ul:not(.list-unstyled) {
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

dl,
ol,
ul {
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

.breadcrumb-item>a:focus,
.breadcrumb-item>a:hover {
    color: #9938a6;
    text-decoration: underline;
    -webkit-text-decoration-color: rgba(153, 56, 166, .6);
    text-decoration-color: rgba(153, 56, 166, .6);
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

.h1,
h1 {
    font-size: 3.8rem;
    line-height: 1.2;
    margin: 0 0 2rem;
    font-family: Roboto Light, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    word-wrap: break-word;
}

h1.small {
    font-size: 1.9rem;
    line-height: 1.2;
    margin: 0 0 0.95rem;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
}

.c_news .date {
    font-size: 13px;
    line-height: 1.53846154;
    color: grey;
    margin-bottom: 7px;
}

.p,
p {
    margin-top: 0;
    margin-bottom: 0.7em;
}

.g-main img,
.img-responsive,
img {
    display: block;
    max-width: 100%;
    height: auto;
}
</style>