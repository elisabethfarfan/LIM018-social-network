
export default () => {
  const viewLoginTemplate = `



      <div class ="divImgLogin">
          <img src ="">
      </div>

      <div class="divFormLogin"> 

      <div class="form-container">
          <figure>
          <img src = "./imagenes/pawn.png" alt="imagen">
          </figure>

          <h3>Login</h3>

          <form class='formLogin'>
              <div class="group">
              <label class="labelLogin" for = "idEmailLogin">E-mail</label>
              </div>
              <div class="group">
              <input id="idEmailLogin" type="email">
              </div>

              <div class="group">
              <label class="labelLogin" for = "idPasswordLogin">Password</label>
              </div>
              <div class="group">
              <input id="idPasswordLogin" type="password">
              </div>

              <div class="buttonClass">
              <button class="buttons" id="idButtonLogin" type="submit">Inciar sesión</button>
              </div>
          </form> 

          <div class="socialmedia">
            <h4>o inicia sesión con</h4>
          
            <div class="socialmediaOptions">
            <ul>
            <li><img src="" alt="ícono Facebook"></li>
            <li><img src="" alt="ícono Google"></li>
            </ul>
          </div> 
        </div> 
      </div>


export default () =>{
    const viewLoginTemplate = `        
    <div class="divHeaderLogin">
        <h4>¿Aún no tienes una cuenta?</h4>      
        <button class="buttons">Crear Cuenta</button>    
    </div>
>>>>>>> 8f933deb96cd1f341735ccc5a22568122e17a447

    <div class="divContainerImgForm">
        <div class ="divImgLogin">
            <img src ="./imagenes/portada-dogs.png" alt="imágen de perritos y redes sociales">
        </div>    
       
        <div class="divFormLogin"> 
          <figure>
            <img src="./imagenes/dog.png" alt="logo">
          </figure>
          <div class="form-container">        
            <h3>Login</h3>
            <form class='formLogin'>
                <div class="group">
                  <label class="labelLogin" for = "idEmailLogin">E-mail</label>
                </div>
                <div class="group">
                  <input id="idEmailLogin" type="email">
                </div>
                <div class="group">
                  <label class="labelLogin" for = "idPasswordLogin">Password</label>
                </div>
                <div class="group">
                  <input id="idPasswordLogin" type="password">
                </div>
                <div class="buttonClass">
                  <button class="buttons" id="idButtonLogin" type="submit">Inciar sesión</button>
                </div>
            </form>             
            <div class="socialmedia">
              <h4>o inicia sesión con</h4>            
              <div class="socialmediaOptions">
                <img src="./imagenes/facebook.png" alt="ícono Facebook">
                <img src="./imagenes/google.png" alt="ícono Google">
              </div> 
            </div> 
          </div> 
        </div>
    </div>
  `;
  const divElement = document.createElement("div");
  divElement.innerHTML = viewLoginTemplate;
  divElement.setAttribute('class', 'divForm');
  return divElement;
};


/*

let buttonLogin = document.getElementById("idButtonLogin");
buttonLogin.addEventListener("submit",sendLogin)

function sendLogin(){

   let email=document.getElementById("idEmailLogin").value;
   let password=document.getElementById("idPasswordLogin").value;
   console.log(email, " ", password);
}
*/
