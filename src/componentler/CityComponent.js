import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: 2px solid steelblue;
    outline: 4px solid steelblue;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: steelblue;
    font-size: 14px;
    padding: 0 10px;
    color: honeydew;
    border: 2px solid steelblue;
    outline: 4px solid steelblue;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: honeydew;
  margin: 20px auto;
  font-size: 20px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 180px;
  height: 180px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WelcomeWeatherLogo src={"/react-weather-app/icons/perfect-day.svg"} />
      <ChooseCityLabel>İstediğiniz şehri aratınız lütfen!</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Şehir"
        />
        <button type={"submit"}>Ara</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;
