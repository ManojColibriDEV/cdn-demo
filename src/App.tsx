import { useState, useEffect } from "react";
import Button from "./common/ui/button";
import LoginModal from "./components/login-modal";

const App = (props: {
  environment?: string;
  subsidiary?: string;
  redirectUrl?: string;
  onRedirect?: (url: string) => void;
}) => {
  const { environment, subsidiary, redirectUrl, onRedirect } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    environment && localStorage.setItem("environment", environment);
    subsidiary && localStorage.setItem("subsidiary", subsidiary);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-8 text-center">
      <Button
        label="Login with Colibri Identity"
        onClick={() => {
          setOpen(true);
        }}
      />

      {open && <LoginModal open={open} onClose={() => setOpen(false)} redirectUrl={redirectUrl} environment={environment} onRedirect={onRedirect} />}
    </div>
  );
};

export default App;
