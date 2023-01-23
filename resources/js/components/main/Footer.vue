<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="container">
                <div class="footer__wrap">
                    <div class="row">
                        <div class="col-lg-9 col-12">
                            <div class="menu-foot-2">
                                <div class="inner">
                                    <ul class="menu_level_1 break-word list-reset ">
                                        <li class="item_1 ">
                                            <a href="/about/">O предприятии</a>
                                            <ul class="menu_level_2 list-reset">
                                                <li class="item_2 ">
                                                    <a href="/about/history/">
                                                        О предприятии </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/about/production/">
                                                        Производство </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/about/science-and-technology/">
                                                        Руководство </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/about/science-and-technology/research/">
                                                        Структура </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/about/consulting-and-support/">
                                                        Идеологическая работа </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/about/partners/">
                                                        Режим работы </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/about/news/">
                                                        Новости </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/about/shipping-and-payment/">
                                                        Противодействие коррупции </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="menu_level_1 break-word list-reset ">
                                        <li class="item_1 ">
                                            <a href="/catalog/">Для граждан</a>
                                            <ul class="menu_level_2 list-reset">

                                                <li class="item_2 ">
                                                    <a href="/catalog/livestock/">
                                                        Одно окно</a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/catalog/crop/">
                                                        Обращения</a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/catalog/industry/">
                                                        Товары и услуги </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/catalog/enzyme/">
                                                        Капитальный и текущий ремонт </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/catalog/amino_acids/">
                                                        Полезная информация </a>
                                                </li>
                                                <li class="item_2 ">
                                                    <a href="/catalog/vitamins/">
                                                        Тарифы </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <ul class="menu_level_1 break-word list-reset ">
                                        <li class="item_1 ">
                                            <a href="/contacts/">
                                                Контакты </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-12">
                            <div class="contacts-foot" itemscope="">
                                <div class="inner">
                                    <div class="address-wrap">
                                        <address class="address" itemscope="">Республика Беларусь, 223710,
                                            г.&nbsp;Солигорск,
                                            <span class="nowrap">ул.Железнодорожная 48,</span>
                                        </address>
                                    </div>
                                    <div class="tel-wrap">
                                        <div class="tel"><a href="tel:+37517331300">+375 (17) 33-13-00</a></div>
                                        <div class="tel"><a href="tel:+37517331313">+375 (17) 33-13-13</a></div>
                                    </div>
                                    <div class="mail-wrap">
                                        <div class="mail"><a href="mailto:solgkh@solgkh.by">solgkh@solgkh.by</a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="social-foot">
                                <div class="social-foot__list">
                                    <div class="social-foot__item social-foot__item--fb"><a class="social-foot__inner"
                                            href="https://www.facebook.com/fermentpark" target="_blank"
                                            rel="nofolow"></a></div>
                                    <div class="social-foot__item social-foot__item--li"><a class="social-foot__inner"
                                            href="https://www.linkedin.com/company/fermentpark" target="_blank"
                                            rel="nofolow"></a></div>
                                    <div class="social-foot__item social-foot__item--vk"><a class="social-foot__inner"
                                            href="https://m.vk.com/ferment.company" target="_blank" rel="nofolow"></a>
                                    </div>
                                    <div class="social-foot__item social-foot__item--in"><a class="social-foot__inner"
                                            href="https://www.instagram.com/fermentpark/" target="_blank"
                                            rel="nofolow"></a></div>
                                    <div class="social-foot__item social-foot__item--yt"><a class="social-foot__inner"
                                            href="https://www.youtube.com/channel/UC3gY5L85ao8DWKDSNnJHERQ"
                                            target="_blank" rel="nofolow"></a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="footer__row footer__row--with-divider">
                                <div class="footer__col">
                                    <div class="logo-foot-2">
                                        <div class="title">© 2023, СГУПП «ЖКХ«Комплекс»</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
*,
::after,
::before {
    box-sizing: border-box;
}

.footer__wrap {
    position: relative;
    padding: 41px 0 38px;
}

@media (min-width: 992px) {
    .col-lg-9 {
        flex: 0 0 75%;
        max-width: 75%;
    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
}

/* .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
} */
.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

.menu-foot-2 {
    margin: 0 0 11px;
}

.menu-foot-2 .inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
}

ol:not(.list-unstyled),
ul:not(.list-unstyled) {
    list-style: none;
    padding-left: 0;
}

.menu-foot-2 .menu_level_1 {
    flex: 0 0 33.33%;
    max-width: 33.33%;
}

.break-word {
    overflow-wrap: break-word;
    word-wrap: break-word;
}

dl,
ol,
ul {
    margin-top: 0;
    margin-bottom: 1rem;
}

.menu-foot-2 .item_1 {
    margin-bottom: 24px;
}

.menu-foot-2 .item_1>a {
    -webkit-text-decoration-color: transparent;
    text-decoration-color: transparent;
}

.menu-foot-2 [class*=item]>a,
.menu-foot-2 [class*=item]>span {
    font-family: Roboto Light, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #363636;
    font-size: 14px;
    line-height: 1.2;
}

.menu-foot-2 .item_1>a,
.menu-foot-2 .item_1>span {
    color: #000;
    font-size: 20px;
}

.menu-foot-2 [class*=item]>a {
    text-decoration: none;
    -webkit-text-decoration-color: rgba(54, 54, 54, 0);
    text-decoration-color: rgba(54, 54, 54, 0);
}

a {
    color: #7c4da7;
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    cursor: pointer;
    transition: all .25s ease;
}

.menu-foot-2 .menu_level_2 {
    margin: 12px 0 0;
}

.menu-foot-2 .item_2 {
    display: block;
    margin: 0 0 6px;
}

.item_2 {
    line-height: 25px;
}

@media (min-width: 992px) {
    .col-lg-3 {
        flex: 0 0 25%;
        max-width: 25%;
    }
}

.contacts-foot {
    padding: 4px 0 0;
    margin: 0 0 17px;
}

.contacts-foot .inner {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #363636;
    font-size: 14px;
    line-height: 1.6;
}

.contacts-foot .address-wrap,
.contacts-foot .mail-wrap,
.contacts-foot .tel-wrap {
    margin: 0 0 10px;
}

.contacts-foot .address {
    margin: 0;
}

address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
}

.contacts-foot .address-wrap,
.contacts-foot .mail-wrap,
.contacts-foot .tel-wrap {
    margin: 0 0 10px;
}

.contacts-foot .inner a {
    color: #363636;
    text-decoration: none;
    -webkit-text-decoration-color: rgba(54, 54, 54, 0);
    text-decoration-color: rgba(54, 54, 54, 0);
}

.contacts-foot .address-wrap:last-child,
.contacts-foot .mail-wrap:last-child,
.contacts-foot .tel-wrap:last-child {
    margin-bottom: 0;
}

.social-foot {
    margin: 0 0 39px;
}

.social-foot__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 -2.5px;
}

.social-foot__item {
    padding: 2.5px;
}

.social-foot__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #9938a6;
    border-radius: 50%;
    border: 1px solid #9938a6;
}

.social-foot__item--fb .social-foot__inner:before {
    background-image: url();
    width: 16px;
    height: 16px;
}

.social-foot__inner:before {
    content: ' ';
    display: inline-block;
    display: block;
}

.footer__row--with-divider {
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
    margin-right: -12px;
}

.footer__row--with-divider .footer__col {
    position: relative;
    padding-left: 12px;
    padding-right: 12px;
}

.logo-foot-2 .title {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: rgba(54, 54, 54, .5);
    font-size: 14px;
    line-height: 1.2;
}

.nowrap {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>