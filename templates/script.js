const text = [
"MCA Student",
"Software Developer",
"Python Django Developer",
"Full Stack Developer"
];


let index=0;
let char=0;


let typing=document.getElementById("typing");



function type(){

if(char < text[index].length){

typing.innerHTML += text[index].charAt(char);

char++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}



function erase(){

if(char>0){

typing.innerHTML=text[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}


else{


index++;

if(index>=text.length){

index=0;

}


setTimeout(type,500);


}

}



type();
