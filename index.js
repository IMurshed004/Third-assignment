const inputvalue=document.getElementById('userInput');
function generateTable(){
    const inputvalue=document.getElementById('userInput');
        const output=document.getElementById('output');
        if(inputvalue.value==='' || isNaN(inputvalue.value)){
            alert('Please enter a Valid Number!!')
            return;
        }
            if(inputvalue.value>0){
                console.log(inputvalue.value)
                let result = "<table>"; 
                for (let i = 1; i <= 10; i++) {
                  result += "<tr><td>" + inputvalue.value + " x " + i + "</td><td>=</td><td>" + (inputvalue.value* i) + "</td></tr>";
                }
                result += "</table>"; 
                output.innerHTML = result;
                document.getElementById('userInput').value='';
                return;
        }    
              else if(inputvalue.value<=0){
                alert('Please enter a number greater than 0!')
                console.log(inputvalue.value)
              }

}   


        


