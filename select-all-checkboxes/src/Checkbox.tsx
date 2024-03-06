import React from "react";
export const Checkbox = ({
  label,
  checked,
  onChange,
  className,
}: {
  label?: string;
  checked?: boolean;
  onChange?: (str: any) => void;
  className?: string;
}) => {
  const handleChange = (e: any) => {
    // propagate checked value upwards
    onChange && onChange(e.target.checked);
  };
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
      />
      <Label>{label}</Label>
    </div>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="text-slate-700 text-sm font-medium px-2">{children}</span>
);
