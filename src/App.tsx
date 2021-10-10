import React, { useEffect } from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";

function App() {
  useEffect(() => {
    const getCoinsInfo = async () => {
      const response = await API.get("cryptoapi", "/coins", true);
      console.log(response);
    };

    getCoinsInfo();
  }, []);

  return (
    <div>
      <h1>Hello from AWS Amplify</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
