const SelectInput = (props) => {
  const { register, name, options, errors, validation, title, getOptions } =
    props;
  return (
    <div className="form-regist-select">
      <select
        className="form-select"
        name={name}
        {...register(name)}
        onChange={getOptions}
      >
        <option value={title}>{title}</option>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option.iso2}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectInput;
