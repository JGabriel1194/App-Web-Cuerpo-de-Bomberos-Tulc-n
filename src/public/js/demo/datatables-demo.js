// Call the dataTables jQuery plugin
const language = {
  language:{
    url: "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
  }
}
$(document).ready(function() {
  $("#dataTable").DataTable(language);
  $("#dataTable1").DataTable(language);
  $("#dataTable2").DataTable(language);
  $("#dataTable3").DataTable(language);
});

//Datatimer
$(function() {
  $("#datepicker").datepicker({
    firstDay: 1,
    monthNames: [
      "Enero",
      "Febreo",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    dayNamesMin: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    dateFormat: "dd-mm-yy"
  });
});

$(function() {
  const format = {
    timeFormat: "h:mm p",
    use24hours: true,
    //format: 'HH:mm',
    interval: 15,
    // minTime: "10",
    // maxTime: "6:00pm",
    // defaultTime: "11",
    // startTime: "10:00",
    dynamic: true,
    dropdown: true,
    scrollbar: false
  };
  $("#hora1").timepicker(format);
  $("#hora2").timepicker(format);
  $("#hora3").timepicker(format);
  $("#hora4").timepicker(format);
  $("#hora5").timepicker(format);
});
