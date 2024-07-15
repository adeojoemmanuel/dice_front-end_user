interface OpenloginAdapterConfig {
  adapterSettings: {
    clientId: string;
    network: "testnet" | "mainnet";
    uxMode: "popup" | "redirect";
    whiteLabel?: {
      name: string;
      logoLight: string;
      logoDark: string;
      defaultLanguage: string;
      dark: boolean;
    };
    loginConfig: {
      google?: {
        name: string;
        verifier: string;
        typeOfLogin: "google";
        clientId: string;
      };
      // facebook & twitter 
    };
  };
  loginSettings?: {
    mfaLevel?: "optional" | "mandatory";
  };
}