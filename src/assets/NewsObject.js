import mawiTeam1 from './mawiTeam1.jpg';
import mawiTeam2 from './mawiTeam2.jpeg';
import mawiDnaLogo from './MawiDNA-Logo.png';
import genLogo from './logoWebsite.png';
import advisoryLogo from './partners/spireAdvisoryLogo.png';
import mawiDnaNews from './mawiDnaNews.png';
import prophaseLogo from './partners/prophase_Logo.svg';
import NebulaLogo from './partners/nebula_Logo.png';
const news1 = (
    <span>
      September 26th, 2022 – We are delighted to announce that our partner Mawi
      DNA Technologies (Mawi), a medical device company focusing on the
      development of innovative technologies for biological sample collection
      announced today that it has signed Memorandum of Understanding (MoU)
      agreements with the Moroccan Ministry of Investment, Convergence and
      Public Policies as well as with the Moroccan Ministry of Industry and
      Commerce to explore a Joint Venture with Mawi’s local partner Biotessia to
      establish a state of the art manufacturing facility in Morocco to serve
      the African market.
    </span>
  );
  const news2 = (
    <span>
      December 23rd, 2021 – SPIRE Advisory Group is delighted to announce that
      it has entered an agreement with Mawi DNA (www.mawidna.com) to position
      the company’s DNA and RNA collection kits with international partners in
      Africa and the Middle East.
    </span>
  );

  const news3 = (
    <span>
      GEN and SPIRE ADVISORY GROUP Announce Strategic Partnership Agreement
      South Ct Palo Alto California~USA. GEN, a leading consulting company in
      genomics and biotechnology, is pleased to announce the signing of a
      strategic partnership agreement with SPIRE ADVISORY GROUP. This
      partnership aims to establish a strong connection between the two
      organizations, with the objective of addressing unmet needs in the Middle
      East, Africa, and Central Asia regions.
    </span>
  );

  const news4 = (
    <span>
      {" "}
      Today, collecting DNA seems pretty standard, but not everyone can produce
      and adequate amount of saliva and bacteria can contaminate the sample
      causing issues to arise downstream. Why did Mawi DNA Technologies create
      the iSWAB? To improve and simplify biological sample collection and allow
      for…
    </span>
  );

  const news5 = (
    <span>
      {" "}
      Garden City, NY, March 07, 2023 (GLOBE NEWSWIRE) -- ProPhase Labs, Inc.
      (NASDAQ: PRPH) (“ProPhase”), a growth oriented and diversified
      diagnostics, genomics and biotech company, today announced that its wholly
      owned subsidiary, Nebula Genomics, Inc. (“Nebula”), has introduced its
      lowest ever standard price of $249.00 for its direct-to-consumer (DTC)
      whole genome sequencing (WGS) DNA test.
    </span>
  );

  const news6 = (
    <span>
      {" "}
      Nebula Genomics, a rapidly growing and wholly owned subsidiary of
      ProPhase, focuses on genomics sequencing and testing technologies, a
      comprehensive method for analyzing entire genomes, including the genes and
      chromosomes in DNA. The data obtained from genomic sequencing may help to
      identify inherited disorders and tendencies, help predict disease risk,
      help identify expected drug response, and characterize genetic mutations,
      including those that drive cancer progression. The Company currently
      offers Nebula Genomics whole genome sequencing products direct-to-consumer
      online, with plans to sell in food, drug and mass (FDM) stores and to
      provide testing for universities conducting genomic research.
    </span>
  );
export const NewsObject = [
    {
        id:1,
        images: [mawiTeam1,mawiTeam2],
        news: news1,
        link:"https://spireadvisorygroup.com/mawidna-and-its-moroccan-partner-biotessia-sign-2-mous-with-moroccan-government/",
        inPageLink: false,
    },
    {
        id: 2,
        images: [mawiDnaLogo],
        news: news2,
        link: "",
        inPageLink: false,
      },
      {
        id: 3,
        images: [genLogo, advisoryLogo],
        news: news3,
        link: "",
        inPageLink: true,
      },
      {
        id: 4,
        images: [mawiDnaNews],
        news: news4,
        link: "https://www.mawidna.com/blog/got-dna-simplifying-the-first-step-in-genomic-testing/",
        inPageLink: false,
      },
      {
        id: 5,
        images: [prophaseLogo],
        news: news5,
        link: "https://ir.prophaselabs.com/news-events/press-releases/detail/176/prophase-labs-nebula-genomics-subsidiary-introduces",
        inPageLink: false,
        source:'Prophase website'
      },
      {
        id: 6,
        images: [NebulaLogo],
        news: news6,
        link: "",
        inPageLink: false,
        source:'Nebula website'
      },
]