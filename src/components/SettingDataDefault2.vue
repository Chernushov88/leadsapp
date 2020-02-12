<template>
    <div class="col col-6 col-hd-desktop-6 col-desktop-6 col-mob-12">
            <div class="element-cart">
                <h2>Данные по умолчанию</h2>
                <form action="">
                    <ul>
                        <li><input type="text" placeholder="Email"></li>
                        <li><input type="text" placeholder="Номер телефона"></li>
                        <li><p>Соедините поля с помощью по умолчанию слева с полями, полученными из формы, чтобы мы могли корректно сортировать данные для Вас</p></li>
                    </ul>
                    <button type="submit" class="btn">Тестовая заявка</button>
                </form>
            </div>
        </div>
</template>

<script>
    export default {
        name: "SettingDataDefault"
    }
</script>

<style scoped lang="less">
    .element-cart{
        padding-bottom: 50px;
    }
    form {
        display: flex;
        height: 100%;
        margin: 0;
        flex-wrap: wrap;
        ul{
            width: 100%;
            padding: 0;
            li{
                margin: 0;
                padding: 0 0 5px 0;
                &:before{
                    display: none;
                }
                label{
                    display: block;
                    margin-bottom: 10px;
                    font-style: normal;
                    font-weight: 500;
                    font-family: 'PT_Root_UI_Medium';
                    font-size: 13px;
                    line-height: 130%;
                }
                input{
                    margin-bottom: 10px;
                    background: #F6F6F6;
                    height: 45px;
                    border-radius: 10px;
                    font-size: 16px;
                    &:placeholder{
                        font-size: 15px;
                        color: #B6B6B6;
                    }
                }
                p{
                    margin: 15px 0 50px;
                    color: #B6B6B6;
                }
            }
        }
        button{
            min-width: 200px;
            margin: auto auto 0;
            background: #F04E23;
            border-color: #F04E23;
        }
    }
    .received-data{
        &-in{
            text-align: center;
        }
        &-ico{
            display: inline-block;
            margin: 20px auto 10px ;
            position: relative;
            img{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
        h3{
            margin-bottom: 15px;
        }
        p{
            margin-bottom: 35px;
            color: #B6B6B6;
        }
        .btn {
            align-self: center;
            margin-bottom: 0;
            background: #10294C;
            border-color: #10294C;
        }
    }
    @media screen and (max-width: 667px){
        .element-cart{padding-bottom: 20px;}
        .received-data{
            &-in {
                display: flex;
                align-items: center;
            }
            &-ico{
                margin: 0 20px 0 0px;
            }
        }
        form ul li p[data-v-251cc26a] {margin-bottom: 0;}
    }
</style>