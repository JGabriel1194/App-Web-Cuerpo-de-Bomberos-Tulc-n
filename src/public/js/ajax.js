//<!--Funcion para vista previa de la imagen subida -->
(function() {
  function filePreview(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $("#imagePreview").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#image").change(function() {
    filePreview(this);
  });
})();

//<!--Function for to show a alert with modal window  -->
$(function(){
    $('#Provincia').change(function(){
        var id=$(this).val();
        var url="/cantones/list/" + id;
        $.ajax({
            url:url,
            type:"GET",
            success: function(cantones){
                let Canton = $('#Canton');
                let Parish = $('#Parroquia');
                Canton.html("");
                Parish.html("<option>Seleccionar</option>");
                Canton.append(`
                    <option>Seleccionar</option>
                `)
                cantones.forEach(element => {
                    Canton.append(`
                    <option class="id" value="${element.idCanton}">${element.Canton}</option>
                    `)
                });
            }   
        });
    });
});

$(function(){
    $('#Canton').change(function(){
        var id=$(this).val();
        var url="/parish/list/" + id;
        $.ajax({
            url:url,
            type:"GET",
            success: function(parish){
                let Parish = $('#Parroquia');
                Parish.html("");
                parish.forEach(element => {
                    Parish.append(`
                    <option class="id" value="${element.idParroquia}">${element.Parroquia}</option>
                    `)
                });
            }   
        });
    });
});



