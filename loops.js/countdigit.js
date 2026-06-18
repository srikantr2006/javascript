let n=34533;
let sum=0;
for(let i=0; n>0; i++){
    
    n=n%10;
    sum=sum+n;
    n=n/10;

}
console.log(sum);