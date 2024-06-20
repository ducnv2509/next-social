import { SubmitHandler, useForm } from "react-hook-form"
import { useLoginSuccess } from "../useLoginSuccess"
import { useMutation } from "@tanstack/react-query"
import { IUserDetails } from "@/models/api/login-api"
import { AxiosError } from "axios"
import loginApi from "@/api/login-api"

export type LoginFormData = {
  email: string
  password: string
}

export const useLoginForm = () => {
  const onLoginSuccess = useLoginSuccess()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()

  const mutation = useMutation<IUserDetails, AxiosError, LoginFormData>((formData) => loginApi.login(formData), {
    // onError: (err, variables, context) => {
    //   console.log(err)
    // },
    onSuccess: (data, variables, context) => {
      onLoginSuccess(data)
    },
  })

  const handleFormSubmit: SubmitHandler<LoginFormData> = async (data) => {
    mutation.mutate(data)
  }

  return {
    register,
    handleSubmit,
    errors,
    handleFormSubmit,

    mutation,
  }
}