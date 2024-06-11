function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="bg-accent px-1.6 py-4 rounded-4 font-semibold text-14">{children}</button>
  );
}

export default Button;
