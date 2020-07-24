import React, { useContext } from 'react';
import { EnterpriseContext } from './EnterpriseContext'; // importe o contexto para consumir

import './Panel.css';

export default function WarpDrive() {
  const { warpSpeed, engageWarpSpeed, disengageWarpSpeed } = useContext(EnterpriseContext);

  return (
    <div className="panel">
      <span>Motor de Dobra</span>
      <div className={`alert-light ${warpSpeed ? 'green-light' : 'red-light'}`} /> 
      {/* a classe indica se o botao está ativo ou não  mas tenho acesso a essa info no warpSpeed do contexto é só consumi-la*/}
        <button onClick={warpSpeed ? disengageWarpSpeed : engageWarpSpeed}>
        {`${warpSpeed ? 'Desengajar' : 'Engajar'} velocidade de dobra`}
      </button>
      <span>Armas e escudos devem estar desligados</span>
    </div>
  );
}