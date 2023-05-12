const first =[1,2,3];
const second = [4,5,6];

//const combined = first.concat(second)

//Spread Operator : unpack the values
const combined = [...first,'A',...second,'c']
console.log(combined)

console.log(...first)



function display(a,b,c)
{
    console.log(a,b,c)
}
display(...first)
