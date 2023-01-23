<template>
    <div class="b-section b-section--card-links-9">
        <div class="b-section__bg b-section__bg--2">
            <div class="b-section__decor b-section__decor--1"></div>
            <div class="b-section__decor b-section__decor--2"></div>
        </div>
        <div class="b-section__wrap">
            <div class="b-section__head">
                <div class="b-head">
                    <div class="b-head__row">
                        <div class="b-head__col b-head__col--title">
                            <div class="b-head__title h2">Новости</div>
                        </div>
                        <div class="b-head__col b-head__col--link">
                            <router-link class="b-head__link" to="/allnew">Все новости</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-section__body">
                <div class="card-links-9">
                    <div class="card-links-9__row row">
                        <div class="card-links-9__col col-12 col-sm-6 col-lg-4" id="bx_3485106786_3564">
                            <a class="card-links-9__card"
                                href="#">
                                <div class="card-links-9__img-wrap">
                                    <div class="card-links-9__img-inner">
                                        <img class="card-links-9__img"
                                            src="/img/new/novost-sayt-ferment_25.jpg"
                                            alt="Корпоративная поездка в Карелию">
                                    </div>
                                    <div class="card-links-9__tags">
                                        <div class="card-links-9__tag-list">
                                            <div class="card-links-9__tag card-links-9__tag--color-">
                                                <div class="card-links-9__tag-inner">Новые</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="card-links-9__text-wrap">
                                    <div class="card-links-9__date">30.12.2022</div>
                                    <div class="card-links-9__title">Название новости</div>
                                </div>
                            </a>
                        </div>
                        <div class="card-links-9__col col-12 col-sm-6 col-lg-4" id="bx_3485106786_3531">
                            <a class="card-links-9__card" href="№">
                                <div class="card-links-9__img-wrap">
                                    <div class="card-links-9__img-inner">
                                        <img class="card-links-9__img"
                                            src="/img/new//Kormlenie-ptitsy.jpg"
                                            alt="">
                                    </div>
                                    <div class="card-links-9__tags">
                                        <div class="card-links-9__tag-list">
                                            <div class="card-links-9__tag card-links-9__tag--color-1">
                                                <div class="card-links-9__tag-inner">Объявление</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="card-links-9__text-wrap">
                                    <div class="card-links-9__date">30.11.2022</div>
                                    <div class="card-links-9__title">Название объявления</div>
                                </div>
                            </a>
                        </div>
                        <div class="card-links-9__col col-12 col-sm-6 col-lg-4" id="bx_3485106786_3402">
                            <a class="card-links-9__card"
                                href="№">
                                <div class="card-links-9__img-wrap">
                                    <div class="card-links-9__img-inner">
                                        <img class="card-links-9__img"
                                            src="/img/new//Feremnty-dlya-tekstilya.png"
                                            alt="">
                                    </div>
                                    <div class="card-links-9__tags">
                                        <div class="card-links-9__tag-list">
                                            <div class="card-links-9__tag card-links-9__tag--color-1">
                                                <div class="card-links-9__tag-inner">Новости</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-links-9__text-wrap">
                                    <div class="card-links-9__date">20.10.2022</div>
                                    <div class="card-links-9__title">Название новости</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewSection",
}
</script>

<style scoped>
*, ::after, ::before {
    box-sizing: border-box;
}

.b-section--card-links-9 {
    padding-bottom: 25px;
}

.b-section {
    position: relative;
    padding: 50px 0;
}

.b-section__bg {
    z-index: 0;
    display: block;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1920px;
    margin-left: -960px;
    background-size: contain;
    background-color: #f8f8f8;
    background-repeat: no-repeat;
    background-position: center center;
}

.b-section__bg--2 .b-section__decor--1 {
    top: 47px;
    left: auto;
    right: 154px;
    background-image: url(../../img/new/b-section-decor.svg);
}

.b-section__decor--1 {
    top: 96px;
    left: 114px;
}

.b-section__decor {
    display: block;
    position: absolute;
    width: 157px;
    height: 157px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    opacity: .3;
}
.b-section__bg--2 .b-section__decor--2 {
    top: 207px;
    left: 164px;
    right: auto;
    background-image: url(../../img/new/b-section-decor--2.svg);
}
.b-section__decor--2 {
    top: 236px;
    right: 294px;
}
.b-section__wrap {
    z-index: 1;
    position: relative;
}
.b-section--card-links-9 .b-head {
    margin-bottom: 13px;
}
.b-head {
    margin: 0 0 30px;
}
.b-head__row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: flex-start;
    margin: 0 -18px;
}
.b-head__col--title {
    margin: 0 0 10px;
}
.b-head__col {
    padding: 0 18px;
}
.g-wrap .b-head__title {
    margin: 0;
}
.h2, h2 {
    font-size: 44px;
    line-height: 1.25;
    margin: 2.5rem 0 1.3rem;
}
.h2{
    font-family: Roboto Light,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    word-wrap: break-word;
}
.b-head__col {
    padding: 0 18px;
}
a.b-head__link {
    color: #7c4da7;
    text-decoration: underline;
    -webkit-text-decoration-color: rgba(124,77,167,.6);
    text-decoration-color: rgba(124,77,167,.6);
}
.b-head__link {
    font-size: 15px;
    line-height: 1.2;
}
a {
    color: #7c4da7;
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    cursor: pointer;
    transition: all .25s ease;
}
a.b-head__link:focus, a.b-head__link:hover {
    color: #7c4da7;
    text-decoration: none;
    -webkit-text-decoration-color: rgba(124,77,167,0);
    text-decoration-color: rgba(124,77,167,0);
}
a.card-links-9__card:focus .card-links-9__title, a.card-links-9__card:hover .card-links-9__title {
    color: #7c4da7;
    text-decoration: underline;
    -webkit-text-decoration-color: rgba(124,77,167,.6);
    text-decoration-color: rgba(124,77,167,.6);
}
.b-section__body>:last-child {
    margin-bottom: 0;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
}
.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}

@media (min-width: 576px){
    .col-sm-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
}
@media (min-width: 992px){
    .col-lg-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
}
.card-links-9__row {
    margin-left: -9px;
    margin-right: -9px;
}
/* .card-links-9__col {
    display: flex;
    margin: 0 0 35px;
    padding: 0 9px;
} */

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}
a.card-links-9__card {
    text-decoration: none;
}
.card-links-9__img-wrap {
    position: relative;
    padding: 51.195% 0 0;
    margin: 0 0 21px;
}
.card-links-9__img-inner {
    display: flex;
    overflow: hidden;
    border-radius: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.g-main img, .img-responsive, .modal img {
    display: block;
    max-width: 100%;
    height: auto;
}
.card-links-9__img {
    flex-shrink: 0;
    max-height: 100%;
}
img {
    vertical-align: middle;
    border-style: none;
}
.card-links-9__tags {
    z-index: 1;
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
}
.card-links-9__tag-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: 0 -5px;
}
.card-links-9__tag {
    padding: 0 5px;
    margin: 0 0 10px;
}
.card-links-9__tag-inner {
    padding: 9px 14px;
    border-radius: 3px;
    overflow: hidden;
    max-width: 100%;
    background: #ea4aa2;
    font-family: Roboto-Bold,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #fff;
    font-size: 12px;
    line-height: 1.2;
    letter-spacing: .3px;
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.card-links-9__text-wrap {
    padding: 0 10px 0 0;
}
.card-links-9__date {
    margin: 0 0 9px;
    font-family: Roboto Light,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #868686;
    font-size: 14px;
    line-height: 1.2;
}
.card-links-9__title:last-child {
    margin-bottom: 0;
}
.card-links-9__title {
    font-family: Roboto Light,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    text-decoration: none;
    -webkit-text-decoration-color: transparent;
    text-decoration-color: transparent;
    font-size: 20px;
    line-height: 1.4;
    transition: all .4s ease;
}
</style>