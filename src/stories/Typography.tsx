import './Typography.css';

interface Itype {
  label: String;
  size: String;
  font: String;
}
export function Typography({ label, size, font }: Itype) {
  return <div className={`Typography--${size} Font--${font}`}> {label} </div>;
}
