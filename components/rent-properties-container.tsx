import type { NextPage } from "next";
import PropertyCard from "./property-card";

const RentPropertiesContainer: NextPage = () => {
  return (
    <form className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
          <PropertyCard
            imgUrl="/property-image@2x.png"
            name="92 Allium Place, Orland FL"
            price={500}
          />
          <PropertyCard
            imgUrl="/property-image1@2x.png"
            name="92 Allium Place, Orland FL"
            price={500}
          />
          <PropertyCard
            imgUrl="/property-image2@2x.png"
            name="92 Allium Place, Orland FL"
            price={500}
          />
          <PropertyCard
            imgUrl="/property-image3@2x.png"
            name="92 Allium Place, Orland FL"
            price={500}
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </form>
  );
};

export default RentPropertiesContainer;
