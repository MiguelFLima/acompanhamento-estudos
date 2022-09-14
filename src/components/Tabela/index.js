import cursos from "../../cursos";
import * as C from "./styles";

function Tabela() {



  return (
    <C.Container>
      <C.Titulo>Cursos</C.Titulo>

      <C.Tabela>

        <C.Thead>
          <C.Linha>
            <C.Th>Data</C.Th>
            <C.Th>Nome do curso</C.Th>
          </C.Linha>
        </C.Thead>

        <C.TBody>
          
            {cursos.map((curso) => (
                <>
                <C.Linha key={curso.id}>
                    <C.Coluna>{`${curso.data.getDate().toString()}/${(curso.data.getMonth() + 1).toString()}/${curso.data.getFullYear()}`}</C.Coluna>
                    <C.Coluna>{curso.nome}</C.Coluna>
                </C.Linha>
                </>
              ))}
        </C.TBody>

      </C.Tabela>

    </C.Container>
  );
}

export default Tabela;
