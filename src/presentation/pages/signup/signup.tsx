import React, { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { signupState, Input, SubmitButton, FormStatus } from './components'
import { Footer, LoginHeader, currentAccountState } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import { AddAccount } from '@/domain/usecases'
import Styles from './signup-styles.scss'

type Props = {
  validation: Validation
  addAccount: AddAccount
}

const SignUp: React.FC<Props> = ({ validation, addAccount }: Props) => {
  const resetSignUpState = useResetRecoilState(signupState)
  const { setCurrentAccount } = useRecoilValue(currentAccountState)
  const history = useHistory()
  const [state, setState] = useRecoilState(signupState)

  const validate = (field: string): void => {
    const { name, email, password, passwordConfirmation } = state
    const formData = { name, email, password, passwordConfirmation }

    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.nameError || !!old.emailError || !!old.passwordError || !!old.passwordConfirmationError }))
  }

  useEffect(() => resetSignUpState(), [])
  useEffect(() => validate('name'), [state.name])
  useEffect(() => validate('email'), [state.email])
  useEffect(() => validate('password'), [state.password])
  useEffect(() => validate('passwordConfirmation'), [state.passwordConfirmation])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState(old => ({ ...state, isLoading: true }))
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
      })
      setCurrentAccount(account)
      history.replace('/')
    } catch (error) {
      setState(old => ({ ...state, isLoading: false, mainError: error.message }))
    }
  }

  return (
    <div className={Styles.signupWrap}>
      <LoginHeader />
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <SubmitButton text="Cadastrar" />
          <Link data-testid="login-link" replace to="/login" className={Styles.link}>Voltar para Login</Link>
          <FormStatus />
        </form>
      <Footer />
    </div>
  )
}
export default SignUp
