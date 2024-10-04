<template>
  <div class="shift__wrapper">
    <div v-if="is_btns" class="shift__btns-wrapper">
      <BtnMove @btn_click="" />
      <BtnDelete @btn_click="delete_shift" />
    </div>
    <div
      v-if="props.data.place !== null"
      class="shift__text"
      @click="set_shift_name(null)"
    >
      {{ props.data.place }}
    </div>
    <InputField v-else @input="(name) => set_shift_name(name)" />

    <div v-if="props.data.trainings.length !== 0" class="shift__trainings">
      <Trainings
        v-for="(training, i) in props.data.trainings"
        :key="i"
        :data="training"
        :day_number="props.day_number"
        :shift_number="props.shift_number"
        :training_number="i"
      />
      <BtnAdd
        v-if="props.data.trainings.length < max_trainings"
        @btn_click="add_training()"
      />
    </div>
    <BtnAdd
      v-else-if="props.data.trainings.length < max_trainings"
      @btn_click="add_training()"
    />
  </div>
</template>

<script setup>
import InputField from "@/components/InputField.vue";
import BtnAdd from "@/components/BtnAdd.vue";
import BtnMove from "@/components/BtnMove.vue";
import BtnDelete from "@/components/BtnDelete.vue";
import Trainings from "@/components/Trainings.vue";
import { set_local_storage_calendar_data } from "@/localstorage/storage.js";
import { useCalendar } from "@/composables/useCalendar.js";

const { calendar_data, max_trainings, is_btns } = useCalendar();

const props = defineProps({
  data: Object,
  day_number: Number,
  shift_number: Number,
});

const emit = defineEmits(["input"]);

const set_shift_name = (name) => {
  calendar_data.value[props.day_number].shifts[props.shift_number].place = name;
  set_local_storage_calendar_data(calendar_data.value);
};

const delete_shift = () => {
  calendar_data.value[props.day_number].shifts.splice([props.shift_number], 1);
  set_local_storage_calendar_data(calendar_data.value);
};

const add_training = () => {
  calendar_data.value[props.day_number].shifts[
    props.shift_number
  ].trainings.push({ name: null, time: null, color: "#fff" });
  set_local_storage_calendar_data(calendar_data.value);
};
</script>

<style scoped>
.shift__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 4px;
  width: 100%;
  min-height: 75px;
  border-radius: 4px;
  border: dashed 1px #6d4e37;
}

.shift__btns-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.shift__text {
  display: flex;
  align-items: center;
  height: 24px;
  font-size: 24px;
  overflow: hidden;
  min-width: 0;
  white-space: nowrap;
}

.shift__trainings {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}
</style>
