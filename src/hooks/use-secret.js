import { useContext } from "react";
import { SecretContext } from "../state/secret-context";

export default function useSecret() {
  const { secret, resetSecret } = useContext(SecretContext);
  return { secret, resetSecret };
}
