const Input = ({ name, validation, register, errors, placeholder, type }) => {
  return (
    <div className="form-input">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
        className="form-control"
      />
      {errors[name] && (
        <span className="mensajeError">{errors[name].message}</span>
      )}
    </div>
  );
};

export default Input;
