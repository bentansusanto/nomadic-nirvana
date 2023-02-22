import Image from "next/image";
import Link from "next/link";
import Background from "../../public/assets/bg-register.svg";
import PlayStore from "../../public/assets/Google Play.svg";
import AppStore from "../../public/assets/Play Store.svg";
import FormRegister from "./FormRegister";

const Register = () => {
  return (
    <div className="flex space-x-20 justify-center mt-20 mx-20">
      <div>
        <Image src={Background} alt="" />

        {/* Download in playstore and app store */}
        <div className="flex space-x-4 justify-center mt-8">
          <Image src={PlayStore} alt="" className="w-32" />
          <Image src={AppStore} alt="" className="w-32" />
        </div>
      </div>
      <div className="bg-[#e2e2e2] w-[1px] h-98" />
      {/* Form Login */}
      <div className="space-y-4">
        <h1 className="text-3xl w-[60%] font-semibold">
          Start for access our best destnation.
        </h1>
        <p className="w-[60%]">
          I have account, <Link href={"/login"} className="text-dark-orange">
            Login now.
          </Link>
        </p>
        <FormRegister/>
      </div>
    </div>
  );
};

export default Register;
