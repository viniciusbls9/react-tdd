import { HttpGetClientSpy } from '@/data/test'
import faker from 'faker'
import { RemoteLoadSurveyResult } from '@/data/usercases'

describe('RemoteLoadSurveyResult', () => {
  test('should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemoteLoadSurveyResult(url, httpGetClientSpy)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
