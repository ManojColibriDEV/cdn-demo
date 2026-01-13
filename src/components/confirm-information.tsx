import React from "react";
import type { ConfirmInformationProps } from "../types";

const ConfirmInformation: React.FC<ConfirmInformationProps> = ({
  data,
  onBack,
  onConfirm,
  loading,
  error,
}) => {
  const fullName = [data?.givenName, data?.middleName, data?.familyName]
    .filter(Boolean)
    .join(" ");
  const email = data?.emailAddress || data?.userName || data?.email || "";
  const mobile = data?.mobileNumber || data?.mobile || "";

  return (
    <div className="p-4! rounded-lg! bg-white">
      <h3 className="mt-0! mb-3!">Confirm Your Information</h3>
      <div className="flex! justify-between! py-2! border-b! border-[#f0f0f0]">
        <div className="text-[#555] font-semibold!">Full Name</div>
        <div className="text-[#222]">{fullName}</div>
      </div>
      <div className="flex! justify-between! py-2! border-b! border-[#f0f0f0]">
        <div className="text-[#555] font-semibold!">Email Address</div>
        <div className="text-[#222]">{email}</div>
      </div>
      <div className="flex! justify-between! py-2! border-b! border-[#f0f0f0]">
        <div className="text-[#555] font-semibold!">Mobile Number</div>
        <div className="text-[#222]">{mobile}</div>
      </div>

      {error && <div className="mt-2! text-[#b00020] text-[13px]!">{error}</div>}

      <div className="flex! justify-between! mt-4!">
        <button 
          type="button" 
          className="bg-transparent text-teal-dark border-2! border-[#cdece8] rounded-lg! py-2.5! px-3.5! font-semibold! disabled:opacity-60! disabled:cursor-not-allowed!" 
          onClick={onBack} 
          disabled={!!loading}
        >
          ← GO BACK
        </button>
        <button 
          type="button" 
          className="bg-teal text-white border-none! rounded-lg! py-2.5! px-5! font-bold! disabled:bg-teal-light disabled:cursor-not-allowed!" 
          onClick={() => onConfirm(data)} 
          disabled={!!loading}
        >
          {loading ? "Processing..." : "CREATE ACCOUNT AND LOGIN"}
        </button>
      </div>
    </div>
  );
};

export default ConfirmInformation;
