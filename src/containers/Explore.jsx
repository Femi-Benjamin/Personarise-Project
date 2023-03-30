import { ExploreDashboardCard } from '../components'
import { exploreItems } from '../constants/data'

const Explore = () => (
  <div className="my-10">
    <div>
      <h3 className="font-bold font-2xl lg:text-2xl md:text-xl text-lg leading-8 mb-4">
        Explore more from Us!
      </h3>
      <p className="text-[#304351] md:text-base text-xs font-normal">
        Explore our platform and find out ways to make your stay here more
        pleasant.
      </p>
    </div>
    <div className="flex md:flex-row flex-col gap-6 my-6">
      {exploreItems.map((item, index) => (
        <ExploreDashboardCard
          key={index}
          image={item.image}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  </div>
)

export default Explore
