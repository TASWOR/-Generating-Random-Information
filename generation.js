window.onload=function () {
    function getId(id) {
        return document.getElementById(id);
    }
    (function () {
        getId("numb").onclick=function () {
            reset();
            getId("info").innerHTML="~ Генератор случайных чисел онлайн ~";
            getId("numb-type").style.display="block";
            getId("range").innerHTML=getId("countNumbers").value;
            getId("countNumbers").onchange=function () {
                getId("range").innerHTML=getId("countNumbers").value;
            };
            getId("numb-gen").onclick=function () {
                reset();
                var a =[];
                function countNumber() {
                    var firstValue=Number(getId("numb-first").value);
                    var secondValue=Number(getId("numb-second").value);
                        a.push(Math.floor(Math.random() * (secondValue - firstValue + 1)) + firstValue);
                    isNaN(Math.floor(Math.random() * (secondValue - firstValue)) + firstValue)
                        ?getId("numb-answer").innerHTML="Введите число"
                        :getId("numb-answer").innerHTML=a;
                }
                function checkCountNumber() {
                    var firstValue=Number(getId("numb-first").value);
                    var secondValue=Number(getId("numb-second").value);
                    var b=(Math.floor(Math.random() * (secondValue - firstValue + 1)) + firstValue);
                        if(a.length===0){
                            a.push(b);
                        }
                        else if(a.includes(b)===false){
                            a.push(b);
                        }
                        else{
                            checkCountNumber();
                        }
                    isNaN(b)
                        ?getId("numb-answer").innerHTML="Введите число"
                        :getId("numb-answer").innerHTML=a;
                }

                if(getId("numb-check").checked===true){
                    for (var j = 0; j < getId("countNumbers").value; j++) {
                        checkCountNumber()
                    }
                }
                else {
                    for (var i = 0; i < getId("countNumbers").value; i++) {
                        countNumber();
                    }
                }
                function reset() {
                    getId("numb-answer").innerHTML="";
                }
            }
        }
    })();
    (function () {
    getId("ans").onclick=function () {
        reset();
        getId("info").innerHTML="~ Генератор Да или Нет онлайн ~";
        getId("ans-type").style.display="block";
        getId("ans-gen").onclick=function () {
            var first = 1;
            var second =3;
            (Math.floor(Math.random() * (second - first)) + first)===1?
                getId("ans-answer").innerHTML="Да":getId("ans-answer").innerHTML="Нет";
        }
    }

    })();

    (function () {
        getId("pass").onclick=function () {
            reset();
            getId("info").innerHTML="~ Генератор паролей ~";
            getId("pass-type").style.display="block";
            getId("pass-gen").onclick=function () {

                function randNumbPassword(min,max,min2,max2) {
                    var value ="";
                    var value2 ="";
                    var value3 ="";
                    for(var i = 0;i<getId("number").value;i++) {
                        value=String.fromCharCode(Math.floor(Math.random()*(max-min))+min);
                        value2=String.fromCharCode(Math.floor(Math.random()*(max2-min2))+min2);
                        value3+=value+value2;
                }
                value3=value3.substring(0,value3.length/2);

                    getId("pass-answer").innerHTML=value3;
                }
                function randPassword(value) {
                        getId("pass-answer").innerHTML= Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(value, 12)) );
                }
                if(getId("pass-checkNumber").checked===true){
                    if(getId("pass-checkAll").checked===true) {
                        randNumbPassword(33,125,33,125)
                    }
                    else {
                        randPassword(getId("number").value);
                    }
                }
                else if(getId("pass-checkAll").checked===true) {
                    randNumbPassword(33,47,58,125)
                }
                else {

                        randNumbPassword(97,122,97,122)
                }
            }
        }
    })();

    function reset() {
        var element= document.getElementById("element");
       for(var i=0;i<element.childNodes.length;i++){
           if(element.childNodes[i].nodeType===1) {
               element.childNodes[i].style.display="none";
           }
       }

    }
};
