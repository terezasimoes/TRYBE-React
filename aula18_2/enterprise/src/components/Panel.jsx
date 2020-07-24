import React, { useContext } from 'react'; // importar useContext
import './Panel.css';

import { EnterpriseContext } from './EnterpriseContext'; // saber qual contexto vou consumir
import WarpDrive from './WarpDrive';
import WeaponsBay from './WeaponsBay';
import ShieldGenerator from './ShieldGenerator';

function Panel() {
  const { energyGauge } = useContext(EnterpriseContext);
  return (
    <div className="complete-panel">
      <span className="energy-gauge">{`Energia em utilização: ${energyGauge}`}</span>
      <div className="interactions-panel">
        <WarpDrive />
        <WeaponsBay />
        <ShieldGenerator />
      </div>
      <span className="energy-warning">A nave tem 4 de energia</span>
    </div>
  );
}

export default Panel;