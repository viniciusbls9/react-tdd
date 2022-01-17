import React from 'react'
import faker from 'faker'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { InputBase } from '@/presentation/components'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <InputBase name={fieldName} state={{}} setState={null} />
  )
}

describe('Input Component', () => {
  test('Shoul begin with readOnly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Shoul remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })

  test('Shoul focus input on label click', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field)
    const label = sut.getByTestId(`${field}-label`)
    fireEvent.click(label)
    expect(document.activeElement).toBe(input)
  })
})
