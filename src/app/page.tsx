"use client";
import { CardLoader, Footer, Header } from "@/components";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "@/services/api.service";
import { IProduct, IProducts } from "@/interfaces/products";
import Image from "next/image";
import ReactStars from "react-stars";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {};

const Page = (props: Props) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<string>("");
  const [limit, setLimit] = useState<number>(6);
  const [skip, setSkip] = useState<number>(0);

  useEffect(() => {
    async function getCategories(): Promise<void> {
      try {
        const res = await fetchCategories();

        setCategories(res);
      } catch (err) {
        console.log(err);
      }
    }
    getCategories();
    async function getProducts(): Promise<void> {
      try {
        const res = await fetchProducts(category, limit, skip);

        setProducts(res.products);
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, []);
  useEffect(() => {
    async function getProducts(): Promise<void> {
      try {
        setProducts([]);
        const res = await fetchProducts(category, limit, skip);

        setTimeout(() => {
          setProducts(res.products);
        }, Math.floor(Math.random() * 1000));
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
  }, [category]);

  const categoryHandler = (category: string) => {
    setCategory(category === "" ? category : `/category/${category}`);
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className='container mx-auto'>
        <div className='py-[73px] flex flex-wrap justify-between gap-4'>
          <div className='lg:w-[354px] md:w-[44%] w-[100%] h-[239px] bg-[#F6F6F6] py-[46px] px-[41px] rounded-[22px] flex gap-[26px] pr-0 items-center justify-start'>
            <div>
              <Image
                src={"/watch-1.png"}
                width={85}
                height={148.256}
                alt='Watch'
                className='h-[148.256px]'
              />
            </div>
            <div className='w-[173px] flex flex-col gap-[9px]'>
              <h1
                className={`text-[#1E1D1D] ${inter.className} text-[36px] font-bold`}
              >
                Apple
              </h1>
              <p
                className={`${inter.className} text-[#8B8E99] text-[16px] font-medium`}
              >
                Apple is one of the most famous smart watches providing company.
              </p>
            </div>
          </div>
          <div className='lg:w-[354px] md:w-[44%] w-[100%] h-[239px] bg-[#F6F6F6] py-[46px] px-[41px] rounded-[22px] flex gap-[26px] pr-0 items-center justify-start'>
            <div>
              <Image
                src={"/watch-2.png"}
                width={86.392}
                height={150}
                alt='Watch'
                className='h-[150px]'
              />
            </div>
            <div className='w-[173px] flex flex-col gap-[9px]'>
              <h1
                className={`text-[#1E1D1D] ${inter.className} text-[36px] font-bold`}
              >
                Xiaomi
              </h1>
              <p
                className={`${inter.className} text-[#8B8E99] text-[16px] font-medium`}
              >
                Xiaomi smart watches are produced by MI company.
              </p>
            </div>
          </div>
          <div className='lg:w-[354px] md:w-[44%] w-[100%] h-[239px] bg-[#F6F6F6] py-[46px] px-[41px] rounded-[22px] flex gap-[26px] pr-0 items-center justify-start'>
            <div>
              <Image
                src={"/watch-3.png"}
                width={91}
                height={150}
                alt='Watch'
                className='h-[150px]'
              />
            </div>
            <div className='w-[173px] flex flex-col gap-[9px]'>
              <h1
                className={`text-[#1E1D1D] ${inter.className} text-[36px] font-bold`}
              >
                FitBit
              </h1>
              <p
                className={`${inter.className} text-[#8B8E99] text-[16px] font-medium`}
              >
                FitBit smart watches are best for there health and fitness
                features.
              </p>
            </div>
          </div>
        </div>
        <p
          className={`${inter.className} text-center text-[16px] text-[#3858D6] font-medium pt-[62px]`}
        >
          Find your favourite smart watch.
        </p>
        <h1 className='text-[#1E1D1D] font-bold text-[36px] capitalize text-center pb-[65px]'>
          our latest products
        </h1>
        <div className='pb-[135px]'>
          <ul className='flex whitespace-nowrap overflow-x-auto mb-4 gap-4 overflow-hide'>
            <li>
              <button
                type='button'
                className='p-4 px-6 rounded-[50px] bg-[#f6f6f6] transition hover:bg-[#ddd] focus:bg-[#ddd] outline-none'
                onClick={() => categoryHandler("")}
              >
                All
              </button>
            </li>
            {categories.map((category, idx) => (
              <li key={category}>
                <button
                  type='button'
                  className='p-4 px-6 rounded-[50px] bg-[#f6f6f6] transition hover:bg-[#ddd] focus:bg-[#ddd] outline-none'
                  onClick={() => categoryHandler(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
          <div className='flex flex-wrap justify-between'>
            {products.length > 0
              ? products.map((product) => {
                  const price = (
                    product.price -
                    product.price * (product.discountPercentage / 100)
                  )
                    .toString()
                    .split(".")
                    .map((num, i) => (i !== 1 ? num : num.slice(0, 2)))
                    .join(".");

                  return (
                    <div
                      className='lg:w-[28%] md:w-[45%] sm:w-[48%] w-[100%] h-[440px] flex flex-col items-center mb-6 relative card'
                      key={product.id}
                    >
                      <div className='absolute top-[10px] right-[15px] card-icons opacity-0'>
                        <button className='w-[38px] h-[38px] rounded-full bg-[#3858D6] outline-none grid place-items-center'>
                          <div className='w-[22px] h-[22px] grid place-items-center'>
                            <svg
                              width='22'
                              height='22'
                              viewBox='0 0 22 22'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clip-path='url(#clip0_18_119)'>
                                <path
                                  d='M8.25 20.1667C8.75626 20.1667 9.16667 19.7563 9.16667 19.25C9.16667 18.7438 8.75626 18.3334 8.25 18.3334C7.74374 18.3334 7.33334 18.7438 7.33334 19.25C7.33334 19.7563 7.74374 20.1667 8.25 20.1667Z'
                                  stroke='white'
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M18.3333 20.1667C18.8396 20.1667 19.25 19.7563 19.25 19.25C19.25 18.7438 18.8396 18.3334 18.3333 18.3334C17.8271 18.3334 17.4167 18.7438 17.4167 19.25C17.4167 19.7563 17.8271 20.1667 18.3333 20.1667Z'
                                  stroke='white'
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                                <path
                                  d='M0.916664 0.916626H4.58333L7.04 13.1908C7.12382 13.6128 7.35341 13.9919 7.68858 14.2617C8.02375 14.5315 8.44314 14.6749 8.87333 14.6666H17.7833C18.2135 14.6749 18.6329 14.5315 18.9681 14.2617C19.3032 13.9919 19.5328 13.6128 19.6167 13.1908L21.0833 5.49996H5.5'
                                  fill='white'
                                />
                                <path
                                  d='M0.916664 0.916626H4.58333L7.04 13.1908C7.12382 13.6128 7.35341 13.9919 7.68858 14.2617C8.02375 14.5315 8.44314 14.6749 8.87333 14.6666H17.7833C18.2135 14.6749 18.6329 14.5315 18.9681 14.2617C19.3033 13.9919 19.5328 13.6128 19.6167 13.1908L21.0833 5.49996H5.5'
                                  stroke='white'
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_18_119'>
                                  <rect width='22' height='22' fill='white' />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </button>
                        <button className="w-[38px] h-[38px] rounded-full bg-[#FF6B6B] outline-none grid place-items-center mt-2">
                          <div className="w-[23px] h-[21px] grid place-items-center">
                            <svg
                              width='23'
                              height='21'
                              viewBox='0 0 23 21'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M19.5349 3.34542C19.0707 2.86826 18.5194 2.48975 17.9128 2.2315C17.3061 1.97325 16.6558 1.84033 15.9991 1.84033C15.3424 1.84033 14.6921 1.97325 14.0854 2.2315C13.4787 2.48975 12.9275 2.86826 12.4633 3.34542L11.4998 4.33522L10.5363 3.34542C9.5985 2.38205 8.32662 1.84083 7.00043 1.84083C5.67423 1.84083 4.40235 2.38205 3.46459 3.34542C2.52683 4.30879 2 5.6154 2 6.97781C2 8.34022 2.52683 9.64683 3.46459 10.6102L4.42808 11.6L11.4998 18.8648L18.5714 11.6L19.5349 10.6102C19.9994 10.1333 20.3678 9.567 20.6192 8.94374C20.8706 8.32048 21 7.65245 21 6.97781C21 6.30317 20.8706 5.63514 20.6192 5.01188C20.3678 4.38862 19.9994 3.82235 19.5349 3.34542Z'
                                fill='white'
                                stroke='white'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                      <div className='w-full h-[337px] bg-[#F6F6F6] flex justify-center items-center overflow-hidden cursor-pointer'>
                        <div className='w-[250px] h-[280.032px] rounded-[25px] relative hover:scale-[1.2] transition-all duration-500 ease-[cubic-bezier(.47,0,.74,.71)]'>
                          <Image
                            src={product.thumbnail}
                            fill
                            className='object-cover'
                            alt={"image"}
                          />
                        </div>
                      </div>
                      <h1
                        className={`text-center text-[#1E1D1D] text-[24px] font-semibold mt-[11px]`}
                        title={product.title}
                      >
                        {product.title.length < 16
                          ? product.title
                          : product.title.slice(0, 16) + "..."}
                      </h1>
                      <ReactStars
                        count={5}
                        onChange={() => null}
                        size={25}
                        value={product.rating}
                        color2={"#1E1D1D"}
                        className='my-2'
                        edit={false}
                      />
                      <div>
                        <span className='line-through text-[20px] text-[#8B8E99] font-medium leading-[120.5%]'>
                          {product.price}
                        </span>{" "}
                        <span className='text-[24px] text-[#000] font-semibold leading-[120.5%]'>
                          {price}
                        </span>
                      </div>
                    </div>
                  );
                })
              : [0, 1, 2, 3, 4, 5].map((item, i) => <CardLoader key={i} />)}
          </div>
          <div className='text-center pt-[69px]'>
            <button
              type='button'
              onClick={async () => {
                const res = await fetchProducts(category, limit + 6, skip);
                setProducts(res.products);
                setLimit(limit + 6);
              }}
              className='text-center p-2 px-8 bg-[#3858D6] text-[#fff] rounded-2xl font-medium'
            >
              View more
            </button>
          </div>
        </div>
        <p
          className={`${inter.className} text-center text-[16px] text-[#3858D6] font-medium pt-[62px] pb-[5px]`}
        >
          Here are our some of the best clients.
        </p>
        <h1 className='text-[#1E1D1D] font-bold text-[36px] capitalize text-center pb-[65px]'>
          What People Say About Us
        </h1>
        <div className='py-10 pb-[195px]'>
          <Slider {...carouselSettings}>
            <div className='md:w-1/2 w-fll h-[239px] rounded-[22px] bg-[#F6F6F6] mr-[20px] px-[34.32px] py-[30px] carousel-item items-center gap-[27.28px]'>
              <div className='relative w-[162.301px] h-[179px] rounded-[15px] overflow-hidden'>
                <Image
                  src={"/slider-1.jpeg"}
                  alt='slider'
                  fill
                  className='w-full object-cover'
                />
              </div>
              <div className='w-[256px]'>
                <h1
                  className={`${inter.className} text-[#1E1D1D] text-[24px] font-bold`}
                >
                  Hamza Faizi
                </h1>
                <p
                  className={`${inter.className} text-[16px] font-medium mt-[10px] mb-[9px] text-[#8B8E99]`}
                >
                  Don’t waste time, just order! This is the best website to
                  puschase smart watches.
                </p>
                <ReactStars
                  count={5}
                  onChange={() => null}
                  size={25}
                  value={5}
                  color2={"#1E1D1D"}
                  className='my-2'
                  edit={false}
                />
              </div>
            </div>
            <div className='md:w-1/2 w-fll h-[239px] rounded-[22px] bg-[#F6F6F6] mr-[20px] px-[34.32px] py-[30px] carousel-item items-center gap-[27.28px]'>
              <div className='relative w-[162.301px] h-[179px] rounded-[15px] overflow-hidden'>
                <Image
                  src={"/slider-2.jpeg"}
                  alt='slider'
                  fill
                  className='w-full object-cover'
                />
              </div>
              <div className='w-[256px]'>
                <h1
                  className={`${inter.className} text-[#1E1D1D] text-[24px] font-bold`}
                >
                  Hafiz Huzaifa
                </h1>
                <p
                  className={`${inter.className} text-[16px] font-medium mt-[10px] mb-[9px] text-[#8B8E99]`}
                >
                  I’ve been purchasing smart watches of Mohid for a long time.
                  All the products are good quality.
                </p>
                <ReactStars
                  count={5}
                  onChange={() => null}
                  size={25}
                  value={5}
                  color2={"#1E1D1D"}
                  className='my-2'
                  edit={false}
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className='w-full h-[377px] bg-[#F6F6F6] rounded-[22px] mb-[91px] flex items-center md:px-[110px] md:py-[33px] gap-[178px] p-10'>
          <div>
            <h1
              className={`${inter.className} text-[#1E1D1D] text-[26px] md:text-[36px] font-bold capitalize`}
            >
              subscribe to newsletter
            </h1>
            <p
              className={`${inter.className} text-[#8B8E99] text-[16px] font-medium my-[12px]`}
            >
              Get free guide about smart watches daily.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className='relative md:w-[443px] w-full'
            >
              <input
                type='text'
                placeholder='Enter Email Address'
                className='w-full h-[60px] p-[19px_14px_20px_30px] rounded-[15px] outline-none'
              />
              <button className='h-[45px] bg-[#3858D6] rounded-lg flex justify-center items-center text-white font-semibold md:mt-0 mt-4 md:w-[131px] w-full md:absolute top-[7px] right-[9px] outline-none border-[#3858d6] border-[2px] border-solid hover:bg-transparent hover:text-[#3858D6] transition-all duration-300'>
                subscribe
              </button>
            </form>
          </div>
          <div className='hidden md:block'>
            <Image
              width={272}
              height={301}
              alt='watch'
              src={"/watch-newsletter.png"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
