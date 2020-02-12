<template>
    <main class="main">
        <!-- Заголовок страницы -->
        <header class="main-header">
            <div class="row">
                <div class="col col-9 col-hd-desktop-8 col-mob-12">
                    <div class="page-header-info">
                        <!-- Тайтл страницы -->
                        <div class="page-title page-title-inner">
                            <h1 class="text text-arrow">Личный кабинет</h1>
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
                        <div class="col col-5 col-hd-desktop-5 col-mod-12 col-personal-user-name">
                            <PersonalUserName />
                        </div>
                        <div class="col col-7 col-hd-desktop-7 col-mod-12 col-personal-user-email">
                            <PersonalUserEmail />
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- //content -->
    </main><!-- //middle -->
</template>

<script>
    import PersonalUserName from "../components/PersonalUserName";
    import PersonalUserEmail from "../components/PersonalUserEmail";
    export default {
        components: {
            PersonalUserName,
            PersonalUserEmail}
    }
</script>

<style scoped>
    .col-personal-user-name{
        width: 43%;
    }
    .col-personal-user-email{
        width: 57%;
    }
    @media only screen and (max-width: 767px){
        .col-personal-user-email{display: none;}
        .col-personal-user-name{width: 100%;}
    }
</style>
