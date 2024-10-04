<template>
  <div class="btn-color__wrapper">
    <button class="btn-color" @click="emit('btn_click')"></button>
  </div>
</template>

<script setup>
const emit = defineEmits(["btn_click"]);
</script>

<style scoped>
.btn-color__wrapper {
  display: flex;
  justify-content: center;
  padding: 4px;
}

.btn-color {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  border: solid 1px #caa691;
  background-color: transparent;
  background-image: url("@/assets/color.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
