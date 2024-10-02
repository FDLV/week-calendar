<template>
  <div id="calendar" class="calendar">
    <div class="calendar-title__wrapper">
      <div
        v-if="calendar_name !== null"
        class="calendar-title__text"
        @click="set_calendar_title(null)">
        {{ calendar_name }}
      </div>
      <div v-else class="calendar-header__day-input-wrapper">
        <InputDays @input="(data) => set_calendar_title(data)" />
      </div>
    </div>
    <div class="calendar-body">
      <div class="calendar-header">
        <div
          class="calendar-header__week-day"
          v-for="day in week_days"
          :key="day">
          {{ day }}
        </div>
        <div
          class="calendar-header__day"
          v-for="(day, i) in calendar_data"
          :key="i">
          <div
            v-if="day.name !== null"
            class="calendar-header__day-text"
            @click="set_calendar_day(null, i)">
            {{ day.name }}
          </div>
          <div v-else class="calendar-header__day-input-wrapper">
            <InputDays @input="(data) => set_calendar_day(data, i)" />
          </div>
        </div>
      </div>
      <div class="calendar-main">
        <div
          class="calendar-main__day"
          v-for="(day, i) in calendar_data"
          :key="i">
          <div v-if="day.shifts.length !== 0" class="calendar-main__day-shift">
            <Shifts
              v-for="(shift, j) in day.shifts"
              :key="j"
              :data="shift"
              :day_number="i"
              :shift_number="j" />
            <BtnAddShift
              v-if="day.shifts.length < max_shifts"
              @btn_click="add_shift(i)" />
          </div>
          <BtnAddShift v-else @btn_click="add_shift(i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import InputDays from '@/components/InputDays.vue';
import BtnAddShift from '@/components/BtnAddShift.vue';
import Shifts from '@/components/Shifts.vue';
import { useCalendar } from '@/composables/useCalendar.js';
import {
  set_local_storage_calendar_name,
  set_local_storage_calendar_data,
} from '@/localstorage/storage.js';

const {
  initialize_calendar_data_structure,
  calendar_data,
  calendar_name,
  max_shifts,
} = useCalendar();

const week_days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const set_calendar_title = (data) => {
  calendar_name.value = data;
  set_local_storage_calendar_name(calendar_name.value);
};

const set_calendar_day = (data, i) => {
  calendar_data.value[i].name = data;
  set_local_storage_calendar_data(calendar_data.value);
};

const add_shift = (i) => {
  calendar_data.value[i].shifts.push({ place: null, trainings: [] });
  set_local_storage_calendar_data(calendar_data.value);
};

onMounted(() => {
  initialize_calendar_data_structure();
});
</script>

<style scoped>
.calendar {
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2e9e4;
  font-family: Caveat;
  width: 100%;
  max-width: 1200px;
}

.calendar-title__wrapper {
  display: flex;
  align-items: center;
  height: 60px;
}

.calendar-title__text {
  font-size: 38px;
  font-weight: 600;
}

.calendar-body {
  width: 100%;
}

.calendar-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-header__week-day,
.calendar-header__day {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  height: 28px;
  min-width: 0;
}

.calendar-header__week-day {
  justify-content: center;
}

.calendar-header__day-text {
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
}

.calendar-header__day-input-wrapper {
  width: 100%;
  padding: 0 4px;
}

.calendar-header__week-day:nth-child(odd),
.calendar-header__day:nth-child(even) {
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}

.calendar-header__week-day:nth-child(even),
.calendar-header__day:nth-child(odd) {
  border-top: 1px solid #000;
}

.calendar-main {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar-main__day {
  padding: 12px 4px 4px 4px;
  min-width: 0;
}

.calendar-main__day:nth-child(odd) {
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}

.calendar-main__day-shift {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
  width: 100%;
}
</style>
