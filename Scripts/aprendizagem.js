//#region BubbleSort
$("#btnExecutarBubble").click(function(){
    ExecutarBubble();
});

$(".selectOrdem, .inputTamanho, .inputTamMedia").change(function(){
    ExecutarBubble();
});

$('#collapse1').on('show.bs.collapse', function () {
    ExecutarBubble();
  })

function ExecutarBubble(){
    var container = $("#ExemploBubble");
    container.block({ message: "Processando..." });
    var ordem = container.find(".selectOrdem").val();
    var tamanho = container.find(".inputTamanho").val();
    var qntMedia = container.find(".inputTamMedia").val();
    var resultados = [];
    for(var i = 0; i < qntMedia; i++){
        resultados[i] = BubbleSort(gerarArrayAleatorio(tamanho), ordem);
    }
    var mediaTempo = 0, mediaQntInt = 0;
    var divResultados = $("#resultadoExemploBubble");
    divResultados.html('');
    resultados.forEach((item, i) => {
        divResultados.append(`
            <div class="mb-3 px-4 pt-3 pb-2 card cardExemplo">
                <h6>${i+1}º Execução</h6>
                <p class="mb-0">
                    <span class="ml-3 font-weight-500">Tempo: </span><span>${item[1]} ms</span>
                </p>
                <p>
                    <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${item[0]}</span>
                </p>
            </div>`);
            mediaQntInt += parseInt(item[0]);
            mediaTempo += parseFloat(item[1]);
    });
    mediaQntInt = (mediaQntInt/qntMedia).toFixed(0);
    mediaTempo = (mediaTempo/qntMedia).toFixed(3);
    divResultados.append(`
    <div class="mb-3 px-4 pt-3 pb-2 card bg-light-blue cardExemplo">
        <h6>Média</h6>
        <p class="mb-0">
            <span class="ml-3 font-weight-500">Tempo: </span><span>${mediaTempo} ms</span>
        </p>
        <p>
            <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${mediaQntInt}</span>
        </p>
    </div>`);
    container.unblock();
}
//#endregion


//#region InsertionSort
$("#btnExecutarInsertion").click(function(){
    ExecutarInsertion();
});

$(".selectOrdem, .inputTamanho, .inputTamMedia").change(function(){
    ExecutarInsertion();
});

$('#collapse2').on('show.bs.collapse', function () {
    ExecutarInsertion();
  })

function ExecutarInsertion(){
    var container = $("#ExemploInsertion");
    container.block({ message: "Processando..." });
    var ordem = container.find(".selectOrdem").val();
    var tamanho = container.find(".inputTamanho").val();
    var qntMedia = container.find(".inputTamMedia").val();
    var resultados = [];
    for(var i = 0; i < qntMedia; i++){
        resultados[i] = InsertionSort(gerarArrayAleatorio(tamanho), ordem);
    }
    var mediaTempo = 0, mediaQntInt = 0;
    var divResultados = $("#resultadoExemploInsertion");
    divResultados.html('');
    resultados.forEach((item, i) => {
        divResultados.append(`
            <div class="mb-3 px-4 pt-3 pb-2 card cardExemplo">
                <h6>${i+1}º Execução</h6>
                <p class="mb-0">
                    <span class="ml-3 font-weight-500">Tempo: </span><span>${item[1]} ms</span>
                </p>
                <p>
                    <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${item[0]}</span>
                </p>
            </div>`);
            mediaQntInt += parseInt(item[0]);
            mediaTempo += parseFloat(item[1]);
    });
    mediaQntInt = (mediaQntInt/qntMedia).toFixed(0);
    mediaTempo = (mediaTempo/qntMedia).toFixed(3);
    divResultados.append(`
    <div class="mb-3 px-4 pt-3 pb-2 card bg-light-blue cardExemplo">
        <h6>Média</h6>
        <p class="mb-0">
            <span class="ml-3 font-weight-500">Tempo: </span><span>${mediaTempo} ms</span>
        </p>
        <p>
            <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${mediaQntInt}</span>
        </p>
    </div>`);
    container.unblock();
}
//#endregion


//#region SelectionSort
$("#btnExecutarSelection").click(function(){
    ExecutarSelection();
});

$(".selectOrdem, .inputTamanho, .inputTamMedia").change(function(){
    ExecutarSelection();
});

$('#collapse3').on('show.bs.collapse', function () {
    ExecutarSelection();
  })

function ExecutarSelection(){
    var container = $("#ExemploSelection");
    container.block({ message: "Processando..." });
    var ordem = container.find(".selectOrdem").val();
    var tamanho = container.find(".inputTamanho").val();
    var qntMedia = container.find(".inputTamMedia").val();
    var resultados = [];
    for(var i = 0; i < qntMedia; i++){
        resultados[i] = SelectionSort(gerarArrayAleatorio(tamanho), ordem);
    }
    var mediaTempo = 0, mediaQntInt = 0;
    var divResultados = $("#resultadoExemploSelection");
    divResultados.html('');
    resultados.forEach((item, i) => {
        divResultados.append(`
            <div class="mb-3 px-4 pt-3 pb-2 card cardExemplo">
                <h6>${i+1}º Execução</h6>
                <p class="mb-0">
                    <span class="ml-3 font-weight-500">Tempo: </span><span>${item[1]} ms</span>
                </p>
                <p>
                    <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${item[0]}</span>
                </p>
            </div>`);
            mediaQntInt += parseInt(item[0]);
            mediaTempo += parseFloat(item[1]);
    });
    mediaQntInt = (mediaQntInt/qntMedia).toFixed(0);
    mediaTempo = (mediaTempo/qntMedia).toFixed(3);
    divResultados.append(`
    <div class="mb-3 px-4 pt-3 pb-2 card bg-light-blue cardExemplo">
        <h6>Média</h6>
        <p class="mb-0">
            <span class="ml-3 font-weight-500">Tempo: </span><span>${mediaTempo} ms</span>
        </p>
        <p>
            <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${mediaQntInt}</span>
        </p>
    </div>`);
    container.unblock();
}
//#endregion


//#region MergeSort
$("#btnExecutarMerge").click(function(){
    ExecutarMerge();
});

$(".selectOrdem, .inputTamanho, .inputTamMedia").change(function(){
    ExecutarMerge();
});

$('#collapse4').on('show.bs.collapse', function () {
    ExecutarMerge();
  })

function ExecutarMerge(){
    var container = $("#ExemploMerge");
    container.block({ message: "Processando..." });
    var ordem = container.find(".selectOrdem").val();
    var tamanho = container.find(".inputTamanho").val();
    var qntMedia = container.find(".inputTamMedia").val();
    var resultados = [];
    for(var i = 0; i < qntMedia; i++){
        resultados[i] = IniciarMergeSort(gerarArrayAleatorio(tamanho), ordem);
    }
    var mediaTempo = 0, mediaQntInt = 0;
    var divResultados = $("#resultadoExemploMerge");
    divResultados.html('');
    resultados.forEach((item, i) => {
        divResultados.append(`
            <div class="mb-3 px-4 pt-3 pb-2 card cardExemplo">
                <h6>${i+1}º Execução</h6>
                <p class="mb-0">
                    <span class="ml-3 font-weight-500">Tempo: </span><span>${item[1]} ms</span>
                </p>
                <p>
                    <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${item[0]}</span>
                </p>
            </div>`);
            mediaQntInt += parseInt(item[0]);
            mediaTempo += parseFloat(item[1]);
    });
    mediaQntInt = (mediaQntInt/qntMedia).toFixed(0);
    mediaTempo = (mediaTempo/qntMedia).toFixed(3);
    divResultados.append(`
    <div class="mb-3 px-4 pt-3 pb-2 card bg-light-blue cardExemplo">
        <h6>Média</h6>
        <p class="mb-0">
            <span class="ml-3 font-weight-500">Tempo: </span><span>${mediaTempo} ms</span>
        </p>
        <p>
            <span class="ml-3 font-weight-500">Quantidade de iterações: </span><span>${mediaQntInt}</span>
        </p>
    </div>`);
    container.unblock();
}
//#endregion
$(document).ready(function(){
    $('#collapse1').collapse();
});