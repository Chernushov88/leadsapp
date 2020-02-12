<template>
    <div class="element-cart">
        <form action="">
            <ul>
                <li>
                    <label>Ваша почта</label>
                    <input type="text" placeholder="" value="zhizn.design@gmail.com">
                </li>
                <li>
                    <label>Новый пароль</label>
                    <input type="text" placeholder="Введите новый пароль">
                    <input type="text" placeholder="Повторите новый пароль">
                </li>
            </ul>
            <button type="submit" class="btn">Сохранить</button>
        </form>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="less">
 form{
     display: flex;
     height: 100%;
     margin: 0;
     flex-wrap: wrap;
     ul{
         width: 100%;
         padding: 0;
         li{
             padding: 0 0 20px 0;
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
         }
     }
     button{
         min-width: 200px;
         margin: auto 0 0 0;
         background: #10294C;
         border-color: #10294C;
     }
 }
</style>