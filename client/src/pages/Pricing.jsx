import PricingHero from "../components/pricing/PricingHero";
import PricingCards from "../components/pricing/PricingCards";
import ComparisonTable from "../components/pricing/ComparisonTable";
import PricingFAQ from "../components/pricing/PricingFAQ";
import PricingCTA from "../components/pricing/PricingCTA";

const Pricing = () => {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
};

export default Pricing;
