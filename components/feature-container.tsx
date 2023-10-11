import type { NextPage } from "next";
import InfoCard from "./info-card";

const FeatureContainer: NextPage = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <InfoCard
            imgUrl="/icon.svg"
            title="Sell your home"
            description=" We do a free evaluation to be sure you want to start selling."
            link="/link1"
          />
          <InfoCard
            imgUrl="/icon1.svg"
            title="Rent your home"
            description=" We do a free evaluation to be sure you want to start selling."
            propWidth="312px"
            link="/link2"
          />
          <InfoCard
            imgUrl="/icon2.svg"
            title="Buy a home"
            description=" We do a free evaluation to be sure you want to start selling."
            propWidth="unset"
            link="/link3"
          />
          <InfoCard
            imgUrl="/icon3.svg"
            title="Free marketing"
            description=" We do a free evaluation to be sure you want to start selling."
            propWidth="312px"
            link="/link4"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureContainer;
