interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...props }: InputProps) {
  const slug = label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-5 w-[312px]">
      <label htmlFor={slug} className="font-semibold leading-7">
        {label}
      </label>
      <input
        {...props}
        required
        name={slug}
        id={slug}
        className="border px-2 border-blogGray focus:outline-blogYellow rounded-lg text-sm h-12 py-1 w-full"
      />
    </div>
  )
}
