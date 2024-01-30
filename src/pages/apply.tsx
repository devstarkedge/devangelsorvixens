import { useState } from "react";
import Input from "@/components/others/Input";
import Select from "@/components/others/Select";
import { IconLoader2 } from "@tabler/icons-react";
import Textarea from "@/components/others/Textarea";
import RootLayout from "@/components/layouts/RootLayout";

import modal3 from "@/assets/image/models/model-bg-removed.png";

const followings = ["0-1k", "1-10k", "10k+"];
const earnings = ["$0 - $2,000", "$2000 - $5,000", "$5,000+"];

interface ApplicationFormType {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  following: string;
  earnings: string;
  twitter?: string;
  instagram?: string;
  tiktok?: string;
  message: string;
}

export default function Apply() {
  const [loading, setLoading] = useState<boolean>(false);
  const [earning, setEarning] = useState<string>("");
  const [following, setFollowing] = useState<string>("");
  const [applicationDetails, setApplicationDetails] =
    useState<ApplicationFormType>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      following: "",
      earnings: "",
      twitter: "",
      instagram: "",
      tiktok: "",
      message: "",
    });

  function clearForm() {
    setApplicationDetails(() => ({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      following: "",
      earnings: "",
      twitter: "",
      instagram: "",
      tiktok: "",
      message: "",
    }));
    setEarning(() => "");
    setFollowing(() => "");

    setLoading(() => false);
  }

  const hasContent: boolean = Boolean(
    applicationDetails.firstName &&
      applicationDetails.lastName &&
      applicationDetails.email &&
      following &&
      earning &&
      applicationDetails.message
  );

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(() => true);

    const formData = {
      firstName: applicationDetails.firstName,
      lastName: applicationDetails.lastName,
      email: applicationDetails.email,
      phone: applicationDetails.phone,
      following: following,
      earnings: earning,
      twitter: applicationDetails.twitter,
      instagram: applicationDetails.instagram,
      tiktok: applicationDetails.tiktok,
      message: applicationDetails.message,
    };

    console.log("formData >>", formData);

    // await fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    // })
  }

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setApplicationDetails({
      ...applicationDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <RootLayout metadata={{ title: "Apply to ANGELS OR VIXENS" }}>
      <div className="w-full bg-black backdrop-blur text-white h-fit flex flex-col px-4 pt-44 pb-24 md:pt-52 md:pb-32 mx-auto">
        <p className="sm:text-3xl text-xl text-center">
          Apply to <br className="md:hidden" />{" "}
          <span className="text-sand uppercase">Angels or Vixens</span>
        </p>

        <div
          style={{ backgroundImage: `url(${modal3.src})` }}
          className="w-full max-w-2xl mx-auto mt-8 sm:mt-12 !saturate-[.6] !bg-bottom !bg-fixed !bg-no-repeat !bg-contain"
        >
          <form
            onSubmit={submit}
            className="w-full grid grid-cols-1 gap-y-8 md:gap-y-6 backdrop-blur bg-black/80 border-[6px] md:border-8 border-sand px-4 pt-8 pb-4 md:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Input
                id="first-name"
                name="firstName"
                label="First name"
                autoComplete="given-name"
                onChange={handleChange}
                value={applicationDetails.firstName}
                placeholder="Enter your first name"
                autoFocus
                required
              />
              <Input
                id="last-name"
                name="lastName"
                label="Last name"
                onChange={handleChange}
                autoComplete="family-name"
                value={applicationDetails.lastName}
                placeholder="Enter your last name"
                required
              />
            </div>

            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              label="Email address"
              onChange={handleChange}
              value={applicationDetails.email}
              placeholder="Enter your emaill address"
              required
            />

            <Input
              id="phone"
              name="phone"
              autoComplete="tel"
              label="Phone number"
              onChange={handleChange}
              value={applicationDetails.phone}
              placeholder="Enter your phone number"
            />

            <Select
              id="following"
              name="following"
              value={following}
              options={followings}
              onChange={setFollowing}
              placeholder="Select..."
              label="Combined social media following"
              required
            />

            <Select
              id="earning"
              name="earning"
              value={earning}
              options={earnings}
              onChange={setEarning}
              placeholder="Select..."
              label="Current monthly earnings"
              required
            />

            <Input
              id="twitter"
              name="twitter"
              autoComplete="link"
              onChange={handleChange}
              label="Twitter account link"
              value={applicationDetails.twitter}
              placeholder="e.g. https://twitter.com/username"
            />

            <Input
              id="instagram"
              name="instagram"
              autoComplete="link"
              onChange={handleChange}
              label="Instagram account link"
              value={applicationDetails.instagram}
              placeholder="e.g. https://instagram.com/username"
            />

            <Input
              id="tiktok"
              name="tiktok"
              autoComplete="link"
              onChange={handleChange}
              label="Tiktok account link"
              value={applicationDetails.tiktok}
              placeholder="e.g. https://tiktok.com/username"
            />

            <Textarea
              rows={6}
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Start typing..."
              value={applicationDetails.message}
              label="Tell us a little bit about yourself!"
              required
            />

            <button
              type="submit"
              disabled={!hasContent || loading}
              className="outline-0 outline-none uppercase duration-300 transition-colors w-full text-lg py-3 bg-sand text-white hover:bg-sand/80 font-medium flex justify-center items-center gap-x-2 disabled:text-white/40 disabled:bg-sand/40 disabled:hover:bg-sand/40"
            >
              Apply
              {loading ? (
                <IconLoader2 className="animate-spin w-5 text-white h-auto" />
              ) : null}
            </button>
          </form>
        </div>
      </div>
    </RootLayout>
  );
}
