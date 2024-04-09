import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function SimulationPage() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build/fill_unity.loader.js",
    dataUrl: "Build/fill_unity.data",
    frameworkUrl: "Build/fill_unity.framework.js",
    codeUrl: "Build/fill_unity.wasm",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default SimulationPage;
