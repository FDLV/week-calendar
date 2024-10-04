<template>
  <div class="btn-download__wrapper">
    <button class="btn-download" @click="emit('btn_click')"></button>
  </div>
</template>

<script setup>
const emit = defineEmits(["btn_click"]);
</script>

<style scoped>
.btn-download__wrapper {
  display: flex;
  justify-content: center;
  padding: 4px;
}

.btn-download {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 1px 1px 2px 2px #caa691;
  border: none;
  background-color: transparent;
  background-image: url("@/assets/download.svg");
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-download:active {
  box-shadow: none;
}
</style>
