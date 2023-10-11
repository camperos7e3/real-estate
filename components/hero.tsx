import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const locations: MenuProps["items"] = [
  {
    key: "1",
    label: <a onClick={(e) => e.preventDefault()}>Location-1</a>,
  },
  {
    key: "2",
    label: <a onClick={(e) => e.preventDefault()}>Location-2</a>,
  },
  {
    key: "3",
    label: <a onClick={(e) => e.preventDefault()}>Location-3</a>,
  },
];
const types: MenuProps["items"] = [
  {
    key: "1",
    label: <a onClick={(e) => e.preventDefault()}>Type-1</a>,
  },
  {
    key: "2",
    label: <a onClick={(e) => e.preventDefault()}>Type-2</a>,
  },
  {
    key: "3",
    label: <a onClick={(e) => e.preventDefault()}>Type-3</a>,
  },
];
const ranges: MenuProps["items"] = [
  {
    key: "1",
    label: <a onClick={(e) => e.preventDefault()}>Range-1</a>,
  },
  {
    key: "2",
    label: <a onClick={(e) => e.preventDefault()}>Range-2</a>,
  },
  {
    key: "3",
    label: <a onClick={(e) => e.preventDefault()}>Range-3</a>,
  },
];
const Hero: NextPage = () => {
  const router = useRouter();

  const onSearchCTAClick = () => {
    router.push("/properties");
  };
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
      <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
          <div className="self-stretch relative leading-[72px] font-semibold">
            Find Your Dream Home
          </div>
          <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                Rent
              </div>
            </button>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
              <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-primary-400 text-center">
                Sale
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
              <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-center">
                  Locations
                </div>
                <Dropdown
                  className="text-base"
                  menu={{ items: locations }}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select your city `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Property Type
                </div>
                <Dropdown
                  className="text-base"
                  menu={{ items: types }}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select property type `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                  Rent Range
                </div>
                <Dropdown
                  className="text-base"
                  menu={{ items: ranges }}
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Select rent range `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onSearchCTAClick();
                }}
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded w-[102px] flex flex-row items-center justify-center box-border hover:bg-steelblue"
              >
                <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center hover:text-gray-white">
                  Search
                </a>
              </button>
            </nav>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
