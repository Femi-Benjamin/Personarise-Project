const DashboardHeader = () => (
  <div className="my-10">
    <h1 className="md:font-medium lg:text-5xl md:text-4xl text-3xl leading-10 mb-7">
      Welcome, Mary!
    </h1>
    <div className="my-2">
      <div className="flex md:flex-row flex-col flex-wrap md:items-center md:gap-4">
        <p className="lg:text-2xl md:text-xl text-base md:font-bold leading-8">
          Your career path status
        </p>
        <div>
          <span className="md:p-3 p-2 bg-[#0DA8FF] text-white uppercase text-base rounded-lg ">
            mobile software engineer
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default DashboardHeader
