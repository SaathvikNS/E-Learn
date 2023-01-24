import * as yup from 'yup';

const confirmEmailValidationSchema = yup.object().shape({
    otp:  yup.number().typeError("Invalid confirmation code").required()
})

export default confirmEmailValidationSchema;