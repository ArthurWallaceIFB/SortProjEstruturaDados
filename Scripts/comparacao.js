//#region BubbleSort
$("#btnExecutarComparacao").click(function () {
    ExecutarComparacao();
});

$("#selecionarMetodosComparacao input, .selectOrdem").change(function () {
    ExecutarComparacao();
});


function ExecutarComparacao() {
    $(".divProcessando").fadeIn(300);
    var metodosSelecionados = [];
    var ordem = $(".selectOrdem").val();
    var tamanhos = [1000, 5000, 10000, 20000, 30000];
    var resultadoBubble = [];
    var resultadoInsertion = [];
    var resultadoSelection = [];
    var resultadoMerge = [];
    $("#grupoCheckbox input:checkbox:checked").each(function () {
        metodosSelecionados.push($(this).val());
    });

    if (metodosSelecionados.length > 0) {
        metodosSelecionados.forEach((item) => {
            if (item == "BubbleSort") {
                resultadoBubble.push("BubbleSort");
                tamanhos.forEach((tam) => {
                    resultadoBubble.push(BubbleSort(gerarArrayAleatorio(tam), ordem));
                });
            }
            if (item == "InsertionSort") {
                resultadoInsertion.push("InsertionSort");
                tamanhos.forEach((tam) => {
                    resultadoInsertion.push(BubbleSort(gerarArrayAleatorio(tam), ordem));
                });
            }
            if (item == "SelectionSort") {
                resultadoSelection.push("SelectionSort");
                tamanhos.forEach((tam) => {
                    resultadoSelection.push(BubbleSort(gerarArrayAleatorio(tam), ordem));
                });
            }
            if (item == "MergeSort") {
                resultadoMerge.push("MergeSort");
                tamanhos.forEach((tam) => {
                    resultadoMerge.push(BubbleSort(gerarArrayAleatorio(tam), ordem));
                });
            }
        });
        var resultado = [];
        resultado.push(resultadoBubble);
        resultado.push(resultadoInsertion);
        resultado.push(resultadoSelection);
        resultado.push(resultadoMerge);
        montarTabela(resultado, tamanhos);
        PlotarGrafico(resultado);
    }
    else {
        $(".divProcessando").fadeOut(300);
        $("#erroNenhumSelecionado").fadeIn(500);
        $("#tabelaResultadosComparacao, #divGrafico").fadeOut(500);
        Swal.fire('<h5>Por favor selecione um método de ordenação!</h5>', '', 'warning');
    }
};

function montarTabela(resultado, tamanhos) {
    $("#tabelaResultadosComparacao tbody").html('');
    resultado.forEach((met, i) => {
        if (met.length > 0) {
            $("#tabelaResultadosComparacao tbody").append(`
            <tr>
                <td>${met[0]}</td>
                <td>${met[1][1]} ms</td>
                <td>${met[2][1]} ms</td>
                <td>${met[3][1]} ms</td>
                <td>${met[4][1]} ms</td>
                <td>${met[5][1]} ms</td>

            </tr>
            `);
        }
    });
    $("#erroNenhumSelecionado").hide();
    $(".divProcessando").fadeOut(300);
    $("#tabelaResultadosComparacao").fadeIn(500);

};

function PlotarGrafico(res) {
    $("#divGrafico").fadeIn(400);
    var cores = ['rgb(255, 99, 132)','rgb(75, 192, 192)', 'rgb(255, 159, 64)', 'rgb(54, 162, 235)'];

    var datasets = [];
    res.forEach((item, i) => {
        if (item.length > 0) {
            datasets.push({
                label: item[0],
                backgroundColor: cores[i],
                borderColor: cores[i],
                data: [item[1][1], item[2][1], item[3][1], item[4][1], item[5][1]],
                fill: false,
            })
        }
    });
    
    var config = {
        type: 'line',
        data: {
            labels: [1000, 5000, 10000, 20000, 30000],
            datasets: datasets
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Evoluções de tempo'
            },
            tooltips: {
                mode: 'label',
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Tamanho do vetor'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Tempo em ms'
                    }
                }]
            }
        }
    };


    var ctx = document.getElementById("canvasGrafico").getContext("2d");
    window.myLine = new Chart(ctx, config);
}

//#endregion
$(document).ready(function () {
    ExecutarComparacao();
});