
function signIn(e) {
    let email = document.getElementById('email').value, pass = document.getElementById('pass').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pass.toLowerCase() == pass);
    if(!exist){
        alert("Tài khoản mật khẩu không chính xác!");
    }
    else{
        location.href = "../AfterSignIn/KhoaHoc-AfterSignIn";
        alert("Đăng nhập thành công!")
    }
    e.preventDefault();
}

