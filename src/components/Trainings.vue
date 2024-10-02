<template>
  <div>
    <div
      class="trainings__wrapper"
      :style="{
        backgroundColor:
          calendar_data[day_number].shifts[shift_number].trainings[
            training_number
          ].color,
      }">
      <div
        v-if="training_name !== null && training_name !== undefined"
        @click="set_training_name(null)"
        class="trainings__text-name">
        {{ training_name }}
      </div>
      <InputDays v-else @input="(name) => set_training_name(name)" />
      <div
        v-if="training_time !== null && training_time !== undefined"
        @click="set_training_time(null)"
        class="trainings__text-time">
        {{ training_time }}
      </div>
      <InputDays v-else @input="(time) => set_training_time(time)" />
    </div>
    <div v-if="is_btns" class="shift__btns-wrapper">
      <BtnMove @btn_click="" />
      <BtnColor @btn_click="color_training" />
      <BtnDelete @btn_click="delete_training" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import InputDays from '@/components/InputDays.vue';
import BtnMove from '@/components/BtnMove.vue';
import BtnColor from '@/components/BtnColor.vue';
import BtnDelete from '@/components/BtnDelete.vue';
import { set_local_storage_calendar_data } from '@/localstorage/storage.js';
import { useCalendar } from '@/composables/useCalendar.js';
import { useColors } from '@/composables/useColors.js';

const { calendar_data, is_btns } = useCalendar();
const { open_colors_choose, save_training_number } = useColors();

const props = defineProps({
  data: Object,
  day_number: Number,
  shift_number: Number,
  training_number: Number,
});

const emit = defineEmits(['input']);

const training_name = computed(() => {
  if (props.day_number === undefined) return;
  if (props.shift_number === undefined) return;
  if (props.training_number === undefined) return;

  return calendar_data.value[props.day_number].shifts[props.shift_number]
    .trainings[props.training_number].name;
});

const training_time = computed(() => {
  if (props.day_number === undefined) return;
  if (props.shift_number === undefined) return;
  if (props.training_number === undefined) return;

  return calendar_data.value[props.day_number].shifts[props.shift_number]
    .trainings[props.training_number].time;
});

const set_training_name = (name) => {
  calendar_data.value[props.day_number].shifts[props.shift_number].trainings[
    props.training_number
  ].name = name;
  set_local_storage_calendar_data(calendar_data.value);
};

const set_training_time = (time) => {
  calendar_data.value[props.day_number].shifts[props.shift_number].trainings[
    props.training_number
  ].time = time;
  set_local_storage_calendar_data(calendar_data.value);
};

const delete_training = () => {
  calendar_data.value[props.day_number].shifts[
    props.shift_number
  ].trainings.splice(props.training_number, 1);
  set_local_storage_calendar_data(calendar_data.value);
};

const color_training = () => {
  save_training_number(
    props.day_number,
    props.shift_number,
    props.training_number,
  );
  open_colors_choose();
};
</script>

<style scoped>
.trainings__wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 8px;
  min-width: 0;
}

.trainings__text-name {
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 20px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
}

.trainings__text-time {
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 22px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
}

.shift__btns-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
