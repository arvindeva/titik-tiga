import { motion } from "framer-motion";

export default function LoadingDots() {
  return (
    <div className="display flex justify-center- items-center w-20 h-10 p-4">
      <div className="flex flex- row gap-x-4">
        <motion.div
          className="bg-white w-4 h-4 rounded-full"
          animate={{
            scale: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
        <motion.div
          className="bg-white w-4 h-4 rounded-full"
          animate={{
            scale: [1.3, 1.2, 1.1, 1.13, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.4],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
        <motion.div
          className="bg-white w-4 h-4 rounded-full"
          animate={{
            scale: [1.4, 1.5, 1.4, 1.3, 1.2, 1.1, 1, 1.1, 1.1, 1.2, 1.3],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />
      </div>
    </div>
  );
}
