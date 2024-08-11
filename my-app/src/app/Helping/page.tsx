import Link from "next/link";
import module from "./Helping.module.css";
const Helping = () => {
  return (
    <div className={module.Bigger}>
      <div className={module.Smaller}>
        <h3>Need Help! Webinar Documentation</h3>
        <p>
          Need production help? Webinar Documentation has you covered. We can
          help ensure you next webinar goes off without a hitch.
        </p>
        <Link className={module.hlink} href="/">
          {" "}
          Help Center{" "}
        </Link>
      </div>
    </div>
  );
};

export default Helping;
