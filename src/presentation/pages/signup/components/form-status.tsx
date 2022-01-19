import React from 'react'
import { useRecoilValue } from 'recoil'
import { signupState } from './atoms'
import { FormStatusBase } from '@/presentation/components'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(signupState)
  return (
    <FormStatusBase state={state} />
  )
}
export default FormStatus
