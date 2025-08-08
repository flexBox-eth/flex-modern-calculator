let userText=document.querySelector('.Display')
        let btn=document.querySelectorAll('.btn')
        let  CurrentExpression=""
        btn.forEach(btn=>{
           
            
           btn.addEventListener('click',()=>{
            userText.value="";
            let   uservalue=  btn.getAttribute('data-value')
                if(uservalue=== '='){
                   
                        CurrentExpression=eval(CurrentExpression);
                        userText.value=CurrentExpression;
                         
                }
                else if(uservalue==="C"){
                    CurrentExpression=""
                    userText.value=''
                 
                }else if(uservalue==='X'){
                    CurrentExpression=CurrentExpression.slice(0,-1)
                    userText.value=CurrentExpression
                }
               
                else{
                    CurrentExpression+=uservalue;
                    userText.value=CurrentExpression

                }
        
        
        })
    })
          
