import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"
import { CustomButton } from "../components"
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion"
function Home() {
  const snap = useSnapshot(state)
  console.log(snap)
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="App Logo"
              className="object-contain w-8 h-8"
            />
          </motion.header>
          <motion.div
            className="home-content gap-4"
            {...headContainerAnimation}
          >
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> BEGIN.
              </h1>
            </motion.div>
          </motion.div>
          <motion.div
            {...headContainerAnimation}
            className="flex flex-col gap-4"
          >
            <p className="max-w-md font-normal text-base text-gray-600">
              Create your unique and exclusive T-shirt with our brand new 3D
              tool. <strong>Unleash your imagination</strong> and make us proud
            </p>
            <CustomButton
              type="filled"
              title="Customize Now"
              handleClick={() => (state.intro = false)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
