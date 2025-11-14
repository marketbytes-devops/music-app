import SectionFour from "./SectionFour"
import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import FormSection from "./FormSection"
import SectionSix from "./SectionSix"
import SectionSeven from "./SectionSeven"
import SectionThree from "./SectionThree"

const HomePage = () => {
  return (
    <>
      <header>
        <SectionOne />
      </header>
      <section className="mt-12">
        <SectionTwo />
      </section>
      <section className="mt-12">
        <SectionThree />
      </section>
      <section className="mt-12">
        <SectionFour />
      </section>
      <section className="mt-12">
        <SectionSix />
      </section>
      <section className="mt-12">
        <SectionSeven />
      </section>
      <section className="mt-24">
        <FormSection />
      </section>
    </>
  )
}

export default HomePage