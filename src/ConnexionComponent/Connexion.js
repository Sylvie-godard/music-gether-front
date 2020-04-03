import React from "react";

const Connexion = () => {
  return (
      <div className='auth-model'>
          <h1>Se connecter</h1>
          <div className='texBox'>
              <input type="text" placeholder='...identifiant'/>
          </div>

          <div className='texBox'>
              <input type="text" placeholder='...mot de passe'/>
          </div>
          <input className='send-box' type="submit" value="Se connecter"/>
      </div>
  );
};

export default Connexion;