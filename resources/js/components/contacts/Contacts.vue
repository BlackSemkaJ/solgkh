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
                                <span itemprop="name">Контакты</span>
                                <meta itemprop="position" content="2">
                            </li>
                        </ol>
                    </nav>
                    <h1 id="title" class="">Контакты</h1>
                    <div class="row">
                        <main class="g-content col-lg-12">
                            <div class="b-contacts-2 type-2">
                                <div class="tabs">
                                    <div class="tab-pane fade in active show">
                                        <div class="b-contacts-2__title b-contacts-2__title--mid">Электронное обращение
                                        </div>
                                        <div class="b-contacts-2__row row">
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div id="FRM_CONTACT_modal">
                                                    <div class="modal__state--form">
                                                        <form class="form form-dropdown" id="FRM_CONTACT" method="post"
                                                            action="/contacts/" novalidate="novalidate">
                                                            <fieldset class="fieldset">
                                                                <div>
                                                                    <div
                                                                        class="form-group control-group dropdown-valid">
                                                                        <div class="text col-12">
                                                                            <div class="input-wrap">
                                                                                <input class="form-control" type="text"
                                                                                    name="FIO" id="FIO_CONTACTS"
                                                                                    required="" placeholder="ФИО"
                                                                                    aria-required="true">
                                                                                <div class="error-drop">
                                                                                    <button class="error-icon"
                                                                                        data-toggle="dropdown">?</button>
                                                                                    <div
                                                                                        class="dropdown-menu dropdown-menu-right">
                                                                                        <div class="controls"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="form-group control-group dropdown-valid">
                                                                        <div class="text col-12">
                                                                            <div class="input-wrap">
                                                                                <input class="form-control" type="tel"
                                                                                    name="PHONE" id="PHONE_CONTACTS"
                                                                                    required="" placeholder="Телефон"
                                                                                    aria-required="true">
                                                                                <div class="error-drop">
                                                                                    <button class="error-icon"
                                                                                        data-toggle="dropdown">?</button>
                                                                                    <div
                                                                                        class="dropdown-menu dropdown-menu-right">
                                                                                        <div class="controls"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="form-group control-group dropdown-valid">
                                                                        <div class="text col-12">
                                                                            <div class="input-wrap">
                                                                                <input class="form-control" type="email"
                                                                                    name="EMAIL" id="EMAIL_CONTACTS"
                                                                                    required="" placeholder="Email"
                                                                                    aria-required="true">
                                                                                <div class="error-drop">
                                                                                    <button class="error-icon"
                                                                                        data-toggle="dropdown">?</button>
                                                                                    <div
                                                                                        class="dropdown-menu dropdown-menu-right">
                                                                                        <div class="controls"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        class="form-group control-group dropdown-valid">
                                                                        <div class="text col-12">
                                                                            <div class="input-wrap">
                                                                                <input class="form-control" type="text"
                                                                                    name="COMPANY_NAME"
                                                                                    id="COMPANY_NAME" required=""
                                                                                    placeholder="Название компании"
                                                                                    aria-required="true">
                                                                                <div class="error-drop">
                                                                                    <button class="error-icon"
                                                                                        data-toggle="dropdown">?</button>
                                                                                    <div
                                                                                        class="dropdown-menu dropdown-menu-right">
                                                                                        <div class="controls"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group control-group dropdown-valid">
                                                                        <div class="text col-12">
                                                                            <div class="input-wrap">
                                                                                <textarea class="form-control"
                                                                                    name="MESSAGE"
                                                                                    placeholder="Сообщение"
                                                                                    maxlength="500" rows="3"
                                                                                    cols="60"></textarea>
                                                                                <div class="error-drop">
                                                                                    <button class="error-icon"
                                                                                        data-toggle="dropdown">?</button>
                                                                                    <div
                                                                                        class="dropdown-menu dropdown-menu-right">
                                                                                        <div class="controls"></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <div class="col-12 d-md-flex align-items-center">
                                                                        <input class="btn btn-secondary btn_submit"
                                                                            id="submit_FRM_CONTACT" name="submit"
                                                                            type="submit" value="Отправить">
                                                                        <input class="form-control"
                                                                            name="COMPANY_NAME_Z" placeholder=""
                                                                            autocomplete="off" required=""
                                                                            aria-required="true">
                                                                    </div>
                                                                </div>
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                    <div class="feedback-result">
                                                        <div class="modal__state modal__state--success"
                                                            style="display: none">
                                                            <div class="h3">Спасибо</div>
                                                            <p>
                                                                Ваше сообщение отправлено
                                                            </p>
                                                            <p>
                                                                <a class="modal__link-new" href="#">Заполнить еще
                                                                    форму</a>
                                                            </p>
                                                        </div>
                                                        <div class="modal__state modal__state--error"
                                                            style="display: none">
                                                            <div class="h3">Ошибка</div>
                                                            <p class="status-error">
                                                                Что-то пошло не так. Попробуйте еще раз
                                                            </p>
                                                            <p>
                                                                <a class="modal__link-new" href="#">Заполнить еще
                                                                    форму</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="preloader" id="FRM_CONTACT-preloader-1">
                                                        <div class="preloader__spinner sm"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                class="b-contacts-2__col b-contacts-2__col--with-row col-12 col-sm-6 col-lg-8">
                                                <div class="b-contacts-2__row row b-contacts-2__row--flex">
                                                    <div class="b-contacts-2__col col-12 col-lg-6">
                                                        <div class="b-contacts-2__card">
                                                            <div class="b-contacts-2__title">Управление</div>
                                                            <div class="b-contacts-2__foot">
                                                                <div
                                                                    class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                    <a href="tel:+375173007045">+375 (17) 33-13-00</a>
                                                                </div>
                                                                <div
                                                                    class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                                    <a
                                                                        href="mailto:info@ferment.by">solgkh@solgkh.by</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="b-contacts-2__title b-contacts-2__title--mid">Адреса</div>
                                        <div class="b-contacts-2__row row">
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div class="b-contacts-2__card">
                                                    <div class="b-contacts-2__title">Управление
                                                    </div>
                                                    <div class="b-contacts-2__desc">223710, г. Солигорск, <br>
                                                        <span> ул. Железнодорожная, 48</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div class="b-contacts-2__card">
                                                    <div class="b-contacts-2__title">ЖЭС №1</div>
                                                    <div class="b-contacts-2__desc">ул. К. Заслонова, 2</div>
                                                    <div class="b-contacts-2__foot">
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                            <a href="tel:+375173007045">8-017-424-33-79</a>
                                                        </div>
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                            <a href="solgkh.ges.1@gmail.com">solgkh.ges.1@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div class="b-contacts-2__card">
                                                    <div class="b-contacts-2__title">ЖЭС №2</div>
                                                    <div class="b-contacts-2__desc">ул. Набережная, 24А</div>
                                                    <div class="b-contacts-2__foot">
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                            <a href="tel:+375173789248">8-017-426-32-51</a>
                                                        </div>
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                            <a href="mailto:chsg@ferment.by">solgkh.ges.3@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div class="b-contacts-2__card">
                                                    <div class="b-contacts-2__title">ЖЭС №3</div>
                                                    <div class="b-contacts-2__desc">г.п.Старобмн ул. Краснознаменная, 2
                                                    </div>
                                                    <div class="b-contacts-2__foot">
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                            <a href="tel:+375173789248">8-017-429-64-45</a>
                                                        </div>
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                            <a href="mailto:chsg@ferment.by">solgkh.ges.7@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div class="b-contacts-2__card">
                                                    <div class="b-contacts-2__title">ЖЭС №4</div>
                                                    <div class="b-contacts-2__desc">Б. Шахтеров, 1А</div>
                                                    <div class="b-contacts-2__foot">
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                            <a href="tel:+375173789248">8-017-426-35-59</a>
                                                        </div>
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                            <a href="mailto:chsg@ferment.by">solgkh.ges.4@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div class="b-contacts-2__card">
                                                    <div class="b-contacts-2__title">ЖЭС №5</div>
                                                    <div class="b-contacts-2__desc">ул. Октябрьская, 81А</div>
                                                    <div class="b-contacts-2__foot">
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                            <a href="tel:+375173789248">8-017-425-09-19</a>
                                                        </div>
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                            <a href="mailto:chsg@ferment.by">solgkh.ges.5@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-sm-6 col-lg-4">
                                                <div class="b-contacts-2__card">
                                                    <div class="b-contacts-2__title">ЖЭС №6</div>
                                                    <div class="b-contacts-2__desc">ул. Строителей, 40</div>
                                                    <div class="b-contacts-2__foot">
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                            <a href="tel:+375173789248">8-017-426-07-96</a>
                                                        </div>
                                                        <div class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                            <a href="mailto:chsg@ferment.by">solgkh.ges.6@gmail.com</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="b-contacts-2__title b-contacts-2__title--mid mb-5">
                                            Жилищно-эксплуатационная служба № 3:</div>
                                        <div class="b-contacts-2__row row">
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-2">
                                                        <div class="b-contacts-2__title">Участок г.п.Красная Слобода
                                                        </div>
                                                        <div class="b-contacts-2__desc">ул. Советская, 27</div>
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:+375173007045">8-017-427-42-50</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-2">
                                                        <div class="b-contacts-2__title">Домановичский участок</div>
                                                        <div class="b-contacts-2__desc">д. Драчева ул.Центральная</div>
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-22-82">8-017-427-62-32</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-2">
                                                        <div class="b-contacts-2__title">Долговский участок</div>
                                                        <div class="b-contacts-2__desc">г.п.Долгое ул.Зеленая, 2</div>
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-22-82">8-017-427-22-82</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-22-82">8-017-427-23-56</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-2">
                                                        <div class="b-contacts-2__title">Новополесский участок</div>
                                                        <div class="b-contacts-2__desc">пос. Новополесский</div>
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-12-90">8-017-427-12-90</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-12-96">8-017-427-12-96</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-2">
                                                        <div class="b-contacts-2__title">Величковичский участок</div>
                                                        <div class="b-contacts-2__desc">д. Величковичи ул. Юбилейная
                                                        </div>
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-04-90">8-017-427-04-90</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-04-39">8-017-427-04-39</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-2">
                                                        <div class="b-contacts-2__title">Гоцкий участок</div>
                                                        <div class="b-contacts-2__desc">д. Гоцк ул.Коржа</div>
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-427-12-90">8-017-427-71-67</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="b-contacts-2__row b-contacts-2__row--2 row">
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__title b-contacts-2__title--mid">
                                                        Центральная диспетчерская служба</div>
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-3">
                                                        <div class="b-contacts-2__title">ул. М.Горького, 34</div>
                                                        <!-- <div class="b-contacts-2__desc">ул. М.Горького, 34</div> -->
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-425-69-14">8-017-425-69-14</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                                <a href="solgkh.cds@gmail.com">solgkh.cds@gmail.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__title b-contacts-2__title--mid">
                                                        Коммунальное <br> производство</div>
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-3">
                                                        <div class="b-contacts-2__title">ул. М. Горького, 32</div>

                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-425-84-02">8-017-425-84-02</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                                <a
                                                                    href="mailto:solgkh.kp@gmail.com">solgkh.kp@gmail.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__title b-contacts-2__title--mid">
                                                        Тепловые сети</div>
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-4">
                                                        <div class="b-contacts-2__title">ул. Железнодорожная, 5</div>
                                                        <!-- <div class="b-contacts-2__desc">Республика Узбекистан,
                                                            г.&nbsp;Ташкент, ул.&nbsp;Фаргона Йули,&nbsp;23</div> -->
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:+998977052603">8-017-426-05-83</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                                <a href="mailto:bsg@ferment.by">solgkh.ts@gmail.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__title b-contacts-2__title--mid">
                                                        Ремонтно-строительный участок</div>
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-4">
                                                        <div class="b-contacts-2__title">ул. М. Горького, 32</div>
                                                        <!-- <div class="b-contacts-2__desc">Украина, г.&nbsp;Чернигов,
                                                            пр-т&nbsp;Мира,&nbsp;<span class="nowrap">49-А</span>,
                                                            оф.&nbsp;702</div> -->
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-422-23-68">8-017-422-23-68</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                                <a href="mailto:solgkh.rsy@gmail.com">solgkh.rsy@gmail.com
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="b-contacts-2__col col-12 col-lg-6">
                                                <div class="b-contacts-2__inner">
                                                    <div class="b-contacts-2__title b-contacts-2__title--mid">
                                                        Участок по ремонту и техническому обслуживанию
                                                        электрооборудования</div>
                                                    <div class="b-contacts-2__card b-contacts-2__card--splash-color-4">
                                                        <div class="b-contacts-2__title">ул.Железнодорожная,30А</div>
                                                        <!-- <div class="b-contacts-2__desc">Республика Казахстан,
                                                            Алатауский&nbsp;<span class="nowrap">р-н</span>, <span
                                                                class="nowrap">пр-т</span>&nbsp;Райымбека,&nbsp;451А,
                                                            оф.&nbsp;206</div> -->
                                                        <div class="b-contacts-2__foot">
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--phone">
                                                                <a href="tel:8-017-423-75-26">8-017-423-75-26</a>
                                                            </div>
                                                            <div
                                                                class="b-contacts-2__contact b-contacts-2__contact--mail">
                                                                <a
                                                                    href="mailto:solgkh.rtoe@gmail.com">solgkh.rtoe@gmail.com</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
// import Contacts from '/'
export default {
    name: "Contacts",
} 
</script>

<style scoped>
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

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
}

.g-content {
    padding-bottom: 49px;
}

@media (min-width: 992px) {
    .col-lg-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

.col-lg-12 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

.b-contacts-2.type-2 {
    padding-top: 40px;
}

.b-contacts-2.type-2 .tabs {
    margin-bottom: 0;
}

.tabs {
    margin: 0 0 50px;
}

.b-contacts-2.type-2 .tabs .tab-content {
    padding-top: 40px;
}

.tabs .tab-content {
    padding: 31px 0 0;
}



.b-contacts-2.type-2 .b-contacts-2__row {
    margin-bottom: 20px;
}

@media (min-width: 576px) {
    .col-sm-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (min-width: 992px) {
    .col-lg-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
}



.b-contacts-2__col {
    display: flex;
    margin: 0 0 20px;
}

.col-12,
.col-lg-4,
.col-sm-6 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

.b-contacts-2.type-2 .form {
    margin: 0;
}

fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}

.form-group {
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -10px;
    margin-bottom: 1rem;
}

/* .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
} */

.col-12,
.col-lg-8,
.col-sm-6 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 10px;
    padding-left: 10px;
}

.dropdown-valid .input-wrap {
    position: relative;
}

.form-control {
    display: block;
    width: 100%;
    padding: 11px 20px 10px;
    font-size: 0.9rem;
    line-height: 1.5;
    color: #363636;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #adb5bd;
    border-radius: 0;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: all .25s ease;
}

.form-control:focus {
    background-color: #fff;
    border-color: #9938a6;
    outline: 0;
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

.dropdown-valid .error-drop {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
}

.dropdown-valid .error-icon {
    height: 100%;
    position: relative;
    z-index: 5;
    border: 0;
    background: 0 0;
    padding: 0 15px;
    color: #dc3545;
    cursor: pointer;
}

button,
select {
    text-transform: none;
}

button,
input {
    overflow: visible;
}

[type=reset],
[type=submit],
button,
html [type=button] {
    -webkit-appearance: button;
    cursor: pointer;
}

button {
    border-radius: 0;
}

.dropdown-valid .error-drop .dropdown-menu {
    z-index: 100;
    margin-top: 0;
    left: auto;
    max-width: 290px;
    min-width: initial;
    border: none;
    white-space: nowrap;
    border-radius: 0;
    padding: 5px 16px;
    box-shadow: 0 0 8px -1px rgb(0 0 0 / 35%);
}

.dropdown-menu-right {
    right: 0;
    left: auto;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0 0 0;
    font-size: 1.6rem;
    color: #363636;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #fff;
    border-radius: 0;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
}

.g-wrap .dropdown-valid .controls {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.b-contacts-2.type-2 .form .form-group:last-child {
    margin-bottom: 0;
}

.b-contacts-2.type-2 .form .form-group:last-child input {
    margin-bottom: 0;
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
}

.form-group .btn_submit {
    flex-shrink: 0;
    margin-bottom: 10px;
    margin-right: 3.7%;
}

[type=reset],
[type=submit],
button,
html [type=button] {
    -webkit-appearance: button;
    cursor: pointer;
}

.btn-secondary,
.btn-secondary-outline {
    background: #fee354;
    border-color: #fee354;
    color: #000;
}

.btn {
    font-family: Roboto, Helvetica, Arial, sans-serif;
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

.btn-secondary,
.btn-secondary-outline {
    background: #fee354;
    border-color: #fee354;
    color: #000;
}

.btn-secondary-outline:focus,
.btn-secondary-outline:hover,
.btn-secondary:focus,
.btn-secondary:hover {
    background: #ebc601;
    border-color: #ebc601;
    color: #000;
}

.btn:focus,
.btn:hover {
    outline: 0;
    color: #fff;
    text-decoration: none;
}

.form-control[name='COMPANY_NAME_Z'] {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border: none;
}

@media (min-width: 992px) {
    .col-lg-6 {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (min-width: 992px) {
    .col-lg-8 {
        flex: 0 0 66.66667%;
        max-width: 66.66667%;
    }
}

.b-contacts-2__col {
    display: flex;
    margin: 0 0 20px;
}

.b-contacts-2__row--flex {
    flex-grow: 1;
    margin-bottom: 0;
}

.b-contacts-2.type-2 .b-contacts-2__col--with-row .b-contacts-2__col:last-child {
    margin-bottom: 0;
}

.b-contacts-2.type-2 .b-contacts-2__col--with-row .b-contacts-2__col {
    align-items: flex-start;
}

.b-contacts-2__card {
    flex-grow: 1;
    position: relative;
    width: 100%;
    padding: 22px 25px 20px;
    background: #fff;
    box-shadow: 0 4px 14px rgb(0 0 0 / 15%);
}

.b-contacts-2__card:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 3px;
    background: linear-gradient(to right, #1e5799 0, #1e5799 25%, #7c4da7 25%, #7c4da7 50%, #9938a6 50%, #9938a6 75%, #ea4aa2 75%, #ea4aa2 100%);
}

.b-contacts-2__title {
    margin: 0 0 8px;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #000;
    font-size: 18px;
    line-height: 1.45;
}

.b-contacts-2__title--mid {
    margin: 0 0 15px;
    font-family: Roboto Light, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 36px;
    line-height: 1.35;
}

.b-contacts-2__foot {
    margin: 20px 0 0;
    padding: 15px 0 0;
    border-top: 1px solid rgba(0, 0, 0, .15);
}

.b-contacts-2.type-2 .b-contacts-2__contact--phone {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.b-contacts-2__contact {
    margin: 0 0 6px;
}

.b-contacts-2.type-2 .b-contacts-2__contact--phone>a {
    padding-right: 10px;
}

.b-contacts-2__contact>a {
    text-decoration: none;
    -webkit-text-decoration-color: rgba(54, 54, 54, 0);
    text-decoration-color: rgba(54, 54, 54, 0);
}

.b-contacts-2__contact>a,
.b-contacts-2__contact>span {
    color: #363636;
    font-size: 14px;
    line-height: 1.4;
}

a {
    color: #7c4da7;
    text-decoration: underline;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    cursor: pointer;
    transition: all .25s ease;
}

.b-contacts-2__contact>a:focus,
.b-contacts-2__contact>a:hover {
    text-decoration: underline;
    -webkit-text-decoration-color: rgba(54, 54, 54, .6);
    text-decoration-color: rgba(54, 54, 54, .6);
}

a:active,
a:focus,
a:hover {
    outline: 0;
}

a:focus,
a:hover {
    color: #7c4da7;
    text-decoration: none;
}

.b-contacts-2.type-2 .b-contacts-2__contact--mail {
    display: flex;
}

.b-contacts-2__contact:last-child {
    margin-bottom: 0;
}

.b-contacts-2__contact {
    margin: 0 0 6px;
}

.b-contacts-2__card--splash-color-2:before {
    background: #fee354;
}

.b-contacts-2__inner {
    width: 100%;
}

.b-contacts-2__card--splash-color-3:before {
    background: #ea4aa2;
}

.b-contacts-2__card--splash-color-4:before {
    background: #5e348c;
}
</style>