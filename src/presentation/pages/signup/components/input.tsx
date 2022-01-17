import React from 'react'
import { useRecoilState } from 'recoil'
import { signupState } from './atoms'
import { InputBase } from '@/presentation/components'

type Props = {
  type: string
  name: string
  placeholder: string
}

const Input: React.FC<Props> = ({ name, placeholder, type }: Props) => {
  const [state, setState] = useRecoilState(signupState)
  return (
    <InputBase
      type={type}
      name={name}
      placeholder={placeholder}
      state={state}
      setState={setState}
    />
  )
}
export default Input
