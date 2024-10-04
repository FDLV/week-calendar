"use strict";

import { ref } from "vue";
import { get_local_storage } from "@/localstorage/storage.js";

const calendar_name = ref(null);
const calendar_data = ref(null);
const is_btns = ref(true);

export const useCalendar = () => {
  const day_numbers = 7;
  const max_shifts = 3;
  const max_trainings = 4;

  const initialize_calendar_data_structure = () => {
    const result = get_local_storage();

    // имя
    if (result.name === null) calendar_name.value == null;
    else calendar_name.value = result.name;

    // данные
    if (result.data === null) {
      const days_arr = [];
      for (let i = 0; i < day_numbers; i++)
        days_arr.push({ name: null, shifts: [] });

      calendar_data.value = days_arr;
    } else calendar_data.value = result.data;
  };

  return {
    initialize_calendar_data_structure,
    calendar_data,
    calendar_name,
    max_shifts,
    max_trainings,
    is_btns,
  };
};
