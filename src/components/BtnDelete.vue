<template>
  <div class="btn-delete__wrapper">
    <button class="btn-delete" @click="emit('btn_click')"></button>
  </div>
</template>

<script setup>
const emit = defineEmits(['btn_click']);
</script>

<style scoped>
.btn-delete__wrapper {
  display: flex;
  justify-content: center;
  padding: 4px;
}

.btn-delete {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  border: solid 1px #caa691;
  background-color: transparent;
  background-image: url('@/assets/delete.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
