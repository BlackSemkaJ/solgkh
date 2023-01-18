<template>
    <div class="sl-main-video">
        <div class="wrap cursor inited">
            <div class="slider slick-initialized slick-slider">
                <div class="slick-list draggable">
                    <div class="slick-track">
                        <div class="slide slick-slide slick-current slick-active">
                            <div class="inner">
                                <div class="video-bg">
                                    <div class="video-bg js-video-bg">
                                        <div class="video-bg__poster-wrap js-poster-wrap">
                                            <picture class="video-bg__poster">
                                                <img class="js-srcset" src="/img/slaider/slaid_1.jpg" alt="" data-src-xs="/img/slaider/slaid_1.jpg">
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <div class="decor js-parallax-scene">
                                    <div class="decor-layer js-parallax-layer">
                                        <div class="decor-img decor-img--3">

                                        </div>
                                    </div>
                                    <div class="decor-layer js-parallax-layer">
                                        <div class="decor-img decor-img--4">

                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="content">
                                        <div class="b-wrap">
                                            <div class="h1 title">Мы рады приветствовать <br> вас на сайте <br> СГУПП «ЖКХ «Комплекс»!</div>
                                            <div class="text">Здесь мы собрали полезную информацию для вас!</div>
                                            <div class="text-circle"></div>
                                        </div>
                                        <div class="slogan-wrap">
                                            <div class="slogan">Солигорск – город для жизни!</div>
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
        name: "Slaider",
        
    }
</script>

<style scoped>
   .sl-main-video {
        position: relative;
    }
    .sl-main-video .wrap {
        position: relative;
        left: 50%;
        width: 1920px;
        margin-left: -960px;
        background: #dee2e6;
    }
    .slick-slider {
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    }
    .cursor .caroufredsel_wrapper, .cursor .slick-list {
        cursor: url(/img/cursor/openhand.cur),move!important;
    }
    .slick-slider .slick-list, .slick-slider .slick-track {
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
    }
    .slick-list {
        position: relative;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }
    .slick-track{
        opacity: 1;
        width: 1920px;
        transform: translate3d(0px, 0px, 0px);
    }
    .slick-track {
        position: relative;
        left: 0;
        top: 0;
        margin-left: auto;
        margin-right: auto;
    }
    .slick-track:after, .slick-track:before {
        content: "";
        display: table;
    }
    .slide{
        width: 1920px;
    }
    .slick-initialized .slick-slide {
        display: block;
    }
    .slick-slide {
        float: left;
        height: 100%;
        min-height: 1px;
        display: none;
    }
    .slick-track:after {
        clear: both;
    }
    .slick-track:after, .slick-track:before {
        content: "";
        display: table;
    }
    .sl-main-video .inner {
        position: relative;
        overflow: hidden;
        height: 696px;
    }
    .sl-main-video .video-bg {
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #343a40;
}
.video-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.video-bg__poster, .video-bg__poster-wrap, .video-bg__video-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.video-bg.play .video-bg__poster {
    opacity: 0;
    visibility: hidden;
}
.video-bg__poster {
    opacity: 1;
    visibility: visible;
}
.video-bg__poster, .video-bg__video {
    max-width: none;
    max-height: 100%;
    transition: all .3s ease;
}
.sl-main-video .video-bg img {
    max-height: 100%;
}
.sl-main-video .video-bg img, .sl-main-video .video-bg video {
    max-width: none;
}
.video-bg__poster img {
    max-width: none;
    max-height: 100%;
    transform-origin: bottom right;
	animation: grow 150000ms ease;
}
.g-wrap img, .img-responsive, .modal img {
    display: block;
    max-width: 100%;
    height: auto;
}

@keyframes grow {
	0% {
		transform: scale(1);
	}
	100% {
		transform: scale(2);
	}
}
.slick-slide img {
    pointer-events: none;
}
img {
    vertical-align: middle;
    border-style: none;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}
.decor{
    transform: translate3d(0px, 0px, 0px) rotate(0.0001deg);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    pointer-events: none;
}
.sl-main-video .video-bg~.decor {
    z-index: 3;
}
.sl-main-video .decor {
    z-index: 1;
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1920px;
    margin-left: -960px;
}
.decor-layer{
    transform: translate3d(36px, -119.8px, 0px);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    position: relative;
    display: block;
    left: 0px;
    top: 0px;
}
.sl-main-video .decor-layer {
    position: absolute!important;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.decor-img{
    background-image: url(/img/slaider/sl-main-video-decor.svg);
}
.sl-main-video .decor-img--3 {
    top: 14px;
    left: 417px;
}
.sl-main-video .decor-img {
    z-index: 1;
    display: block;
    width: 157px;
    height: 157px;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    opacity: .3;
    pointer-events: none;
}
.sl-main-video .decor-img--4 {
    bottom: 7px;
    left: 705px;
}

.content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    position: relative;
}
.b-wrap {
    max-width: 620px;
    padding: 36px 0 30px;
    color: #fff;
}
.title {
    display: block;
    overflow: hidden;
    margin: 0 0 20px;
    max-height: 8.75em;
    font-family: Roboto-Light,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #fff;
    font-size: 43px;
    line-height: 1.25;
    text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    text-align: center;
}
.text {
    text-align: center;
    display: block;
    margin: 0 0 30px;
    overflow: hidden;
    max-height: 5.8em;
    font-family: Roboto-Regular,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 1.45;
    text-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    color: #fff;
}
.text-circle {
    position: absolute;
    display: block;
    left: -104px;
    top: 50%;
    width: 754px;
    height: 754px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: rgba(94,52,140,.7);
    border-radius: 50%;
    z-index: -1;
}
.container {
    z-index: 2;
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto;
    margin-left: auto;
}
@media (min-width: 1220px){
    .container {
        max-width: 1190px;
    }
}
.sl-main-video .slogan-wrap {
    position: absolute;
    right: 0;
    bottom: 50px;
    width: 233px;
}
.slogan {
    font-family: Roboto-Light,Helvetica,Arial,sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #fff;
}
.slogan-wrap:after {
    content: '';
    position: absolute;
    left: -130px;
    top: -89px;
    width: 502px;
    height: 502px;
    background: rgba(153,56,166,.5);
    border-radius: 50%;
    z-index: -1;
}
</style>