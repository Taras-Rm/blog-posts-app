import { LoaderCircle } from "lucide-react";

function Loader() {
  return (
    <LoaderCircle
      className="animate-spin text-primary"
      width={100}
      height={100}
    />
  );
}

export default Loader;
