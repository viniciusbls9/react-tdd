import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { AddAccount } from '@/domain/usecases'
import { EmailInUserError, UnexpectedError } from '@/domain/errors'
export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<RemoteAddAccount.Model>
  ) { }

  async add (params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden : throw new EmailInUserError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccount.Model
}
