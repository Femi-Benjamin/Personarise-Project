import { SkillRecorder } from '../components'

const Progress = () => (
  <div className="my-10">
    <div>
      <h3 className=" mb-4 font-bold lg:text-2xl md:text-xl text-lg leading-8">
        Begin your learning path
      </h3>
      <p className="text-[#304351] font-normal md:text-base text-xs leading-5">
        Learn the skills required to become a software engineer.
      </p>
    </div>
    <SkillRecorder />
  </div>
)

export default Progress
