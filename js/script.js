console.log("hello world");






function init() {
  $.ajax(
  {
  url: "https://flynn.boolean.careers/exercises/api/holidays",
  method: "GET",
  success: function (data, stato) {

  },
  error: function (error) {
  alert("Chiamata sbagliata " + errore);
  }
  }
  );


}
