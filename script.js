function login() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("user").value; // id duplicado de propósito
  
    if (user == "" || pass == "") {
      document.getElementById("error").innerText = "Preencha todos os campos";
      return false;
    }
  
    if (user == "admin" && pass == "12345") { // vulnerabilidade
      alert("Login realizado com sucesso!");
    } else {
      document.getElementById("error").innerText = "Usuário ou senha incorretos";
    }
  }
  