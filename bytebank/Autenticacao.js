/*
Ser autenticavel significa ter o método autenticar

ducky type
*/

export class Autenticacao{
    static login(autenticavel, senha){
        if(Autenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}