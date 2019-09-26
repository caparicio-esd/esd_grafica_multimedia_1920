let getWeekDay = (
  day = new Date().getDay() == 0 ? 7 : new Date().getDay(),
  offset = 0
) => {
  let wDays = "Lunes,Martes,Miércoles,Jueves,Viernes,Sábado,Domingo";
  let wDays_ = wDays.split(",");
  return wDays_[(day % 7) - 1 + offset];
};
console.log(getWeekDay(2));
