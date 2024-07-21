const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-center items-center py-[23px]">
      <div className="container">
        <p className="text-center text-[16px] font-medium leading-[125.5%]">
          Copyright @ <span>{new Date().getFullYear()}</span> | Mohid
        </p>
      </div>
    </footer>
  );
};

export default Footer;
