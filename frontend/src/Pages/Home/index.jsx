import SectionFour from "./SectionFour"
import Section1 from "./SectionOne"
import Section2 from "./SectionTwo"
import FormSection from "./FormSection"
import SectionSix from "./SectionSix"
import SectionSeven from "./SectionSeven"

const HomePage = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="mt-12">
        <SectionFour />
      </div>
      <div className="mt-12">
        <SectionSix />
      </div>
      <div className="mt-12">
        <SectionSeven />
      </div>
      <div className="mt-24">
        <FormSection />
      </div>
    </div>
  )
}

export default HomePage