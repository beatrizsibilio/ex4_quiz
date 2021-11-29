function alternativaCorreta(nomeControle, alternativa) {
  window.location = "index5.html";
}

function alternativaIncorreta(nomeControle, alternativa) {
   $(nomeControle).html("Você escolheu a alternativa <b>"+ alternativa+ "</b>, que está INCORRETA!");
   $(nomeControle).css("color", "red");
   navigator.vibrate(300);
}

function alternativaAcorreta(nomeControle) {
  var alternativa;

  function escolha(buttonIndex){
    if(buttonIndex == 1){
      alternativa = "B";
      alternativaIncorreta(nomeControle, alternativa);
    }
    if(buttonIndex == 2){
      alternativa = "A";
      alternativaCorreta(nomeControle, alternativa);
    }
  }

  navigator.notification.confirm("Escolha a alternativa correta:",escolha,"Alternativas", ['B','A']);
}

$(document).on("click","#responder4", function(){
  alternativaAcorreta("#resposta4");
});