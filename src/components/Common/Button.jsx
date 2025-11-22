import "./Button.css";

export default function Button({ label, type = "primary", onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {label}
    </button>
  );
}
