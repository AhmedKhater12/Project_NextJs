import Link from "next/link";
import module from "./Buying.module.css";
const Buying = () => {
  return (
    <div className={module.Bigger}>
      <div className={module.Smaller}>
        <h3>Ready to Elevate Your Webinars?</h3>
      </div>
      <div className={module.btns}>
        <Link className={module.btn1} href={"/"}>
          {" "}
          Plans & Pricing{" "}
        </Link>
      </div>
    </div>
  );
};

export default Buying;
