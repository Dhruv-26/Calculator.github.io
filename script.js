let pattern = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            pattern = eval(pattern);
            let output = document.getElementById('out');
            output.textContent = pattern;
        }
        else if(e.target.innerHTML == 'CE')
        {
            pattern="";
            document.querySelector('input').value=pattern;
            output = document.getElementById('out');
            output.textContent = pattern;
        }
        else if(e.target.innerHTML == 'AC'){
            pattern=pattern.substring(0,pattern.length-1);
            document.querySelector('input').value = pattern;
        }
        else{
            pattern=pattern + e.target.innerHTML;
            document.querySelector('input').value = pattern;
        }
    })
})