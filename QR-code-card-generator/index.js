let twitter_text_box=document.getElementById("twitter_tag")
let email_text_box=document.getElementById("email_tag")
let github_text_box=document.getElementById("github_tag")
let name_text_box=document.getElementById("name_tag")
let create_button=document.getElementById("create_button")
let clear_button=document.getElementById("clear_button")
//let output_table=document.getElementById("output_table")
let error_var_track=0
let error_message=true;
//let output_table=document.querySelector(".hide")
//document.getElementById("output_table").style.display="none"

name_text_box.addEventListener("blur",function(){
    let s=name_text_box.value
    if (s=="" || s==" ")
    {
        //alert("Invalid Name")
        name_text_box.style.borderBlockColor='red'
        return false
    }
    name_text_box.style.borderBlockColor='grey'
    return true
})

email_text_box.addEventListener('keyup',function(){
    let s=email_text_box.value
    let check_var=0
    let check_var_domain=0
    for (let i=0;i<s.length;i++)
    {
        if (s[i]=='@')
        {
            check_var+=1
        }
        else if (s[i]=='.')
        {
            check_var_domain+=1
        }
    }
    if (check_var==1)
    {
        if (check_var_domain!=1)
        {
            //alert("Invalid Email")
            email_text_box.style.borderBlockColor='red'
            return false
        }
    }
    else
    {
        // alert("Invalid Email")
        email_text_box.style.borderBlockColor='red'
        return false
    }
    email_text_box.style.borderBlockColor='grey'
    return true
})

email_text_box.addEventListener('blur',function(){
    let s=email_text_box.value
    let check_var=0
    let check_var_domain=0
    for (let i=0;i<s.length;i++)
    {
        if (s[i]=='@')
        {
            check_var+=1
        }
        else if (s[i]=='.')
        {
            check_var_domain+=1
        }
    }
    if (check_var==1)
    {
        if (check_var_domain!=1)
        {
            //alert("Invalid Email")
            email_text_box.style.borderBlockColor='red'
            return false
        }
    }
    else
    {
        // alert("Invalid Email")
        email_text_box.style.borderBlockColor='red'
        return false
    }
    email_text_box.style.borderBlockColor='grey'
    return true
})

twitter_text_box.addEventListener("keyup",function(){
        let s=twitter_text_box.value
        if (s!='')
        {
            if (s[0]!='@')
            {
                twitter_text_box.style.borderBlockColor='red'
                return false
            }
        }
        twitter_text_box.style.borderBlockColor='grey'
        return true
})

function email_check()
{
    let s=email_text_box.value
    let check_var=0
    let check_var_domain=0
    for (let i=0;i<s.length;i++)
    {
        if (s[i]=='@')
        {
            check_var+=1
        }
        else if (s[i]=='.')
        {
            check_var_domain+=1
        }
    }
    if (check_var==1)
    {
        if (check_var_domain!=1)
        {
            //alert("Invalid Email")
            return false
        }
    }
    else
    {
        // alert("Invalid Email")
        return false
    }
    return true
}

function twitter_check()
{
    let s=twitter_text_box.value
    if (s!='')
    {
        if (s[0]!='@')
        {
            return false
        }
    }
    return true
}

function name_check()
{
    let s=name_text_box.value
    if (s=="" || s==" ")
    {
        //alert("Invalid Name")
        return false
    }
    return true
}

// function output()
// {
//     //code to show the pop up div    
//     preventDefault()
//     document.querySelector(".overlay").style.display="flex"   
// }

document.querySelector('#closeBtn').addEventListener("click",function(){
    document.getElementById("overlay").style.display='none'
})


create_button.addEventListener("click",function(e)
{
    e.preventDefault()
    if (name_check())
    {
        name_text_box.style.borderBlockColor='grey'
        if (twitter_check())
        {
            twitter_text_box.style.borderBlockColor='grey'
            if (email_check())
            {
                name_value=name_text_box.value
                email_value=email_text_box.value
                twitter_value=twitter_text_box.value
                github_value=github_text_box.value
                document.getElementById("name_display").textContent=name_value
                document.getElementById("email_display").textContent=email_value
                document.getElementById("twitter_display").textContent=twitter_value
                document.getElementById("github_display").textContent=github_value
                document.getElementById("overlay").style.display='flex'
                var typeNumber = 10;// from 4 to 10
                var errorCorrectionLevel = 'L';
                var qr = qrcode(typeNumber, errorCorrectionLevel);
                var message='Name:'+name_value+"\nEmail:"+email_value+"\nTwitter:"+twitter_value+"\nGitHub:"+github_value
                qr.addData(message);
                qr.make();
                document.getElementById('placeHolder').innerHTML = qr.createImgTag();
                email_text_box.style.borderBlockColor='grey'
            }
            else
            {
                email_text_box.style.borderBlockColor='red'
            }
        }
        else
        {
            twitter_text_box.style.borderBlockColor='red'

            if (email_check())
            {
                email_text_box.style.borderBlockColor='grey'
            }

            else
            {
                email_text_box.style.borderBlockColor='red'
            }
        }
    }
    else
    {
        name_text_box.style.borderBlockColor='red'

        if (twitter_check())
        {
            twitter_text_box.style.borderBlockColor='grey'

            if (email_check())
            {
                email_text_box.style.borderBlockColor='grey'
            }

            else
            {
                email_text_box.style.borderBlockColor='red'
            }
        }

        else
        {
            twitter_text_box.style.borderBlockColor='red'

            if (email_check())
            {
                email_text_box.style.borderBlockColor='grey'
            }

            else
            {
                email_text_box.style.borderBlockColor='red'
            }
        }
    }
})

function clear_text_box(e)
{
    e.preventDefault()
    twitter_text_box.value=''
    name_text_box.value=''
    email_text_box.value=''
    github_text_box.value=''
    document.getElementById("name_display").textContent='NAME : '
    document.getElementById("email_display").textContent='EMAIL ID : '
    document.getElementById("twitter_display").textContent='TWITTER ID : '
    document.getElementById("github_display").textContent='GITHUB : '
    email_text_box.style.borderBlockColor='grey'
    twitter_text_box.style.borderBlockColor='grey'
    name_text_box.style.borderBlockColor='grey'
}

