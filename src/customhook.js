import { useState, useEffect } from "react";

export async function downloadLocationDetail() {
  const response = await fetch("https://ipapi.co/json");
  const data = await response.json();
  return data;
}

export const useLocationDetails = () => {
  const [locationDetails, setLocationDetails] = useState({
    city: "",
    region: "",
    country: "",
  });

  useEffect(() => {
    updateLoaction();
  }, []);

  async function updateLoaction() {
    const response = await downloadLocationDetail();
    setLocationDetails(response);
  }

  return locationDetails;
};
