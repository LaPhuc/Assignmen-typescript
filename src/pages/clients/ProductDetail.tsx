import React, { useEffect, useState } from "react";
import { IProduct } from "../../interface/product";
import image_default from "../../../public/default-image.jpeg";
import { useParams } from "react-router-dom";
import { Image } from "antd";
const ProductDetailPage = ({ products }: { products: IProduct[] }) => {
  const { id } = useParams();
  const [dataProducts, setDataProducts] = useState<IProduct>();
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const dataFilter = products.find((product: IProduct) => product._id === id);
    setDataProducts(dataFilter);
  }, [products]);

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row py-3 text-white">
        <div className="md:w-1/2 flex-none p-3">
          {dataProducts && typeof dataProducts.image === "string" ? (
            <Image
              preview={false}
              width={"100%"}
              className="rounded-t-xl"
              src={dataProducts.image}
              alt="logo"
            />
          ) : (
            <img className="object-cover" src={image_default} />
          )}
          Ï
        </div>

        <div className="grow">
          <h2 className="text-[23px] md:text-[30px] py-2 pl-5">
            {dataProducts?.name}
          </h2>

          <div className=" p-3">
            <div className="w-full text-right">
              <div className="bg-green-500 w-full p-4 rounded-md">
                <span className="text-[25px] md:text-[30px] text-white font-medium">
                  {dataProducts?.price} <span className="underline">đ</span>
                </span>
              </div>

              <div className="p-1">
                <h3 className="capitalize py-3 md:text-[20px]">Số lượng</h3>
                <div className="flex justify-end items-center">
                  <button
                    onClick={() => setNumber(number + 1)}
                    className="border p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <input
                    id="soLuong"
                    className="outline-none w-[40px] h-[34px] text-black pl-3.5 border"
                    type="text"
                    value={number}
                  />
                  <button
                    onClick={() => {
                      if (number > 0) {
                        setNumber(number - 1);
                      }
                    }}
                    className="border p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="py-4 w-full">
                <button className="py-3 bg-[#FF3945] transition-all hover:bg-[#ff616a] text-white h-16 w-full rounded-xl">
                  Chọn mua
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
