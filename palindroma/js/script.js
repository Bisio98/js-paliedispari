// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindroma(el,n){
    for( let i = 0; i < n; i++){
        console.log(el[i]);
        console.log(el[n-i-1]);
        if(el[i] === el[n-i-1]){
        }else{
            return false;
        }
    }   
    return true;
}

const word = prompt('Inserire una parola');
if( palindroma(word,word.length)){
    console.log('E\' palindroma');
}else{
    console.log('Non è palindroma');
}

