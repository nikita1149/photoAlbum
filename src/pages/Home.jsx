import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img } from "../components";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { filterableData } from "../data";

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [showhamburger, setShowHamburger] = useState(false);

  const toggleHamburger = () => {
    setShowHamburger(!showhamburger);
  };

  const keyword = searchParams.get("keyword");

  const searchKeyword = keyword || "";

  const handleSearch = () => {
    navigate("/search");
  };

  let filteredData = filterableData;

  if (searchKeyword && searchKeyword !== "") {
    filteredData = filterableData?.filter(
      (data) => data?.name?.toLowerCase() === searchKeyword?.toLowerCase()
    );
    if (filteredData.length === 0) {
      filteredData = filterableData?.filter((data) =>
        data?.title?.toLowerCase().includes(searchKeyword?.toLowerCase())
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>Task</title>
        <meta name="description" content="Website" />
      </Helmet>
      <div className="bg-white">
        <div className="container-xs py-4 px-2 md:px-6 md:py-8">
          <header className="flex justify-between items-center mb-6 md:mb-12">
            <Link to="/" className="font-dmserifdisplay text-2xl sm:text-5xl">
              Mediartrade
            </Link>
            <div className="flex items-center">
              <div className="flex gap-6">
                <div className="hidden sm:block text-sm text-uppercase tracking-[0.30px]">
                  Prossime Aste
                </div>
                <div className="hidden sm:block text-sm text-uppercase tracking-[0.30px]">
                  Private Sale
                </div>
                <div className="hidden sm:block text-sm text-uppercase tracking-[0.30px]">
                  Accedi
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <button className="block sm:hidden text-sm text-uppercase tracking-[0.30px]">
                  <ExitToAppIcon />
                </button>
                <div className="hidden sm:block ml-6 tracking-[0.30px]">IT</div>
                <Img
                  src="images/img_arrow_down_gray_900.svg"
                  alt="arrowdown"
                  className="hidden sm:block ml-2 h-6 w-6 cursor-pointer"
                />
                <Img
                  src="images/img_search_black_24dp_gray_900.svg"
                  alt="searchblack"
                  className="ml-4 h-6 w-6 cursor-pointer"
                  onClick={handleSearch}
                />
                <button
                  className="block sm:hidden text-sm text-uppercase tracking-[0.30px]"
                  onClick={toggleHamburger}
                >
                  <MenuIcon />
                </button>
              </div>
              {showhamburger && (
                <div className="absolute top-14 right-0 bg-gray-300/80 rounded-xl w-40 z-50 text-black ">
                  <div className="flex flex-col items-center gap-2 py-3">
                    <Link
                      className="text-sm text-uppercase tracking-[0.30px] border-b border-black"
                      to="/contact"
                    >
                      Contact Page
                    </Link>
                    <Link
                      className="text-sm text-uppercase tracking-[0.30px]"
                      to="/help"
                    >
                      Help
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </header>
          <div className="border-b-2 border-black_14 mb-4 sm:mb-8"></div>
          <div className="flex flex-col items-center text-2xl sm:text-5xl my-4 sm:my-10">
            {searchKeyword}
          </div>

          <>
            <div className="flex items-center gap-3 sm:gap-6 mb-6 sm:mb-12">
              <Text
                size="xl"
                className="text-xl sm:text-3xl font-dmserifdisplay "
              >
                Risultati
              </Text>
              <button className="text-lg sm:text-2xl hover:bg-black hover:text-white rounded-full border-2 px-3 py-1.5 sm:px-7 sm:py-2 font-semibold uppercase">
                1.354
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-14">
              {filteredData?.map((data, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center "
                >
                  <Img
                    src={data.src}
                    alt="image"
                    className=" h-52 w-full sm:h-60 object-cover"
                  />
                  <Button
                    size="xs"
                    leftIcon={
                      <Img
                        src="images/img_eye.svg"
                        alt="eye"
                        className="h-5 w-5"
                      />
                    }
                    className="absolute left-2 top-2 gap-1 rounded-full font-semibold bg-gray-400/60"
                  >
                    3,359
                  </Button>
                  <div className="mt-4 flex flex-col items-start gap-5 sm:gap-10">
                    <Text as="p" className="text-sm font-semibold mb-1 sm:mb-3">
                      {data.title}
                    </Text>
                    <div className="flex flex-col gap-0.5 sm:gap-2 items-start">
                      <span className=" text-base font-normal">Asta:</span>
                      <div className="text-sm font-normal">{data.text}</div>
                    </div>
                  </div>
                </div>
              ))}
              {filteredData.length === 0 && (
                <div className="flex flex-col items-center gap-4 sm:gap-8">
                  <Text
                    size="xl"
                    className="text-xl sm:text-3xl font-dmserifdisplay "
                  >
                    Nessun risultato trovato
                  </Text>
                  <Text
                    size="lg"
                    className="text-lg sm:text-xl text-gray-400 text-center"
                  >
                    Prova a cercare con parole chiave diverse
                  </Text>
                </div>
              )}
            </div>
          </>
          {/* <div className="flex flex-col items-center gap-4 sm:gap-8">
              <Text
                size="xl"
                className="text-xl sm:text-3xl font-dmserifdisplay "
              >
                Nessun risultato trovato
              </Text>
              <Text
                size="lg"
                className="text-lg sm:text-xl text-gray-400 text-center"
              >
                Prova a cercare con parole chiave diverse
              </Text>
            </div> */}
        </div>
      </div>
    </>
  );
}
