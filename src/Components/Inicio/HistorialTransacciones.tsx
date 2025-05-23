import React, { useContext } from 'react';
import { BancoContext } from '../../Context/BancoContext';

const HistorialTransacciones = () => {
  const { historial } = useContext(BancoContext);

  return (
    <>
      {historial.map((t) => (
        <div key={t.id}>
          <p>{t.descripcion}</p>
          <p>{t.fecha}</p>
        </div>
      ))}
    </>
  );
};
