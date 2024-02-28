import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import CardCategorias from '../CardCategorias';

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    buscarCategorias();
  }, []); 

  const buscarCategorias = async () => {
    try {
      // Substitua 'URL_DA_API/categorias' pela sua URL real
      const response = await fetch('URL_DA_API/categorias');
      const data = await response.json();

      if (Array.isArray(data)) {
        setCategorias(data);
      } else {
        console.error('Dados de categorias não são um array:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
