import { Unity, useUnityContext } from "react-unity-webgl";
import Layout from "../components/Layout/Layout";
import SimulationIntro from "../components/Simulation/SimulationIntro";
import { useState } from "react";

function SimulationPage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/fill_unity.loader.js",
    dataUrl: "Build/fill_unity.data",
    frameworkUrl: "Build/fill_unity.framework.js",
    codeUrl: "Build/fill_unity.wasm",
  });

  const [showSimulation, setShowSimulation] = useState(false);

  const handleStartSimulation = () => {
    setShowSimulation(true);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-full border-box pt-10">
        {!showSimulation ? (
          <SimulationIntro onStart={handleStartSimulation} />
        ) : (
          <Unity
            className="border-l-8 border-r-8 rounded-lg"
            style={{ width: "80%", height: "80%", borderColor: "#FFF6A3" }}
            unityProvider={unityProvider}
          />
        )}
      </div>
    </Layout>
  );
}

export default SimulationPage;
