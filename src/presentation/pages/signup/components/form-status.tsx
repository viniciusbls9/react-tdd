import React from 'react'
import { useRecoilState } from 'recoil'
import { signupState } from './atoms'
import { FormStatusBase } from '@/presentation/components'

const FormStatus: React.FC = () => {
  const [state] = useRecoilState(signupState)
  return (
    <FormStatusBase state={state} />
  )
}
export default FormStatus
