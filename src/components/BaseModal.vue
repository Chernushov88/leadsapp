<template>
<div>
    <slot name="modal">Дефолтный контент модального окна (если передать v-slot:modal, то контент поменяется</slot>
    <!-- Использование: <template v-slot:modal>HTML, которых хотим показать в модальном окне</template> -->
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
