import SectionFour from "./SectionFour"
import Section1 from "./SectionOne"
import Section2 from "./SectionTwo"
import FormSection from "./FormSection"
import Section5 from "./SectionFive"
import Section3 from "./SectionThree"
const HomePage = () => {
  return (
    <div>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section5/>

      <div className="mt-12">
        <SectionFour/>
      </div>
      <div className="mt-24">
        <FormSection/>
      </div>
    </div>
  )
}

export default HomePage