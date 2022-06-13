



$('#boton').click(function(){
    // if($('#lista')[0].children.length){return}
    const lista = $('#lista');
    lista.empty();
    $.get('http://localhost:5000/amigos',function(data){
        data.forEach(element => {
            var item = document.createElement('li');
            item.innerHTML = element.name;
            $('#lista').append(item)
        });
    })
});

$('#search').click(function(){
    
    var index = $('#input')[0].value;
    // if(index < 1 || index > 6){//esta mal, ya que si elimino el amigo, ese id ya no estara.
    //     //lo que deberia hacer es poner donde cierra el parentesis del get poner ahi esta linea de error
    //     $('#amigo')[0].innerHTML= 'ese id no tiene registrado ningun amigo';
    // }else{
    $('#amigo')[0].innerHTML = '';
    $.get('http://localhost:5000/amigos/'+ index , function(data){
        $('#amigo').append(data.name);
        $('#input')[0].value = '';
    }).fail(()=>{
        $('#amigo')[0].innerHTML= 'ese id no tiene registrado ningun amigo';
    })

});

$('#delete').click(function(){
    var index = $('#inputDelete')[0].value;
    if(index < 1 || index > 6){
        $('#success')[0].innerHTML= 'ese id no tiene registrado ningun amigo';}
    else{
        $.ajax({
            url : 'http://localhost:5000/amigos/'+ index,
            type : 'DELETE',
            success : function(){
                $('#success')[0].innerHTML = 'Tu amigo fue borrado con exito';
            }
        })
    }
})
