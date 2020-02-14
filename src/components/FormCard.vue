<template>
    <div class="col col-4 col-hd-desktop-4 col-desktop-6 col-mob-12">
        <div class="element-cart">
            <div class="element-cart-header">
                <div class="header-info">
                    <h3 class="title"><a href="#" class="link">Форма 1</a></h3>
                    <span class="date">11.01.2018</span>
                </div>
                <div class="header-link">
                    <h5><a href="#" class="link">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5262 6.97937L15.0718 5.89966C15.0718 5.89966 16.129 3.51428 16.0357 3.42256L14.6358 2.05603C14.5391 1.96182 12.1529 3.05071 12.1529 3.05071L11.0523 2.60631C11.0523 2.60631 10.0801 0.188416 9.94673 0.188416H7.97156C7.83399 0.188416 6.93436 2.61132 6.93436 2.61132L5.83547 3.05738C5.83547 3.05738 3.39923 2.02185 3.30585 2.1144L1.90847 3.48259C1.81176 3.57681 2.92399 5.91383 2.92399 5.91383L2.46959 6.99188C2.46959 6.99188 0 7.9432 0 8.0716V10.0076C0 10.1427 2.47543 11.0239 2.47543 11.0239L2.92983 12.1003C2.92983 12.1003 1.87262 14.484 1.96517 14.5757L3.36421 15.9456C3.45926 16.0382 5.84631 14.9493 5.84631 14.9493L6.9477 15.3953C6.9477 15.3953 7.91987 17.8116 8.0541 17.8116H10.0293C10.166 17.8116 11.0665 15.3887 11.0665 15.3887L12.1687 14.9426C12.1687 14.9426 14.5999 15.9781 14.6941 15.8872L16.0932 14.519C16.1907 14.4232 15.076 12.0878 15.076 12.0878L15.5296 11.0098C15.5296 11.0098 18 10.0568 18 9.92671V7.99239C18.0008 7.85816 15.5262 6.97937 15.5262 6.97937ZM11.8861 8.99957C11.8861 10.5562 10.5912 11.8235 9.00042 11.8235C7.41127 11.8235 6.11478 10.5562 6.11478 8.99957C6.11478 7.44294 7.41127 6.1773 9.00042 6.1773C10.5921 6.17813 11.8861 7.44294 11.8861 8.99957Z" fill="#DADADA"/>
                        </svg>
                    </a></h5>
                </div>
            </div>
            <div class="element-cart-content">
                <div class="element-cart-content-info">
                    <div class="list">
                        <div class="item">
                            <a href="#" class="link">
                                <span class="quantity">33</span>
                                <span class="text">заявки</span>
                            </a>
                        </div>
                    </div><!-- //list -->
                </div>
                <div class="connect">

                        <SvgFormIcon />
                   <!-- //list -->
                </div><!-- //connect -->
            </div>

        </div>
    </div>
</template>

<script>
    import SvgFormIcon from '../components/svg/SvgFormIcon'
    export default {
        components: {
            SvgFormIcon
        }
    }
</script>

<style scoped lang="less">

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
    .element-cart-header .header-info .link:before{
        display: none !important;
    }
    .element-cart-content-info{
        margin: 0;
        width: calc(100% - 60px);
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
    .header-link a:before{
        display: none;
    }
</style>