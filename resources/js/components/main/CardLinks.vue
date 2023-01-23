<template>
    <div>
        <div class="card-links-7__wrap full-wrap">
            <div class="card-links-7__row">
                <div class="card-links-7__col">
                    <a class="card-links-7__card" href="#">
                       <div class="card-links-7__inner">
                            <div class="card-links-7__img-wrap">
                                <img src="/img/cardlinks/opredpriytii.jpg" alt="О предприятии" class="card-links-7__img">
                            </div>
                            <div class="card-links-7__text-wrap">
                                <div class="card-links-7__title-wrap">
                                    <div class="card-links-7__title">О предприятии</div>
                                </div>
                                <div class="card-links-7__desc">Солигорское городское унитарное производственное предприятие «ЖКХ «Комплекс» создано 23 апреля 1990 года и находится в районной коммунальной собственности.</div>
                                <div class="cardlinks-7__btn-wrap">
                                    <span class="btn btn-secondary">ПОДРОБНЕЕ О ПРОИЗВОДСТВЕ</span>
                                </div>
                            </div>
                       </div> 
                    </a>
                </div>
                <div class="card-links-7__col">
                    <a class="card-links-7__card" href="#">
                       <div class="card-links-7__inner">
                            <div class="card-links-7__img-wrap">
                                <img src="/img/cardlinks/regimraboty.jpg" alt="" class="card-links-7__img">
                            </div>
                            <div class="card-links-7__text-wrap">
                                <div class="card-links-7__title-wrap">
                                    <div class="card-links-7__title">Режим работы</div>
                                </div>
                                <div class="card-links-7__desc">Уважаемый посетитель сайта СГУПП «ЖКХ «Комплекс»! Обратиться в СГУПП «ЖКХ «Комплекс» можно следующми способами:</div>
                                <div class="cardlinks-7__btn-wrap">
                                    <span class="btn btn-secondary">ПОДРОБНЕЕ</span>
                                </div>
                            </div>
                       </div> 
                    </a>
                </div>
                <div class="card-links-7__col">
                    <a class="card-links-7__card" href="#">
                       <div class="card-links-7__inner">
                            <div class="card-links-7__img-wrap">
                                <img src="/img/cardlinks/taryf.jpg" alt="" class="card-links-7__img">
                            </div>
                            <div class="card-links-7__text-wrap">
                                <div class="card-links-7__title-wrap">
                                    <div class="card-links-7__title">Для граждан</div>
                                </div>
                                <div class="card-links-7__desc">Тарифы на жилищно коммунальные услуги в 2023 году.</div>
                                <div class="cardlinks-7__btn-wrap">
                                    <span class="btn btn-secondary">ПОДРОБНЕЕ О ТАРИФАХ</span>
                                </div>
                            </div>
                       </div> 
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardLinks",
    }
</script>

<style scoped>
    .full-wrap{
        position: relative;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        width: 100vw;
        max-width: 1920px;
    }
    .card-links-7__row{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .card-links-7__col {
        display: flex;
        flex: 0 0 33.33%;
        max-width: 33.33%;
    }
    a {
        color: #7c4da7;
        text-decoration: underline;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
        cursor: pointer;
        transition: all .25s ease;
    }
    a.card-links-7__card {
        text-decoration: none;
    }
    a.card-links-7__card:focus, a.card-links-7__card:hover {
        text-decoration: none;
    }
    a.card-links-7__card {
        text-decoration: none;
    }
    a:active, a:focus, a:hover {
        outline: 0;
    }
    a:focus, a:hover {
        color: #7c4da7;
        text-decoration: none;
    }
    .card-links-7__card {
        width: 100%;
    }
    .card-links-7__inner {
        display: block;
        overflow: hidden;
        position: relative;
        padding: 83.56% 0 0;
    }
    .card-links-7__img-wrap {
        z-index: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .card-links-7__img-wrap:before {
        z-index: 1;
        background: rgba(0,0,0,.35);
    }
    .card-links-7__img-wrap:after, .card-links-7__img-wrap:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all .4s ease;
    }
    .card-links-7__img-wrap:after {
        z-index: 2;
        background: linear-gradient(0deg,rgba(0,0,0,.6) 0,rgba(0,0,0,0) 30.21%);
    }
    .card-links-7__img-wrap:after, .card-links-7__img-wrap:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: all .4s ease;
    }
    a.card-links-7__card:focus .card-links-7__img-wrap:after, a.card-links-7__card:focus .card-links-7__img-wrap:before, a.card-links-7__card:hover .card-links-7__img-wrap:after, a.card-links-7__card:hover .card-links-7__img-wrap:before {
        opacity: 0;
    }
    img, .img-responsive, .modal img {
        display: block;
        max-width: 100%;
        height: auto;
    }
    .card-links-7__img {
        z-index: 0;
        position: relative;
        flex-shrink: 0;
        max-height: 100%;
    }
    img {
        vertical-align: middle;
        border-style: none;
    }
    .card-links-7__text-wrap {
        margin-bottom: -84px;
    }
    .card-links-7__text-wrap {
        z-index: 1;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 34px 40px 40px;
        color: #fff;
        transition: all .4s ease;
    }
    a.card-links-7__card:focus .card-links-7__text-wrap, a.card-links-7__card:hover .card-links-7__text-wrap {
        margin-bottom: 0;
        background: rgba(94,52,140,.9);
    }
    .card-links-7__title-wrap {
        display: inline-block;
        position: relative;
        max-width: 100%;
        padding: 0 39px 0 0;
        margin: 0 0 12px;
    }
    .card-links-7__title {
        display: block;
        overflow: hidden;
        max-height: 2.4em;
        font-family: Roboto-Regular,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 36px;
        line-height: 1.2;
    }
    .card-links-7__title-wrap:after {
        content: '';
        display: block;
        position: absolute;
        top: 23px;
        right: 0;
        width: 28px;
        height: 2px;
        background: #e7850c;
    }
    .card-links-7__desc {
        display: block;
        overflow: hidden;
        max-height: 9em;
        margin: 0 0 20px;
        font-family: Roboto-Regular,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 15px;
        line-height: 1.5;
    }
    .card-links-7__btn-wrap {
        -webkit-transform: translateY(40px);
        transform: translateY(40px);
        opacity: 0;
    }
    a.card-links-7__card:focus .card-links-7__btn-wrap, a.card-links-7__card:hover .card-links-7__btn-wrap {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    .card-links-7__btn-wrap {
        transition: all .4s ease;
    }
    .btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
    .btn-secondary, .btn-secondary-outline {
        background: #e7850c;
        border-color: #e7850c;
        color: #000;
    }
    .btn {
        font-family: Roboto-Regular,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        max-width: 100%;
        text-decoration: none;
        border: 1px solid transparent;
        padding: 15px 30px 14px;
        font-size: 13px;
        line-height: 1;
        letter-spacing: .2px;
        border-radius: 0;
        color: #fff;
        transition: all .15s ease-in-out;
        text-overflow: ellipsis;
        text-transform: uppercase;
        overflow: hidden;
        white-space: nowrap;
    }

</style>