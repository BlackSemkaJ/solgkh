<template>
    <aside class="g-sidebar col-lg-3 col-12 d-print-none">
        <nav class="menu-aside-3">
            <ul class="menu_level_1 list-reset break-word">
                <li class="item_1 active">
                    <a href="#">
                        <span>Главная</span>
                    </a>
                    <a class="icon collapsed" v-on:click="isActive=!isActive"></a>
                    <div class="collapse" v-bind:class="{ show: isActive }">
                        <ul class="menu_level_2 list-reset">
                            <li class="item_2"><a href="#"><span>О предприятии</span></a></li>
                            <li class="item_2"><a href="#"><span>Вышестоящие организации</span></a></li>
                            <li class="item_2"><a href="#"><span>Структура предприятия</span></a></li>
                            <li class="item_2"><a href="#"><span>Обращения граждан и юридических лиц</span></a></li>
                            <li class="item_2"><a href="#"><span>Комиссии</span></a></li>
                            <li class="item_2"><a href="#"><span>Новости</span></a></li>
                        </ul>
                    </div>
                </li>
                <li class="item_1">
                    <a href="#">
                        <span>Информация для граждан</span>
                    </a>
                    <a class="icon collapsed"></a>
                    <div class="collapse">
                        <ul class="menu_level_2 list-reset">
                            <li class="item_2"><a href="#"><span>Административные процедуры</span></a></li>
                            <li class="item_2"><a href="#"><span>Тарифы</span></a></li>
                            <li class="item_2"><a href="#"><span>Оплата услуг</span></a></li>
                            <li class="item_2"><a href="#"><span>Сроки выполнения заявок по виду работ</span></a></li>
                        </ul>
                    </div>
                </li>
                <li class="item_1">
                    <a href="#">
                        <span>Жилищный фонд</span>
                    </a>
                    <a class="icon collapsed"></a>
                    <div class="collapse">
                        <ul class="menu_level_2 list-reset">
                            <li class="item_2"><a href="#"><span>Благоустройство</span></a></li>
                            <li class="item_2"><a href="#"><span>Требования по содержанию жилфонда</span></a></li>
                            <li class="item_2"><a href="#"><span>Правила пользования жилыми помещениями</span></a></li>
                            <li class="item_2"><a href="#"><span>Перечень объектов по текущему ремонту подъездов жилищного фонда СГУПП «ЖКХ«Комплекс» на 2022г.</span></a></li>
                        </ul>
                    </div>
                </li>
                <li class="item_1">
                    <a href="#">
                        <span>Профсоюзный комитет</span>
                    </a>
                    <a class="icon collapsed"></a>
                    <div class="collapse">
                        <ul class="menu_level_2 list-reset">
                            <li class="item_2"><a href="#"><span>О профилактики коронавирусной инфекции</span></a></li>
                            <li class="item_2"><a href="#"><span>О работе с молодежью в первичной профсоюзной организации СГУПП «ЖКХ«Комплекс».</span></a></li>
                            <li class="item_2"><a href="#"><span>БРСМ</span></a></li>
                            <li class="item_2"><a href="#"><span>Новости профосюзного комитета</span></a></li>
                        </ul>
                    </div>
                </li>
                <li class="item_1"><a href="/about/shipping-and-payment/"><span>Контакты</span></a>                                                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "SlaidBar",
    data(){
            return{
                isActive: true
            }
        }
}
</script>

<style scoped>
    ul{

    }
    .col-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    @media (min-width: 992px){
        .col-lg-3 {
            flex: 0 0 25%;
            max-width: 25%;
        }
    }

    .col-lg-3, col-12{
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 10px;
        padding-left: 10px;
    }
    nav{
        display: block;
    }
    .menu-aside-3 {
        overflow: hidden;
        padding: 0;
        margin: 0 0 25px;
        border-radius: 3px;
        box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
        background: #fff;
    }
    .menu-aside-3 .menu_level_1 {
        padding: 14px 0 15px;
    }
    .menu-aside-3 [class*=menu_level_] {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ol:not(.list-unstyled), .g-wrap ul:not(.list-unstyled) {
        list-style: none;
        padding-left: 0;
    }
    .menu-aside-3 .menu_level_1 {
        font-size: 15px;
    }
    .break-word {
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .menu-aside-3 [class*=item_] {
        position: relative;
    }
    .menu-aside-3 .item_1>a:not(.icon), .menu-aside-3 .item_1>span:not(.icon) {
        padding: 9px 30px 8px 20px;
        font-family: Roboto,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 15px;
    }
    .menu-aside-3 [class*=item_]>a {
        color: #363636;
        text-decoration: none;
        -webkit-text-decoration-color: rgba(54,54,54,0);
        text-decoration-color: rgba(54,54,54,0);
    }
    .menu-aside-3 [class*=item_]>a, .menu-aside-3 [class*=item_]>span {
        display: block;
        color: #363636;
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
    .menu-aside-3 [class*=item_]>a:focus, .menu-aside-3 [class*=item_]>a:hover {
        color: #363636;
        text-decoration: underline;
        -webkit-text-decoration-color: rgba(54,54,54,.6);
        text-decoration-color: rgba(54,54,54,.6);
    }
    a:active, a:focus, a:hover {
        outline: 0;
    }
    a:focus, a:hover {
        color: #7c4da7;
        text-decoration: none;
    }
    .menu-aside-3 [class*=item_]>a.icon, .menu-aside-3 [class*=item_]>span.icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        width: 30px;
        height: 35px;
        text-align: center;
        padding: 0;
        margin: 0;
        border-bottom: none;
    }
    .menu-aside-3 [class*=item_]>a.icon.collapsed:before, .menu-aside-3 [class*=item_]>span.icon.collapsed:before {
        margin-top: 5px;
        -webkit-transform: rotate(0);
        transform: rotate(0);
        opacity: .4;
    }
    .menu-aside-3 [class*=item_]>a.icon:before, .menu-aside-3 [class*=item_]>span.icon:before {
        content: '';
        display: block;
        margin-right: 16px;
        border-width: 4px 3px 0;
        border-style: solid;
        border-color: #000 transparent transparent;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
        transition: all .3s ease;
    }
    .collapse:not(.show) {
        display: none;
    }
    .menu-aside-3 .menu_level_2 {
        padding-top: 1px;
        padding-bottom: 9px;
    }
    .menu-aside-3 [class*=item_] {
        position: relative;
    }
    .menu-aside-3 [class*=item_].active>a, .menu-aside-3 [class*=item_].active>span {
        color: #7c4da7;
    }
    .menu-aside-3 .menu_level_2 {
        font-size: 14px;
    }
    .menu-aside-3 .item_2>a:not(.icon), .menu-aside-3 .item_2>span:not(.icon) {
        padding: 5px 30px 5px 30px;
        font-family: Roboto Light,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
    }
</style>