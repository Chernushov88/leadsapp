<template>
    <div class="profile-header">
        <!--  Аватар  -->
        <div class="profile-avatar">
            <div class="status">
                <svg class="ico" width="15" height="15" viewBox="0 0 15 15" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 0C3.36462 0 0 3.36433 0 7.5C0 11.6357 3.36462 15 7.5 15C11.6354 15 15 11.6357 15 7.5C15 3.36433 11.6354 0 7.5 0ZM11.6812 4.99875L7.06587 10.1911C6.95221 10.3188 6.79385 10.3846 6.63433 10.3846C6.50769 10.3846 6.38048 10.3431 6.27404 10.2583L3.38942 7.95058C3.14077 7.75183 3.10038 7.38865 3.29942 7.13971C3.49817 6.89077 3.86163 6.85038 4.11029 7.04942L6.56712 9.01471L10.8188 4.23173C11.0299 3.99346 11.3951 3.97212 11.6331 4.18385C11.8713 4.39587 11.893 4.76048 11.6812 4.99875Z"
                          fill="#67BC59"/>
                </svg>
            </div>
        </div>
        <!--  Имя  -->
        <div class="profile-name">
            <span class="hello"> Привет,</span>
            <span class="name"> Константин!</span>
        </div>
        <!--  Настройки  -->
        <div class="settings">
            <svg width="5" height="21" viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="18.5" r="2.5" fill="#E0E0E0"></circle>
                <circle cx="2.5" cy="10.5" r="2.5" fill="#E0E0E0"></circle>
                <circle cx="2.5" cy="2.5" r="2.5" fill="#E0E0E0"></circle>
            </svg>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<!-- Стили компонента -->
<style scoped>
    .profile-header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 16px;
        line-height: 130%;
        padding: 25px;
        color: #C5C5C5;
        border-bottom: 1px solid #E6E6E6; }
    @media (max-width: 1279px) {
        .profile-header {
            padding: 20px; } }
    @media screen and (max-width: 1023px) {
        .profile-header {
            position: absolute;
            top: -4px;
            right: 0;
            padding: 13px 20px;
            border: 0; } }
    .profile-header .profile-avatar {
        width: 50px;
        min-width: 50px;
        height: 50px;
        margin-right: 12px;
        background-image: url("~@/assets/images/content/avatar.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
        border-radius: 15px; }
    @media screen and (max-width: 1023px) {
        .profile-header .profile-avatar {
            margin-right: 20px; } }
    .profile-header .profile-avatar .status {
        position: absolute;
        bottom: 4px;
        right: 4px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: white;
        -webkit-transform: translate(50%, 50%);
        transform: translate(50%, 50%); }
    .profile-header .profile-avatar .status .ico {
        border: 2px solid white;
        border-radius: 50%; }
    .profile-header .profile-name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden; }
    .profile-header .profile-name .name {
        color: #444444;
        font-family: "PT_Root_UI_Bold", sans-serif; }
    @media screen and (max-width: 1023px) {
        .profile-header .profile-name {
            display: none; } }
    .profile-header .settings {
        display: none; }
    @media screen and (max-width: 1023px) {
        .profile-header .settings {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex; } }
    .profile-header .settings circle {
        fill: #D3D3D3; }
    .profile-header .settings:hover {
        cursor: pointer; }
    .profile-header .settings:hover circle {
        fill: #C5C5C5; }
</style>