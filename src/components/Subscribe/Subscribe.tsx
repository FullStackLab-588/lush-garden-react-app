import { useState } from "react";
import type { FormEvent } from "react";
import type { ImageAsset } from "../../api/api";
import SectionError from "../common/SectionError";

type SubscribeProps = {
  text: string;
  emailPlaceholder: string;
  submitLabel: string;
  successMessage: string;
  invalidMessage: string;
  backgroundImage: ImageAsset;
};

export default function Subscribe({ text, emailPlaceholder, submitLabel, successMessage, invalidMessage, backgroundImage }: SubscribeProps) {
  const [statusMessage, setStatusMessage] = useState<string>("");

  const isValid = !!(text && emailPlaceholder && submitLabel && successMessage && invalidMessage && backgroundImage?.src);

  if (!isValid) {
    return <SectionError sectionName="Subscribe" />;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const isValid = /^\S+@\S+\.\S+$/.test(email);

    if (!isValid) {
      setStatusMessage(invalidMessage);
      return;
    }

    setStatusMessage(successMessage);
    event.currentTarget.reset();
  };

  return (
    <section id="contact"
      className="relative mx-auto mt-12 w-full max-w-[1440px] overflow-hidden bg-cover bg-center bg-no-repeat py-12 text-(--color-inverse) lg:mt-[120px] lg:h-[400px] lg:py-0"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="absolute inset-0 bg-[#00000099]" aria-hidden="true" />
      <div className="section-container relative z-10 flex h-full flex-col justify-center gap-8 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-center font-lato text-[32px] font-bold leading-[150%] tracking-[0] text-white capitalize lg:relative lg:left-[10px] lg:top-[4px] lg:h-[144px] lg:w-[570px] lg:text-left">
          {text}
        </h2>
        <form className="flex w-full max-w-[650px] flex-wrap justify-center gap-4 lg:translate-x-[33px] lg:translate-y-[-22px] lg:flex-nowrap lg:justify-start lg:gap-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            required
            aria-label={emailPlaceholder}
            placeholder={emailPlaceholder}
            className="h-[48px] w-full rounded-[5px] border border-white bg-[#D9D9D908] px-6 text-base font-medium text-(--color-inverse) placeholder:text-(--color-inverse)/80 backdrop-blur-[5px] sm:max-w-[475px] lg:w-[475px]"
          />
          <button
            className="inline-flex h-[48px] w-[145px] items-center justify-center gap-[10px] rounded-[5px] bg-[#285A43] px-[45px] py-[12px] text-base font-semibold text-(--color-inverse) backdrop-blur-[5px] transition hover:bg-(--color-brand)"
            type="submit"
          >
            {submitLabel}
          </button>
        </form>
      </div>
      {statusMessage ? (
        <p className="mt-4 text-center text-sm font-semibold text-(--color-inverse)" role="status" aria-live="polite">
          {statusMessage}
        </p>
      ) : null}
    </section>
  );
}
