<template>
    <div class="col col-4 col-hd-desktop-4 col-desktop-6 col-mob-12">
        <div class="element-cart">
            <div class="element-cart-header">
                <div class="header-info">
                    <h3 class="title"><a href="#" class="link">Для онлайн-школы</a></h3>
                </div>
                <div class="header-link">
                    <h5><a href="#" class="link">Форма 3</a></h5>
                </div>
            </div>
            <div class="element-cart-content">
                <ul class="element-cart-content-info">
                    <li class="phone"><h3>+7 932 849-89-95</h3></li>
                    <li class="time"><h6>13:02:34:35</h6>   <span>11.01.2018</span></li>
                </ul>
                <div class="connect">
                    <div class="list">
                        <div class="item active">
                            <a href="#" class="link">
                                <SvgTelegram/>
                            </a>
                        </div>
                    </div><!-- //list -->
                </div><!-- //connect -->
            </div>

        </div>
    </div>
</template>

<script>
    import SvgTelegram from '@/components/svg/SvgTelegram'
    export default {
        components: {
            SvgTelegram,
        }
    }
</script>

<style scoped>
    .header-info{
        /*margin-bottom: 25px;*/
    }
    .header-info .title a.link{
        overflow: visible;
    }
    .header-info .title a:hover{
        /*text-decoration: none;*/
        color: #039BE5;
    }
    .header-info .title a:before{
        display: block !important;
        top: calc(100% + 0px);
    }
    .header-link h5 a{
        color: #B6B6B6;
    }
    .header-link h5 a:hover{
        text-decoration: none;
    }
    .header-link h5 a:before{
        border-color: #B6B6B6;
        top: calc(100% + 0px);
    }
    .element-cart-content-info{
        margin: 0;
    }
    .element-cart-content-info li{
        position: relative;
        margin: 0;
        padding-left:  22px;
    }
    .element-cart-content-info li:before{
        content: '';
        width: 16px;
        height: 16px;
        display: block;
        position: absolute;
        left: 0;
    }
    .element-cart-content-info li h3{
        margin-bottom: 10px;
    }
    .element-cart-content-info li h6{
        margin: 0;
    }
    .element-cart-content-info .phone:before{
        background: url("~@/assets/images/statistic/phoneBg.png");
    }
    .element-cart-content-info .time{
        display: flex;
        color: #444;
    }
    .element-cart-content-info .time:before{
        background: url("~@/assets/images/statistic/timeBg.png");
    }
    .element-cart-content-info .time span{
        display: inline-block;
        margin-left: 10px;
        color: #B6B6B6;
    }



</style>