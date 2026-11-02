// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio —
// no need to touch the page components.
// ---------------------------------------------------------------------------

const img = (p) => `/images/${p}`;

export const profile = {
  name: "Rediat Terefe",
  fullName: "Rediat Terefe Andualem",
  role: "Ph.D. Research Scholar · Chemical Engineering",
  affiliation: "Indian Institute of Technology Roorkee",
  tagline:
    "Exploring how chemistry fuels engineering solutions for a more sustainable future.",
  heroIntro:
    " specializing in the design, characterization, and testing of catalysts for a range of applications.",
  email: "rediat_ta@ch.iitr.ac.in",
  phones: [
    { label: "India", display: "+91 745 209 9300", href: "tel:+917452099300" },
    {
      label: "Ethiopia · WhatsApp / Telegram",
      display: "+251 910 604 091",
      href: "tel:+251910604091",
    },
  ],
  location:
    "Department of Chemical Engineering, IIT Roorkee, Uttarakhand, India",
  cv: "/files/CV_Rediat_Terefe_2026.pdf",
  portrait: img("me/portrait-bw.webp"),
  portraitFormal: img("me/formal.webp"),
  labSite: "https://ecrkrl.netlify.app/",
  formspree: "https://formspree.io/f/xpwljeba",
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/feed/" }, // TODO: replace with your profile URL
    { name: "Facebook", href: "https://www.facebook.com/rediat.terefe/" },
    { name: "YouTube", href: "https://www.youtube.com/@etCHEG" },
  ],
};

export const about = {
  headline: "Transforming nature’s resources through science",
  paragraphs: [
    "I was born and raised in Addis Ababa, Ethiopia, and hold both Bachelor’s and Master’s degrees in Chemical Engineering from Jimma University, Jimma Institute of Technology. I am now pursuing my Ph.D. in Chemical Engineering at IIT Roorkee under the supervision of Prof. Prakash Biswas.",
    "My research focuses on converting biomass into fuel intermediates through catalysis, and on upgrading those intermediates particularly furfural to furfuryl alcohol. I work across the full catalyst lifecycle: design, synthesis, characterization, and performance evaluation, with reaction-parameter optimization using design of experiments and response surface methodology.",
    "I have also contributed to collaborative research on tri-reforming of methane and CO₂-to-formic-acid conversion. Looking ahead, I’m keen to explore energy-efficient routes for methane and CO₂ valorization through inductive heating, and sustainable pathways that turn waste dimethylformamide into ammonia and ethylenediamine.",
  ],
  personal:
    "Outside the lab you’ll find me watching science documentaries, playing basketball football & loan tennis, video games, attending church services, reading nonfiction books,  or savouring a strong cup of Ethiopian coffee.",
};

export const stats = [
  { value: "4", label: "Peer-reviewed publications" },
  { value: "10", label: "Analytical instruments operated" },
  { value: "8", label: "Batch & flow reactors operated" },
  { value: "5", label: "Research awards" },
];

export const focusAreas = [
  {
    title: "Biomass valorization",
    text: "Direct catalytic conversion of agricultural residues such as teff straw into furfural in biphasic solvent systems.",
    icon: "leaf",
  },
  {
    title: "Catalyst design",
    text: "MOF-derived, nitrogen-doped and magnetically separable catalysts — synthesized, characterized and stress-tested.",
    icon: "hex",
  },
  {
    title: "Process optimization",
    text: "Design of experiments and RSM-based optimization to find the reaction conditions that actually scale.",
    icon: "chart",
  },
];

export const education = [
  {
    degree: "Ph.D. in Chemical Engineering",
    school: "Indian Institute of Technology Roorkee",
    place: "Roorkee, India",
    period: "Jul 2022 — 2026",
    grade: "CGPA 8.4 / 10",
    logo: img("logos/iitr.webp"),
    detail:
      "Thesis: “Production of furan intermediates from biomass waste and their upgrading to valuable chemicals using heterogeneous catalysts.”",
    supervisor: "Prof. Prakash Biswas",
  },
  {
    degree: "M.Sc. in Chemical Engineering",
    school: "Jimma University, Jimma Institute of Technology",
    place: "Jimma, Ethiopia",
    period: "2019 — Feb 2021",
    grade: "CGPA 3.9 / 4",
    logo: img("logos/jimma.webp"),
    detail:
      "Thesis: Removal of excess free fatty acid from edible oil using betaine-based natural deep eutectic solvents, and the oil’s effect analysis.",
    supervisor: "Prof. Ramachandran K.",
  },
  {
    degree: "B.Sc. in Chemical Engineering",
    school: "Jimma University, Jimma Institute of Technology",
    place: "Jimma, Ethiopia",
    period: "2013 — Jun 2018",
    grade: "CGPA 3.4 / 4",
    logo: img("logos/jimma.webp"),
    detail:
      "Thesis: Bitumen modification using waste plastic (PET) to improve road bitumen and reduce environmental pollution.",
    supervisor: "Prof. Muluken Eshetu",
  },
];

export const skills = [
  {
    group: "Catalysis & synthesis",
    items: [
      "MOF-derived catalysts",
      "Magnetic / separable catalysts",
      "Design of experiments",
      "Response surface methodology",
      "Reaction-parameter optimization",
      "Catalyst stability testing",
    ],
  },
  {
    group: "Characterization",
    items: [
      "FE-SEM",
      "XRD",
      "GC",
      "GC-MS",
      "HPLC",
      "FTIR",
      "TPR / TPD / TPO",
      "Pulse chemisorption",
      "NMR",
      "BET",
    ],
  },
  {
    group: "Computation & code",
    items: [
      "Python",
      "JavaScript",
      "MERN stack",
      "AI / ML for chemical engineering",
    ],
  },
  {
    group: "Software",
    items: [
      "Origin",
      "Design Expert",
      "IBM SPSS",
      "X’Pert HighScore",
      "Edraw Max",
      "KingDraw",
      "Microsoft 365",
    ],
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Amharic", level: "Native" },
  { name: "Gurage", level: "Native" },
  { name: "Oromo", level: "Basic" },
  { name: "Hindi", level: "Basic" },
];

export const learning = [
  {
    title: "AI & Machine Learning",
    text: "Integrating machine learning into chemical engineering to optimize processes, predict properties and accelerate simulations.",
  },
  {
    title: "DFT",
    text: "Using density functional theory to understand adsorption and reaction pathways on catalyst surfaces.",
  },
  {
    title: "Molecular simulation",
    text: "Studying the behaviour and interactions of atoms and molecules over time in complex systems.",
  },
];

export const conferences = [
  {
    name: "EuropaCat 2025",
    detail: "16th European Congress on Catalysis",
    place: "Trondheim, Norway",
  },
  {
    name: "ICECEES-2024",
    detail:
      "International Chemical Engineering Conference on Energy, Environment and Sustainability",
    place: "Roorkee, India",
  },
];

export const hobbies = [
  {
    title: "Reading",
    text: "Getting lost in a good book.",
    image: img("hobbies/reading.webp"),
    link: "https://openlibrary.org/",
  },
  {
    title: "Basketball",
    text: "On the court whenever the lab lets me go.",
    image: img("hobbies/basketball.webp"),
    link: "https://www.youtube.com/@NBA",
  },
  {
    title: "Coding & app development",
    text: "Building web apps that solve everyday problems.",
    image: img("hobbies/coding.webp"),
    to: "/projects",
  },
];

export const research = {
  thesis:
    "Production of furan intermediates from biomass waste and their upgrading to valuable chemicals using heterogeneous catalysts",
  supervisor: "Prof. Prakash Biswas",
  objectives: [
    {
      title: "Furfural production",
      summary:
        "Direct catalytic production of furfural from teff straw in a biphasic solvent system.",
      steps: [
        "Biomass compositional analysis",
        "Biomass proximate analysis",
        "Design of experiments",
        "Experimental runs",
        "Reaction-parameter optimization (RSM)",
        "Spent biomass utilization",
      ],
      // status: "Published",
    },
    {
      title: "Furfuryl alcohol production",
      summary: "Catalytic conversion of furfural to furfuryl alcohol.",
      steps: [
        "Preparation of MOF-A520",
        "Catalyst preparation",
        "Catalyst characterization",
        "Design of experiments",
        "Experimental runs",
        "Catalyst stability test",
      ],
      // status: "Published",
    },
    {
      title: "Comparative study on MOFs",
      summary:
        "Assessing the effect of the MOF alone on furfuryl alcohol production from furfural.",
      steps: [
        "Preparation of MIL-53",
        "Peak temperature identification",
        "Design of experiments",
        "Experimental runs",
        "Comparative analysis",
        "Post-reaction catalyst characterization",
      ],
    },
    // {
    //   title: "Magnetic catalyst for biomass → furfural",
    //   summary:
    //     "A separable catalyst for producing furfural directly from powdered biomass.",
    //   steps: [
    //     "Catalyst preparation",
    //     "Magnetic property testing",
    //     "Performance testing",
    //     "Reaction-parameter optimization",
    //     "Catalyst stability test",
    //   ],
    // },
    //  {
    //   title: "Valorization of DMF waste",
    //   summary: "Finding valuable products from waste dimethylformamide.",
    //   steps: [
    //     "Separation of DMF waste after MIL-53 preparation",
    //     "Catalyst preparation & characterization",
    //     "Catalyst performance testing",
    //     "Identification of valuable products",
    //     "Optimization & catalyst recycling",
    //     "Catalyst stability test",
    //   ],
    // },
    {
      title: "Kinetics study of furfural to furfuryl alcohol",
      summary:
        "Studying the reaction kinetics for the conversion of furfural to furfuryl alcohol.",
      steps: [
        "understanding the reaction mechanism",
        "reaction models and rate equations",
        "activation energy and Arrhenius parameters",
        // "Identification of valuable products",
        // "Optimization & catalyst recycling",
        // "Catalyst stability test",
      ],
    },
  ],
  collaborations: [
    {
      title: "Tri-reforming of methane",
      text: "Ni-silica and MOF-templated N-doped Ni-alumina catalysts for synthesis-gas production.",
    },
    {
      title: "CO₂ to formic acid",
      text: "Collaborative work on catalytic conversion of carbon dioxide into formic acid.",
    },
  ],
  future: [
    "Energy-efficient methane and CO₂ valorization through inductive heating",
    "Sustainable conversion of waste DMF to ammonia / ethylenediamine",
    "AI / ML-assisted catalyst discovery and process optimization",
  ],
};

export const publications = [
  {
    title:
      "The conversion of furfural to furfuryl alcohol with high yield via catalytic hydrogenation transfer in the presence of nickel-embedded alumina catalyst derived from metal-organic framework template",
    authors: [
      "Rediat T.",
      "Sharma A.",
      "Disale S.S.",
      "Tomer R.",
      "Hermans S.*",
      "Biswas P.*",
    ],
    journal: "Catalysis Today",
    year: 2026,
    date: "Jun 2026",
    doi: "10.1016/j.cattod.2026.115883",
    cover: img("journals/catalysis-today.webp"),
    role: "First author",
  },
  {
    title:
      "Amine-functionalized metal-organic framework-templated nitrogen-doped Ni-alumina catalyst for efficient methane tri-reforming",
    authors: [
      "Sharma A.",
      "Rediat T.",
      "Singh M.",
      "Tomer R.",
      "Steenhaut T.",
      "Tonelli A.",
      "Hermans S.*",
      "Biswas P.*",
    ],
    journal: "Applied Materials Today",
    year: 2026,
    date: "Jun 2026",
    doi: "10.1016/j.apmt.2026.103292",
    cover: img("journals/applied-materials-today.webp"),
    role: "Co-author",
  },
  {
    title:
      "Optimization of reaction parameters by response surface methodology for the tri-reforming process over a Ni-silica catalyst to produce synthesis gas",
    authors: ["Sharma A.", "Rediat T.", "Biswas P.*"],
    journal: "International Journal of Hydrogen Energy",
    year: 2025,
    date: "Aug 2025",
    doi: "10.1016/j.ijhydene.2025.150378",
    cover: img("journals/hydrogen-energy.webp"),
    role: "Co-author",
  },
  {
    title:
      "The direct catalytic conversion of teff straw into fuel intermediate: Optimization of reaction parameters",
    authors: ["Rediat T.", "Biswas P.*"],
    journal: "Biomass and Bioenergy",
    year: 2025,
    date: "Jul 2025",
    doi: "10.1016/j.biombioe.2025.108150",
    cover: img("journals/biomass-bioenergy.webp"),
    role: "First author",
  },
];

export const instruments = [
  {
    name: "XRD",
    full: "X-ray diffraction",
    model: "Malvern Panalytical Empyrean 3",
    origin: "Netherlands",
    category: "Crystallography",
    image: img("instruments/xrd.webp"),
    use: "Crystal structure and phase analysis",
  },
  {
    name: "FE-SEM",
    full: "Field-emission scanning electron microscope",
    model: "Thermo Fisher Apreo (low vacuum)",
    origin: "USA",
    category: "Morphology",
    image: img("instruments/fesem.webp"),
    use: "Surface morphology and particle imaging",
  },
  {
    name: "GC-MS",
    full: "Gas chromatography–mass spectrometry",
    model: "Agilent 8890 GC + 5977B MSD",
    origin: "USA",
    category: "Chromatography",
    image: img("instruments/gcms.webp"),
    use: "Product identification and quantification",
  },
  {
    name: "GC",
    full: "Gas chromatograph",
    model: "NEWCHROM 6800",
    origin: "India",
    category: "Chromatography",
    image: img("instruments/gc.webp"),
    use: "Gas and liquid product analysis",
  },
  {
    name: "HPLC (automatic)",
    full: "High-performance liquid chromatography",
    model: "Agilent 1260 Infinity II",
    origin: "USA",
    category: "Chromatography",
    image: img("instruments/hplc-auto.webp"),
    use: "Sugar and furan quantification",
  },
  {
    name: "HPLC (manual)",
    full: "High-performance liquid chromatography",
    model: "Thermo Scientific UltiMate 3000",
    origin: "USA",
    category: "Chromatography",
    image: img("instruments/hplc-manual.webp"),
    use: "Liquid-phase product analysis",
  },
  {
    name: "BET",
    full: "Brunauer–Emmett–Teller surface area",
    model: "Micromeritics ASAP 2060",
    origin: "USA",
    category: "Surface analysis",
    image: img("instruments/bet.webp"),
    use: "Surface area and pore-size distribution",
  },
  {
    name: "TPR / TPD / TPO",
    full: "Temperature-programmed reduction / desorption / oxidation",
    model: "Micromeritics",
    origin: "USA",
    category: "Thermal analysis",
    image: img("instruments/tpr.webp"),
    use: "Reducibility, acidity and pulse chemisorption",
  },
  {
    name: "FTIR",
    full: "Fourier-transform infrared spectroscopy",
    model: "Thermo Nicolet 6700",
    origin: "USA",
    category: "Spectroscopy",
    image: img("instruments/ftir.webp"),
    use: "Functional groups and surface species",
  },
  {
    name: "NMR",
    full: "Nuclear magnetic resonance",
    model: "Spinsolve 80 Carbon",
    origin: "New Zealand & Germany",
    category: "Spectroscopy",
    image: img("instruments/nmr.webp"),
    use: "Structural confirmation of products",
  },
];

export const reactors = [
  {
    name: "50 mL high-pressure batch",
    maker: "AMAR",
    volume: "50 mL",
    pressure: "100 bar",
    temp: "300 °C",
    material: "SS316",
    type: "Batch",
    image: img("reactors/amar-50.webp"),
  },
  {
    name: "50 mL low-pressure batch",
    maker: "SAMTEK",
    volume: "50 mL",
    pressure: "20 bar",
    temp: "250 °C",
    material: "Hastelloy C276",
    type: "Batch",
    image: img("reactors/samtek-50.webp"),
  },
  {
    name: "100 mL high-pressure batch",
    maker: "AMAR",
    volume: "100 mL",
    pressure: "170 bar",
    temp: "450 °C",
    material: "SS316",
    type: "Batch",
    image: img("reactors/amar-100.webp"),
  },
  {
    name: "250 mL high-pressure batch",
    maker: "AMAR",
    volume: "250 mL",
    pressure: "100 bar",
    temp: "300 °C",
    material: "SS316",
    type: "Batch",
    image: img("reactors/amar-250.webp"),
  },
  {
    name: "450 mL high-pressure batch",
    maker: "AMAR",
    volume: "450 mL",
    pressure: "120 bar",
    temp: "300 °C",
    material: "SS316 / Inconel",
    type: "Batch",
    image: img("reactors/amar-450.webp"),
  },
  {
    name: "50 mL flow reactor",
    maker: "AMAR",
    volume: "50 mL",
    pressure: "170 bar",
    temp: "1000 °C",
    material: "Inconel 625",
    type: "Continuous",
    image: img("reactors/flow.webp"),
  },
  {
    name: "Microwave reactor",
    maker: "CEM",
    volume: "80 mL",
    pressure: "Elevated",
    temp: "Elevated",
    material: "Glass",
    type: "Microwave",
    image: img("reactors/microwave.webp"),
  },
  {
    name: "Microwave digester",
    maker: "Anton Paar",
    volume: "50 mL",
    pressure: "5 bar",
    temp: "250 °C",
    material: "Glass",
    type: "Microwave",
    image: img("reactors/digester.webp"),
  },
];

export const awards = [
  {
    title: "Best Research Scholar’s Day Presentation Award",
    org: "IIT Roorkee",
    date: "Feb 2026",
    text: "Annual student research presentation programme, Department of Chemical Engineering.",
    image: img("awards/iitr-presentation.webp"),
  },
  {
    title: "Certificate of Merit",
    org: "IIT Roorkee",
    date: "2026",
    text: "Research Scholars’ Day, Department of Chemical Engineering.",
    image: img("awards/iitr-merit.webp"),
  },
  {
    title: "University-Level Research Competition Award",
    org: "Jimma University",
    date: "Jun 2018",
    text: "Community-Based Education Best Student Research Project, Annual Student Research Symposium.",
    image: img("awards/university.webp"),
  },
  {
    title: "Institute-Level Research Competition Award",
    org: "Jimma Institute of Technology",
    date: "Jun 2018",
    text: "Recognition for undergraduate research at institute level.",
    image: img("awards/institute.webp"),
  },
  {
    title: "Inter-Department Research Competition Award",
    org: "Jimma University",
    date: "Jun 2018",
    text: "First place, final research competition — Department of Chemical Engineering.",
    image: img("awards/department.webp"),
  },
];

// Add a `url` to any project to show a “Visit” link on its card.
export const projects = [
  {
    title: "Azaf Clinic",
    tag: "Healthcare website",
    category: "Healthcare",
    image: img("projects/azaf.webp"),
  },
  {
    title: "Cure Care",
    tag: "Non-emergency medical service",
    category: "Healthcare",
    image: img("projects/curecare.webp"),
  },
  {
    title: "Adult Care",
    tag: "Adult care service app",
    category: "Healthcare",
    image: img("projects/adult-care.webp"),
  },
  {
    title: "Equipment Booking",
    tag: "Book lab instruments online",
    category: "Research & lab",
    image: img("projects/lab-booking.webp"),
  },
  {
    title: "Lab Management",
    tag: "Manage a research laboratory",
    category: "Research & lab",
    image: img("projects/lab-management.webp"),
  },
  {
    title: "Lab Site",
    tag: "Research group website",
    category: "Research & lab",
    image: img("projects/lab-site.webp"),
    url: "https://ecrkrl.netlify.app/",
  },
  {
    title: "Kids Tutor",
    tag: "Educational platform",
    category: "Community",
    image: img("projects/kids-tutor.webp"),
  },
  {
    title: "Students’ Union",
    tag: "IIT Roorkee union site",
    category: "Community",
    image: img("projects/students-union.webp"),
  },
  {
    title: "Lucy Restaurant",
    tag: "Restaurant website",
    category: "Community",
    image: img("projects/restaurant.webp"),
  },
  {
    title: "File Management",
    tag: "Upload & manage files",
    category: "Utilities",
    image: img("projects/file-management.webp"),
  },
  {
    title: "Book Store",
    tag: "Upload & store books",
    category: "Utilities",
    image: img("projects/bookstore.webp"),
  },
  {
    title: "Image Gallery",
    tag: "Upload & store images",
    category: "Utilities",
    image: img("projects/image-gallery.webp"),
  },
  {
    title: "Netflix Clone",
    tag: "Streaming UI clone",
    category: "Clones",
    image: img("projects/netflix.webp"),
  },
  {
    title: "Zoom Clone",
    tag: "Video meeting app clone",
    category: "Clones",
    image: img("projects/zoom.webp"),
  },
  {
    title: "iPhone Clone",
    tag: "Apple product page clone",
    category: "Clones",
    image: img("projects/iphone.webp"),
  },
];
