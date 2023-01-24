import * as yup from 'yup';

const forgotPasswordValidationSchema = yup.object().shape({
    email: yup.string().email("Invalid E-mail id").required("E-mail required!")
})

export default forgotPasswordValidationSchema;