<template>
    <div class="sl-digits">
        <div class="bg-wrap">
            <div class="bg"></div>
        </div>
        <div class="content">
            <div class="head">
                <div class="h2 b-title">О предприятии в цифрах</div>
                <div class="b-desc">Солигорское городское унитарное производственное
                    предприятие «ЖКХ «Комплекс» создано 23 апреля 1990 года и находится
                    в районной коммунальной собственности.В настоящее время СГУПП «ЖКХ «Комплекс»
                    насчитывает 15 структурных подразделений: управление, семь жилищно-эксплуатационных служб,
                    тепловые сети, центральная диспетчерская служба, участок по ремонту оборудования и 
                    санитарно-технических систем, участок по ремонту и техническому обслуживанию электрооборудования,
                    ремонтно-строительный участок, коммунальное производство, котельное хозяйство.
                </div>   
            </div>
            <div class="wrap">
                <div class="inner">
                    <div class="title">1990</div>
                    <div class="desc">Год основания нашего предприятия</div>
                </div>
                <div class="inner">
                    <div class="title">360+</div>
                    <div class="desc">Объектов</div>
                </div>
                <div class="inner">
                    <div class="title">60000</div>
                    <div class="desc">Пользователей</div>
                </div>
                <div class="inner">
                    <div class="title">1000</div>
                    <div class="desc">Квалифицированных работников</div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        name: "DigitsSection",
    }
</script>

<style scoped>
    .sl-digits {
        position: relative;
        padding: 79px 0 100px;
    }
    .sl-digits .bg-wrap {
        z-index: 0;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 1920px;
        margin-left: -960px;
    }
    .sl-digits .bg-wrap:before {
        content: '';
        z-index: 1;
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.8);
    }

    .sl-digits .bg {
        z-index: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url("../../img/sl-digits/sl-digits-bg-01.jpg");
    }

    .sl-digits .content {
        z-index: 1;
        position: relative;
        color: #fff;
    }
    .sl-digits .head {
        display: flex;
        margin: 0 0 29px;
    }
    .sl-digits .b-title {
        color: #fff;
        flex: 0 0 31%;
        max-width: 31%;
        line-height: 1.3;
    }
    .b-title {
        margin: 0 0 5px;
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
    .sl-digits .b-title+.b-desc {
        padding: 21px 0 0 14px;
    }
    .sl-digits .b-desc {
        flex-grow: 1;
        font-family: Roboto,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 1.5;
    }
    .wrap{
        display: flex;
        justify-content: space-between;
    }
    .sl-digits .title {
        margin: 0 0 6px;
        font-family: Roboto-Medium,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #fee354;
        font-size: 50px;
        line-height: 1.2;
    }
    .desc{
        font-family: Roboto,Helvetica,Arial,sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #fff;
        font-size: 15px;
        line-height: 1.45;
    }
    
</style>