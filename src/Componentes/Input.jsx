function Input({ label, tipo = "text", name, value, onChange }) {
  if (tipo === "textarea") {
    return (
      <div>
        <label>{label}</label>
        <textarea name={name} className="u-full-width" value={value} onChange={onChange}></textarea>
      </div>
    );
  }

  return (
    <div>
      <label>{label}</label>
      <input type={tipo} name={name} className="u-full-width" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;