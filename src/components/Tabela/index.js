import cursos from "../../cursos";
import * as C from "./styles";

function Tabela() {

  const cursosOrdenados = cursos.sort((a,b) => b.data - a.data )
  
  
  // {
  //   if(a.data > b.data){
  //     return -1;
  //   }
  //   if(a.data < b.data){
  //     return 1;
  //   }
  //   return 0;
  // })

  return (
    <C.Container>
      <C.Titulo>Acompanhamento de Estudos</C.Titulo>

      <C.ContainerTabela>
        <C.Tabela>
          <C.Thead>
            <C.LinhaTitulo>
              <C.Th>Data</C.Th>
              <C.Th>Nome do curso</C.Th>
              <C.Th>Link do curso</C.Th>
            </C.LinhaTitulo>
          </C.Thead>

          <C.TBody>
            {cursosOrdenados.map((curso, index) => (
              <>
                <C.Linha key={index}>
                  <C.Coluna>{`${curso.data.getDate().toString()}/${(
                    curso.data.getMonth() + 1
                  ).toString()}/${curso.data.getFullYear()}`}</C.Coluna>
                  <C.Coluna>{curso.nome}</C.Coluna>
                  <C.Coluna>
                    <C.aLink target={"_blank"} href={curso.link}>
                      {curso.link}
                    </C.aLink>
                  </C.Coluna>
                </C.Linha>
              </>
            ))}
          </C.TBody>
        </C.Tabela>
      </C.ContainerTabela>
    </C.Container>
  );
}

export default Tabela;
