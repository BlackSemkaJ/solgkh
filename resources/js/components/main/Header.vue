<template>
    <header class="header">
        <div class="header__desktop">
            <div class="container">
                <div class="header__wrap">
                    <div class="header__row">
                        <div class="header__col header__col--logo">
                            <div class="logo-desk">
                                <div class="pic">
                                    <span><img src="/img/header/3.png" alt="ЖКХ Комлекс"></span>
                                </div>
                            </div>
                        </div>
                        <div class="header__col header__col--menu">
                            <div class="menu-drop-8 js-menu-tablet js-menuMore d-print-none">
                                <ul class="menu_level_1 break-word list-reset">
                                    <li class="item_1 has-submenu">
                                        <router-link to="/">
                                            <span>Главная</span>
                                            <i class="icon"></i>
                                        </router-link>
                                        <!-- <a href="/">
                                            <span>Главная</span>
                                            <i class="icon"></i>
                                        </a> -->
                                        <div class="submenu">
                                            <div class="submenu-3">
                                                <ul class="menu_level_2 list-reset">
                                                    <li class="item_2">
                                                        <a href="#"><span>О предприятии</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Вышестоящие организации</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Структура предприятия</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#">
                                                            <span>Обращения граждан и юридических лиц</span>
                                                            <span class="icon"></span>
                                                        </a>
                                                        <div class="submenu-inner">
                                                            <ul class="menu_level_3 list-reset">
                                                                <li class="item_3">
                                                                    <a href="#"><span>Электронное обращение для
                                                                            юр.лиц</span></a>
                                                                </li>
                                                                <li class="item_3">
                                                                    <a href="#"><span>Электронное обращение для
                                                                            физ.лиц</span></a>
                                                                </li>
                                                                <li class="item_3">
                                                                    <a href="#"><span>Приём граждан, их представителей,
                                                                            представителей юридических лиц</span></a>
                                                                </li>
                                                                <li class="item_3">
                                                                    <a href="#"><span>Прямые телефонные линии</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#">
                                                            <span>Комиссии</span>
                                                            <span class="icon"></span>
                                                        </a>
                                                        <div class="submenu-inner">
                                                            <ul class="menu_level_3 list-reset">
                                                                <li class="item_3">
                                                                    <a href="#"><span>План работы комиссии</span></a>
                                                                </li>
                                                                <li class="item_3">
                                                                    <a href="#"><span>Заседание комиссии</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li class="item_2">
                                                        <router-link to="/allnew">Новости</router-link>
                                                        <!-- <a href="#"><span>Новости</span></a> -->
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item_1 has-submenu">
                                        <a href="/">
                                            <span>Информация для граждан</span>
                                            <i class="icon"></i>
                                        </a>
                                        <div class="submenu">
                                            <div class="submenu-3">
                                                <ul class="menu_level_2 list-reset">
                                                    <li class="item_2">
                                                        <a href="#"><span>Административные процедуры</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Тарифы</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Оплата услуг</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Сроки выполнения заявок по виду
                                                                работ</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item_1 has-submenu">
                                        <a href="/">
                                            <span>Жилищный фонд</span>
                                            <i class="icon"></i>
                                        </a>
                                        <div class="submenu">
                                            <div class="submenu-3">
                                                <ul class="menu_level_2 list-reset">
                                                    <li class="item_2">
                                                        <a href="#"><span>Благоустройство</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Требования по содержанию жилфонда</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Правила пользования жилыми
                                                                помещениями</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Перечень объектов по текущему ремонту
                                                                подъездов жилищного фонда СГУПП «ЖКХ«Комплекс» на
                                                                2022г.</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item_1 has-submenu">
                                        <a href="/">
                                            <span>Профсоюзный комитет</span>
                                            <i class="icon"></i>
                                        </a>
                                        <div class="submenu">
                                            <div class="submenu-3">
                                                <ul class="menu_level_2 list-reset">
                                                    <li class="item_2">
                                                        <a href="#"><span>О профилактики коронавирусной
                                                                инфекции</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>О работе с молодежью в первичной профсоюзной
                                                                организации СГУПП «ЖКХ«Комплекс».</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>БРСМ</span></a>
                                                    </li>
                                                    <li class="item_2">
                                                        <a href="#"><span>Новости профосюзного комитета</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item_1">
                                        <router-link to="/Contacts"><span>Контакты</span></router-link>
                                        <!-- <a href="">
                                            <span>Контакты</span>
                                        </a> -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="header__col header__col--search">
                            <div class="search-head-4 hide-print" v-bind:class="{ active: isActive }">
                                <div class="backdrop">

                                </div>
                                <div class="wrap">
                                    <div class="btn-open" v-on:click="isActive = !isActive">
                                    </div>
                                    <form class="search-form" action="/search/" method="get">
                                        <div class="container">
                                            <div class="form-wrap">
                                                <input class="btn-search" name="btn-search" type="submit" value="Найти">
                                                <input v-model="search" class="field" id="headSearch" type="search"
                                                    placeholder="Поиск по сайту" name="q" maxlength="50" required="">
                                                <div class="btn-close" v-on:click="isActive = !isActive"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isActive: false
        }
    }
}


</script>

<style scoped>
.header {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 101;
    min-width: 300px;
    background: #fff;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
}

.conteiner {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
}

.header .header__row {
    display: flex;
    align-items: center;
    margin: 0 -10px;
}

.header .header__col--logo {
    flex-shrink: 0;
    width: 10%;
}

.header .header__col {
    min-width: .01%;
    padding: 0 10px;
}

/* Лого --------------------------------------------- */
.logo-desk .pic {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-desk .pic>a,
.logo-desk .pic>span {
    /* display: block; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo-desk .pic img {
    /* max-width: 93px;
        max-height: 58px; */
    max-width: 150px;
    max-height: 90px;
}

/* Меню ----------------------------------------------*/

.header .header__col--menu {
    width: 80%;
}

ul:not(.list-unstyled) {
    list-style: none;
    padding-left: 0;
}

.js-menuMore .menu_level_1 {
    display: table;
}

.menu-drop-8 .menu_level_1 {
    width: 100%;
    display: table;
    margin: 0;
}

.break-word {
    overflow-wrap: break-word;
    word-wrap: break-word;
}

.js-menuMore .item_1 {
    display: table-cell;
}

.menu-drop-8 .item_1 {
    vertical-align: middle;
    display: table-cell;
    position: relative;
}

.menu-drop-8 .item_1>a:focus,
.menu-drop-8 .item_1>a:hover {
    color: #5e348c;
}

.menu-drop-8 .item_1>a,
.menu-drop-8 .item_1>span {
    display: block;
    color: #000;
    text-transform: none;
    text-align: center;
    padding: 30px 21px 32px 20px;
    white-space: nowrap;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    border-top: 3px solid transparent;
    text-decoration: none;
    font-size: 16px;
    line-height: 1.18;
}

.menu-drop-8 .item_1>a>span:not(.icon),
.menu-drop-8 .item_1>span>span:not(.icon) {
    display: inline-block;
    vertical-align: middle;
    /* max-width: 160px; */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.menu-drop-8 .item_1>a .icon,
.menu-drop-8 .item_1>span .icon {
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    border-color: currentColor transparent transparent transparent;
    transition: all .25s ease;
    margin-left: 6px;
    vertical-align: 1px;
}

i {
    font-family: Roboto-Italic, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
}

a {
    color: #7c4da7;
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    cursor: pointer;
    transition: all .25s ease;
}

a:focus,
a:hover {
    color: #7c4da7;
    text-decoration: none;
}

a:active,
a:focus,
a:hover {
    outline: 0;
}

.submenu-3 [class*=item_]>a .icon,
.submenu-3 [class*=item_]>span .icon {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 4px 0 4px 4px;
    border-color: transparent transparent transparent currentColor;
    transition: all .25s ease;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 12px;
}

.menu-drop-8 .submenu {
    width: 260px;
}

.menu-drop-8 .submenu,
.menu-drop-8 .submenu-2 {
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    transition: visibility .15s ease, opacity .3s ease, -webkit-transform .3s ease-in;
    transition: visibility .15s ease, opacity .3s ease, transform .3s ease-in;
    transition: visibility .15s ease, opacity .3s ease, transform .3s ease-in, -webkit-transform .3s ease-in;
    padding-top: 0;
    position: absolute;
    top: 100%;
    left: 0;
}

.menu-drop-8 .submenu:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
    background-color: #fff;
}

.menu-drop-8 .item_1:focus>.submenu,
.menu-drop-8 .item_1:focus>.submenu-2,
.menu-drop-8 .item_1:hover>.submenu,
.menu-drop-8 .item_1:hover>.submenu-2 {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}

.submenu-3 [class*=menu_level_] {
    padding: 5px 0;
}

.submenu-3 [class*=item_] {
    position: relative;
}

.submenu-3 [class*=item_]>a,
.submenu-3 [class*=item_]>span {
    display: block;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #363636;
    font-size: 15px;
    text-decoration: none;
    padding: 6px 25px 5px 18px;
    background: 0 0;
    text-transform: none;
    text-align: left;
}

.submenu-3 [class*=item_]>a,
.submenu-3 [class*=item_]>span {
    display: block;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #363636;
    font-size: 15px;
    text-decoration: none;
    padding: 6px 25px 5px 18px;
    background: 0 0;
    text-transform: none;
    text-align: left;
}

.submenu-3 [class*=item_]:focus>.submenu-inner,
.submenu-3 [class*=item_]:hover>.submenu-inner {
    display: block;
}

.submenu-3 .submenu-inner {
    z-index: 999;
    display: none;
    width: 260px;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
    top: 0;
    left: 100%;
}

.submenu-3 [class*=item_]>a:focus,
.submenu-3 [class*=item_]>a:hover {
    color: #7c4da7;
    background: 0 0;
}

/* Поиск ----------------------------------------*/
.header .header__col--search {
    width: 10%;
}

.search-head-4 {
    margin: 0 0 4px;
}

.search-head-4 .backdrop {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.search-head-4 .wrap {
    height: 23px;
    width: 23px;
}

.search-head-4 .btn-open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all .5s ease;
}

.search-head-4 .btn-open:before {
    content: ' ';
    display: inline-block;
    background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20viewBox%3D%22-1%20-1%2025%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23000%22%3E%3Cpath%20d%3D%22M10.354%2020.856c5.241%200%209.49-4.466%209.49-9.974%200-5.51-4.249-9.975-9.49-9.975C5.112.907.863%205.373.863%2010.882c0%205.508%204.249%209.974%209.49%209.974zm0%20.907c5.718%200%2010.354-4.872%2010.354-10.881C20.707%204.872%2016.072%200%2010.354%200%204.636%200%200%204.872%200%2010.882s4.636%2010.881%2010.354%2010.881z%22%2F%3E%3Cpath%20d%3D%22M22.693%2022.68a.417.417%200%200%201-.61%200l-4.27-4.488a.47.47%200%200%201%200-.64.417.417%200%200%201%20.61%200l4.27%204.488a.47.47%200%200%201%200%20.64z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    width: 25px;
    height: 25px;
    display: block;
    transition: all .25s ease;
}

.search-head-4 .btn-open:focus:before,
.search-head-4 .btn-open:hover:before {
    opacity: .5;
}

.search-head-4.active .search-form {
    opacity: 1;
    visibility: visible;
}

.search-head-4.active .btn-search {
    opacity: 1;
}

.search-head-4.active .btn-close {
    opacity: 1;
}

.container {
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
}

.search-head-4 .search-form {
    z-index: 999;
    position: absolute;
    background-color: #fff;
    top: 100%;
    left: 50%;
    margin-left: -50vw;
    border-radius: 0;
    display: block;
    opacity: 0;
    visibility: hidden;
    width: 100vw;
    overflow: hidden;
    transition: all .8s ease;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
}

.search-head-4 .form-wrap {
    position: relative;
    padding: 4px 35px;
}

.search-head-4 .btn-search {
    position: absolute;
    top: 50%;
    left: 7px;
    padding: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: 0 0;
    border: none;
    opacity: 0;
    transition: opacity .8s ease;
    font-size: 0;
    background-repeat: no-repeat;
    content: ' ';
    display: inline-block;
    background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20viewBox%3D%22-1%20-1%2025%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20opacity%3D%22.5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23000%22%3E%3Cpath%20d%3D%22M10.354%2020.856c5.241%200%209.49-4.466%209.49-9.974%200-5.51-4.249-9.975-9.49-9.975C5.112.907.863%205.373.863%2010.882c0%205.508%204.249%209.974%209.49%209.974zm0%20.907c5.718%200%2010.354-4.872%2010.354-10.881C20.707%204.872%2016.072%200%2010.354%200%204.636%200%200%204.872%200%2010.882s4.636%2010.881%2010.354%2010.881z%22%2F%3E%3Cpath%20d%3D%22M22.693%2022.68a.417.417%200%200%201-.61%200l-4.27-4.488a.47.47%200%200%201%200-.64.417.417%200%200%201%20.61%200l4.27%204.488a.47.47%200%200%201%200%20.64z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    width: 25px;
    height: 25px;
}

.search-head-4 .field {
    width: 100%;
    font-size: 14px;
    padding: 9px 6px;
    border: none;
}

[type=search] {
    outline-offset: -2px;
    -webkit-appearance: none;
}

button,
input {
    overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

.search-head-4 .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    transition: opacity .4s ease;
}

.search-head-4 .btn-close:before {
    -webkit-transform: translate(-50%, -50%) rotate(45deg);
    transform: translate(-50%, -50%) rotate(45deg);
}

.search-head-4 .btn-close:after,
.search-head-4 .btn-close:before {
    background-color: #999;
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.search-head-4 .btn-close:after {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg);
    transform: translate(-50%, -50%) rotate(-45deg);
}

.search-head-4 .btn-close:after,
.search-head-4 .btn-close:before {
    background-color: #999;
    content: '';
    display: block;
    width: 20px;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.search-head-4 .btn-close:focus:after,
.search-head-4 .btn-close:focus:before,
.search-head-4 .btn-close:hover:after,
.search-head-4 .btn-close:hover:before {
    background-color: #9938a6;
}

button:focus,
input:focus,
select:focus,
textarea:focus {
    outline: 0;
}

@media (max-width: 1220px) {
    .container {
        max-width: 1190px;
    }
}
</style>>