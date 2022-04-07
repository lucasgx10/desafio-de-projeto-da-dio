
function ValidaArray (arr, num) {
    try{
        if (!arr && !num) throw new ReferenceError ("enviar os parametros corretos")

        if (typeof arr !== 'object') throw new TypeError ('o array precisa ser do tipo object')
    
        if (typeof num !== "number") throw new TypeError ('o num tem que ser do tipo number')
    
        if (arr.length !== num) throw new RangeError ('tamanho invalido')

        return arr;

    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log ('esse erro e um referenceerror')
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log ('esse erro e um typeError')
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log ('esse erro e um RangeError')
            console.log(e.message);
        }else {
            console.log('tipo de erro n esperado:' + e);
        }
    }
}

console.log(ValidaArray([1], 1));