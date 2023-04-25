const inputElement = document.getElementById('input-nova-tarefa');


inputElement.addEventListener('keyup', function(e){
    var key = e.keyCode;
    if(key == 13){
        
        var slugInput = document.getElementById('input-nova-tarefa').value;
        slugInput = slugInput.replaceAll(' ', '-')

        var tarefaInsertion = `<div id="main"><div id="teste" onclick="check()" style="display: inline;"><input type="checkbox" name="${slugInput}"><p id="${slugInput}" style="display: inline; margin-left: 5px;">${document.getElementById('input-nova-tarefa').value}</p></div><div id="delete"><a href="#">X</a></div></div>`;

        
        document.getElementById('main-area').innerHTML += tarefaInsertion;
        document.getElementById('input-nova-tarefa').value = ''
        
    }
})

function check(){
    alert(slugInput);
}

