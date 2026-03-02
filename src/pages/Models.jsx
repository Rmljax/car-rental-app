import React, { useEffect, useState } from "react";
import ModelHero from "../components/ModelHero";
import VehicleModels from "../components/VehicleModels";
import Booking from "../components/Booking";
import axios from "axios";
import SuccessPopup from "../components/ui/SuccessPopup";

export default function Models() {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");

  async function fetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car",
    );
    const models = data.data;
    setCarModels(models);
  }

  useEffect(() => {}, [bookingOpen]);

  useEffect(() => {
    fetchModels();
  }, []);
  return (
    <>
      <SuccessPopup successOpen={successOpen} />
      <Booking
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelHero />
      <VehicleModels
        carModels={carModels}
        setCarModels={setCarModels}
        setBookingOpen={setBookingOpen}
        setSelectedModel={setSelectedModel}
      />
    </>
  );
}
