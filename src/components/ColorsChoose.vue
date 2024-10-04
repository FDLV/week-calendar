<template>
  <div @click.self="close_colors_choose" class="colors-choose__wrapper">
    <div class="colors-choose">
      <Swatches v-model="colors" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { set_local_storage_calendar_data } from "@/localstorage/storage.js";
import { Swatches } from "@lk77/vue3-color";
import { useColors } from "@/composables/useColors.js";
import { useCalendar } from "@/composables/useCalendar.js";

const { close_colors_choose, day, shift, training } = useColors();
const { calendar_data } = useCalendar();
const colors = ref("#fff");

watch(colors, (val) => {
  calendar_data.value[day.value].shifts[shift.value].trainings[
    training.value
  ].color = val.hex;
  set_local_storage_calendar_data(calendar_data.value);
  close_colors_choose();
});
</script>

<style scoped>
.colors-choose__wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(126, 114, 85, 0.2);
  z-index: 1;
}

.colors-choose {
  position: relative;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
