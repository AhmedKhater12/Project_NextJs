import Link from "next/link";
import module from "./Customers.module.css";
import Image from "next/image";

const Customers = () => {
  return (
    <div className={module.Photos}>
          <Image src="/image8.png" alt="Webinar" width={150} height={300} />
          <Image src="/image9.png" alt="Webinar" width={150} height={300} />
          <Image src="/image10.png" alt="Webinar" width={150} height={300} />
          <Image src="/image11.png" alt="Webinar" width={150} height={300} />
          <Image src="/image12.png" alt="Webinar" width={150} height={300} />
          <Image src="/image13.png" alt="Webinar" width={150} height={300} />
      
    </div>
  )
}

export default Customers
