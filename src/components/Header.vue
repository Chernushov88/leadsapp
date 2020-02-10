<template>
    <header id="header" class="header">
        <div class="row">
            <div class="col col-3 col-hd-desktop-4 col-tab-4 col-mob-12">
                <!-- Логотип и бургер -->
                <div class="logo-wrap">
                    <div class="burger menu-init-js">
                        <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="28" height="3" rx="1.5"/>
                            <rect y="8" width="28" height="3" rx="1.5"/>
                            <rect y="16" width="28" height="3" rx="1.5"/>
                        </svg>
                    </div><!-- burger -->
                    <div class="logo">
                        <a class="link" href="index.html">
                            <svg width="121" height="32" viewBox="0 0 121 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.08 5.936H1.536V23H4.08V5.936ZM11.9381 12.008C10.3781 12.008 9.08213 12.56 8.05013 13.64C7.04213 14.72 6.53813 16.04 6.53813 17.624C6.53813 19.304 7.04213 20.672 8.07413 21.704C9.10612 22.736 10.5701 23.264 12.4421 23.264C14.0501 23.264 15.4421 22.88 16.5701 22.088V20C15.3461 20.864 14.0501 21.296 12.6341 21.296C10.6421 21.296 9.20213 20.24 9.08213 18.152H17.0741V17.552C17.0741 15.896 16.6181 14.576 15.6821 13.544C14.7701 12.512 13.5221 12.008 11.9381 12.008ZM12.0341 13.904C13.4981 13.904 14.4821 14.888 14.7461 16.496H9.15413C9.41813 14.96 10.4981 13.904 12.0341 13.904ZM26.8058 23H28.7978V16.472C28.7978 13.52 27.2378 12.032 24.1178 12.032C22.6538 12.032 21.3578 12.32 20.2298 12.896V14.864C21.4058 14.216 22.5338 13.904 23.5898 13.904C25.3898 13.904 26.2778 14.672 26.2778 16.184V16.472H23.9738C20.6858 16.472 19.0058 17.96 19.0058 20.192C19.0058 21.824 20.1578 23.264 22.6538 23.264C24.3578 23.264 25.6538 22.736 26.4938 21.68H26.5658L26.8058 23ZM21.4538 19.88C21.4538 18.632 22.3658 18.008 24.1658 18.008H26.3018V18.608C26.3018 20.24 25.2938 21.536 23.5658 21.536C22.3178 21.536 21.4538 20.936 21.4538 19.88ZM36.9761 14.096C39.0641 14.096 40.3121 15.632 40.3121 17.648C40.3121 18.656 40.0001 19.496 39.3761 20.192C38.7521 20.888 37.9601 21.224 37.0241 21.224C35.0081 21.224 33.7361 19.808 33.7361 17.696C33.7361 16.688 34.0241 15.848 34.6241 15.152C35.2241 14.456 36.0161 14.096 36.9761 14.096ZM40.2641 13.352C39.3521 12.488 38.1521 12.056 36.6881 12.056C35.1281 12.056 33.8321 12.608 32.8001 13.712C31.7681 14.792 31.2641 16.16 31.2641 17.816C31.2641 19.472 31.7441 20.792 32.7041 21.776C33.6881 22.76 34.9841 23.264 36.6161 23.264C38.1281 23.264 39.6641 22.688 40.5521 21.608C40.5761 21.608 40.5761 21.608 40.6001 21.632L40.9601 23H42.8561C42.8561 21.104 42.8561 18.248 42.8321 14.48V5.96H40.3841V13.304L40.2641 13.352ZM44.7083 22.328C45.7883 22.928 47.0603 23.24 48.5483 23.24C51.1403 23.24 52.7243 21.92 52.7243 20.024C52.7243 16.544 47.5163 16.664 47.5163 15.104C47.5163 14.336 48.0683 13.952 49.1963 13.952C50.1562 13.952 51.1643 14.24 52.1963 14.84V12.776C51.1163 12.296 49.9883 12.056 48.8363 12.056C46.6283 12.056 45.0203 13.184 45.0203 15.08C45.0203 18.248 50.2763 18.128 50.2763 20.144C50.2763 20.984 49.6043 21.416 48.2603 21.416C47.0363 21.416 45.8363 20.984 44.7083 20.144V22.328Z"
                                      fill="#444444"/>
                                <rect x="60" y="3" width="61" height="29" rx="14.5" fill="#F04E23"/>
                                <path d="M78.712 23H80.704V16.472C80.704 13.52 79.144 12.032 76.024 12.032C74.56 12.032 73.264 12.32 72.136 12.896V14.864C73.312 14.216 74.44 13.904 75.496 13.904C77.296 13.904 78.184 14.672 78.184 16.184V16.472H75.88C72.592 16.472 70.912 17.96 70.912 20.192C70.912 21.824 72.064 23.264 74.56 23.264C76.264 23.264 77.56 22.736 78.4 21.68H78.472L78.712 23ZM73.36 19.88C73.36 18.632 74.272 18.008 76.072 18.008H78.208V18.608C78.208 20.24 77.2 21.536 75.472 21.536C74.224 21.536 73.36 20.936 73.36 19.88ZM86.1224 17.648C86.1224 16.664 86.4344 15.824 87.0584 15.128C87.6824 14.432 88.4744 14.072 89.4104 14.072C91.4264 14.072 92.6744 15.488 92.6744 17.6C92.6744 19.64 91.4744 21.2 89.4344 21.2C87.3944 21.2 86.1224 19.664 86.1224 17.648ZM86.1224 21.92C86.9864 22.784 88.1864 23.216 89.7464 23.216C91.3304 23.216 92.6264 22.688 93.6344 21.608C94.6664 20.528 95.1704 19.184 95.1704 17.528C95.1704 15.872 94.6904 14.528 93.7064 13.52C92.7224 12.512 91.4264 12.008 89.7704 12.008C88.2584 12.008 86.7704 12.632 85.9064 13.808H85.8104L85.4504 12.296H83.5544V28.184H86.0264V21.968L86.1224 21.92ZM100.021 17.648C100.021 16.664 100.333 15.824 100.957 15.128C101.581 14.432 102.373 14.072 103.309 14.072C105.325 14.072 106.573 15.488 106.573 17.6C106.573 19.64 105.373 21.2 103.333 21.2C101.293 21.2 100.021 19.664 100.021 17.648ZM100.021 21.92C100.885 22.784 102.085 23.216 103.645 23.216C105.229 23.216 106.525 22.688 107.533 21.608C108.565 20.528 109.069 19.184 109.069 17.528C109.069 15.872 108.589 14.528 107.605 13.52C106.621 12.512 105.325 12.008 103.669 12.008C102.157 12.008 100.669 12.632 99.8048 13.808H99.7088L99.3488 12.296H97.4528V28.184H99.9248V21.968L100.021 21.92Z"
                                      fill="white"/>
                            </svg>
                        </a>
                    </div><!-- logo -->
                </div>
            </div>
            <div class="col col-9 col-hd-desktop-8  col-tab-8 col-mob-12">
                <!-- Поиск -->
                <div class="search">
                    <form action="#" class="search-form">
                        <input class="search-text" type="search" placeholder="Поиск по страницам">
                        <button class="search-button" type="submit">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.425 16.3951L13.141 11.9395C14.2425 10.6301 14.846 8.98262 14.846 7.26749C14.846 3.26026 11.5858 0 7.57853 0C3.5713 0 0.311035 3.26026 0.311035 7.26749C0.311035 11.2747 3.5713 14.535 7.57853 14.535C9.0829 14.535 10.5165 14.0812 11.7422 13.2199L16.0587 17.7093C16.2392 17.8967 16.4818 18 16.7419 18C16.988 18 17.2215 17.9062 17.3988 17.7355C17.7755 17.3731 17.7875 16.7721 17.425 16.3951ZM7.57853 1.89587C10.5405 1.89587 12.9502 4.30552 12.9502 7.26749C12.9502 10.2295 10.5405 12.6391 7.57853 12.6391C4.61655 12.6391 2.2069 10.2295 2.2069 7.26749C2.2069 4.30552 4.61655 1.89587 7.57853 1.89587Z"
                                      fill="#00ACDC"/>
                            </svg>
                        </button>
                    </form>
                </div><!-- //search -->
            </div>
        </div>
    </header>
</template>
<script>
export default {
}
</script>
<!-- Стили компонента -->
<style scoped>
    #header {
        padding: 25px 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: calc(100vw - 300px);
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-bottom: 1px solid #E6E6E6; }
    @media (max-width: 1279px) {
        #header {
            padding: 20px; } }
    @media screen and (max-width: 1023px) {
        #header {
            width: 100%;
            padding: 12px 20px; } }
    @media screen and (max-width: 667px) {
        #header {
            padding: 0; } }
    #header .logo-wrap {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
    @media screen and (max-width: 667px) {
        #header .logo-wrap {
            padding: 17px 20px;
            border-bottom: 1px solid #E6E6E6; } }
    #header .menu-init-js {
        cursor: pointer;
        margin-right: 30px; }
    #header .menu-init-js path,
    #header .menu-init-js rect {
        fill: #D3D3D3; }
    #header .menu-init-js:hover path,
    #header .menu-init-js:hover rect {
        fill: #C5C5C5; }
    #header .logo .link {
        height: 100%;
        display: block; }
    #header .logo .link:before {
        display: none; }
    #header .search {
        height: 50px; }
    @media screen and (max-width: 1023px) {
        #header .search {
            margin-right: 100px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 40px;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end; } }
    @media screen and (max-width: 667px) {
        #header .search {
            width: 100%;
            height: 50px; } }
    #header .search-form {
        position: relative;
        margin: 0;
        width: 100%; }
    #header .search-form .search-text {
        width: 100%;
        padding-right: 70px; }
    @media screen and (max-width: 667px) {
        #header .search-form .search-text {
            padding-right: 60px;
            border-radius: 0;
            border: 0; }
        #header .search-form .search-text:focus {
            border: 0; } }
    #header .search-form .search-button {
        position: absolute;
        background-color: transparent;
        border: 0;
        padding: 0;
        height: 100%;
        width: 60px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        top: 0;
        right: 0; }
    @media screen and (max-width: 1023px) {
        #header .search-form .search-button {
            width: 50px; } }
    #header .search-form .search-button path,
    #header .search-form .search-button rect {
        fill: #00ACDC; }
</style>