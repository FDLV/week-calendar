<template>
  <input
    class="input-field__input"
    type="text"
    v-model.lazy.trim="calendar_day"
    @change="emit('input', calendar_day)"
  />
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["input"]);

const calendar_day = ref(null);
</script>

<style scoped>
.input-field__input {
  width: 100%;
}
</style>
