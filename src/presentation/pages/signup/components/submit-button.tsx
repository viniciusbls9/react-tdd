import React from 'react'
import { useRecoilState } from 'recoil'
import { signupState } from './atoms'
import { SubmitButtonBase } from '@/presentation/components'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const [state] = useRecoilState(signupState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}
export default SubmitButton
