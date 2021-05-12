import { createContext, useCallback, useEffect, useState } from "react";
import { MIN_DIGITS } from "../constants";

export const SecretContext = createContext();

const getRandomSecret = (size) =>
  Math.floor(
    Math.pow(10, size - 1) + Math.random() * 9 * Math.pow(10, size - 1)
  ).toString();

export const SecretContextProvider = ({ children }) => {
  const [secretSize, setSecretSize] = useState(MIN_DIGITS);
  const [secret, setSecret] = useState(getRandomSecret(secretSize));
  const resetSecret = useCallback(() => {
    setSecret(getRandomSecret(secretSize));
  }, [secretSize, setSecret]);

  useEffect(() => {
    resetSecret();
  }, [resetSecret]);

  return (
    <SecretContext.Provider
      value={{
        secretSize,
        setSecretSize,
        secret,
        resetSecret
      }}
    >
      {children}
    </SecretContext.Provider>
  );
};
