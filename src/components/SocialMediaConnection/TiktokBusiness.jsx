import React from "react";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const TiktokBusiness = ({ icon, backgroundColor, label, type }) => {
  const user = useSelector((state) => state.user.value);

  const handleTikTokLogin = () => {
    try {
      const oauthUrl = `${
        import.meta.env.VITE_API_URL
      }/auth/tiktok?type=business&userId=${user.id}&brandId=${user.brand?.id}`;
      const width = 450;
      const height = 730;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      window.open(
        oauthUrl,
        "twitter",
        "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
          width +
          ", height=" +
          height +
          ", top=" +
          top +
          ", left=" +
          left
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        className="flex w-full justify-between rounded-md px-5"
        onClick={handleTikTokLogin}
        style={{ background: backgroundColor }}
      >
        <span className="me-4 h-12 py-3 text-sm text-white text-wrap">
          <Typography className="font-bold whitespace-nowrap">
            {label}
          </Typography>
        </span>
        <span className="h-12 text-xl  ms-8 py-3 text-stone-600">{icon}</span>
      </div>
    </div>
  );
};

export default TiktokBusiness;
