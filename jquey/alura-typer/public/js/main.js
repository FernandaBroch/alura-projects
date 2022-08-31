let tempoInicial = $('#tempo-digitacao').text()

$(() => {
  atualizaTamanhoFrase()
  atualizaTempoInicial(tempoInicial)
  inicializaContadores()
  inicializaCronometro()
  inicializaMarcadores()
  $('#botao-reiniciar').click(reiniciarJogo)
  atualizaPlacar()
})

let atualizaTamanhoFrase = () => {
  let frase = $('.frase').text()
  let numPalavras = frase.split(' ').length
  let tamanhoFrase = $('#tamanhoFrase').text(numPalavras)
  tamanhoFrase.text(numPalavras)
}

let atualizaTempoInicial = (tempo) => {
  tempoInicial = tempo;
  //console.log(tempo)
  $("#tempo-digitacao").text(tempo);
}

let campo = $('.campo-digitacao')

let inicializaContadores = () => {
  campo.on('input', () => {
    let valorCampo = campo.val()

    let qtdPalavras = valorCampo.split(/\S+/).length - 1
    $('#contador-palavras').text(qtdPalavras)

    let qtdCaracteres = valorCampo.length
    $('#contador-caracteres').text(qtdCaracteres)
  })
}

let inicializaCronometro = () => {
  let tempoRestante = tempoInicial

  campo.one('focus', function () {
    $("#botao-reiniciar").attr("disabled", true);
    let cronometroId = setInterval(() => {
      tempoRestante--
      $('#tempo-digitacao').text(tempoRestante)
      if (tempoRestante <= 0) {
        clearInterval(cronometroId)
        finalizaJogo();
      }
    }, 1000)
  })
}
function finalizaJogo() {
  campo.attr("disabled", true);
  campo.toggleClass("campo-desativado");
  inserePlacar();
}

let inicializaMarcadores = () => {
  campo.on("input", function () {
    var tempoRestante = $("#tempo-digitacao").text();
    var frase = $(".frase").text()
    var digitado = campo.val()
    var comparavel = frase.substr(0, digitado.length)

    if (digitado == comparavel) {
      campo.addClass("borda-verde")
      campo.removeClass("borda-vermelha")
    } else {
      campo.addClass("borda-vermelha")
      campo.removeClass("borda-verde")
    }
  })
}

let reiniciarJogo = () => {
  campo.attr('disabled', false)
  campo.val("")
  $('#contador-palavras').text("0")
  $('#contador-caracteres').text("0")
  $('#tempo-digitacao').text(tempoInicial)
  campo.removeClass('campo-desativado')
  inicializaCronometro()
  campo.removeClass("borda-vermelha");
  campo.removeClass("borda-verde");
}


// botaoReiniciar.click(() => {
//   location.reload();
// })