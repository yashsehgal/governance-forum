interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...htmlAttributes
}: ButtonProps) {
  return (
    <button
      className={
        `rounded-md px-4 py-1.5 font-medium flex flex-row items-center justify-center gap-1.5 border ${
          variant === 'primary'
            ? 'bg-pink-500 text-white border-transparent hover:brightness-95'
            : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100'
        }` +
        ' ' +
        className
      }
      {...htmlAttributes}>
      {children}
    </button>
  );
}
