import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Button } from "@/components/ui/button"
import {Link} from "react-router-dom"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

 const handleCopy = () => {
    navigator.clipboard.writeText('mdnihal.private1@gmail.com');
    toast.success("email copied successfully");
 };
const icons = [
  { icon: "ci-github w-6", delay: 0 ,link:"https://github.com/mdnihal5",name:"github"},
  { icon: "ci-linkedin w-6", delay: 0.5,link:"https://linkedin.com/in/mdnihal05" ,name:"linkedin" },
  { icon: "ci-discord w-6", delay: 1.5,link:"https://discord.com/users/997531619105714297" ,name:"discord"},
  { icon: "ci-gmail  w-6",delay:2,link:"/" ,name:"email"}
];
const Socials: React.FC = ()=>{
	return <div className='flex w-30 items-center justify-center mt-14 gap-4 '>
    {icons.map((icon, index) => (
      <motion.div
        key={index}
        initial={{ y: 0 }}
        animate={{
          y: [-13, 0, -13],
          transition: {
            duration: 2,
            repeat: Infinity,
            delay: icon.delay,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.2,
          },
        }}
      >
      <TooltipProvider delayDuration={90}>
      <Tooltip>
      <TooltipTrigger onClick={icon.link=="/"?handleCopy:null}>{icon.link=='/'?
      <i className={icon.icon}></i>:
      <Link to={icon.link} target="_blank"><i className={icon.icon}></i></Link>
      }
      </TooltipTrigger>
      <TooltipContent>
      <p className="text-sm">{icon.name}</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

      
      </motion.div>
    ))}
  </div>;
}
export default Socials;