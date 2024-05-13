import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);

  const turnedOnLightsCount = lights.filter((light) => light.isOn).length;

  const toggleAllLights = (isOn) => {
    setLights(lights.map((light) => ({ ...light, isOn })));
  };

  function toggleLight(id) {
    setLights(
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        } else {
          return light;
        }
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={toggleLight}
        turnedOnLightsCount={turnedOnLightsCount}
        toggleAllLights={toggleAllLights}
      />
    </Layout>
  );
}
