import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Contenidop from "../components/cursospe/Contenidop";
import { getCursoPerById } from "../helpers/getCursoPerById";

const CursoPerPage = () => {
  const [cursop, setCursop] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const newId = parseInt(id);
      setCursop(getCursoPerById(newId));
      setLoading(false);
    }
  }, [id, cursop]);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
        <Contenidop cursop={cursop} />
    );
  }
};

export default CursoPerPage;