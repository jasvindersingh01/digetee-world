import { useEffect } from "react";

const AdSense = ({
  adClient = "ca-pub-4878971776178204",
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
}) => {
  useEffect(() => {
    if (adSlot) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense initialization error: ", e);
      }
    }
  }, [adSlot]);

  // If no adSlot is configured, do not render a fake ad unit
  if (!adSlot) {
    return null;
  }

  return (
    <div className={`adsense-wrapper overflow-hidden my-4 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
};

export default AdSense;
