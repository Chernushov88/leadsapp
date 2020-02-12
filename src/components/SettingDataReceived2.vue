<template>
    <div class="col col-6 col-hd-desktop-6 col-desktop-6 col-mob-12 received-data">
            <div class="element-cart">
                <h2>Полученные данные</h2>
                <form action="">
                    <ul>
                        <li><input type="text" value="zhizn.design@gmail.com"></li>
                        <li><input type="text" value="+7 (932) 849-89-95"></li>
                    </ul>
                </form>
                <a href="#" class="btn disabled">Получить данные</a>
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
                    margin-top: 15px;
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

    }
</style>