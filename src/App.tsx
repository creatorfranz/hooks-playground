import { useMediaQuery } from "@uidotdev/usehooks";

export default function App() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  // Resize your browser windows to see changes.

  if (isSmallDevice) return "Phone";
  if (isMediumDevice) return "Tablet";
  if (isExtraLargeDevice) return "Desktop";
}
