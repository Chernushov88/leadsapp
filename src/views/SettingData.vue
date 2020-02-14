<template>
    <main class="main">
        <!-- Заголовок страницы -->
        <header class="main-header">
            <div class="row">
                <div class="col col-9 col-hd-desktop-8 col-mob-12">
                    <div class="page-header-info">
                        <!-- Тайтл страницы -->
                        <div class="page-title page-title-inner">
                            <h1 class="text text-arrow">
                                <div class="arrow"><svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.26624 9.00381L11 2.26976C11.1854 2.08478 11.2874 1.83746 11.2874 1.57376C11.2874 1.3099 11.1854 1.06273 11 0.877463L10.4099 0.287707C10.2248 0.102146 9.97736 0 9.71365 0C9.44994 0 9.20277 0.102146 9.0175 0.287707L0.999894 8.30517C0.813894 8.49102 0.712041 8.73937 0.712772 9.00337C0.712041 9.26854 0.813748 9.51659 0.999894 9.70259L9.01004 17.7123C9.19531 17.8979 9.44248 18 9.70633 18C9.97004 18 10.2172 17.8979 10.4026 17.7123L10.9925 17.1225C11.3764 16.7387 11.3764 16.1138 10.9925 15.7301L4.26624 9.00381Z" fill="#D3D3D3"/>
                                </svg></div>
                                Настройка формы</h1>
                        </div><!-- page-title -->
                    </div>
                </div><!-- total-result -->
                <div class="col col-3 col-hd-desktop-4 col-mob-12">

                </div>
            </div>
        </header><!-- //section-header -->
        <div class="main-content">
            <div class="elements-section">
                <div class="elements-list">
                    <div class="row">
                        <SettingDataDefault/>
                        <SettingDataReceived/>
                    </div>
                </div>
            </div>
        </div><!-- //content -->
    </main><!-- //middle -->
</template>

<script>
import SettingDataDefault from "../components/SettingDataDefault";
import SettingDataReceived from "../components/SettingDataReceived";
export default {
    components: {
        SettingDataDefault,
        SettingDataReceived
    }
}
</script>

<style leng="less">

</style>
