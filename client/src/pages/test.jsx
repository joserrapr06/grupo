import React, { useState, useEffect } from "react";
import axios from "axios";

const PhoneInput = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        console.log(response.data.map(d => d.idd.root));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    setSelectedCountry(selectedCountryCode);
  };

  return (
    <div className="input-label">
      <label htmlFor="telefono">TELÉFONO:</label>
      <div className="input-container">
        <select onChange={handleCountryChange} value={selectedCountry}>
          <option value="" disabled>
            Selecciona un país
          </option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common} ({country.callingCodes ? `+${country.callingCodes[0]}` : ""})
            </option>
          ))}
        </select>
        <input
          type="text"
          id="telefono"
          className="input-bottom-border"
          placeholder="Número de teléfono"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
