<template>
    <aside class="sidebar">
        <!--  Подключение компонента "Шапка пользовательского меню"  -->
        <UserData></UserData>
        <!--  Контент пользовательского меню  -->
        <div class="profile-content">
            <!--  Навигация  -->
            <div class="navigation">
                <nav class="nav">
                    <ul class="list">
                        <li class="item">
                            <router-link class="link" :to="{name: 'main'}">
                                <SvgHome/>
                                <span class="text">Главная страница</span>
                            </router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" :to="{name: 'integration'}">
                                <svg class="ico" width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M7.5 -1.90735e-06H3.75C3.66712 -1.90735e-06 3.58763 0.0329221 3.52903 0.0915273C3.47042 0.150132 3.4375 0.229618 3.4375 0.312498V4.6875C3.43831 4.74046 3.45244 4.79236 3.47859 4.83843C3.50474 4.88449 3.54206 4.92323 3.58711 4.95108C3.63216 4.97892 3.6835 4.99498 3.7364 4.99777C3.78929 5.00056 3.84203 4.98999 3.88977 4.96703L4.93828 4.44274L5.40406 4.90852C5.46266 4.9671 5.54214 5.00001 5.625 5.00001C5.70786 5.00001 5.78734 4.9671 5.84594 4.90852L6.31172 4.44274L7.36023 4.96703C7.40797 4.98997 7.46071 5.00052 7.51359 4.99772C7.56648 4.99492 7.61781 4.97886 7.66285 4.95102C7.7079 4.92318 7.74522 4.88445 7.77137 4.8384C7.79752 4.79234 7.81167 4.74045 7.8125 4.6875V0.312498C7.8125 0.229618 7.77958 0.150132 7.72097 0.0915273C7.66237 0.0329221 7.58288 -1.90735e-06 7.5 -1.90735e-06V-1.90735e-06Z"
                                              fill="#DADADA"/>
                                        <path d="M14.8168 12.1421L12.7913 1.07594C12.7614 0.912895 12.668 0.768389 12.5316 0.674212C12.3952 0.580034 12.227 0.543897 12.0639 0.573752L8.43745 1.23758V4.6875C8.43745 4.93614 8.33868 5.1746 8.16286 5.35041C7.98705 5.52623 7.74859 5.625 7.49995 5.625C7.35442 5.62484 7.2109 5.59096 7.08065 5.52602L6.43503 5.20313L6.28776 5.35039C6.11195 5.52619 5.8735 5.62496 5.62487 5.62496C5.37624 5.62496 5.13779 5.52619 4.96198 5.35039L4.81487 5.20313L4.16925 5.52594C4.02627 5.59745 3.86739 5.63121 3.70769 5.62402C3.548 5.61683 3.39279 5.56892 3.25682 5.48485C3.12057 5.40123 3.00813 5.28396 2.9303 5.14432C2.85248 5.00468 2.81189 4.84736 2.81245 4.6875V2.26719L0.997763 2.5993C0.834718 2.62916 0.690213 2.72256 0.596035 2.85897C0.501857 2.99537 0.465721 3.1636 0.495575 3.32664L2.52112 14.3928C2.53578 14.4736 2.56625 14.5507 2.61076 14.6197C2.65528 14.6887 2.71298 14.7482 2.78055 14.7949C2.84812 14.8415 2.92424 14.8744 3.00453 14.8916C3.08482 14.9088 3.16772 14.9099 3.24847 14.895L14.3146 12.8695C14.4777 12.8396 14.6222 12.7462 14.7164 12.6098C14.8105 12.4734 14.8467 12.3052 14.8168 12.1421ZM8.20987 10.7588C8.13087 10.906 7.99673 11.0159 7.83684 11.0644C7.67696 11.1128 7.50437 11.096 7.3569 11.0174L5.63815 10.0799L6.23675 8.98258L7.39745 9.61539L8.82128 6.89719L9.92862 7.47719L8.20987 10.7588Z"
                                              fill="#DADADA"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="15" height="15" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span class="text">Интеграции</span>
                            </router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" :to="{name: 'statistic'}">
                                <svg class="ico" width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.25906 11.7675H1.61613C0.724983 11.7675 0 12.4926 0 13.3838V14.5605C0 14.8033 0.196724 15 0.439453 15H2.33471C2.28584 14.8624 2.25906 14.7146 2.25906 14.5605V11.7675Z"
                                          fill="#DADADA"/>
                                    <path d="M5.397 9.41402H4.75419C3.86304 9.41402 3.13794 10.1391 3.13794 11.0303V14.5605C3.13794 14.8033 3.33466 15 3.57739 15H5.47265C5.4239 14.8624 5.397 14.7146 5.397 14.5605V9.41402Z"
                                          fill="#DADADA"/>
                                    <path d="M14.9137 4.41422L11.7756 0.177841C11.6926 0.0660324 11.5617 0 11.4224 0C11.2831 0 11.1521 0.0660324 11.0692 0.177841L7.93128 4.41422C7.83252 4.54754 7.8173 4.72527 7.89191 4.87347C7.96664 5.02167 8.11839 5.11528 8.28444 5.11528H9.41398V14.5605C9.41398 14.8033 9.6107 15 9.85343 15H12.9914C13.2341 15 13.4309 14.8033 13.4309 14.5605V5.11528H14.5605C14.7264 5.11528 14.8783 5.02167 14.9529 4.87347C15.0276 4.72527 15.0124 4.54754 14.9137 4.41422Z"
                                          fill="#DADADA"/>
                                    <path d="M8.53506 7.06055H7.89213C7.00098 7.06055 6.27588 7.78553 6.27588 8.67668V14.5605C6.27588 14.8033 6.47272 15 6.71533 15H8.61059C8.56184 14.8624 8.53506 14.7146 8.53506 14.5605V7.06055Z"
                                          fill="#DADADA"/>
                                </svg>
                                <span class="text">Статистика</span>
                            </router-link>
                        </li>
                        <li class="item">
                            <router-link class="link" :to="{name: 'real-time'}">
                                <svg class="ico" width="15" height="15" viewBox="0 0 15 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.49988 0C3.35786 0 0 3.35796 0 7.49988C0 11.6418 3.35786 15 7.49988 15C11.6419 15 15 11.6418 15 7.49988C15 3.35796 11.6419 0 7.49988 0ZM10.7423 8.92635H7.56263C7.55188 8.92635 7.54188 8.92375 7.53123 8.92335C7.52058 8.92385 7.51063 8.92635 7.49983 8.92635C7.21337 8.92635 6.98112 8.69409 6.98112 8.40764V3.1125C6.98112 2.82605 7.21337 2.59379 7.49983 2.59379C7.78628 2.59379 8.01853 2.82605 8.01853 3.1125V7.88893H10.7421C11.0285 7.88893 11.2608 8.12119 11.2608 8.40764C11.2608 8.69409 11.0287 8.92635 10.7423 8.92635Z"
                                          fill="#DADADA"/>
                                </svg>
                                <span class="text">Realtime</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div><!-- //navigation -->
            <!--  Детальная информация -->
            <div class="profile-detail-info">
                <!--  Баланс -->
                <div class="profile-detail-item balance-item">
                    <div class="item-title">
                        <span class="text">Ваш баланс</span>
                    </div>
                    <div class="item-content">
                        <div class="balance-amount">
                            <span class="value">1 200</span>
                            <span class="symbol">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.15918 14.2952H3.86377V16.6137C3.86377 16.7265 3.89986 16.8188 3.97247 16.891C4.04489 16.9637 4.13747 17 4.25024 17H6.26647C6.37111 17 6.46166 16.9637 6.53814 16.891C6.61462 16.8188 6.65274 16.7265 6.65274 16.6137V14.2952H12.75C12.8626 14.2952 12.9552 14.2593 13.0278 14.1867C13.1004 14.1141 13.1365 14.0217 13.1365 13.9089V12.3634C13.1365 12.2512 13.1004 12.1582 13.0278 12.0861C12.9554 12.0134 12.8626 11.9771 12.75 11.9771H6.65254V10.5523H10.7577C12.3674 10.5523 13.6813 10.0618 14.6998 9.07937C15.7179 8.09798 16.2272 6.83027 16.2272 5.27615C16.2272 3.72307 15.7179 2.45532 14.6998 1.47293C13.6815 0.491511 12.3674 0 10.7577 0H4.25004C4.13723 0 4.04486 0.036291 3.97228 0.108506C3.89986 0.181122 3.86357 0.274098 3.86357 0.38627V7.98091H1.15918C1.0464 7.98091 0.953993 8.01907 0.881411 8.09552C0.809029 8.172 0.772705 8.26254 0.772705 8.36715V10.166C0.772705 10.2788 0.808796 10.3712 0.881411 10.4438C0.954027 10.5164 1.0462 10.5523 1.15918 10.5523H3.86377V11.9771H1.15918C1.0464 11.9771 0.953993 12.0134 0.881411 12.086C0.809029 12.1582 0.772705 12.251 0.772705 12.3634V13.9089C0.772705 14.0217 0.808796 14.1141 0.881411 14.1867C0.953993 14.2593 1.04637 14.2952 1.15918 14.2952ZM6.65254 2.57199H10.5162C11.3693 2.57199 12.0574 2.82143 12.5808 3.32047C13.1039 3.81955 13.3655 4.47175 13.3655 5.27635C13.3655 6.08135 13.1039 6.73376 12.5808 7.23223C12.0574 7.73171 11.3693 7.98115 10.5162 7.98115H6.65254V2.57199Z"
                                      fill="#B4B4B4"/>
                            </svg>

                        </span>
                        </div>
                        <div class="popup-init balance-popup">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.48615 0 0 4.48577 0 10C0 15.5142 4.48615 20 10 20C15.5138 20 20 15.5142 20 10C20 4.48577 15.5138 0 10 0ZM14.8077 10.7692H10.7692V15C10.7692 15.4246 10.4246 15.7692 10 15.7692C9.57539 15.7692 9.23077 15.4246 9.23077 15V10.7692H5.19231C4.76769 10.7692 4.42308 10.4246 4.42308 10C4.42308 9.57539 4.76769 9.23077 5.19231 9.23077H9.23077V5.38462C9.23077 4.96 9.57539 4.61538 10 4.61538C10.4246 4.61538 10.7692 4.96 10.7692 5.38462V9.23077H14.8077C15.2323 9.23077 15.5769 9.57539 15.5769 10C15.5769 10.4246 15.2323 10.7692 14.8077 10.7692Z"
                                      fill="#00ACDC"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <!--  Тариф -->
                <div class="profile-detail-item  tarif-item">
                    <div class="item-title">
                        <span class="text">Ваш текущий тариф</span>
                    </div>
                    <div class="item-content">
                        <div class="tarif-name">
                            <SvgManWithChecklist/>
                            <span class="text">ПРОФЕССИОНАЛ</span>
                        </div>
                        <div class="tarif-days">
                            <svg class="ico" width="11" height="15" viewBox="0 0 11 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1387 13.5379C10.0222 10.8766 8.94915 8.55876 7.38147 7.4998C8.94996 6.44124 10.023 4.12297 10.1387 1.46207C10.3963 1.33549 10.5386 1.19723 10.5386 1.0509C10.5386 0.470425 8.28322 0 5.49977 0C2.71672 0 0.460938 0.470425 0.460938 1.0513C0.460938 1.19723 0.603637 1.3359 0.860819 1.46207C0.977317 4.12257 2.05039 6.44124 3.61807 7.5002C2.04998 8.55836 0.976914 10.877 0.860819 13.5379C0.603637 13.6641 0.460938 13.8028 0.460938 13.9495C0.460938 14.5296 2.71672 15.0004 5.49977 15.0004C8.28282 15.0004 10.5386 14.53 10.5386 13.9495C10.5386 13.8024 10.3963 13.6637 10.1387 13.5379ZM4.55408 7.88275C4.69315 7.82793 4.78708 7.67354 4.78708 7.5002C4.78708 7.32606 4.69315 7.17207 4.55408 7.11685C2.92231 6.47671 1.74403 4.30437 1.55698 1.70474C2.4801 1.94701 3.90145 2.1026 5.49977 2.1026C7.09809 2.1026 8.51944 1.94701 9.44256 1.70474C9.25551 4.30437 8.07764 6.47671 6.44546 7.11685C6.30598 7.17167 6.21246 7.32606 6.21246 7.5002C6.21246 7.67394 6.30598 7.82793 6.44546 7.88275C8.07764 8.52288 9.25551 10.6952 9.44296 13.2949C9.29462 13.2558 9.13257 13.2195 8.95963 13.1856C8.42834 11.035 5.50017 9.14931 5.50017 9.14931C5.50017 9.14931 2.57241 11.035 2.04071 13.1856C1.86778 13.2195 1.70573 13.2562 1.55739 13.2949C1.74443 10.6948 2.92231 8.52288 4.55408 7.88275ZM5.49977 7.00478C5.49977 7.00478 4.86568 6.50614 4.13445 5.70839C6.12499 5.2815 7.74588 4.33662 8.62506 3.11924C7.68703 5.28352 5.49977 7.00478 5.49977 7.00478Z"
                                      fill="#B4B4B4"/>
                            </svg>
                            <span class="text"><span class="value">15</span> дней</span>
                        </div>
                    </div>

                </div>
            </div><!-- //profile-detail-info -->
            <!--  Системное уведомление -->
            <div class="attention">
                <div class="attention-text">
                    <span class="text">
                        Внимание! Ваш тариф закончится через 5 дней!
                    </span>
                </div>
                <i class="attention-remove">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8056 2.1941C9.88012 -0.731385 5.11975 -0.731673 2.19398 2.1941C-0.731796 5.11987 -0.731507 9.87996 2.19398 12.8057C5.11946 15.7315 9.87983 15.7315 12.8056 12.8057C15.7311 9.87996 15.7311 5.11958 12.8056 2.1941ZM10.4588 10.4589C10.2334 10.6843 9.868 10.6843 9.64261 10.4589L7.49979 8.31606L5.2551 10.5608C5.02971 10.7861 4.66435 10.7861 4.43896 10.5608C4.21356 10.3354 4.21356 9.97 4.43896 9.7446L6.68365 7.49991L4.54083 5.3571C4.31544 5.1317 4.31544 4.76606 4.54083 4.54095C4.76622 4.31556 5.13158 4.31556 5.35698 4.54095L7.49979 6.68377L9.54044 4.64311C9.76584 4.41772 10.1312 4.41772 10.3566 4.64311C10.582 4.86851 10.582 5.23387 10.3566 5.45926L8.31594 7.49991L10.4588 9.64273C10.6841 9.86812 10.6841 10.2335 10.4588 10.4589Z"
                              fill="#BDBDBD"/>
                    </svg>
                </i>
            </div><!-- //attention-->
        </div>
    </aside>
</template>


<script>
import SvgHome from '@/components/svg/SvgHome'
import SvgManWithChecklist from '@/components/svg/SvgManWithChecklist'
import UserData from '@/components/SidebarUserData'

export default {
    components: {
        UserData,
        SvgHome,
        SvgManWithChecklist,
    }
}
</script>


<style scoped>
    .sidebar {
        position: fixed;
        z-index: 3;
        top: 0;
        right: 0;
        width: 300px;
        height: 100vh;
        overflow: auto;
        background-color: white; }
    @media screen and (max-width: 1023px) {
        .sidebar {
            position: static;
            width: 100%;
            height: auto; } }

    .sidebar .profile-content {
        height: calc(100vh - 101px);
        overflow: hidden;
        overflow-y: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start; }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content {
            height: auto; } }
    .sidebar .profile-content .navigation,
    .sidebar .profile-content .profile-detail-info {
        border-bottom: 1px solid #E6E6E6; }
    .sidebar .profile-content .navigation {
        padding: 30px 25px; }
    @media (max-width: 1279px) {
        .sidebar .profile-content .navigation {
            padding: 20px; } }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .navigation {
            padding: 0 20px; } }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .navigation .nav {
            width: 100%;
            overflow: hidden;
            overflow-x: auto; } }
    .sidebar .profile-content .navigation .list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column; }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .navigation .list {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center; } }
    @media screen and (max-width: 667px) {
        .sidebar .profile-content .navigation .list {
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start; } }
    .sidebar .profile-content .navigation .item {
        margin: 0;
        padding: 0;
        position: relative; }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .navigation .item {
            margin-left: 25px; }
        .sidebar .profile-content .navigation .item:first-child {
            margin-left: 0; } }
    .sidebar .profile-content .navigation .item:before {
        display: none; }
    .sidebar .profile-content .navigation .link {
        text-decoration: none;
        font-size: 16px;
        line-height: 130%;
        color: #C5C5C5;
        font-family: "PT_Root_UI_Bold", sans-serif;
        padding: 14px 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .navigation .link {
            font-size: 14px;
            color: #444444;
            opacity: .4; } }
    .sidebar .profile-content .navigation .link:hover, .sidebar .profile-content .navigation .link.router-link-active {
        color: #444444; }
    .sidebar .profile-content .navigation .link:hover:before, .sidebar .profile-content .navigation .link.router-link-active:before {
        opacity: 1; }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .navigation .link:hover, .sidebar .profile-content .navigation .link.router-link-active {
            opacity: 1; } }
    .sidebar .profile-content .navigation .link:hover .ico path, .sidebar .profile-content .navigation .link.router-link-active .ico path {
        fill: #F04E23; }
    .sidebar .profile-content .navigation .link:before {
        position: absolute;
        top: 50%;
        left: -25px;
        width: 3px;
        background-color: #F04E23;
        border-radius: 0 35px 35px 0;
        content: "";
        opacity: 0;
        height: 33px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out; }
    @media (max-width: 1279px) {
        .sidebar .profile-content .navigation .link:before {
            left: -20px; } }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .navigation .link:before {
            border-radius: 0;
            width: 100%;
            height: 1px;
            left: 0;
            top: 0; } }
    .sidebar .profile-content .navigation .link .ico {
        margin-right: 10px;
        min-width: 15px; }
    .sidebar .profile-content .navigation .link .ico path {
        fill: #C5C5C5; }
    .sidebar .profile-content .navigation .link .text {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden; }
    .sidebar .profile-content .profile-detail-info {
        padding: 22px 25px 45px; }
    @media (max-width: 1279px) {
        .sidebar .profile-content .profile-detail-info {
            padding: 20px; } }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .profile-detail-info {
            display: none; } }
    .sidebar .profile-content .profile-detail-info .profile-detail-item {
        margin-bottom: 22px; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item:last-child {
        margin-bottom: 0; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item .item-title {
        opacity: .4;
        display: block;
        margin-bottom: 5px; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item .item-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.balance-item .balance-amount {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 20px; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.balance-item .balance-amount .value {
        font-size: 24px;
        line-height: 24px;
        font-family: "PT_Root_UI_Bold", sans-serif;
        color: #444444;
        margin-right: 5px; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.balance-item .balance-amount .symbol {
        color: #B4B4B4; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.balance-item .balance-popup {
        cursor: pointer; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.balance-item .balance-popup path {
        fill: #00ACDC; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-name,
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-days {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 6px 0;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-name .ico,
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-days .ico {
        margin-right: 5px; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-name {
        margin-right: 20px;
        text-transform: uppercase;
        font-size: 14px;
        max-width: 100%;
        line-height: 130%;
        letter-spacing: 0.05em;
        font-family: "PT_Root_UI_Bold", sans-serif;
        overflow: hidden; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-name .ico {
        min-width: 25px; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-name .text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; }
    .sidebar .profile-content .profile-detail-info .profile-detail-item.tarif-item .tarif-days {
        color: #FF5252;
        font-size: 13px;
        line-height: 130%;
        white-space: nowrap;
        font-family: "PT_Root_UI_Medium", sans-serif; }
    .sidebar .profile-content .attention {
        min-height: 156px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 25px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        margin-top: auto; }
    @media (max-width: 1279px) {
        .sidebar .profile-content .attention {
            padding: 20px; } }
    @media screen and (max-width: 1023px) {
        .sidebar .profile-content .attention {
            display: none; } }
    .sidebar .profile-content .attention .attention-remove {
        position: absolute;
        top: 15px;
        right: 15px;
        cursor: pointer; }
    .sidebar .profile-content .attention .attention-remove path {
        fill: #BDBDBD; }
    .sidebar .profile-content .attention .attention-remove:hover path {
        fill: #FF5252; }
    .sidebar .profile-content .attention .attention-text {
        color: white;
        max-width: 195px;
        background-color: #FF5252;
        font-family: "PT_Root_UI_Medium", sans-serif;
        border-radius: 35px;
        padding: 10px 20px;
        font-size: 13px;
        line-height: 110%;
        position: relative; }
    .sidebar .profile-content .attention .attention-text:before {
        content: "";
        position: absolute;
        top: calc(100% - 14px);
        width: 82px;
        height: 50px;
        right: -56px;
        background: url("~@/assets/images/alert-ico.svg") no-repeat center;
    }
</style>
