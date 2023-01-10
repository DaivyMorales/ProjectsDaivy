import React, { useEffect, useState } from "react";

const Exercise456 = () => {

    const one = {
        color: 'white',
    }

    const two = {
        color: 'gray',
        
    }


  const [valor, setValor] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Daivy",
    apellidos: "Morales",
});



  useEffect(() => {
    let timerID = setInterval( ()=> tick(), 1000);
    console.log('Start ...')
    return () => {clearInterval(timerID)
    console.log('End X')};
  },[valor]);
  
  function tick() {
    setValor({
      ...valor,
      fecha: new Date(),
      edad: valor.edad +1
    });

  }
  return (
      <div>
      <h2>
        Hora Actual: {valor.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {valor.nombre} {valor.apellidos}
      </h3>
      <h1 style={valor.edad > 0 && valor.edad % 2 === 0 ? one : two }>segundos: {valor.edad}</h1>
    </div>
  );
  
};

export default Exercise456;



