<template>
  <div v-if="is_btns" class="btn-add-shift__wrapper">
    <button class="btn-add-shift" @click="emit('btn_click')"></button>
  </div>
</template>

<script setup>
import { useCalendar } from '@/composables/useCalendar.js';

const { is_btns } = useCalendar();
const emit = defineEmits(['btn_click']);
</script>

<style scoped>
.btn-add-shift__wrapper {
  display: flex;
  justify-content: center;
  padding: 4px;
  width: 100%;
}

.btn-add-shift {
  width: 24px;
  height: 24px;
  border-radius: 16px;
  cursor: pointer;
  border: solid 1px #caa691;
  background-color: transparent;
  background-image: url('@/assets/add.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
