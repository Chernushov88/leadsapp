<template>
    <div class="col col-3 col-hd-desktop-4 col-desktop-6 col-mob-12">
        <div class="element-cart plane-cart">
            <div class="plane-cart-title">
                <h2>
                    <img v-if="tarif.type==='beginer'" src="@/assets/images/plan/begging.png" alt="">
                    <img v-else-if="tarif.type==='specialist'" src="@/assets/images/plan/specialist.png" alt="">
                    <img v-else-if="tarif.type==='proffesional'" src="@/assets/images/plan/proffesional.png" alt="">
                    <img v-else-if="tarif.type==='maximalist'" src="@/assets/images/plan/maximalist.png" alt="">
                    <span>{{tarif.name}}</span>
                </h2>
                <div class="icon">
                    <svg v-if="tarif.type==='maximalist'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48615 0 0 4.48577 0 10C0 15.5142 4.48615 20 10 20C15.5138 20 20 15.5142 20 10C20 4.48577 15.5138 0 10 0ZM15.575 6.665L9.42115 13.5881C9.26962 13.7585 9.05846 13.8462 8.84577 13.8462C8.67692 13.8462 8.50731 13.7908 8.36539 13.6777L4.51923 10.6008C4.18769 10.3358 4.13385 9.85154 4.39923 9.51962C4.66423 9.18769 5.14885 9.13385 5.48038 9.39923L8.75615 12.0196L14.425 5.64231C14.7065 5.32462 15.1935 5.29615 15.5108 5.57846C15.8285 5.86115 15.8573 6.34731 15.575 6.665Z" fill="#67BC59"/>
                    </svg>
                    <svg v-else="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48615 0 0 4.48577 0 10C0 15.5142 4.48615 20 10 20C15.5138 20 20 15.5142 20 10C20 4.48577 15.5138 0 10 0ZM14.8077 10.7692H10.7692V15C10.7692 15.4246 10.4246 15.7692 10 15.7692C9.57539 15.7692 9.23077 15.4246 9.23077 15V10.7692H5.19231C4.76769 10.7692 4.42308 10.4246 4.42308 10C4.42308 9.57539 4.76769 9.23077 5.19231 9.23077H9.23077V5.38462C9.23077 4.96 9.57539 4.61538 10 4.61538C10.4246 4.61538 10.7692 4.96 10.7692 5.38462V9.23077H14.8077C15.2323 9.23077 15.5769 9.57539 15.5769 10C15.5769 10.4246 15.2323 10.7692 14.8077 10.7692Z"
                              fill="#f14e23"/>
                    </svg>
                </div>
            </div>
            <div class="plane-cart-container">
                <ul v-if="tarif.type==='beginer'" class="list">
                    <li>Подключение 1 страницы Facebook</li>
                    <li>До 50 заявок в месяц</li>
                    <li>Интеграция</li>
                </ul>
                <ul v-else-if="tarif.type==='specialist'" class="list">
                    <li>Подключение до <span class="blue"> 3 страниц Facebook</span></li>
                    <li>До <span class="blue"> 300 заявок</span> в месяц</li>
                    <li>Интеграция</li>
                </ul>
                <ul v-else-if="tarif.type==='proffesional'" class="list">
                    <li>Подключение до <span class="red"> 5 страниц Facebook</span></li>
                    <li>До <span class="red"> 500 заявок</span> в месяц</li>
                    <li>Интеграция</li>
                </ul>
                <ul v-else-if="tarif.type==='maximalist'" class="list">
                    <li>Подключение до <span class="red">20 страниц Facebook</span></li>
                    <li>До <span class="red"> 500 заявок</span> в месяц</li>
                    <li>Интеграция</li>
                </ul>  
            </div>
            <div v-if="tarif.type === 'beginer'" class="plane-cart-tarif-prising"><h2>FREE</h2></div>
            <ul v-else="" class="price">
                <li><div class="nub">1400</div> <span>руб./месяц</span></li>
                <li><div class="nub">990</div> <span>при оплате на год</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    // import SvgPlus from '../components/svg/SvgPlus'
    export default {
        components: {
            // SvgPlus
        },
        props: {
            tarif: Object
        }
    }
</script>

<style scoped lang="less">
.plane-cart{
    &-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        h2{
            display: flex;
            margin: 0;
            align-items: center;
            img{

            }
            span{
                margin-left: 7px;
            }
        }
        .icon{

        }
    }
    &-container{
        .list{
            li{
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                padding: 0;
                &:before{
                    content: '';
                    display: inline-block;
                    width: 15px;
                    height: 15px;
                    line-height: 100%;
                    font-family: 'PT_Root_UI_Medium';
                    font-size: 16px;
                    background: url("~@/assets/images/personal/checked.svg");
                    background-size: contain;
                }
                a{
                    margin: 0 3px;
                    color: #F04E23;
                    &:before{
                        display: none;
                    }
                }
                span{
                    display: inline-block;
                    margin: 0 3px;
                }
                .red{
                    color: rgb(241, 78, 35);;
                }
                .blue{
                    color: #00ACDC;
                }
            }
        }
    }
    &-tarif-prising{
        h2{
            margin: 0;
            color: #34C031;
        }
    }
}
.price{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li{
        display: flex;
        margin-bottom: 5px;
        padding: 0;
        letter-spacing: 0.05em;
        font-size: 18px;
        line-height: 130%;
        &:first-child{
            margin-right: 25px;
        }
        &:before{
            display: none;
        }
        .nub{
            font-family: 'PT_Root_UI_Bold';
            margin-right: 4px;
        }
        span{
            font-family: 'PT_Root_UI_Regular';
            color: #B6B6B6;
        }
    }
}
</style>