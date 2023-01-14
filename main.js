function createSecretNumber(){

    secretNumber = [00000, false, false, false, false, false] // num, 2, 3, 5, 7, 11
    secretNumber[0] = Math.floor(Math.random() * 899) + 100;

    if(secretNumber[0] % 2 == 0){
        secretNumber[1] = true;
    }
    if(secretNumber[0] % 3 == 0){
        secretNumber[2] = true;
    }
    if(secretNumber[0] % 5 == 0){
        secretNumber[3] = true;
    }
    if(secretNumber[0] % 7 == 0){
        secretNumber[4] = true;
    }
    if(secretNumber[0] % 9 == 0){
        secretNumber[5] = true;
    }
    console.log(secretNumber);
    table = document.getElementsByClassName("table")[0];
    row = table.insertRow(1);
    cell2 = row.insertCell(0);
    cell3 = row.insertCell(1);
    cell5 = row.insertCell(2);
    cell7 = row.insertCell(3);
    cell9 = row.insertCell(4);
    cellxy = row.insertCell(5);

    cell2.innerHTML = secretNumber[1];
    cell3.innerHTML = secretNumber[2];
    cell5.innerHTML = secretNumber[3];
    cell7.innerHTML = secretNumber[4];
    cell9.innerHTML = secretNumber[5];
    

    cellxy.innerHTML = String(secretNumber[0])[0] + ".." + secretNumber[0] % 10;
};
window.onload = createSecretNumber;
function guess(){
    number = document.getElementsByClassName("main-input")[0];
    if(number.value.length == 3){
        if(number.value == secretNumber[0]){
            alert("you won!");
            createSecretNumber();
            number.value = "";
            $("table tr").remove();
        }else{
            alert("wrong!");
            if(number.value <= secretNumber[0]){
                alert("secret number is higher!");
            }else{
                alert("secret number is lower!");
            }
        }
    }
};