import * as Yup from 'yup';
import DOMPurify from 'dompurify';
import xss from 'xss';

const useFormikSanitizingData = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
  });

  const sanitizeOutput = (output) => {
    // Use xss to sanitize output content
    return xss(output);
  };

  const onSubmit = (values, actions) => {
    alert(
      JSON.stringify(
        {
          name: sanitizeOutput(values.name),
          email: sanitizeOutput(values.email),
          message: sanitizeOutput(values.message),
        },
        null,
        2
      )
    );
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const sanitizeInput = (input) => {
    // Use DOMPurify to sanitize HTML content
    return DOMPurify.sanitize(input);

    // DOMPurify используется в функции sanitizeInput, чтобы очистить любой входной текст от потенциально вредоносного или неправильного HTML-кода,
    // который может попытаться вставить пользователь.

    // Таким образом, при вводе пользователем сообщения в поле "Message", функция sanitizeInput вызывается,
    // чтобы произвести санитизацию содержимого поля перед сохранением в состояние формы.
    // Это позволяет избежать возможных проблем безопасности, связанных с неправильным HTML-кодом введенным пользователем.
  };

  return {
    initialValues,
    validationSchema,
    onSubmit,
    sanitizeInput,
  };
};

export default useFormikSanitizingData;
