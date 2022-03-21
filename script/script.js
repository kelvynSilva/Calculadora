function insert(num){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}
function clean(){
    document.getElementById('result').innerHTML = '';
}
function back(){
    var backNumber = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = backNumber.substring(0, backNumber.length -1)
}
function calc(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = 'undefined'
    }
}