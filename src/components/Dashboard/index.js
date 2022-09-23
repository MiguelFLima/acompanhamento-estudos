import React from "react";
import * as C from "./styles";
import cursos from "../../cursos";

function Dashboard() {
  const qtdCursos = cursos.filter(
    (curso) => curso.CursoAlura == true && curso.ERepetido == false
  );

  return (
    <C.DashContainer>
      <C.TituloDash>Acompanhamento Dash</C.TituloDash>

      <C.BlocosContainer>
        {/* ===== dash 1 ===== */}
        <C.BlocoContainer>
          <C.TituloBloco>Dias de Estudo</C.TituloBloco>
          <C.ConteudoBloco>{cursos.length}</C.ConteudoBloco>
        </C.BlocoContainer>

        {/* ===== dash 2 ===== */}
        <C.BlocoContainer>
          <C.TituloBloco>Cursos Concluídos</C.TituloBloco>
          <C.ConteudoBloco>{qtdCursos.length}</C.ConteudoBloco>
        </C.BlocoContainer>
      </C.BlocosContainer>
    </C.DashContainer>
  );
}

export default Dashboard;
