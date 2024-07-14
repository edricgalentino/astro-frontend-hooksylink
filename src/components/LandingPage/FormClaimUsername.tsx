import { useState } from "react";
import Button from "../Common/Button";

const FormClaimUsername = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 md:w-min md:flex-row md:justify-start">
      <div className="relative h-full w-full md:w-min">
        <p className="absolute left-4 top-4 z-10 text-lg font-semibold text-gray-800">hooksy.link/</p>
        <input
          type="text"
          className="input focus:ring-tertiary h-[60px] w-full rounded-lg border border-gray-800 p-3 pl-[7.25rem] focus:border-transparent focus:outline-none focus:ring-2 md:w-72"
          value={username}
          placeholder="your-username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <a href={`/signup?username=${username}&onboard=true`}>
        <Button color="secondary" size="lg" accent="filled" className="hover:px-12">
          Claim Your Username
        </Button>
      </a>
    </div>
  );
};

export default FormClaimUsername;
