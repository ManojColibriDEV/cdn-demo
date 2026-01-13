import { FC, useState } from "react";
import type { UpdatePasswordProps } from "../types/index";

const UpdatePassword: FC<UpdatePasswordProps> = (props) => {
  const {
    upgradeMessage,
    upgradeUser,
    newPassword,
    confirmPassword,
    newShowPassword,
    passwordChecks,
    canUpdate,
    loginLoading,
    setNewPassword,
    setConfirmPassword,
    setNewShowPassword,
    setRequiresUpgrade,
    setUpgradeUser,
    setLoginLoading,
    setLoginError,
    navigate,
    handleUpdatePassword,
  } = props;

  // Local state for confirm password show/hide
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  return (
    <div className="flex! flex-col! gap-2.5!">
      <h2 className="m-0!">Update Your Password</h2>
      <p className="my-0! mb-3.5! text-center! text-[#9aa0a6] text-sm!">
        {upgradeMessage ||
          "Your current password doesn't meet our updated security requirements. Please choose a new password."}
      </p>

      <div className="bg-[#eaf4ff] rounded-lg! p-3! text-center! text-[#1b4f8a]">
        <div className="font-bold!">{upgradeUser?.displayName}</div>
        <div className="text-[13px]! text-[#6b6b6b]">{upgradeUser?.email}</div>
      </div>

      <label className="text-sm! text-[#444] mt-1.5! block! text-left!">New Password</label>
      <div className="relative! w-full!">
        <input
          className="block! w-full! box-border! h-11! py-2.5! pr-11! pl-3! rounded-lg! border! border-[#d6e3f6] bg-white outline-none! text-sm! text-left! focus:shadow-[0_0_0_3px_rgba(24,102,214,0.12)]! focus:border-[#2b6fd6]!"
          type={newShowPassword ? "text" : "password"}
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute! right-2! top-1/2! -translate-y-1/2! bg-transparent border-none! p-1.5! flex! items-center! justify-center! cursor-pointer!"
          onClick={() => setNewShowPassword(!newShowPassword)}
          aria-label={newShowPassword ? "Hide password" : "Show password"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {newShowPassword ? (
              <>
                <path
                  d="M12 5c4 0 7.5 4 9 7-1.5 3-5 7-9 7s-7.5-4-9-7c1.5-3 5-7 9-7z"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : (
              <>
                <path
                  d="M2 2l20 20"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.94 17.94A10.94 10.94 0 0 1 12 19.5c-6 0-9.5-6.5-9.5-6.5a18.3 18.3 0 0 1 4.73-4.73"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>


      <label className="text-sm! text-[#444] mt-1.5! block! text-left!">Confirm New Password</label>
      <div className="relative! w-full!">
        <input
          className="block! w-full! box-border! h-11! py-2.5! pr-11! pl-3! rounded-lg! border! border-[#d6e3f6] bg-white outline-none! text-sm! text-left! focus:shadow-[0_0_0_3px_rgba(24,102,214,0.12)]! focus:border-[#2b6fd6]!"
          type={confirmShowPassword ? "text" : "password"}
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="button"
          className="absolute! right-2! top-1/2! -translate-y-1/2! bg-transparent border-none! p-1.5! flex! items-center! justify-center! cursor-pointer!"
          onClick={() => setConfirmShowPassword(!confirmShowPassword)}
          aria-label={confirmShowPassword ? "Hide password" : "Show password"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {confirmShowPassword ? (
              <>
                <path
                  d="M12 5c4 0 7.5 4 9 7-1.5 3-5 7-9 7s-7.5-4-9-7c1.5-3 5-7 9-7z"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : (
              <>
                <path
                  d="M2 2l20 20"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.94 17.94A10.94 10.94 0 0 1 12 19.5c-6 0-9.5-6.5-9.5-6.5a18.3 18.3 0 0 1 4.73-4.73"
                  stroke="#6b6b6b"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      <div className="bg-[#f3f4f6] rounded-lg! py-3.5! px-4! box-border!">
        <div className="text-center! font-bold! mb-2.5! text-[#333]">Password Requirements</div>
        <div className="flex! gap-6!">
          <div className="pr-col">
            {/* Length */}
            <div
              className={"pr-item " + (passwordChecks.length ? "ok" : "fail")}
            >
              {passwordChecks.length ? (
                <svg
                  className="flex-[0_0_16px]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={"pr-text " + (passwordChecks.length ? "ok" : "fail")}
              >
                9-15 characters
              </span>
            </div>

            {/* Lowercase */}
            <div
              className={"pr-item " + (passwordChecks.lower ? "ok" : "fail")}
            >
              {passwordChecks.lower ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={"pr-text " + (passwordChecks.lower ? "ok" : "fail")}
              >
                Lowercase letter
              </span>
            </div>

            {/* No Spaces */}
            <div
              className={"pr-item " + (passwordChecks.noSpaces ? "ok" : "fail")}
            >
              {passwordChecks.noSpaces ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={
                  "pr-text " + (passwordChecks.noSpaces ? "ok" : "fail")
                }
              >
                No spaces
              </span>
            </div>

            {/* No Triple Repeats */}
            <div
              className={"pr-item " + (passwordChecks.noTriple ? "ok" : "fail")}
            >
              {passwordChecks.noTriple ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={
                  "pr-text " + (passwordChecks.noTriple ? "ok" : "fail")
                }
              >
                No triple repeats
              </span>
            </div>

            {/* Special Character */}
            <div
              className={"pr-item " + (passwordChecks.special ? "ok" : "fail")}
            >
              {passwordChecks.special ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={
                  "pr-text " + (passwordChecks.special ? "ok" : "fail")
                }
              >
                Special character: !@#$%^&amp;*\-_.
              </span>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex-1! flex! flex-col! gap-2.5! items-start! text-left!">
            {/* Uppercase */}
            <div
              className={"pr-item " + (passwordChecks.upper ? "ok" : "fail")}
            >
              {passwordChecks.upper ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={"pr-text " + (passwordChecks.upper ? "ok" : "fail")}
              >
                Uppercase letter
              </span>
            </div>

            {/* Number */}
            <div
              className={"pr-item " + (passwordChecks.number ? "ok" : "fail")}
            >
              {passwordChecks.number ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={"pr-text " + (passwordChecks.number ? "ok" : "fail")}
              >
                Number
              </span>
            </div>

            {/* No Name Parts */}
            <div
              className={
                "pr-item " + (passwordChecks.noNameParts ? "ok" : "fail")
              }
            >
              {passwordChecks.noNameParts ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={
                  "pr-text " + (passwordChecks.noNameParts ? "ok" : "fail")
                }
              >
                No name parts
              </span>
            </div>

            {/* No Email Parts */}
            <div
              className={
                "pr-item " + (passwordChecks.noEmailParts ? "ok" : "fail")
              }
            >
              {passwordChecks.noEmailParts ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={
                  "pr-text " + (passwordChecks.noEmailParts ? "ok" : "fail")
                }
              >
                No email parts
              </span>
            </div>

            {/* Allowed Specials */}
            <div
              className={"pr-item " + (passwordChecks.special ? "ok" : "fail")}
            >
              {passwordChecks.special ? (
                <svg
                  className="pr-check"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#33bfb6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  className="pr-x"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#c0392b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              <span
                className={
                  "pr-text " + (passwordChecks.special ? "ok" : "fail")
                }
              >
                Only allowed specials
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex! gap-3! items-center! mt-4!">
        <button
          type="button"
          className="bg-transparent border! border-[#d6d6d6] py-2.5! px-3.5! rounded-lg! cursor-pointer! flex-[0_0_140px]!"
          onClick={() => {
            setRequiresUpgrade(false);
            setUpgradeUser(null);
          }}
        >
          Back to Login
        </button>
        <button
          className="flex-1! h-12! rounded-lg! border-none! bg-[#bdbdbd] enabled:bg-[#a24796] text-white font-semibold! cursor-pointer! disabled:opacity-90! disabled:cursor-not-allowed!"
          type="button"
          onClick={(e) =>
            handleUpdatePassword({
              e,
              newPassword,
              upgradeUser,
              setLoginLoading,
              setLoginError,
              navigate,
            })
          }
          disabled={!canUpdate}
        >
          {loginLoading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;
