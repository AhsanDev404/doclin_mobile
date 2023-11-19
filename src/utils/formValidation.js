
export const validateFormData = async (data, schema, setValidationErrors, onSubmit) => {
    try {
      await schema.validate(data, { abortEarly: false });
      setValidationErrors({});
      onSubmit(data);
    } catch (err) {
      const errors = err.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setValidationErrors(errors);
    }
  };