// links
import Link from "next/link";

//icons
import{ RiInstagramLine,
        RiGithubLine, 
        RiMailLine,
        RiDownloadLine} from 'react-icons/ri'
import { SiLinkedin, SiMedium, SiOpencv } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiMailLine/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <SiLinkedin/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <SiMedium/>
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiDownloadLine/>
      </Link>
    </div>
  );
};

export default Socials;
