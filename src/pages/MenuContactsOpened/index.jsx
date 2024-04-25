import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { TextField, Grid, Typography } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";

const dropDownOptions = [
  { label: "Richiesta Valutazione", value: "richiesta valutazione" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function MenuContactsOpenedPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageInputChange = (event) => {
    const files = event.target.files;
    setImages([...images, ...files]);
  };

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const handleSubmit = () => {
    if (nome && cognome && email && telefono && message) {
      navigate("/confirmation");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleImageDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <>
      <Helmet>
        <title>Task</title>
        <meta name="description" content="Web site " />
      </Helmet>

      <div className="flex flex-col sm:flex-row items-center justify-center bg-white text-black p-4 sm:p-6 relative">
        <Link
          to="/"
          className="block sm:hidden absolute top-2 right-2 h-4 w-4 cursor-pointer mb-4"
        >
          <img
            src="images/img_close.svg"
            alt="close"
            className=" h-4 w-4 cursor-pointer"
          />
        </Link>
        <div className="border-b w-full py-4 border-gray-300 block md:hidden"></div>
        <div className="flex flex-col items-center border-b sm:border-r p-4 w-fullsm:p-10 sm:w-3/4  ">
          <Typography variant="h3" className="text-center font-poppins600 ">
            Contattaci
          </Typography>
          <div className="flex flex-col items-center gap-4 mt-5 w-full">
            <div className="mt-5 flex flex-col gap-4 sm:max-w-xl mx-4 sm:mx-16 ">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Nome"
                    onChange={(e) => setNome(e.target.value)}
                    className=" bg-[#F6F6F6]  hover:bg-transparent "
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Cognome"
                    onChange={(e) => setCognome(e.target.value)}
                    className=" bg-[#F6F6F6]  hover:bg-transparent "
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                    className=" bg-[#F6F6F6] hover:bg-transparent "
                    type="email"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    onChange={(e) => setTelefono(e.target.value)}
                    label="Telefono"
                    className=" bg-[#F6F6F6] hover:bg-transparent  "
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                select
                className=" bg-[#F6F6F6] hover:bg-transparent "
                SelectProps={{
                  native: true,
                }}
              >
                {dropDownOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                fullWidth
                multiline
                variant="outlined"
                onChange={(e) => setMessage(e.target.value)}
                label="Come possiamo aiutarla?"
                className=" bg-[#F6F6F6] hover:bg-transparent  "
                rows={4}
              />

              {images?.length === 0 ? (
                <div className="mt-5 border border-dashed border-gray-900_51 bg-[#F6F6F6] rounded-lg overflow-hidden cursor-pointer flex flex-col items-center">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleImageInputChange}
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="w-full text-[#111111] p-8 text-center cursor-pointer"
                  >
                    {" "}
                    Carica Immagini
                  </label>
                </div>
              ) : (
                <div className=" flex flex-row flex-wrap items-center gap-2 sm:gap-4">
                  <div className="mt-5 border border-dashed border-gray-900_51 bg-[#F6F6F6] rounded-lg overflow-hidden cursor-pointer flex flex-col items-center sm:w-1/5 h-full">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleImageInputChange}
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="w-full text-[#111111] p-8 text-center cursor-pointer flex flex-col items-center"
                    >
                      <img src="images/plus-icon.svg" alt="plus icon" />
                    </label>
                  </div>
                  <div className="flex flex-row gap-2 items-center   ">
                    {images?.map((image, index) => (
                      <div
                        className="border border-dashed border-gray-900_51 flex flex-col items-center p-2 mt-2 rounded-lg bg-[#F6F6F6] cursor-pointer relative "
                        key={index}
                        onMouseEnter={() => handleImageHover(index)}
                        onMouseLeave={() => handleImageHover(null)}
                      >
                        <img
                          key={index}
                          src={URL.createObjectURL(image)}
                          alt={` ${index + 1}`}
                          className="w-20 h-20 m-1 rounded "
                        />
                        {hoveredIndex === index && (
                          <button
                            className="absolute top-2 inset-0 p-2 rounded-full text-white transition-all duration-300 ease-in-out backdrop-blur-sm backdrop-brightness-50 backdrop-contrast-50 backdrop-grayscale"
                            onClick={() => handleImageDelete(index)}
                          >
                            <Delete />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <button
                className="mt-3 sm:mt-5 w-full font-semibold uppercase bg-black text-white rounded-full px-6 py-2 sm:px-10 sm:py-4"
                onClick={handleSubmit}
              >
                Invia Messaggio
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full sm:w-1/4 ">
          <div className="flex flex-col items-center justify-center p-4 sm:p-20 gap-4 sm:gap-10 border-b ">
            <button className="flex flex-col items-center p-2 border-2 rounded-full">
              <img src="images/img_volume.svg" alt="settings" />
            </button>
            <Typography variant="subtitle1">
              Preferisci usare WhatsApp?
            </Typography>
            <p className="font-bold ">+39 331 9467237</p>
          </div>
          <div className="flex flex-col items-center justify-center p-4 sm:p-20 gap-4 sm:gap-10">
            <button className="flex flex-col items-center p-2 border-2 rounded-full">
              <img src="images/img_settings.svg" alt="settings" />
            </button>
            <a
              href="mailto:info@mediartrade.com"
              target="_blank"
              rel="noreferrer"
              className="text-center"
            >
              <Typography variant="subtitle1">
                Preferisci inviarci una Email?
              </Typography>
              <p className="font-bold text-lg">info@mediartrade.com</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
