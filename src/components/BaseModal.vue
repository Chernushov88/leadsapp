<template>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div class="modal-header">
                    <button class="modal-default-button" @click.stop="$emit('close')">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 1.6L14.4 0L8 6.4L1.6 0L0 1.6L6.4 8L0 14.4L1.6 16L8 9.6L14.4 16L16 14.4L9.6 8L16 1.6Z" fill="white"/>
                        </svg>
                    </button>
                    <slot name="header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="body">

                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .modal{
        &-mask {
             position: fixed;
             z-index: 9998;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             background-color: rgba(0, 0, 0, .6);
             display: table;
             transition: opacity .3s ease;
             /*display: none;*/
         }
        &-wrapper {
             display: table-cell;
             vertical-align: middle;
         }
        &-container {
             width: 100%;
             max-width: 500px;
             margin: 0px auto;
             padding: 40px 50px;
             background-color: #fff;
             border-radius: 15px;
             box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
             transition: all .3s ease;
             font-family: Helvetica, Arial, sans-serif;
         }
        &-header {
             position: relative;
            padding-bottom: 1px;
            .modal-default-button{
                position: absolute;
                top: -45px;
                right: -87px;
                background: transparent;
                border-color: transparent;
                padding: 0;
            }
            h3 {
                margin-top: 0;
                a{
                    color: #00ACDC;
                    &:before{
                         display: none;
                    };
                }
            }
            p{

            }
        }
        &-body {
            margin: 20px 0;
            .text{
                text-align: center;
                margin-bottom: 10px;
            }
            input{
                border: 1px solid white;
                padding: 10px 17px;
                font-size: 15px;
                width: 100%;
                border-radius: 40px;
                line-height: 30px;
                margin-bottom: 0;
                font-family: "PT_Root_UI_Regular", sans-serif;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                -webkit-appearance: none;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                background: #F6F6F6;
                height: 45px;
                border-radius: 10px;
                font-size: 16px;
                &.email{
                    /*background: url("~@/assets/images/statictic/messege.svg");*/
                    background: #F6F6F6 url("~@/assets/images/statistic/messege.png") 96% center no-repeat;
                }
                &:placeholder{
                    font-size: 15px;
                    color: #B6B6B6;
                }
            }
            h2{
                padding-bottom: 22px;
                text-align: center;
                a{
                    font-weight: bold;
                    font-size: 24px;
                    line-height: 120%;
                    color: #00AEE0;
                    &:before{
                        display: none;
                    }
                }
            }
        }
        &-footer{
            .btn{
                display: block;
                width: 200px;
                margin: 0 auto;
                background: #10294C;
                border-color: #10294C;
                &:hover{
                     background: #00ACDC;
                     border-color: #00ACDC;
                }
            }
        }
        &-enter {
             opacity: 0;
            .modal-container{
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
        }
        &-leave{
            &-active {
             opacity: 0;
                .modal-container{
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }
            }
        }
    }
    @media only screen and (max-width: 667px){
        .modal-container{padding: 30px 10px;}
    }
</style>
