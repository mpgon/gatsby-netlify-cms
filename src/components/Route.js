import { useAuth } from "./LoginProvider";

export default function Route({ children }) {
  const { isLogged, error } = useAuth();

  if (error) return "error";

  if (isLogged) return children;

  console.info("waiting for auth");
  return null;
}
