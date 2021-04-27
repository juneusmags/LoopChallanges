function start(){
    var product = 1;
    for(var i=1; product<=1e8; i++){
        product*=i;
    }
    return product;
}
start();
