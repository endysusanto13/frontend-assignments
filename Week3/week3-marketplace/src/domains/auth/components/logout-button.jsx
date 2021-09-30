import { Button } from "components/button";
import { useLogout } from "../auth.state";

export const LogoutButton = () => {
  const logout = useLogout();

  return(
    <Button variant="primary" onClick={logout}>
      Logout
    </Button>
  );
};
