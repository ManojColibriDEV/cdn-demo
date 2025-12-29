import { useState } from "react";
import Button from "./common/ui/button";
import LoginModal from "./components/login-modal";

const App = (props: {
  redirectUrl?: string;
}) => {
  const { redirectUrl } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-8 text-center">
      <Button
        label="Login with Colibri Identity"
        onClick={() => {
          setOpen(true);
        }}
      />

      {open && <LoginModal open={open} onClose={() => setOpen(false)} redirectUrl={redirectUrl} />}
    </div>
  );
};

export default App;
