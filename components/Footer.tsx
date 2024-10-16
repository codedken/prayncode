const Footer = () => {
  return (
    <footer className="mt-20 flex h-[52px] w-full items-center justify-center bg-accent/5">
      <p className="flex items-center gap-1 text-sm font-semibold">
        <span>
          Pray<span className="text-accent">&</span>Code
          <span className="text-accent">.</span>
        </span>
        <span>Copyright </span>
        <span className="text-xl">&copy;</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
