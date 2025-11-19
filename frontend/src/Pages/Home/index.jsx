import SectionFour from "./SectionFour"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import FormSection from "./FormSection"
import SectionSix from "./SectionSix"
import SectionSeven from "./SectionSeven"
import SectionThree from "./SectionThree"
import SectionFive from "./SectionFive"
import GoToTop from "../../Components/GoToTop"

const HomePage = () => {
  return (
    <>
      <header>
        <SectionOne />
      </header>
      <section className="md:mt-44 mt-5">
        <SectionTwo />
      </section>
      <section className="md:mt-12 mt-5">
        <SectionThree />
      </section>
      <section className="md:mt-12 mt-5">
        <SectionFour />
      </section>
       <section className="mt-12">
        <SectionFive />
      </section>
      <section className="md:-mt-18 mt-0"> 
        <SectionSix />
      </section>
      <section className="md:mt-22 mt-5">
        <SectionSeven />
      </section>
      <section className="md:mt-22 mt-10">
        <FormSection />
      </section>

      <GoToTop/>
    </>
  )
}

export default HomePage