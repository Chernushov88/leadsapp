<template>
<div class="modal-mask" >
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
                        <div class="modal-body-monthYear">
                            <button>
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.709859 9.0099L9.30956 0.410486C9.8566 -0.136824 10.7435 -0.136824 11.2903 0.410486C11.8371 0.957308 11.8371 1.8442 11.2903 2.39098L3.68092 10.0001L11.2901 17.609C11.8369 18.1561 11.8369 19.0429 11.2901 19.5897C10.7433 20.1368 9.85638 20.1368 9.30934 19.5897L0.709637 10.9902C0.436225 10.7166 0.299674 10.3585 0.299674 10.0002C0.299674 9.64171 0.436491 9.28331 0.709859 9.0099Z" fill="#C4C4C4"/>
                                </svg>
                            </button>
                            <div class="monthYear">
                                <span>март</span>
                                <span>2019</span>
                            </div>
                            <button>
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.2901 10.9901L2.69044 19.5895C2.1434 20.1368 1.25646 20.1368 0.709678 19.5895C0.162855 19.0427 0.162855 18.1558 0.709678 17.609L8.31908 9.99985L0.709899 2.39095C0.163076 1.84391 0.163076 0.957105 0.709899 0.410283C1.25672 -0.136761 2.14362 -0.136761 2.69066 0.410283L11.2904 9.00983C11.5638 9.28337 11.7003 9.6415 11.7003 9.99981C11.7003 10.3583 11.5635 10.7167 11.2901 10.9901Z" fill="#C4C4C4"/>
                                </svg>
                            </button>
                        </div>
                        <div class="modal-body-table">
                            <table>
                                <thead>
                                <tr>
                                    <th>Пн</th>
                                    <th>Вт</th>
                                    <th>Ср</th>
                                    <th>Чт</th>
                                    <th>Пт</th>
                                    <th>Сб</th>
                                    <th>Вс</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="muted">29</td>
                                    <td class="muted">30</td>
                                    <td class="muted">31</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td class="active">13</td>
                                    <td class="visited">14</td>
                                    <td class="visited">15</td>
                                    <td class="visited">16</td>
                                    <td class="active">17</td>
                                    <td>18</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td><strong>20</strong></td>
                                    <td>21</td>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                    <td class="muted">1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
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
        }
        &-body {
            margin: 40px 0;
            &-monthYear{
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-bottom: 15px;
                button{
                    background: transparent;
                    width: auto;
                    height: auto;
                    border: 0;
                    padding: 0;
                    margin: 0;
                    line-height: 1;
                }
                .monthYear{
                    margin: -5px 18px 0;
                    font-family: 'SolomonSansSemiBold';
                    font-size: 18px;
                    line-height: 22px;
                }
            }
            &-table{
                table{
                    margin: 0 auto;
                    max-width: 340px;
                    th, td{
                        font-size: 14px;
                        line-height: 17px;
                        border: 0;
                        padding: 9px 0;
                        text-align: center;
                    }
                    thead{
                        tr{
                            th{
                                color: #5B5B5B;
                                opacity: 0.5;
                            }
                        }
                    }
                    tbody{
                        tr{
                            td{
                                color: #2A2A2A;
                                &.muted{
                                    color: #5B5B5B;
                                    opacity: 0.5;
                                }
                                &.visited{
                                    background: rgba(0, 174, 224, 0.2);
                                }
                                &.active{
                                    background: #00AEE0;
                                    border-radius: 5px;
                                    color: #FFFFFF;
                                }
                            }
                        }
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
        .modal{
            &-container{padding: 30px 10px;}
            &-header{
                .modal-default-button{
                    position: absolute;
                    top: -60px;
                    right: 10px;
                    background: transparent;
                    border-color: transparent;
                    padding: 0;
                }
            }
        }

    }
</style>
