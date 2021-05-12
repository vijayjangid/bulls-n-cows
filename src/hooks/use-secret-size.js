import { useContext } from "react";
import { SecretContext } from "../state/secret-context";

export default function useSecretSize() {
  const { secretSize, setSecretSize } = useContext(SecretContext);
  return { secretSize, setSecretSize };
}
