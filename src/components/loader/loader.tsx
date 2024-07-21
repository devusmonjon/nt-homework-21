const CardLoader = () => {
  return (
    <div className="lg:w-[28%] md:w-[45%] sm:w-[48%] w-[100%] h-[440px] flex flex-col items-center">
      <div className="w-full h-[300px] bg-[#ddd] bg-skeleton skeleton animate-skeleton"></div>
      <div className="w-[88%] h-[20px] bg-[#ddd] rounded-[5px] bg-skeleton skeleton animate-skeleton mt-4"></div>
      <div className="w-[68%] h-[20px] bg-[#ddd] rounded-[5px] bg-skeleton skeleton animate-skeleton mt-4"></div>
      <div className="w-[90%] h-[20px] bg-[#ddd] rounded-[5px] bg-skeleton skeleton animate-skeleton mt-4"></div>
    </div>
  );
};

export default CardLoader;
