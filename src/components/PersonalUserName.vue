<template>
    <div class="element-cart personal">
        <div class="personal-title">
            <div class="photo">
                <img src="@/assets/images/personal/photo.png" alt="">
            </div>
            <h3>Константин Константинопольский</h3>
        </div>
        <div class="personal-content">
            <div class="corent-rate">Действующий тариф</div>
            <h2>
                <span>ПРОФЕССИОНАЛ</span>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                        <path d="M12.1387 13.5379C12.0222 10.8766 10.9492 8.55876 9.38147 7.4998C10.95 6.44124 12.023 4.12297 12.1387 1.46207C12.3963 1.33549 12.5386 1.19723 12.5386 1.0509C12.5386 0.470425 10.2832 0 7.49977 0C4.71672 0 2.46094 0.470425 2.46094 1.0513C2.46094 1.19723 2.60364 1.3359 2.86082 1.46207C2.97732 4.12257 4.05039 6.44124 5.61807 7.5002C4.04998 8.55836 2.97691 10.877 2.86082 13.5379C2.60364 13.6641 2.46094 13.8028 2.46094 13.9495C2.46094 14.5296 4.71672 15.0004 7.49977 15.0004C10.2828 15.0004 12.5386 14.53 12.5386 13.9495C12.5386 13.8024 12.3963 13.6637 12.1387 13.5379ZM6.55408 7.88275C6.69315 7.82793 6.78708 7.67354 6.78708 7.5002C6.78708 7.32606 6.69315 7.17207 6.55408 7.11685C4.92231 6.47671 3.74403 4.30437 3.55698 1.70474C4.4801 1.94701 5.90145 2.1026 7.49977 2.1026C9.09809 2.1026 10.5194 1.94701 11.4426 1.70474C11.2555 4.30437 10.0776 6.47671 8.44546 7.11685C8.30598 7.17167 8.21246 7.32606 8.21246 7.5002C8.21246 7.67394 8.30598 7.82793 8.44546 7.88275C10.0776 8.52288 11.2555 10.6952 11.443 13.2949C11.2946 13.2558 11.1326 13.2195 10.9596 13.1856C10.4283 11.035 7.50017 9.14931 7.50017 9.14931C7.50017 9.14931 4.57241 11.035 4.04071 13.1856C3.86778 13.2195 3.70573 13.2562 3.55739 13.2949C3.74443 10.6948 4.92231 8.52288 6.55408 7.88275ZM7.49977 7.00478C7.49977 7.00478 6.86568 6.50614 6.13445 5.70839C8.12499 5.2815 9.74588 4.33662 10.6251 3.11924C9.68703 5.28352 7.49977 7.00478 7.49977 7.00478Z" fill="#B4B4B4"/>
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="15" height="15" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <div class="day">15 дней</div>
            </h2>
            <ul class="list">
                <li>Подключено до <a href="#">5 страниц Facebook</a></li>
                <li>До <a href="#">500 заявок</a> в месяц</li>
                <li>Интеграция</li>
            </ul>
            <ul class="price">
                <li><div class="nub">2 500</div> <span>руб./месяц</span></li>
                <li><div class="nub">1750</div> <span>при оплате на год</span></li>
            </ul>
            <a href="#" class="btn">Сменить тариф</a>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang="less">
.personal{
    &-title{
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 20px;
        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: -20px;
            display: block;
            width: calc(100% + 40px);
            height: 1px;
            background: #E6E6E6;
        }
        .photo{
            overflow: hidden;
            width: 60px;
            height: 60px;
            margin-right: 15px;
            border-radius: 50%;
            img{
                width: 100%;
                height: auto;
            }
        }
        h3{
            margin: 0;
        }
    }
    &-content{
        .corent-rate{
            font-size: 15px;
            color: #B6B6B6;
        }
        h2{
            display: flex;
            margin-top: 10px;
            align-items: center;
            span{

            }
            svg{
                margin: 0 10px 0 15px;
            }
            .day{
                font-family: 'PT_Root_UI_Medium';
                font-size: 13px;
                color: #FF5252;
            }
        }
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
        .price{
            padding: 0;
            li{
                display: flex;
                margin-bottom: 5px;
                padding: 0;
                letter-spacing: 0.05em;
                font-size: 18px;
                line-height: 130%;
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
        .btn{
            width: 100%;
            margin: 2px 0 5px 0;
            border: 1px solid #F04E23;
            background: #F04E23;
            &:hover{
                background: #00ACDC;
                border-color: #00ACDC;
            }
        }
    }
}
</style>