import type { NextPage } from "next";
import Link from "next/link";
import { useMemo, type CSSProperties } from "react";

type InfoCardType = {
  imgUrl?: string;
  title?: string;
  description?: string;
  link?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const InfoCard: NextPage<InfoCardType> = ({
  imgUrl,
  title,
  description,
  link,
  propWidth,
}) => {
  const sellYourHomeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="rounded bg-gray-white shadow-[0px_24px_68px_rgba(59,_77,_129,_0.08)] flex flex-col items-start justify-start p-[22px] box-border min-w-[300px] max-w-[340px] text-center text-5xl text-gray-700 font-body-regular-600"
      style={sellYourHomeStyle}
    >
      <div className="flex flex-col items-start justify-start gap-[24px]">
        <img
          className="relative w-[78px] h-[78px] overflow-hidden shrink-0"
          alt=""
          src={imgUrl}
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[32px] font-semibold">{title}</div>
          <div className="relative text-base leading-[24px] text-lightslategray text-left flex items-end w-[268px]">
            {description}
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[24px] font-body-regular-600 text-primary-500 text-left inline-block">
            <Link href={link ?? ""} rel="noopener noreferrer" target="_blank">
              Read more
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
