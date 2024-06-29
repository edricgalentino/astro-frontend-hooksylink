import { useState } from 'react';

const FormClaimUsername = () => {
  const [username, setUsername] = useState('');

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 md:w-min md:flex-row md:justify-start">
      <div className="relative h-full w-full md:w-min">
        <p className="absolute left-4 top-4 z-10 text-lg font-semibold text-gray-800">
          hooksy.link/
        </p>
        <input
          type="text"
          className="input h-[60px] w-full rounded-lg border border-gray-800 p-3 pl-[7.25rem] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-900 md:w-72"
          value={username}
          placeholder="your-username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <a href={`/signup?username=${username}&onboard=true`}>
        <button className="button whitespace-nowrap rounded-full bg-red-800 px-4 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:px-12 md:p-3 md:px-6 md:text-xl lg:p-4 lg:px-8">
          Claim Your Username
        </button>
      </a>
    </div>
  );
};

export default FormClaimUsername;
