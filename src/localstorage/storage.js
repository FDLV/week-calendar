"use strict";

// записать в local storage имя
export const set_local_storage_calendar_name = (name) => {
  try {
    localStorage.setItem("calendar_name", JSON.stringify(name));
  } catch (error) {
    console.log("Ошибка чтения данных");
  }
};

// записать в local storage данные
export const set_local_storage_calendar_data = (data) => {
  try {
    localStorage.setItem("calendar_data", JSON.stringify(data));
  } catch (error) {
    console.log("Ошибка чтения данных");
  }
};

// прочитать из local storage
export const get_local_storage = () => {
  try {
    const res = {};
    res.name = JSON.parse(localStorage.getItem("calendar_name"));
    res.data = JSON.parse(localStorage.getItem("calendar_data"));

    return res;
  } catch (error) {
    console.log(error, "Ошибка получения данных");
  }
};
