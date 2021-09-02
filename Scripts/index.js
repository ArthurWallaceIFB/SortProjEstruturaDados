//#region Definir Códigos dos exemplos de implementação

$("#codeBubble").text(`function BubbleSort(array, ordem) {
    ordem = (ordem == "Aleatoria" || ordem == null) ? gerarOrdemAleatoria() : ordem;
    console.log("Ordem: " + ordem);
    var qntI = 0;
    var tempoExecucao;

    if (ordem == "Crescente") {
        var t0 = performance.now();
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    qntI++;
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        var t1 = performance.now();
        tempoExecucao = (t1 - t0).toFixed(3);
    }

    else {
        var t0 = performance.now();
        for (var i = 0; i < array.length; i++) {
            for (var j = i + 1; j < array.length; j++) {
                if (array[i] < array[j]) {
                    qntI++;
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        var t1 = performance.now();
        tempoExecucao = (t1 - t0).toFixed(3);
    }
    
    return [qntI, tempoExecucao];
}`);

$("#codeInsertion").text(`function InsertionSort(array, ordem){
    ordem = (ordem == "Aleatoria" || ordem == null) ? gerarOrdemAleatoria() : ordem;
    var qntI = 0;
    var tempoExecucao;
    if (ordem == "Crescente") {
        var t0 = performance.now();
        for(i=1; i<array.length; i++){
            temp = array[i];
            var j = i-1;
            for(; j>=0 && array[j]>temp; --j){
                array[j+1] = array[j];
            }
            array[j+1] = temp;
            qntI++;
        }
        var t1 = performance.now();
        tempoExecucao = (t1 - t0).toFixed(3);
    }

    else {
        var t0 = performance.now();
        for(i=1; i<array.length; i++){
            temp = array[i];
            var j = i-1;
            for(; j>=0 && array[j]<temp; --j){
                array[j+1] = array[j];
            }
            array[j+1] = temp;
            qntI++;
        }
        var t1 = performance.now();
        tempoExecucao = (t1 - t0).toFixed(3);
    }
    return [qntI, tempoExecucao];
}`);

$("#codeSelection").text(`function SelectionSort(array, ordem) {
    ordem = (ordem == "Aleatoria" || ordem == null) ? gerarOrdemAleatoria() : ordem;
    var copiaArray = [...array];
    var resultado = [];
    var qntI = 0;
    var tempoExecucao;

    if (ordem == "Crescente") {
        var t0 = performance.now();
        for (var i = 0; i < array.length; i++) {
            var min = copiaArray[0];
            var minIndex = 0;
            for (var j = 0; j < array.length; j++) {
                if (copiaArray[j] < min) {
                    min = copiaArray[j];
                    minIndex = j;
                    qntI++;
                }
            }
            resultado.push(min);
            copiaArray.splice(minIndex, 1);
        }
        var t1 = performance.now();
        tempoExecucao = (t1 - t0).toFixed(3);
    }

    else {
        var t0 = performance.now();
        for (var i = 0; i < array.length; i++) {
            var min = copiaArray[0];
            var minIndex = 0;
            for (var j = 0; j < array.length; j++) {
                if (copiaArray[j] > min) {
                    min = copiaArray[j];
                    minIndex = j;
                    qntI++;
                }
            }
            resultado.push(min);
            copiaArray.splice(minIndex, 1);
        }
        var t1 = performance.now();
        tempoExecucao = (t1 - t0).toFixed(3);
    }
    return [qntI, tempoExecucao];
}`);

$("#codeMerge").text(`var qntIntMerge;
function IniciarMergeSort(array, ordem) {
    ordem = (ordem == "Aleatoria" || ordem == null) ? gerarOrdemAleatoria() : ordem;
    qntIntMerge = 0;
    var tempoExecucao;
    var t0 = performance.now();
    var resultado = MergeSort(array, ordem);
    var t1 = performance.now();
    tempoExecucao = (t1 - t0).toFixed(3);
    return [qntIntMerge, tempoExecucao];
}

function MergeSort(arr, ordem) {

    if (arr.length < 2) return arr;

    var mid = Math.floor(arr.length / 2);
    var subLeft = MergeSort(arr.slice(0, mid), ordem);
    var subRight = MergeSort(arr.slice(mid), ordem);

    return merge(subLeft, subRight, ordem);
}

function merge(a, b, ordem) {
    if (ordem == "Crescente") {
        var result = [];
        while (a.length > 0 && b.length > 0) {
            qntIntMerge++;
            result.push(a[0] < b[0] ? a.shift() : b.shift());
        }
        return result.concat(a.length ? a : b);
    }

    else {
        var result = [];
        while (a.length > 0 && b.length > 0) {
            qntIntMerge++;
            result.push(a[0] > b[0] ? a.shift() : b.shift());
        }
        return result.concat(a.length ? a : b);
    }

}`);
//#endregion

$('[data-toggle="tooltip"]').tooltip();
