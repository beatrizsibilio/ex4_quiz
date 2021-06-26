// This is a JavaScript file

function alternativaCorreta(nomeControle, alternativa) {
  $(nomeControle).html("Você escolheu a alternativa <b>"+ alternativa+ "</b>, que está CORRETA!");
  $(nomeControle).css("color", "green");
  navigator.notification.beep(1);
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

function alternativaBcorreta(nomeControle) {
  var alternativa;

  function escolha(buttonIndex){
    if(buttonIndex == 1){
      alternativa = "B";
      alternativaCorreta(nomeControle, alternativa);
    }
    if(buttonIndex == 2){
      alternativa = "A";
     alternativaIncorreta(nomeControle, alternativa);
    }
  }

  navigator.notification.confirm("Escolha a alternativa correta:",escolha,"Alternativas", ['B','A']);
}

$(document).on("click","#responder1", function(){
  alternativaAcorreta("#resposta1");
});

$(document).on("click","#responder2", function(){
  alternativaBcorreta("#resposta2");
});

$(document).on("click","#responder3", function(){
  alternativaBcorreta("#resposta3");
});

$(document).on("click","#responder4", function(){
  alternativaAcorreta("#resposta4");
});

$(document).on("click","#responder5", function(){
  alternativaBcorreta("#resposta5");
});