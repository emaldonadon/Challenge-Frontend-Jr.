interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}
export const Input = ({ type = "text", placeholder, value, onChange, className }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${className}`} />
  );
}
