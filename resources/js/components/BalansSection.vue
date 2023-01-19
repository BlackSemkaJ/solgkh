<template>
    <div class="b-section b-section--card-links-8">
        <div class="b-section__bg">
            <div class="b-section__decor b-section__decor--1"></div>
            <div class="b-section__decor b-section__decor--2"></div>
            <div class="b-section__decor b-section__decor--3"></div>
        </div>
        <div class="b-section__wrap">
            <div class="b-section__head">
                <div class="b-head b-head--align-center">
                    <div class="b-head__row">
                        <div class="b-head__col b-head__col--title">
                            <div class="b-head__title h2">На балансе<br>СГУПП «ЖКХ«Комплекс» содержатся:</div>
                        </div>
                        <div class="b-head__col b-head__col--desc">
                            <div class="b-head__desc">Какой-то важный текст, который я ещё не придумал, но придумаю</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-content">
                <div class="tab-pane fade">
                    <div class="card-links-8">
                        <div class="card-links-8__row row">
                            <div class="card-links-8__col col-12 col-md-6 col-lg-4">
                                <div class="card-links-8__card">
                                    <a class="card-links-8__main-link" href="/catalog/livestock/"></a>
                                        <div class="card-links-8__inner">
                                            <div class="card-links-8__text-wrap">
                                                <div class="card-links-8__title">
                                                    Тихая заводь
                                                </div>
                                                <ul class="card-links-8__list list-reset">
                                                    <li class="card-links-8__item">
                                                        <a href="/catalog/livestock/pig/">
                                                            <span>Прекрасное место отдыха для семейных, друхеских и корпоративных праздников!</span>
                                                        </a>
                                                    </li>
                                                </ul>  
                                            </div>
                                            <div class="card-links-8__img-wrap">
                                                <img class="card-links-8__img" src="" alt="Тихая заводь">
                                            </div>
                                        </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BalansSection",
    }
</script>

<style scoped>
    @media (min-width: 992px){
        .b-section--card-links-8 {
            padding-bottom: 40px;
        }
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
    .b-section__decor--1 {
        top: 96px;
        left: 114px;
        background-image: url("../../img/b-section/b-section-decor.svg");
    }
    .b-section__decor--2 {
        top: 236px;
        right: 294px;
        background-image: url("../../img/b-section/b-section-decor--2.svg");
    }
    .b-section__decor--3 {
        bottom: 23px;
        left: 956px;
        background-image: url("../../img/b-section/b-section-decor--3.svg");
    }
    .b-section__wrap {
        z-index: 1;
        position: relative;
    }
    .b-section--card-links-8 .b-head {
        margin-bottom: 25px;
    }
    .b-head {
        margin: 0 0 30px;
    }
    .b-head--align-center {
        text-align: center;
        max-width: 650px;
        margin-left: auto;
        margin-right: auto;
    }

    .b-head__row {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: flex-start;
        margin: 0 -18px;
    }
    .b-head--align-center .b-head__col {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .b-section--card-links-8 .b-head__col--title {
        margin: 0 0 16px;
    }
    .b-head__col {
        padding: 0 18px;
    }
    .g-main .b-head__title {
        margin: 0;
    }
    .h2 {
        font-size: 3.4rem;
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
    .b-head--align-center .b-head__col {
        flex: 0 0 100%;
        max-width: 100%;
    }
    .b-head__col {
        padding: 0 18px;
    }
    .b-head__desc {
        font-family: Roboto Light,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 1.5;
    }

</style>