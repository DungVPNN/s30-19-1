let arr = [1, 2, 3, 3, 2, 1];
function dx(arr){
    let start = 0;
    let end = arr.length - 1;
    for(let i in arr){
        start++;
        end--;
        if(arr[start] !== arr[end]){
            return false;
        }
    }
    return true;
}
console.log(dx(arr));