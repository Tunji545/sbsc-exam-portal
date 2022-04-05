const saveSignUpData = () =>{
    let fu_name, e_mail, psw, con_pass;
fu_name = document.getElementById("fu_name").value;
e_mail = document.getElementById("e_mail").value;
psw = document.getElementById("psw").value;
con_pass = document.getElementById("con_pass").value;
 console.log(fu_name, e_mail, psw, con_pass)

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("signupdata"))?JSON.parse(localStorage.getItem("signupdata")):[]
if(user_records.some((v)=>{
    return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "name":fu_name,
  "email":e_mail,
  "psw":psw,
  "con_pass": con_pass
  
})
localStorage.setItem("signupdata",JSON.stringify(user_records));
}

}