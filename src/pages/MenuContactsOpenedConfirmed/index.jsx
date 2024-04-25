import React from "react";
import { Helmet } from "react-helmet";
import { Text } from "../../components";
import { useNavigate } from "react-router-dom";

export default function MenuContactsOpenedConfirmedPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Task</title>
        <meta name="description" content="Web site " />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="bg-white  p-5 md:p-10 flex flex-col items-center justify-center">
          <button
            type="button"
            className="w-14 h-14 rounded-full mb-8 p-2 border-2 flex flex-col items-center justify-center"
          >
            <img src="images/img_checkmark.svg" alt="check" />
          </button>
          <Text
            size="2xl"
            as="p"
            className="text-center font-dmserifdisplay text-2xl md:text-4xl tracking-wide mb-3"
          >
            Messaggio inviato
          </Text>
          <Text
            size="s"
            as="p"
            className="text-center text-sm md:text-lg tracking-wide mb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            risus mauris.
          </Text>
          <button
            className="min-w-32 md:min-w-40 text-lg font-semibold uppercase p-2 rounded-full border-2 flex items-center hover:bg-black hover:text-white"
            onClick={handleClick}
          >
            Chiudi
          </button>
        </div>
      </div>
    </>
  );
}
