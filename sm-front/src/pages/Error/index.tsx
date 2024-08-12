import { ContainerError, Erro } from "./styles";

export function Error(){
    return(
        <ContainerError>
            <Erro>
                <h1> 404 </h1>
                <h3>Página não encontrada!</h3>
            </Erro>
            
        </ContainerError>
    )
}