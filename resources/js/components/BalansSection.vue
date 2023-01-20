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
                            <div class="card-links-8__col col-lg-4 col-md-6 col-12">
                                <div class="card-links-8__card">
                                    <a class="card-links-8__main-link" href="/catalog/livestock/"></a>
                                    <div class="card-links-8__inner">
                                        <div class="card-links-8__text-wrap">
                                            <div class="card-links-8__title">
                                                Тихая заводь
                                            </div>
                                            <ul class="card-links-8__list list-reset">
                                                <li class="card-links-8__item">
                                                    <p>
                                                        <span>Прекрасное место отдыха для семейных, друхеских и корпоративных праздников!</span>
                                                    </p>
                                                </li>
                                            </ul>  
                                        </div>
                                        <div class="card-links-8__img-wrap">
                                            <img class="card-links-8__img" src="/img/b-section/zavady.jpg" alt="Тихая заводь Солигорск">
                                        </div>
                                    </div>     
                                </div>    
                            </div>
                            <div class="card-links-8__col col-lg-4 col-md-6 col-12">
                                <div class="card-links-8__card">
                                    <a class="card-links-8__main-link" href="#"></a>
                                    <div class="card-links-8__inner">
                                        <div class="card-links-8__text-wrap">
                                            <div class="card-links-8__title">
                                               Баня «Лазня»
                                            </div>
                                            <ul class="card-links-8__list list-reset">
                                                <li class="card-links-8__item">
                                                    <p>
                                                        <span>Банька по парится, как я парюсь с дипломом!</span>
                                                    </p>
                                                </li>
                                            </ul>  
                                        </div>
                                        <div class="card-links-8__img-wrap">
                                            <img class="card-links-8__img" src="/img/b-section/bany.jpg" alt="Баня Солигорск Лазня>">
                                        </div>
                                    </div>     
                                </div>    
                            </div>
                            <div class="card-links-8__col col-lg-4 col-md-6 col-12">
                                <div class="card-links-8__card">
                                    <a class="card-links-8__main-link" href="https://hotel-polesie.solgkh.by/"></a>
                                    <div class="card-links-8__inner">
                                        <div class="card-links-8__text-wrap">
                                            <div class="card-links-8__title">
                                                Гостиница «Новое Полесье»
                                            </div>
                                            <ul class="card-links-8__list list-reset">
                                                <li class="card-links-8__item">
                                                    <p>
                                                        <span>Трехзвёздочная гостиница Солигорска «Новое Полесье» предоставляет для гостей и жителей города комфортабельные и уютные номера. В вашем расположении 125 номеров различной степени комфорта: апартаменты, люкс, джуниор, сингл, твин, дабл.</span>
                                                    </p>
                                                </li>
                                            </ul>  
                                        </div>
                                        <div class="card-links-8__img-wrap">
                                            <img class="card-links-8__img" src="/img/b-section/newpolesie1.jpg" alt="Гостиница Солигорска «Новое Полесье»">
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
    *, ::after, ::before {
        box-sizing: border-box;
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
    @media (min-width: 768px){
        .col-md-6 {
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
 
    .card-links-8__col {
        display: flex;
        margin: 0 0 20px;
    }

    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 10px;
        padding-left: 10px;
    }
    .card-links-8__card {
        display: flex;
        position: relative;
        width: 100%;
    }

    a.card-links-8__main-link {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    a {
        color: #7c4da7;
        text-decoration: underline;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        cursor: pointer;
        transition: all .25s ease;
    }
    a.card-links-8__main-link~.card-links-8__inner {
        pointer-events: none;
    }
    .card-links-8__inner {
        z-index: 1;
        display: flex;
        position: relative;
        flex-direction: column;
        width: 100%;
        max-width: 377px;
        margin: 0 auto;
        background: #fff;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
        transition: all .4s ease;
    }
    .card-links-8__text-wrap {
        flex-grow: 1;
        padding: 28px 30px 26px;
    }
    a.card-links-8__main-link~.card-links-8__inner {
        pointer-events: none;
    }
    .card-links-8__title {
        margin: 0 0 14px;
        font-family: Roboto Light,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #000;
        font-size: 24px;
        line-height: 1.35;
    }
    .g-main .card-links-8__list:last-child {
        margin-bottom: 0;
    }
    .g-main ol:not(.list-unstyled), .g-main ul:not(.list-unstyled) {
        list-style: none;
        padding-left: 0;
    }
    .g-main .card-links-8__list {
        margin: 0 0 7px;
    }
    dl, ol, ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    .card-links-8__item {
        margin: 0 0 10px;
        font-family: Roboto Light,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        line-height: 1.2;
    }

    .card-links-8__img-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: auto 0 0;
        min-height: .01%;
    }

    .card-links-8__img-wrap:before {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background: linear-gradient(to right,#5e348c 0,#5e348c 25%,#7c4da7 25%,#7c4da7 50%,#9938a6 50%,#9938a6 75%,#ea4aa2 75%,#ea4aa2 100%);
        opacity: 0;
        transition: all .4s ease;
    }
    .g-main img, .img-responsive, .modal img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .card-links-8__img {
        flex-shrink: 0;
        max-height: 271px;
    }
    img {
        vertical-align: middle;
        border-style: none;
    }
    .card-links-8__card:focus .card-links-8__inner, .card-links-8__card:hover .card-links-8__inner {
        -webkit-transform: translateY(-10px);
        transform: translateY(-10px);
    }
    .card-links-8__card:focus .card-links-8__img-wrap:before,.card-links-8__card:hover .card-links-8__img-wrap:before {
        opacity: 1;
    }
    .tab-pane {
        display: block;
    }
</style>