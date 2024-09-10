document.addEventListener('DOMContentLoaded',()=>
{
    const form =document.getElementById('myForm');
    const email = document.getElementById('email');
    const password= document.getElementById('password');
    const username=document.getElementById('username');
    const emailFeedback=document.getElementById('emailFeedback');
    const passwordFeedback=document.getElementById('passwordFeedback');
    const usernameFeedback=document.getElementById('usernameFeedback');


    email.addEventListener('input',()=>
    {
        if(email.validity.valid)
        {
            emailFeedback.textContent='Valid Email !';
            emailFeedback.className='valid';

        }
        else{
            emailFeedback.textContent='Plese enter a valid Email address !';
            emailFeedback.classNam='error';
        }
    });


    password.addEventListener('input',()=>
    {
        if(password.value.length>=8)
        {
            passwordFeedback.textContent='Password is strong!';
            passwordFeedback.className='valid';

        }
        else{
            passwordFeedback.textContent='Password must be be atlest 8 charecters long !';
            passwordFeedback.classNam='error';
        }
    });


    username.addEventListener('input',()=>
    {
        if(username.value.length>=3)
        {
            usernameFeedback.textContent='Username looks good !';
            usernameFeedback.className='valid';

        }
        else{
            usernameFeedback.textContent=' Username must be be atlest 3 charecters long  !';
            usernameFeedback.classNam='error';
        }
    });

    form.addEventListener('submit',(event)=>
    {
        if(!email.validity.valid||password.value.length<8||username.value.length<3)
        {
            event.preventDefault();
            alert('Plese fill out the form correctly before submitting');
        }
    })
});