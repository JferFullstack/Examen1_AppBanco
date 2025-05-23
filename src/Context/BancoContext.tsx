// src/Context/BancoContext.tsx

import React, { createContext, useState, ReactNode } from 'react';

type Transaccion = {
  id: number;
  descripcion: string;
  fecha: string;
};

type BancoContextType = {
  saldo: number;
  transacciones: Transaccion[];
  historial: Transaccion[];      // <-- agregado historial
  depositar: (monto: number) => void;
  transferir: (monto: number, descripcion: string) => boolean;
};

export const BancoContext = createContext<BancoContextType>({} as BancoContextType);

type Props = {
  children: ReactNode;
};

export const BancoProvider = ({ children }: Props) => {
  const [saldo, setSaldo] = useState<number>(10000); // saldo inicial
  const [transacciones, setTransacciones] = useState<Transaccion[]>([]);
  const [historial, setHistorial] = useState<Transaccion[]>([]);  // <-- estado para historial

  const agregarTransaccion = (descripcion: string) => {
    const nuevaTransaccion: Transaccion = {
      id: Date.now(),
      descripcion,
      fecha: new Date().toLocaleString(),
    };

    setTransacciones((prev) => {
      const actualizadas = [nuevaTransaccion, ...prev];
      return actualizadas.slice(0, 20); // máximo 20 transacciones
    });

    setHistorial((prev) => {
      const actualizadas = [nuevaTransaccion, ...prev];
      return actualizadas.slice(0, 20); // máximo 20 transacciones
    });
  };

  const depositar = (monto: number) => {
    setSaldo((prev) => prev + monto);
    agregarTransaccion(`Depósito de L.${monto}`);
  };

  const transferir = (monto: number, descripcion: string): boolean => {
    if (monto > saldo) return false;

    setSaldo((prev) => prev - monto);
    agregarTransaccion(descripcion);
    return true;
  };

  return (
    <BancoContext.Provider
      value={{
        saldo,
        transacciones,
        historial,   // <-- proveer historial en el contexto
        depositar,
        transferir,
      }}
    >
      {children}
    </BancoContext.Provider>
  );
};
