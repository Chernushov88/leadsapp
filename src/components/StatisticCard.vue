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
                    <li class="phone"><h3><span>+7 932 849-89-95</span></h3></li>
                    <li class="time"><h6>13:02:34:35</h6>   <span>11.01.2018</span></li>
                </ul>
                <div class="connect">
                    <div class="list">
                        <div class="item active">
                            <a href="#" class="link">
                                <svg
                                    @click="isModalVisible = true"
                                    v-if="icon.type === 'telegram'"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M6.278 10.1206L6.01333 13.8433C6.392 13.8433 6.556 13.6806 6.75266 13.4853L8.528 11.7886L12.2067 14.4826C12.8813 14.8586 13.3567 14.6606 13.5387 13.8619L15.9533 2.54728L15.954 2.54661C16.168 1.54928 15.5933 1.15928 14.936 1.40394L0.742663 6.83794C-0.226003 7.21394 -0.211337 7.75394 0.577996 7.99861L4.20666 9.12728L12.6353 3.85328C13.032 3.59061 13.3927 3.73594 13.096 3.99861L6.278 10.1206Z" fill="#039BE5"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <svg v-if="icon.type === 'messege'" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.4819 15.1785C15.8641 15.1785 16.1952 15.0523 16.4767 14.8032L11.6603 9.98665C11.5447 10.0694 11.4327 10.1499 11.3269 10.2264C10.9665 10.4919 10.674 10.6992 10.4493 10.8476C10.2247 10.9965 9.9259 11.1482 9.55288 11.303C9.1796 11.4581 8.83185 11.5354 8.50926 11.5354H8.49981H8.49037C8.16774 11.5354 7.81999 11.4581 7.44675 11.303C7.0735 11.1482 6.77467 10.9965 6.55029 10.8476C6.32569 10.6992 6.03331 10.492 5.67269 10.2264C5.57219 10.1527 5.46074 10.0719 5.34025 9.98535L0.522949 14.8032C0.804402 15.0523 1.13573 15.1785 1.51783 15.1785H15.4819Z" fill="#FFC738"/>
                                    <path d="M0.958249 6.95361C0.597845 6.71333 0.278243 6.43815 0 6.12817V13.4562L4.24513 9.21104C3.39586 8.61813 2.30163 7.86652 0.958249 6.95361Z" fill="#FFC738"/>
                                    <path d="M16.0514 6.95361C14.7592 7.82819 13.661 8.5811 12.7566 9.21274L17.0001 13.4564V6.12817C16.728 6.43191 16.4118 6.70691 16.0514 6.95361Z" fill="#FFC738"/>
                                    <path d="M15.4821 1.82129H1.518C1.03084 1.82129 0.656299 1.9858 0.393921 2.31447C0.131326 2.6433 0.000244141 3.05454 0.000244141 3.54772C0.000244141 3.94609 0.174196 4.37773 0.521946 4.84277C0.869696 5.30762 1.23973 5.67274 1.63186 5.93833C1.84683 6.09022 2.49511 6.5409 3.5767 7.29023C4.16056 7.69483 4.66831 8.04749 5.10464 8.35181C5.47656 8.61095 5.7973 8.83537 6.06212 9.0216C6.09252 9.04293 6.14033 9.07713 6.20379 9.1225C6.27215 9.1716 6.35867 9.23392 6.4654 9.31099C6.67092 9.45963 6.84166 9.57979 6.97765 9.67158C7.11346 9.7634 7.278 9.86596 7.47102 9.97985C7.66389 10.0936 7.84581 10.1791 8.01655 10.236C8.18732 10.2928 8.34541 10.3214 8.49085 10.3214H8.50029H8.50973C8.65514 10.3214 8.81326 10.2928 8.98406 10.236C9.15477 10.1791 9.33653 10.0938 9.52956 9.97985C9.7224 9.86596 9.88672 9.76318 10.023 9.67158C10.1589 9.57979 10.3297 9.45966 10.5352 9.31099C10.6418 9.23392 10.7283 9.17157 10.7966 9.12265C10.8601 9.0771 10.9079 9.04311 10.9385 9.0216C11.1448 8.87805 11.4663 8.65456 11.8985 8.35443C12.685 7.80798 13.8433 7.00368 15.3782 5.93833C15.8399 5.61589 16.2255 5.22678 16.5355 4.77156C16.8449 4.31634 17.0001 3.83884 17.0001 3.3392C17.0001 2.92176 16.8497 2.56457 16.5495 2.26706C16.249 1.96993 15.8932 1.82129 15.4821 1.82129Z" fill="#FFC738"/>
                                </svg>
                                <svg v-if="icon.type === 'paper'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.6657 1.81128H13.1978V13.305C13.1978 14.0686 12.5763 14.6901 11.8127 14.6901H7.07252H3.3031V15.1162C3.3031 15.6041 3.69909 16.0001 4.18698 16.0001H8.92549H13.664C14.1519 16.0001 14.5479 15.6041 14.5479 15.1162V2.69516C14.5479 2.20727 14.1536 1.81128 13.6657 1.81128Z" fill="#4EB03E"/>
                                    <path d="M7.07262 14.1888H11.8111C12.299 14.1888 12.695 13.7928 12.695 13.3049V1.81119V0.883876C12.695 0.39599 12.299 0 11.8111 0H7.07262H5.49702V0.292398C5.50034 0.322473 5.50203 0.354219 5.50203 0.385965V2.31245V2.80702C5.50203 3.49373 4.94397 4.0518 4.25725 4.0518H3.76268H1.8362C1.81114 4.0518 1.7844 4.05013 1.75934 4.04845H1.4519V13.3049C1.4519 13.7928 1.84789 14.1888 2.33578 14.1888H3.30487H7.07262ZM7.2514 11.1846H4.16201C3.93144 11.1846 3.7443 10.9975 3.7443 10.7669C3.7443 10.5363 3.93144 10.3492 4.16201 10.3492H7.25307C7.48365 10.3492 7.67079 10.5363 7.67079 10.7669C7.67079 10.9975 7.48198 11.1846 7.2514 11.1846ZM10.3425 9.05265H4.16201C3.93144 9.05265 3.7443 8.8655 3.7443 8.63494C3.7443 8.40434 3.93144 8.21723 4.16201 8.21723H10.3425C10.573 8.21723 10.7602 8.40434 10.7602 8.63494C10.7602 8.8655 10.573 9.05265 10.3425 9.05265ZM4.16201 5.95322H10.3425C10.573 5.95322 10.7602 6.14035 10.7602 6.37093C10.7602 6.6015 10.573 6.78864 10.3425 6.78864H4.16201C3.93144 6.78864 3.7443 6.6015 3.7443 6.37093C3.7443 6.14035 3.93144 5.95322 4.16201 5.95322Z" fill="#4EB03E"/>
                                    <path d="M1.83615 3.5506H4.25719C4.25886 3.5506 4.2622 3.5506 4.26387 3.5506C4.66821 3.54726 4.9957 3.21978 4.99904 2.81543C4.99904 2.81376 4.99904 2.81042 4.99904 2.80875V0.386026C4.99904 0.162133 4.81525 0.0134277 4.62479 0.0134277C4.53289 0.0134277 4.441 0.0468446 4.36414 0.123703L1.57215 2.91568C1.33824 3.1496 1.50365 3.5506 1.83615 3.5506Z" fill="#4EB03E"/>
                                </svg>
                            </a>
                        </div>
                    </div><!-- //list -->
                </div><!-- //connect -->
            </div>

        </div>
        <BaseModal
            v-if="isModalVisible"
            @close="isModalVisible = false">
            <!--
              you can use custom content here to overwrite
              default content
            -->
            <h3 slot="header" style="text-align: center;">Email-интеграция <a href="#">Форма 5</a></h3>
            <div slot="body" >
                <p class="text">Укажите почту на которую будут приходить заявки</p>
                <input type="text" placeholder="Введите email" class="email">
            </div>
            <a slot="footer" href="#" class="btn">Включить</a>
        </BaseModal>
    </div>
</template>

<script>
    import BaseModal from '../components/BaseModal'
    export default {
        data() {
            return {
                isModalVisible: false,
            }
        },
        props: {
            icon: Object
        },
        components: {
            BaseModal
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