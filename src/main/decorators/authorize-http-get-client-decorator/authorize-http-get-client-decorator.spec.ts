import { GetStorageSpy, mockGetRequest } from '@/data/test'
import { AuthorizeHttpGetClientDecorator } from '@/main/decorators'

type SutTypes = {
  sut: AuthorizeHttpGetClientDecorator
  getStorageSpy: GetStorageSpy
}

const makeSut = (): SutTypes => {
  const getStorageSpy = new GetStorageSpy()
  const sut = new AuthorizeHttpGetClientDecorator(getStorageSpy)
  return {
    sut, getStorageSpy
  }
}

describe('AuthorizeHttpGetClientDecorator', () => {
  test('Should call GetStorage with correct value', () => {
    const { sut, getStorageSpy } = makeSut()
    sut.get(mockGetRequest())
    expect(getStorageSpy.key).toBe('account')
  })
})
