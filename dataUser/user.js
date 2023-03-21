
const divLogin = document.querySelector('.login-autenticado')


const user = {
   name : 'Enzo de Oliveira Rodrigues',
   dateOfBirth : '05-11-2003',
   email: 'enzo.orodrigues03@gmail.com',
   password: 'ab#INJ05',
   
   login(email , password) {
      const login = email === this.email && password === this.password

      if(login === true){
         divLogin.classList.add('ativo')
         window.alert('Login autenticado com sucesso')

      } else if(email != this.email){
            console.error(`${email} incorreto`)
            divLogin.classList.add('incorreto')
            divLogin.innerHTML= "<h1>Login autenticado com falha</h1> <p>Email incorreto</p>"
      }else if(password != this.password){

         divLogin.classList.add('incorreto')
         divLogin.innerHTML= "<h1>Login autenticado com falha</h1> <p>Email incorreto</p>"
         
      }
   }
}


