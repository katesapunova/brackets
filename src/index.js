module.exports = function check(str, bracketsConfig) {
  if (str.length%2!=0) {
    return false;
 }

 let brackets = [];

for(let i=0;i<bracketsConfig.length; i++){
    brackets[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
}
console.log(brackets);
while(str.length>0){
    let x = 0;
    for (let i=0; i<brackets.length; i++){
        if(str.includes(brackets[i]) ){
            str = str.replace(brackets[i],'')
        }else{
            x++;
        }
    }
    if(x === brackets.length){
        return false;
    }
}

return true;
}
