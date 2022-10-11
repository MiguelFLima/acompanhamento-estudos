import React from "react";
import * as C from "./styles";
import cursos from "../../cursos";

function Dashboard() {
  const qtdCursos = cursos.filter(
    (curso) => curso.CursoAlura == true && curso.ERepetido == false
  );

  const cursosNext = cursos.filter(
    (curso) => curso.foco == "NextJS" && curso.ERepetido == false
  );
  const cursosReact = cursos.filter(
    (curso) => curso.foco == "ReactJS" && curso.ERepetido == false
  );
  const cursosJS = cursos.filter(
    (curso) => curso.foco == "JS Vanilla" && curso.ERepetido == false
  );
  const cursosHTML = cursos.filter(
    (curso) => curso.foco == "HTML"  && curso.ERepetido == false
  );
  const cursosCSS = cursos.filter(
    (curso) => curso.foco == "CSS"  && curso.ERepetido == false
  );

  // console.log(cursosHTML);

  return (
    <C.DashContainer>
      <C.TituloDash>Acompanhamento Dash</C.TituloDash>

      <C.BlocosContainerMaiores>
        {/* ===== dash 1 ===== */}
        <C.BlocoContainer>
          <C.TituloBloco>Dias de Estudo</C.TituloBloco>
          <C.ConteudoBloco>{cursos.length}</C.ConteudoBloco>
        </C.BlocoContainer>

        <C.BlocoContainer>
          <C.TituloBloco>Cursos Concluídos</C.TituloBloco>
          <C.ConteudoBloco>{qtdCursos.length}</C.ConteudoBloco>
        </C.BlocoContainer>
      </C.BlocosContainerMaiores>

      <C.BlocosContainerMenores>
        <C.BlocoMenor>
          <C.TituloBlocoMenor>
            Cursos Sobre <br /> <strong>HTML</strong>
          </C.TituloBlocoMenor>
          <C.ConteudoBlocoMenor>{cursosHTML.length}</C.ConteudoBlocoMenor>
        </C.BlocoMenor>
        <C.BlocoMenor>
          <C.TituloBlocoMenor>
            Cursos Sobre <br /> <strong>CSS</strong>
          </C.TituloBlocoMenor>
          <C.ConteudoBlocoMenor>{cursosCSS.length}</C.ConteudoBlocoMenor>
        </C.BlocoMenor>
        <C.BlocoMenor>
          <C.TituloBlocoMenor>
            Cursos Sobre <br /> <strong>JS Vanilla</strong>
          </C.TituloBlocoMenor>
          <C.ConteudoBlocoMenor>{cursosJS.length}</C.ConteudoBlocoMenor>
        </C.BlocoMenor>
        <C.BlocoMenor>
          <C.TituloBlocoMenor>
            Cursos Sobre <br /> <strong>ReactJS</strong>{" "}
          </C.TituloBlocoMenor>
          <C.ConteudoBlocoMenor>{cursosReact.length}</C.ConteudoBlocoMenor>
        </C.BlocoMenor>
        <C.BlocoMenor>
          <C.TituloBlocoMenor>
            Cursos Sobre <br /> <strong>NextJS</strong>
          </C.TituloBlocoMenor>
          <C.ConteudoBlocoMenor>{cursosNext.length}</C.ConteudoBlocoMenor>
        </C.BlocoMenor>
      </C.BlocosContainerMenores>
    </C.DashContainer>
  );
}

export default Dashboard;
