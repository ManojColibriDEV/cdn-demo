import { FC, useState, useEffect, useRef } from "react";
import type {
  RegistrationFormProps,
  PasswordChecks,
  TenantDetailsResponse,
} from "../types";
import {
  checkAvailableEmail,
  getTenentDetails,
} from "../services";
import Loader from "../common/ui/loader";
import { validatePassword, onlyDigits, onlyLetters } from "../functions";
import InputField from "../common/ui/input";
import infoErrorImg from "../icons/info-error.png";
import checkSuccessImg from "../icons/check-success.png";
import { getTenantDetailMock } from "../mock/api-mock";
import {
  MODES,
  MODE_FIELDS,
  COUNTRY_OPTIONS,
  FIELD_DEFINITIONS,
  REGISTRATION_FIELDS_LAYOUT,
} from "../mock/registration-form-mock";

const RegistrationForm: FC<RegistrationFormProps> = ({
  onRegister,
  onReview,
  onReset,
  initialValues,
  loading,
  error,
}) => {
  // if parent provided initialValues (e.g., returning from confirmation) hydrate form state
  useEffect(() => {
    if (!initialValues || !Object.keys(initialValues).length) return;

    const mapPayloadToFormValues = (p: any) => {
      const res: Record<string, string> = {};
      if (p.emailAddress) res.email = String(p.emailAddress);
      else if (p.userName) res.email = String(p.userName);
      else if (p.email) res.email = String(p.email);

      if (p.givenName) res.firstName = String(p.givenName);
      if (p.middleName) res.middle = String(p.middleName);
      if (p.middle) res.middle = String(p.middle);
      if (p.familyName) res.lastName = String(p.familyName);
      if (p.lastName) res.lastName = String(p.lastName);

      if (p.honorificSuffix) res.suffix = String(p.honorificSuffix);
      if (p.professionalDesignations) res.designations = String(p.professionalDesignations);

      if (p.mobileNumber) res.mobile = String(p.mobileNumber);
      if (p.mobile) res.mobile = String(p.mobile);

      if (p.dateOfBirth) res.dateOfBirth = String(p.dateOfBirth);

      if (p.Address) {
        const a = p.Address as Record<string, any>;
        if (a.AddressLine1) res.addressLine1 = String(a.AddressLine1);
        if (a.AddressLine2) res.addressLine2 = String(a.AddressLine2);
        if (a.city) res.city = String(a.city);
        if (a.stateProvince) res.stateProvince = String(a.stateProvince);
        if (a.postalCode) res.postalCode = String(a.postalCode);
        if (a.country) res.country = String(a.country);
      }

      if (p.password) res.password = String(p.password);

      return res;
    };

    const mapped = mapPayloadToFormValues(initialValues);

    // Prefill confirmPassword when restoring so the match validation passes
    if (mapped.password && !mapped.confirmPassword) mapped.confirmPassword = mapped.password;

    setFormValues((prev) => ({ ...mapped, ...prev }));

    // restore consent checkbox if present
    if (typeof initialValues.acceptTermsOfService !== "undefined") {
      setConsentChecked(Boolean(initialValues.acceptTermsOfService));
    }

    // Recompute password checks (so rules clear) and revalidate fields
    try {
      const first = mapped.firstName || "";
      const last = mapped.lastName || "";
      const email = mapped.email || "";
      const user = { displayName: `${first} ${last}`.trim(), email } as any;
      const checks = validatePassword(mapped.password || "", user);
      setPasswordChecks(checks);
    } catch (err) {
      setPasswordChecks(null);
    }

    // Re-run validation for visible fields to clear any stale errors
    const newErrors: Record<string, string | null> = { ...fieldErrors };
    (visibleFields || []).forEach((fk) => {
      const v = (mapped[fk] || (formValues[fk] as string) || "").toString();
      newErrors[fk] = validateField(fk, v);
    });
    setFieldErrors(newErrors);
  }, [initialValues]);

  // Get mode from URL query param if present
  function getModeFromQuery(): string | null {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const page = params.get("registrationMode");
    if (page && MODES.some((m) => m.value === page)) return page;
    return null;
  }

  const [mode, setMode] = useState<string>(
    () => getModeFromQuery() || "minimal-profile"
  );
  const [modeLocked, setModeLocked] = useState<boolean>(!!getModeFromQuery());

  useEffect(() => {
    const urlMode = getModeFromQuery();
    if (urlMode && urlMode !== mode) {
      setMode(urlMode);
      setModeLocked(true);
    }
  }, []);
  const [tenantDetails, setTenantDetails] =
    useState<TenantDetailsResponse>(getTenantDetailMock);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);
  const [emailChecking, setEmailChecking] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string | null>>(
    {}
  );
  const debounceRef = useRef<number | null>(null);
  const [passwordChecks, setPasswordChecks] = useState<PasswordChecks | null>(
    null
  );

  const [consentChecked, setConsentChecked] = useState<boolean>(false);

  const visibleFields = MODE_FIELDS[mode] || [];

  const handleInputChange = (fieldKey: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [fieldKey]: value }));
    // validate field as user types
    const err = validateField(fieldKey, value);
    setFieldErrors((prev) => ({ ...prev, [fieldKey]: err }));
  };

  // Compute whether Continue should be enabled
  const requiredFields = (visibleFields || []).filter(
    (fk) => FIELD_DEFINITIONS[fk] && FIELD_DEFINITIONS[fk].required
  );

  const isPasswordValid =
    !visibleFields.includes("password") ||
    (!!passwordChecks &&
      !!passwordChecks.length &&
      passwordChecks.noEmailParts &&
      passwordChecks.noNameParts &&
      passwordChecks.noSpaces &&
      passwordChecks.noTriple &&
      passwordChecks.upper &&
      passwordChecks.lower &&
      passwordChecks.number &&
      passwordChecks.special);

  const isConfirmPasswordMatch =
    !visibleFields.includes("confirmPassword") ||
    ((formValues.password || "") !== "" &&
      (formValues.confirmPassword || "") !== "" &&
      formValues.password === formValues.confirmPassword);

  const areRequiredFieldsFilled = requiredFields.every((fk) => {
    const v = (formValues[fk] || "").toString().trim();
    if (!v) return false;
    if (fk === "email") {
      // treat email as filled if format is valid and it's not explicitly unavailable;
      // allow null (unknown) availability so dev environments without backend don't block the form
      const emailValid = /^\S+@\S+\.\S+$/.test(formValues.email || "");
      return emailValid && emailAvailable !== false && !emailChecking;
    }
    return true;
  });

  const noBlockingFieldErrors = requiredFields.every((fk) => !fieldErrors[fk]);

  const consentOk = !tenantDetails?.RegistrationConsent || consentChecked;

  const isContinueEnabled =
    areRequiredFieldsFilled &&
    noBlockingFieldErrors &&
    isPasswordValid &&
    isConfirmPasswordMatch &&
    consentOk &&
    !loading;

  // diagnostic reasons for disabled Continue button (helpful during debugging)
  const continueDisabledReasons: string[] = [];
  if (!areRequiredFieldsFilled) {
    const missing = requiredFields.filter((fk) => {
      const v = (formValues[fk] || "").toString().trim();
      if (!v) return true;
      if (fk === "email") {
        const emailValid = /^\S+@\S+\.\S+$/.test(formValues.email || "");
        return !(emailValid && emailAvailable !== false && !emailChecking);
      }
      return false;
    });
    if (missing.length)
      continueDisabledReasons.push(`Missing: ${missing.join(", ")}`);
  }
  if (!noBlockingFieldErrors) {
    const errs = requiredFields.filter((fk) => !!fieldErrors[fk]);
    if (errs.length)
      continueDisabledReasons.push(`Field errors: ${errs.join(", ")}`);
  }
  if (!isPasswordValid)
    continueDisabledReasons.push("Password does not meet all requirements");
  if (!isConfirmPasswordMatch)
    continueDisabledReasons.push("Passwords do not match");
  if (!consentOk) continueDisabledReasons.push("Consent is required");
  if (loading) continueDisabledReasons.push("Processing in progress");

  function validateField(fieldKey: string, value: string): string | null {
    const v = (value || "").trim();
    if (fieldKey === "firstName") {
      if (!v || v.length < 2 || v.length > 50)
        return "Please enter a given name (2–50 characters).";
      return null;
    }
    if (fieldKey === "lastName") {
      if (!v || v.length < 2 || v.length > 50)
        return "Please enter a family/surname (2–50 characters).";
      return null;
    }
    if (fieldKey === "email") {
      if (!v) return "Please enter a valid email address.";
      const emailValid = /^\S+@\S+\.\S+$/.test(v);
      if (!emailValid) return "Please enter a valid email address.";
      return null;
    }
    return null;
  }

  // Debounced email availability check: call API after user stops typing
  useEffect(() => {
    const email = formValues.email || "";
    // clear previous format/availability error while recalculating
    setFieldErrors((prev) => ({ ...prev, email: null }));
    setEmailAvailable(null);
    if (!email) {
      setEmailChecking(false);
      setEmailAvailable(null);
      return;
    }
    // basic email format check
    const emailValid = /^\S+@\S+\.\S+$/.test(email);
    if (!emailValid) {
      setEmailChecking(false);
      // show immediate format error and red icon
      setEmailAvailable(false);
      setFieldErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
      return;
    }
    setEmailChecking(true);
    if (debounceRef.current) {
      window.clearTimeout(debounceRef.current);
    }
    debounceRef.current = window.setTimeout(async () => {
      try {
        const resp = await checkAvailableEmail(email, tenantDetails.TenantId);
        if (resp && typeof resp.isAvailable !== "undefined") {
          setEmailAvailable(!!resp.isAvailable);
          if (!resp.isAvailable && resp.message)
            setFieldErrors((prev) => ({ ...prev, email: resp.message }));
          else setFieldErrors((prev) => ({ ...prev, email: null }));
        } else {
          setEmailAvailable(null);
          setFieldErrors((prev) => ({
            ...prev,
            email: "Unable to determine availability",
          }));
        }
      } catch (err) {
        setEmailAvailable(null);
        setFieldErrors((prev) => ({ ...prev, email: "Error checking email" }));
      } finally {
        setEmailChecking(false);
      }
    }, 700);

    return () => {
      if (debounceRef.current) {
        window.clearTimeout(debounceRef.current);
      }
    };
  }, [formValues.email]);

  // Tenent details on page load [GET]
  useEffect(() => {
    getTenentDetails().then((data) => setTenantDetails(data));
  }, []);
  console.log("formValuesformValues", formValues);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // validate visible and required fields before submitting
    const newErrors: Record<string, string | null> = { ...fieldErrors };
    let hasError = false;
    visibleFields.forEach((fk) => {
      const val = formValues[fk] || "";
      const err = validateField(fk, val);
      if (FIELD_DEFINITIONS[fk] && FIELD_DEFINITIONS[fk].required && err) {
        newErrors[fk] = err;
        hasError = true;
      } else {
        newErrors[fk] = err;
      }
    });
    setFieldErrors(newErrors);
    if (hasError) return;

    const payload = {
      emailAddress: formValues.email || "",
      givenName: formValues.firstName || formValues.givenName || "",
      middleName: formValues.middle || formValues.middleName || null,
      familyName: formValues.lastName || formValues.familyName || "",
      honorificSuffix: formValues.suffix || undefined,
      professionalDesignations: formValues.designations || undefined,
      mobileNumber: formValues.mobile || undefined,
      dateOfBirth: formValues.dateOfBirth || undefined,
      Address: {
        AddressLine1: formValues.addressLine1 || undefined,
        AddressLine2: formValues.addressLine2 || undefined,
        city: formValues.city || undefined,
        stateProvince: formValues.stateProvince || undefined,
        postalCode: formValues.postalCode || undefined,
        country: formValues.country || undefined
      },
      SubsidiaryId: tenantDetails?.SubsidiaryId || undefined,
      tenantBrandName: tenantDetails?.BrandFullName,
      tenantId: tenantDetails?.TenantId,
      password: formValues.password || "",
      acceptTermsOfService: consentChecked,
    };

    // If the parent provided an onReview handler, show the confirmation step there.
    // Otherwise, fall back to immediate registration by calling onRegister.
    if (typeof onReview === "function") {
      onReview(payload);
    } else if (typeof onRegister === "function") {
      onRegister(payload);
    }
  };

  // Group fields into rows for layout
  const renderFieldsGrid = () => {
    // Layout rules: each row is an array of field keys
    // Adjust these for each mode as needed for best UX
    const layout: Record<string, string[][]> = REGISTRATION_FIELDS_LAYOUT;
    const rows = layout[mode] || [visibleFields];
    return (
      <div className="flex flex-col gap-4">
        {rows.map((row, i) => (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4" key={i}>
            {row.map((fieldKey) => {
              if (!visibleFields.includes(fieldKey)) return null;
              const field = FIELD_DEFINITIONS[fieldKey];
              if (!field) return null;
              // Required star
              const label = (
                <>
                  {field.label}
                  {field.required && <span className="text-[#c0392b] ml-0.5"> *</span>}
                </>
              );
              // Placeholder
              const placeholder =
                field.placeholder || (field.required ? "" : "Optional");
              if (field.type === "select") {
                // allow tenant to restrict which countries are shown
                let optionsToUse = field.options;
                if (fieldKey === "country") {
                  const supportedCsv =
                    tenantDetails?.CustomRegistrationOptions
                      ?.CountriesSupported || "";
                  const supported = supportedCsv
                    .split(",")
                    .map((s) => s.trim().toUpperCase())
                    .filter(Boolean);
                  if (supported.length) {
                    optionsToUse = COUNTRY_OPTIONS.filter(
                      (o) => o.value === "" || supported.includes(o.value)
                    );
                  } else {
                    optionsToUse = COUNTRY_OPTIONS;
                  }
                }

                return (
                  <div key={fieldKey} className="field-group">
                    <InputField
                      label={label}
                      type="select"
                      options={optionsToUse}
                      value={formValues[fieldKey] || ""}
                      onChange={(e) =>
                        handleInputChange(
                          fieldKey,
                          (e.target as HTMLInputElement).value
                        )
                      }
                      required={field.required}
                      error={field.hint ? undefined : undefined}
                    />
                  </div>
                );
              }
              if (field.type === "password") {
                const isPassword = fieldKey === "password";
                const show = isPassword ? showPassword : showConfirmPassword;
                const setShow = isPassword
                  ? setShowPassword
                  : setShowConfirmPassword;
                // render password via InputField so labels align consistently; pass eye button as endIcon
                const handlePasswordChange = (val: string) => {
                  handleInputChange(fieldKey, val);
                  if (fieldKey === "password") {
                    const first = formValues.firstName || "";
                    const last = formValues.lastName || "";
                    const email = formValues.email || "";
                    const user = {
                      displayName: `${first} ${last}`.trim(),
                      email,
                    };
                    try {
                      const checks = validatePassword(val || "", user as any);
                      setPasswordChecks(checks);
                    } catch (err) {
                      setPasswordChecks(null);
                    }
                  }
                };

                return (
                  <div key={fieldKey} className="field-group">
                    <InputField
                      label={label}
                      type={show ? "text" : "password"}
                      placeholder={placeholder}
                      value={formValues[fieldKey] || ""}
                      onChange={(e) =>
                        handlePasswordChange(
                          (e.target as HTMLInputElement).value
                        )
                      }
                      required={field.required}
                      endIcon={
                        <button
                          type="button"
                          onClick={() => setShow((s) => !s)}
                          aria-label={show ? "Hide password" : "Show password"}
                          style={{
                            background: "transparent",
                            border: "none",
                            padding: 0,
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden
                          >
                            {show ? (
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
                      }
                      error={fieldErrors[fieldKey]}
                    />
                    {fieldKey === "password" && passwordChecks && (
                      <div className="mt-2 py-2.5 px-3 bg-black/2 rounded-md text-[0.95rem] text-[#4b5563]">
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.length ? "ok" : "bad"
                          }`}
                        >
                          9–15 characters
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.upper ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          At least one uppercase letter
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.lower ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          At least one lowercase letter
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.number ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          At least one number
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.special ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          At least one special character (!@#$%^&*_-.)
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.special ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          Only !@#$%^&*_-_. symbols allowed
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.noSpaces ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          No spaces
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.noTriple ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          No more than 2 repeating characters
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.noNameParts ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          Cannot contain your first or last name
                        </div>
                        <div
                          className={`my-0.5 flex items-center ${
                            passwordChecks.noEmailParts ? "text-[#2ea44f]" : "text-[#d64545]"
                          }`}
                        >
                          Cannot contain parts of your email
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (fieldKey === "email") {
                const endIcon = (
                  <>
                    {emailChecking && <Loader />}
                    {emailAvailable === true && !emailChecking && (
                      <img
                        src={checkSuccessImg}
                        alt="available"
                        style={{ width: 18, height: 18 }}
                      />
                    )}
                    {emailAvailable === false && !emailChecking && (
                      <img
                        src={infoErrorImg}
                        alt="not-available"
                        style={{ width: 18, height: 18 }}
                      />
                    )}
                  </>
                );

                return (
                  <div key={fieldKey} className="flex flex-col flex-1 min-w-0 relative">
                    <InputField
                      label={label}
                      type={field.type}
                      placeholder={placeholder}
                      value={formValues[fieldKey] || ""}
                      onChange={(e) => {
                        handleInputChange(fieldKey, e.target.value);
                        setFieldErrors((prev) => ({ ...prev, email: null }));
                        setEmailAvailable(null);
                        setEmailChecking(false);
                      }}
                      required={field.required}
                      endIcon={endIcon}
                      error={fieldErrors.email}
                    />
                  </div>
                );
              }
              // Special handling for mobile: only allow digits
              if (fieldKey === "mobile") {
                return (
                  <div key={fieldKey} className="field-group">
                    <InputField
                      label={label}
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      placeholder={placeholder}
                      value={formValues[fieldKey] || ""}
                      onChange={(e) =>
                        handleInputChange(fieldKey, onlyDigits(e.target.value))
                      }
                      onPaste={(e) => {
                        const paste = e.clipboardData?.getData("text") || "";
                        e.preventDefault();
                        handleInputChange(fieldKey, onlyDigits(paste));
                      }}
                      required={field.required}
                      error={fieldErrors.mobile}
                    />
                  </div>
                );
              }

              // Name fields: only allow letters, spaces, apostrophes and hyphens
              if (["firstName", "middle", "lastName"].includes(fieldKey)) {
                return (
                  <div key={fieldKey} className="field-group">
                    <InputField
                      label={label}
                      type={field.type}
                      placeholder={placeholder}
                      value={formValues[fieldKey] || ""}
                      onChange={(e) =>
                        handleInputChange(fieldKey, onlyLetters(e.target.value))
                      }
                      onPaste={(e) => {
                        const paste = e.clipboardData?.getData("text") || "";
                        e.preventDefault();
                        handleInputChange(fieldKey, onlyLetters(paste));
                      }}
                      required={field.required}
                      error={fieldErrors[fieldKey]}
                    />
                  </div>
                );
              }

              return (
                <div key={fieldKey} className="field-group">
                  <InputField
                    label={label}
                    type={field.type}
                    placeholder={placeholder}
                    value={formValues[fieldKey] || ""}
                    onChange={(e) =>
                      handleInputChange(
                        fieldKey,
                        (e.target as HTMLInputElement).value
                      )
                    }
                    required={field.required}
                    helperText={field.hint}
                    error={fieldErrors[fieldKey]}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <form className="flex flex-col gap-2.5 items-stretch" onSubmit={handleSubmit}>
      {!modeLocked && (
        <div className="flex flex-col flex-1 min-w-0">
          <label className="text-sm text-[#444] mt-4 mb-1 block text-left">Registration Mode</label>
          <select
            className="block w-full box-border h-11 py-2.5 px-3 rounded-lg border border-[#d6e3f6] bg-white outline-none text-sm text-left focus:shadow-[0_0_0_3px_rgba(24,102,214,0.12)] focus:border-[#2b6fd6]"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            {MODES.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
        </div>
      )}
      {renderFieldsGrid()}
      {error && <div className="mt-1.5 text-[#b00020] text-[13px]">{error}</div>}
      {tenantDetails?.RegistrationConsent && (
        <div className="flex flex-col flex-1 min-w-0">
          <label className="block mb-1.5 font-semibold text-left">
            <input
              type="checkbox"
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              style={{ marginRight: 8 }}
            />
            By creating an account, you agree to our{" "}
            <a
              href={tenantDetails?.PrivacyPolicyUrl}
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href={tenantDetails?.TermsOfServiceUrl}
              target="_blank"
              rel="noreferrer"
            >
              Terms of Service
            </a>
            .
          </label>
          {/* action row: Reset (secondary) + Continue (primary) */}
          <div className="flex gap-3 mt-5">
            <button
              type="button"
              className="flex-1 bg-transparent text-teal-dark border-2 border-[#cdece8] rounded-lg py-3 px-4 font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={() => {
                setFormValues({});
                setFieldErrors({});
                setEmailAvailable(null);
                setEmailChecking(false);
                setPasswordChecks(null);
                setConsentChecked(false);
                setShowPassword(false);
                setShowConfirmPassword(false);
                if (typeof onReset === "function") onReset();
              }}
              disabled={loading}
            >
              Reset
            </button>
            <button
              className="flex-[2_1_60%] bg-[#bdbdbd] enabled:bg-[#a24796] text-white border-none rounded-lg py-3 px-4 text-[1.05rem] font-bold cursor-pointer disabled:bg-teal-light disabled:cursor-not-allowed"
              type="submit"
              // disabled={!isContinueEnabled}
            >
              {loading ? "Processing..." : "Continue"}
            </button>
          </div>
          {!isContinueEnabled && continueDisabledReasons.length > 0 && (
            <div
              className="text-[#b04545] mt-2 text-[13px]"
            >
              {continueDisabledReasons.map((r, idx) => (
                <div key={idx}>- {r}</div>
              ))}
            </div>
          )}
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: tenantDetails?.RegistrationConsent.replace(
                /{{BrandFullName}}/g,
                tenantDetails?.BrandFullName
              )
                .replace(
                  /{{TermsOfServiceUrl}}/g,
                  tenantDetails?.TermsOfServiceUrl
                )
                .replace(
                  /{{PrivacyPolicyUrl}}/g,
                  tenantDetails?.PrivacyPolicyUrl
                ),
            }}
          />
        </div>
      )}
    </form>
  );
};

export default RegistrationForm;
