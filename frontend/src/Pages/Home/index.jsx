import SectionFour from "./SectionFour"
import Section1 from "./SectionOne"
import Section2 from "./SectionTwo"

const HomePage = () => {
  return (
    <div>
      <Section1/>
      <Section2/>
      <div className="mt-12">
        <SectionFour/>
      </div>
      
    </div>
  )
}

export default HomePage