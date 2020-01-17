$("#btEditarP").on("click", getUsers);

function getUsers() {
  $.ajax({
    url: 'https://reqres.in/api/users',
    success: function(respuesta) {

      var listaUsuarios = $("#lista-usuarios");
      $.each(respuesta.data, function(index, elemento) {
        listaUsuarios.append(
            '<div>'
          +     '<p>' + elemento.first_name + ' ' + elemento.last_name + '</p>'
          +     '<img src=' + elemento.avatar + '></img>'
          + '</div>'
        );    
      });
    },
    error: function() {
        var order = ['primer', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'septimo', 'octavo', 'noveno', 'decimo', 'decimoprimero', 'decimosegundo'];
        document.write('<br>');
        for (var i = 0; i < 12; i++) {
            document.write('<br>');
            document.write("El " + order[i] + " mes es: ");
            document.write('<br>');
            console.log(meses);
        }
    }
  });
}