import React from 'react'

import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
  gastos,
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsvalidPresupuesto, 
  setGastos
  }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPresupuesto ? (
          <ControlPresupuesto 
            gastos = {gastos}
            setGastos = {setGastos}
            setPresupuesto = {setPresupuesto}
            presupuesto = {presupuesto}
            setIsvalidPresupuesto = {setIsvalidPresupuesto}
            
          />
        ):(
          <NuevoPresupuesto
          presupuesto = {presupuesto}
          setPresupuesto = {setPresupuesto}
          setIsvalidPresupuesto = {setIsvalidPresupuesto}
        />
        )}

    </header>
  )
}
export default Header