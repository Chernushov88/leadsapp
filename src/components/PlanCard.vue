<template>
    <div class="col col-3 col-hd-desktop-4 col-desktop-6 col-mob-12">
        <div class="element-cart plane-cart">
            <div class="plane-cart-title">
                <h2>
                    <img src="@/assets/images/plan/begging.png" alt="">
                    <span>НАЧИНАЮЩИЙ</span>
                </h2>
                <div class="icon">
                    <SvgPlus />
                </div>
            </div>
            <div class="plane-cart-container">
                <ul class="list">
                    <li>Подключение 1 страницы Facebook</li>
                    <li>До 50 заявок в месяц</li>
                    <li>Интеграция</li>
                </ul>
            </div>
            <div class="plane-cart-tarif-prising"><h2>FREE</h2></div>
        </div>
    </div>
</template>

<script>
    import SvgPlus from '../components/svg/SvgPlus'
    export default {
        components: {
            SvgPlus
        }
    }
</script>

<style scoped lang="less">
.plane-cart{
    &-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            display: flex;
            margin: 0;
            align-items: center;
            img{

            }
            span{

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
</style>