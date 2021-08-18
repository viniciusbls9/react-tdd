/**
 * Type para mockar o retorno do caso de uso authentication. Esse type é chamado no arquivo usecases/authentication.ts.
 * A ideia desse arquivo é para se caso um dia a API que estamos usando retornar mais coisas além do accessToken, a gente mexer direto nesse arquivo e não no arquivo de casos de uso. Bom para manter uma organização
 */
export type AccountModel = {
  accessToken: string
  name: string
}
