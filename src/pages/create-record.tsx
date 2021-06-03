import Button from "atomic/button";
import React from "react";

const CreateRecord: React.FC = () => {
  const inputClassName = "p-4 bg-gray-800 text-white text-xl mb-2 rounded-md";
  return (
    <div className=" p-4">
      <h1 className="text-4xl text-center mb-4">Crear registro</h1>
      <form className="flex flex-col text-white">
        <label htmlFor="name">Nombre</label>
        <input className={inputClassName} type="text" name="name" id="name" />
        <label htmlFor="amount">Cantidad</label>
        <input className={inputClassName} type="number" name="amount" id="amount" />
        <label htmlFor="category">Categoria</label>
        <select className={inputClassName} name="category" id="category">
          <option value="Ingresos">Ingresos</option>
          <option value="Vida y entretenimiento">Vida y entretenimiento</option>
        </select>
        <label htmlFor="subcategory">Subcategoria</label>
        <select className={inputClassName} name="subcategory" id="subcategory">
          <option value="Ingresos">Ingresos</option>
          <option value="Vida y entretenimiento">Vida y entretenimiento</option>
        </select>
        <label htmlFor="label">Etiqueta</label>
        <select className={inputClassName} name="label" id="label">
          <option value="Gasto planeado">Gasto planeado</option>
          <option value="Ahorro">Ahorro</option>
        </select>
        <label htmlFor="account">Cuenta</label>
        <select className={inputClassName} name="account" id="account">
          <option value="Nomina">Nomina</option>
          <option value="Efectivo">Efectivo</option>
        </select>
        <label htmlFor="date">Fecha</label>
        <input
          className={inputClassName}
          type="date"
          id="date"
          name="date"
        ></input>
        <Button type="submit">Agregar</Button>
      </form>
    </div>
  );
};

export default CreateRecord;
