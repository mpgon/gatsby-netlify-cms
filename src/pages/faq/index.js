import React, { useState, useLayoutEffect } from "react";
import FAQs from "../../components/FAQs";
import axios from "axios";

export default function FAQIndexPage() {
  const [error, setError] = useState(false);
  const [logged, setLogged] = useState(false);

  function receiveMessage(event) {
    console.log("receiveMessage", event);
    if (event && event.data && event.data.account && event.data.token) {
      const { account, token } = event.data;
      axios
        .get(`https://api-staging.recaresolutions.com/accounts/${account}`, {
          headers: { Accept: "*/*", Authorization: `Bearer ${token}` },
        })
        .then(response => {
          console.log("response ", response);
          setLogged(true);
          setError(false);
        })
        .catch(error => {
          console.log("error ", error);
          setLogged(false);
          setError(true);
        });
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("message", receiveMessage, false);
    window.parent.postMessage("faq ready", "*");
  }, []);

  if (error) return "error";

  if (!logged) return "Waiting for token";

  return <FAQs />;
}
