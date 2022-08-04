import formLogin from './login.js';
import formRegisters from './register.js';
import header from './home.js';
import crearPos from './crearPost.js';
import asideHome from './aside.js';
import perfil from './perfil.js';
//  import mensajeExito from './modalesMensajes.js';

const components = {
  login: formLogin,
  register: formRegisters,
  headerNet: header,
  createPost: crearPos,
  aside: asideHome,
  perfilUser: perfil,
  // mensajeExito: modalesMensajes,
};

export { components };
