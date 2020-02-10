<template>
    <div class="col col-3 col-hd-desktop-4 col-desktop-6 col-mob-12">
        <div class="element-cart">
            <div class="element-cart-header">
                <!-- заголовок елемента -->
                <div class="header-info">
                    <h3 class="title"><a href="#" class="link">Тестовая страница</a></h3>
                    <span class="date">11.01.2018</span>
                </div>
                <!-- настройки елемента -->
                <div class="settings">
                    <Svg3VDots/>
                </div>
            </div><!-- //element-cart-header -->
            <!-- контентная часть елемента -->
            <div class="element-cart-content">
                <div class="element-cart-content-info">
                    <div class="list">
                        <div class="item">
                            <a href="#" class="link">
                                <span class="quantity">25</span>
                                <span class="text">форм</span>
                            </a>
                        </div>
                        <div class="item">
                            <a href="#" class="link">
                                <span class="quantity">3</span>
                                <span class="text">заявки</span>
                            </a>
                        </div>
                    </div><!-- //list -->
                </div><!-- //element-cart-content-info -->
                <!-- сопряжение с социальными сетям и контактная информация -->
                <div class="connect">
                    <div class="list">
                        <div class="item active">
                            <a href="#" class="link">
                                <SvgFacebookCircle/>
                            </a>
                        </div>
                    </div><!-- //list -->
                </div><!-- //connect -->
            </div><!-- //element-cart-content -->
        </div><!-- //element-cart -->
    </div>
</template>

<script>
import SvgFacebookCircle from '@/components/svg/SvgFacebookCircle'
import Svg3VDots from '@/components/svg/Svg3VDots'

export default {
    components: {
        SvgFacebookCircle,
        Svg3VDots,
    }
}
</script>
<!-- Стили компонента -->
<style scoped>
    .element-cart {
        border-radius: 15px;
        background-color: white;
        padding: 20px 20px 20px 25px;
        margin-bottom: 30px;
        min-height: 140px;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0);
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0);
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out; }
    @media screen and (max-width: 1023px) {
        .element-cart {
            margin-bottom: 20px; } }
    .element-cart:hover {
        -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1); }

    .element-cart-header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between; }
    .element-cart-header .header-info {
        max-width: 100%;
        overflow: hidden; }
    .element-cart-header .header-info .title {
        display: block;
        margin: 0 20px 7px 0; }
    .element-cart-header .header-info .link {
        text-decoration: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        display: block; }
    .element-cart-header .header-info .link:hover {
        color: #C5C5C5; }
    .element-cart-header .header-info .link:before {
        display: none; }
    .element-cart-header .header-info .date {
        color: #B6B6B6;
        display: block;
        margin-bottom: 5px; }
    .element-cart-header .settings circle {
        fill: #D3D3D3; }
    .element-cart-header .settings:hover {
        cursor: pointer; }
    .element-cart-header .settings:hover circle {
        fill: #C5C5C5; }

    .element-cart-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end; }
    .element-cart-content .element-cart-content-info {
        margin-right: 10px;
        width: 100%; }
    .element-cart-content .element-cart-content-info .list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 0 -15px;
        width: calc(100% + 30px); }
    .element-cart-content .element-cart-content-info .item {
        padding: 0 15px;
        margin-bottom: 5px; }
    .element-cart-content .element-cart-content-info .link {
        text-decoration: none;
        display: block;
        height: 100%; }
    .element-cart-content .element-cart-content-info .link:before {
        border: 1.5px dashed #00ACDC; }
    .element-cart-content .element-cart-content-info .link .quantity {
        font-size: 30px;
        line-height: 120%;
        margin-right: 3px;
        font-family: "PT_Root_UI_Bold", sans-serif; }
    .element-cart-content .element-cart-content-info .link .text {
        font-size: 16px;
        line-height: 120%;
        font-family: "PT_Root_UI_Medium", sans-serif; }
    .element-cart-content .connect .list {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 0 -10px;
        width: calc(100% + 20px); }
    .element-cart-content .connect .item {
        padding: 0 10px; }
    .element-cart-content .connect .item:not(.active) .link {
        pointer-events: none;
        cursor: auto; }
    .element-cart-content .connect .item:not(.active) path {
        fill: #DADADA; }
    .element-cart-content .connect .link {
        text-decoration: none;
        display: block;
        height: 100%; }
    .element-cart-content .connect .link:before {
        display: none; }

    .element-carts-list-action {
        margin-bottom: 15px; }
    @media screen and (max-width: 1023px) {
        .element-carts-list-action {
            margin-bottom: 0; } }
    .element-carts-list-action .row {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center; }
    .element-carts-list-action .action-wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin: 0 auto;
        width: 100%; }
    @media screen and (max-width: 667px) {
        .element-carts-list-action .action-wrap {
            max-width: 300px; } }
    .element-carts-list-action .show-more {
        width: 100%;
        margin-right: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0);
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out; }
    @media screen and (max-width: 1023px) {
        .element-carts-list-action .show-more {
            margin-right: 20px; } }
    .element-carts-list-action .show-more:hover {
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }

</style>
