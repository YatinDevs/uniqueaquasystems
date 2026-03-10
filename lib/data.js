// lib/data.js — Unique Aqua Systems & Chemical Industries
// Central data store for all site content

// ─── Company Info ─────────────────────────────────────────────────────────────
export const companyInfo = {
  name: "Unique Aqua Systems & Chemical Industries",
  shortName: "Unique Aqua",
  tagline: "Total Water Management Solutions Since 2002",
  phone1: "+91-253-6699936",
  phone2: "+91-253-6454294",
  email: "amitrudre@gmail.com",
  website: "https://www.uniqueaquasystems.com",
  address:
    "4, Sai Shree Industrial Estate, Plot No. 8, S.No. 82/1, MIDC Area, Ambad, Nashik - 422 010 (Maharashtra-INDIA)",
  city: "Nashik",
  state: "Maharashtra",
  pincode: "422010",
  country: "India",
  foundingYear: "2002",
  formerlyKnownAs: "Unique Chemicals",
  indiamart: "www.indiamart.com/unique chemicals",
  socialLinks: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
  },
};

// ─── About / Who We Are ───────────────────────────────────────────────────────
export const aboutData = {
  whoWeAre: {
    title: "Who We Are",
    subtitle: "Total Water Management Solutions Since 2002",
    paragraphs: [
      "Unique Aqua Systems and Chemical Industries, as the name suggests is a water treatment company. We have been providing professional and value added consultancy and technical service to customers in Asian region since year 2002.",
      "With the long experience in the water treatment, Unique Aqua Systems and Chemical Industries combines innovative technologies and services provided by our high skilled representatives.",
      "Thanks to an intensive research and development and our own production facilities, we can offer and extensive range of products as well as tailor made solutions to cover every specific application and help you optimize the efficiency of your water processes achieving the greatest economy and long term operation reliability.",
      "The diversified experience to handle needs of different types of industries and institutions made our company to standardize our products according to the required specifications. As an ISO company we obey the quality procedures.",
      "The dream of a water treatment house is made true in Unique Aqua Systems and Chemical Industries as you will find every product to your water treatment needs in our organization. The Products we manufacture here and trade are of high quality as well incorporated the latest technological researches.",
    ],
    highlights: [
      {
        label: "Since",
        value: "2002",
        description: "Serving Asia Since",
      },
      {
        label: "Products",
        value: "100+",
        description: "Water Treatment Products",
      },
      {
        label: "Divisions",
        value: "3",
        description: "Chemical, Mechanical & Spares",
      },
      {
        label: "Quality",
        value: "ISO",
        description: "ISO Certified Company",
      },
    ],
  },

  qualityPolicy: {
    title: "Quality Policy",
    description:
      "Unique Aqua Systems and Chemical Industries is committed to provide all customers with products and services related to speciality chemicals & equipments that comply with agreed requirements. Compliance with customer requirements as well as products and services regulatory requirements, we will generate quality awareness amongst all employees and provide skills and knowledge training in quality aspects relating to our system, products and services. We will consistently achieve this through teamwork, continuous improvement and adherence to our quality assurance system.",
  },

  mission: {
    title: "Our Mission",
    description:
      "To be a major provider of sustainable water-related solutions and technical services in the Asian Region, through long term partnerships with our Technical Service Providers that benefit customers, employees, communities, and the environment. We strive to provide effective Total Water Management Program.",
  },

  vision: {
    title: "Our Vision",
    description:
      "To become a globally recognized leader in total water management solutions, delivering innovative chemical and mechanical water treatment systems that serve diverse industries across Asia and beyond — backed by quality, reliability, and customer-centric service.",
  },

  divisions: [
    {
      title: "Chemical Division",
      description:
        "Comprehensive range of UNI-TREAT® specialty chemicals for cooling water, boiler water, descaling, RO treatment, fire side systems, and sugar process applications.",
      icon: "FlaskConical",
      color: "#0077B6",
    },
    {
      title: "Mechanical Water Treatment Division",
      description:
        "Complete range of water treatment systems including sand filters, softening plants, DM plants, RO systems, UV disinfection systems — all under the UNITREAT® brand.",
      icon: "Settings",
      color: "#0096C7",
    },
    {
      title: "Spares & Equipments Division",
      description:
        "Full range of water testing kits, filtration cartridges, housings, filter media, FRP pressure vessels, multiport valves and all water treatment plant spares.",
      icon: "Wrench",
      color: "#00B4D8",
    },
  ],
};

// ─── Products — Chemical Division ────────────────────────────────────────────
export const chemicalProducts = [
  {
    slug: "cooling-towers-open-loop",
    name: "Open Loop Cooling Water Systems",
    subtitle: "(Cooling Towers)",
    division: "chemical",
    shortDescription:
      "UNI-TREAT® cooling tower water treatment chemicals to control scale, corrosion, fouling and microbiological contaminants.",
    description:
      "From a water treatment perspective, the most critical and challenging portion of the system to treat with cooling tower water treatment chemicals is the Open Loop. Here water is cascaded over the cooling tower, providing for greater surface area that allows for air passing through the water via the tower fan to absorb heat from the water and exhaust it out of the tower. In the Open Loop, there are four significant problem areas: Scale, Corrosion, Fouling, and Microbiological Contaminants.",
    problems: [
      {
        title: "Scale",
        description:
          "Because water is continually being lost by evaporation, fresh water has to be added. With this water come certain impurities – hardness, alkalinity, silica etc. which leads to scale formation.",
      },
      {
        title: "Corrosion",
        description:
          "Anytime water and metal come in contact, there is going to be corrosion. How well the water treatment professional minimizes that corrosion is a measure of the water treatment program's success.",
      },
      {
        title: "Fouling",
        description:
          "The effect of airborne contaminants (airborne dust, dirt) that are subjected to the system by movement of the air through the water and to a lesser degree by particles falling directly into the tower.",
      },
      {
        title: "Microbiological Contaminants",
        description:
          "A layer of dead or alive microbiological growths (algae, fungi, yeasts, molds, & bacteria) that can cause corrosion, lead to increased scaling, provide a means to trap foulant materials.",
      },
    ],
    chemicals: [
      {
        code: "a",
        name: "UNI-TREAT®",
        type: "Non-oxydising and Oxydising Biocides",
      },
      { code: "b", name: "UNI-TREAT®", type: "Dispersants" },
      {
        code: "c",
        name: "UNI-TREAT®",
        type: "Scale Inhibitor (Carbonate, Sulphate, Silica Inhibitor)",
      },
      { code: "d", name: "UNI-TREAT®", type: "Corrosion Inhibitors" },
      {
        code: "e",
        name: "UNI-TREAT®",
        type: "Multipurpose Chemical: Scale, Corrosion Inhibitor And Dispersants",
      },
      { code: "f", name: "UNI-TREAT®", type: "Series of On Line Cleaners" },
    ],
    icon: "Wind",
    color: "#0077B6",
  },
  {
    slug: "closed-loop-cooling-chillers",
    name: "Closed Loop Cooling Systems",
    subtitle: "(Chillers)",
    division: "chemical",
    shortDescription:
      "UNI-TREAT® close loop corrosion inhibitors for chiller and closed cooling systems.",
    description:
      "In a closed system, water circulates in a closed cycle and is subjected to alternate cooling and heating without air contact. The more common problem to either heating or cooling closed loops is corrosion.",
    chemicals: [
      {
        code: "a",
        name: "UNI-TREAT®",
        type: "Close Loop Corrosion Inhibitors",
      },
    ],
    icon: "Thermometer",
    color: "#0096C7",
  },
  {
    slug: "boiler-water-treatment",
    name: "Boiler Water Treatment",
    subtitle: "",
    division: "chemical",
    shortDescription:
      "Complete UNI-TREAT® boiler water treatment chemicals to prevent scale and corrosion in boilers.",
    description:
      "Boilers are important equipments used in industrial processes. Boiler water quality is of prime importance in order to obtain maximum output without any breakdowns. Therefore Pretreatment and chemical treatment of the water is very important to prevent scale & corrosion in boilers. We provide effective formulations for improved boiler water treatment operations.",
    problems: [
      {
        title: "Corrosion",
        description:
          "Dissolved oxygen, carbon dioxide, and acidic conditions cause metal corrosion inside boiler tubes and equipment.",
      },
      {
        title: "Scaling",
        description:
          "Calcium and magnesium salts deposit as scale on boiler surfaces, reducing heat transfer and causing overheating.",
      },
    ],
    chemicals: [
      { code: "a", name: "UNI-TREAT®", type: "Softening Agent, Antiscalant" },
      { code: "b", name: "UNI-TREAT®", type: "Polymeric Sludge Conditioner" },
      { code: "c", name: "UNI-TREAT®", type: "Instant Oxygen Scavenger" },
      {
        code: "d",
        name: "UNI-TREAT®",
        type: "Corrosion Control Agents, Neutralizing Agents",
      },
      {
        code: "e",
        name: "UNI-TREAT®",
        type: "Multipurpose Chemical (Scale, Alkinity Builder and Oxygen Scavenger)",
      },
    ],
    icon: "Flame",
    color: "#E63946",
  },
  {
    slug: "descaling-products",
    name: "Descaling Products",
    subtitle: "",
    division: "chemical",
    shortDescription:
      "UNI-TREAT® descaling chemicals for removing hard scale from industrial equipment and surfaces.",
    description:
      "Scale is to be removed to achieve proper performance of machines and equipments. The descaling compound is a combination chemical which removes the hard scaling.",
    chemicals: [
      {
        code: "a",
        name: "UNI-TREAT®",
        type: "Descaling Liquid Compound (For MS Surfaces and Hard Scales)",
      },
      {
        code: "b",
        name: "UNI-TREAT®",
        type: "Powder Compound for Soft Metal, such as Copper and Stainless Steel",
      },
      { code: "c", name: "UNI-TREAT®", type: "Alkaline Descaling Chemical" },
      { code: "d", name: "UNI-TREAT®", type: "Silica Descalent" },
    ],
    icon: "Layers",
    color: "#F4A261",
  },
  {
    slug: "speciality-chemicals",
    name: "UNI-TREAT® Speciality Chemicals",
    subtitle: "",
    division: "chemical",
    shortDescription:
      "RO treatment chemicals plus specialty products including potable water corrosion inhibitor, defoamer and oil dispersant.",
    description:
      "Comprehensive specialty chemicals including RO membrane treatment and process specialty products. Membrane fouling is a process where solute or particles deposit onto a membrane surface or into membrane pores in a way that degrades the membrane's performance.",
    chemicals: [
      { code: "a", name: "UNI-TREAT®", type: "R.O. Antiscalents" },
      { code: "b", name: "UNI-TREAT®", type: "R.O. Membrane Cleaners" },
      {
        code: "c",
        name: "UNI-TREAT®",
        type: "R.O. Membrane Bio-fouling Cleaners",
      },
      {
        code: "d",
        name: "UNI-TREAT®",
        type: "Potable Water Corrosion Inhibitor",
      },
      { code: "e", name: "UNI-TREAT®", type: "Defoamer" },
      { code: "f", name: "UNI-TREAT®", type: "Oil Dispersant" },
    ],
    icon: "FlaskConical",
    color: "#2A9D8F",
  },
  {
    slug: "fire-side-chemicals",
    name: "UNI-TREAT® Fire Side System Chemicals",
    subtitle: "",
    division: "chemical",
    shortDescription:
      "Fireside treatment chemicals for boiler furnace efficiency and post-treatment applications.",
    description:
      "Fire side chemical treatment for boilers prevents high-temperature corrosion, reduces slag deposits, and improves combustion efficiency for wood, coal and solid fuel applications.",
    chemicals: [
      {
        code: "a",
        name: "UNI-TREAT®",
        type: "Multipurpose Solid Fuel Additive For Wood, Coal Etc.",
      },
      {
        code: "b",
        name: "UNI-TREAT®",
        type: "Furnace Post Treatment, Clear Compound (OCanister set)",
      },
    ],
    icon: "Zap",
    color: "#E76F51",
  },
  {
    slug: "sugar-process-chemicals",
    name: "UNI-TREAT® Sugar Process Chemicals",
    subtitle: "",
    division: "chemical",
    shortDescription:
      "Specialty chemicals for the sugar industry including evaporator antiscalants, viscosity reducers and sugar extractors.",
    description:
      "Comprehensive sugar process chemicals to optimize efficiency in every stage of sugar manufacturing — from spray pond water treatment to bagasse fire management.",
    chemicals: [
      {
        code: "a",
        name: "pH Booster",
        type: "Spray Pond Water",
      },
      {
        code: "b",
        name: "Scale Inhibitor Evaporator Antiscalant",
        type: "Additive For Evaporator Bodies To Inhibit Carbonate, Sulphate Silica Scale From Cane Juice",
      },
      {
        code: "c",
        name: "Viscosity Reducer",
        type: "Pan Boiling Aid to Reduce Viscosity Of Massecuite",
      },
      {
        code: "d",
        name: "Sugar Extractor",
        type: "Additive In Imbibition Water to Extract More Sugar From Bagasse",
      },
      {
        code: "e",
        name: "Bagasse – Fire Mate",
        type: "Bagasse combustion efficiency additive",
      },
    ],
    icon: "Factory",
    color: "#8338EC",
  },
];

// ─── Products — Mechanical Division ──────────────────────────────────────────
export const mechanicalProducts = [
  {
    slug: "sand-carbon-iron-filters",
    name: "Multi Grade Sand Filters, Activated Carbon Filters and Iron Removal Filters",
    division: "mechanical",
    shortDescription:
      "Wide range of filtration systems standardized on the basis of specific velocities. Available in MS, FRP & HDPE construction.",
    description:
      "We offer a wide range of filtration systems standardised on the basis of specific velocities for each type of filter. Filters are available with single 5-way valve operation & multiple valve operation depending on the flow rate & the application. Filters are available in MS (painted), FRP & HDPE construction.",
    types: [
      "MS High Flow Sandfilters",
      "FRP Combination Filter (MGF + ACF)",
      "MS Sandfilters",
      "Automatic Sand, Carbon Filter & Softener",
    ],
    models: [
      { model: "MGF/ACF-1", capacity: "1 Meter cube / Hr." },
      { model: "MGF/ACF-3", capacity: "2-3 meter cube/Hr." },
      { model: "MGF/ACF-5", capacity: "5 meter cube / Hr." },
      { model: "MGF/ACF-10", capacity: "10 meter cube / Hr." },
      { model: "MGF/ACF-20", capacity: "20 meter cube / Hr." },
      { model: "MGF/ACF-30", capacity: "30 meter cube / Hr." },
    ],
    icon: "Filter",
    color: "#0077B6",
  },
  {
    slug: "water-softening-plant",
    name: "Water Softening Plant",
    division: "mechanical",
    shortDescription:
      "Ion exchange softening systems to achieve industrial zero hardness. Available in MS and FRP construction with auto models.",
    description:
      "Softening is a process where Calcium and Magnesium ions are exchanged for Sodium ions. The softeners are run up to the Hardness slip of 5 ppm as CaCO3 in the treated water, which is called as Industrial Zero Hardness.",
    types: ["M.S. Softener", "FRP Softener", "Auto Softener", "Softener"],
    models: [
      {
        model: "UNITREAT® 835",
        flow: "0.5 to 1 m³/hr",
        resinCap: "25 Ltrs",
      },
      {
        model: "UNITREAT® 844",
        flow: "0.5 to 1 m³/hr",
        resinCap: "30 Ltrs",
      },
      {
        model: "UNITREAT® 1054",
        flow: "0.5 to 1 m³/hr",
        resinCap: "60 Ltrs",
      },
      {
        model: "UNITREAT® 1248",
        flow: "1 to 1.5 m³/hr",
        resinCap: "85 Ltrs",
      },
      {
        model: "UNITREAT® 1354",
        flow: "2.5 to 3 m³/hr",
        resinCap: "100 Ltrs",
      },
      {
        model: "UNITREAT® 1465",
        flow: "3 to 5 m³/hr",
        resinCap: "150 Ltrs",
      },
      { model: "UNI 1665", flow: "5 to 6 m³/hr", resinCap: "180 Ltrs" },
      { model: "UNI 1865", flow: "5 to 6 m³/hr", resinCap: "250 Ltrs" },
      { model: "UNI 2162", flow: "6 to 7 m³/hr", resinCap: "300 Ltrs" },
      { model: "UNI 2472", flow: "5 to 10 m³/hr", resinCap: "450 Ltrs" },
      { model: "UNI 3072", flow: "10 to 12 m³/hr", resinCap: "750 Ltrs" },
      { model: "UNI 3272", flow: "10 to 20 m³/hr", resinCap: "1000 Ltrs" },
    ],
    icon: "Droplets",
    color: "#0096C7",
  },
  {
    slug: "demineralization-dm-plant",
    name: "Demineralization Systems (D. M. Plant)",
    division: "mechanical",
    shortDescription:
      "Two-bed DM plants and Mixed Bed Deionisers producing high purity water with conductivity less than 20 µS/cm.",
    description:
      "A Typical two-bed DM Plant consists of two FRP/MS Rubber lined Pressure vessels connected in series along with its internal fittings. The water obtained by this process shows conductivity less than 20 µS / cm at 25°C and total dissolved solids less than 10 ppm. Further high purity water can be achieved by Mixed Bed Deionisers, which are designed to produce high purity treated water.",
    types: ["Auto D. M. Plant", "D. M. Plant", "Mixed Bed Deionisers"],
    models: [
      {
        model: "UNITREAT® 835",
        flow: "0.5 to 1 m³/hr",
        resinCap: "25 Liters",
      },
      {
        model: "UNITREAT® 844",
        flow: "0.5 to 1 m³/hr",
        resinCap: "30 Liters",
      },
      {
        model: "UNITREAT® 1054",
        flow: "0.5 to 1 m³/hr",
        resinCap: "60 Liters",
      },
      {
        model: "UNITREAT® 1248",
        flow: "1 to 1.5 m³/hr",
        resinCap: "85 Liters",
      },
      {
        model: "UNITREAT® 3072",
        flow: "10 to 12 m³/hr",
        resinCap: "750 Liters",
      },
      {
        model: "UNITREAT® 1354",
        flow: "2.5 to 3 m³/hr",
        resinCap: "100 Liters",
      },
      {
        model: "UNITREAT® 1465",
        flow: "3 to 5 m³/hr",
        resinCap: "150 Liters",
      },
      {
        model: "UNITREAT® 1665",
        flow: "5 to 6 m³/hr",
        resinCap: "180 Liters",
      },
      {
        model: "UNITREAT® 1865",
        flow: "5 to 6 m³/hr",
        resinCap: "250 Liters",
      },
      {
        model: "UNITREAT® 2162",
        flow: "6 to 7 m³/hr",
        resinCap: "300 Liters",
      },
      {
        model: "UNITREAT® 3272",
        flow: "10 to 20 m³/hr",
        resinCap: "1000 Liters",
      },
      {
        model: "UNITREAT® 2472",
        flow: "5 to 10 m³/hr",
        resinCap: "450 Liters",
      },
    ],
    icon: "Atom",
    color: "#00B4D8",
  },
  {
    slug: "reverse-osmosis-ro-plant",
    name: "Reverse Osmosis System (R. O. Plant)",
    division: "mechanical",
    shortDescription:
      "Industrial RO systems from 7 LpH to 10,000 LpH for removing dissolved solids from water using membrane technology.",
    description:
      "Reverse osmosis (RO) is a membrane-technology filtration method that removes many types of large molecules and ions from solutions by applying pressure to the solution, when it is on one side of a selective membrane.",
    models: [
      { model: "UNITREAT® R.O.", flowRate: "7-8 LpH" },
      { model: "UNITREAT® R.O. 25", flowRate: "25 LpH" },
      { model: "UNITREAT® R.O. 50", flowRate: "50 LpH" },
      { model: "UNITREAT® R.O. 250", flowRate: "200 LpH" },
      { model: "UNITREAT® R.O. 500", flowRate: "450 LpH" },
      { model: "UNITREAT® R.O. 1000", flowRate: "1000 LpH" },
      { model: "UNITREAT® R.O. 2000", flowRate: "2000 LpH" },
      { model: "UNITREAT® R.O. 3000", flowRate: "3000 LpH" },
      { model: "UNITREAT® R.O. 4000", flowRate: "4000 LpH" },
      { model: "UNITREAT® R.O. 5000", flowRate: "5000 LpH" },
      { model: "UNITREAT® R.O. 6000", flowRate: "6000 LpH" },
      { model: "UNITREAT® R.O. 7000", flowRate: "7000 LpH" },
      { model: "UNITREAT® R.O. 10000", flowRate: "10000 LpH" },
    ],
    icon: "Layers",
    color: "#0077B6",
  },
  {
    slug: "domestic-ro-system",
    name: "Domestic R. O. System",
    division: "mechanical",
    shortDescription:
      "Compact domestic RO purification systems for household and small-scale drinking water needs.",
    description:
      "Compact and efficient domestic reverse osmosis systems for safe, clean drinking water. Perfect for homes, offices, and small commercial establishments.",
    icon: "Home",
    color: "#48CAE4",
  },
  {
    slug: "uv-disinfection-system",
    name: "Ultra Violet Dis-Infection System",
    division: "mechanical",
    shortDescription:
      "UV-C disinfection systems (200-280 nm) effective against bacteria, viruses, fungi, and all pathogenic micro-organisms.",
    description:
      "UV radiation of wavelengths between 200 to 280 nm (UV-C) has proved to damage DNA molecules of most pathogenic micro-organisms including bacteria, viruses, yeasts, protozoa, fungi, cysts, spores, etc. The microorganism with damaged DNA loses its ability to cause infections. No pathogenic micro organism is known to resist correctly applied and sufficient dose of UV-C radiation.",
    models: [
      {
        model: "1-63",
        inlet: '3/4" BSP Male',
        chamberL: "350mm",
        chamberW: "95mm",
        chamberH: "75mm",
      },
      {
        model: "1-76",
        inlet: '1" BSP Male',
        chamberL: "370mm",
        chamberW: "120mm",
        chamberH: "90mm",
      },
      {
        model: "2-63",
        inlet: '3/4" BSP Male',
        chamberL: "625mm",
        chamberW: "95mm",
        chamberH: "75mm",
      },
      {
        model: "2-76",
        inlet: '1" BSP Male',
        chamberL: "625mm",
        chamberW: "120mm",
        chamberH: "90mm",
      },
      {
        model: "4-76",
        inlet: '1.5" BSP Male',
        chamberL: "1010mm",
        chamberW: "130mm",
        chamberH: "145mm",
      },
      {
        model: "7-76",
        inlet: '2" BSP Male',
        chamberL: "1010mm",
        chamberW: "130mm",
        chamberH: "145mm",
      },
      {
        model: "10-76",
        inlet: '2" BSP Male',
        chamberL: "1320mm",
        chamberW: "130mm",
        chamberH: "145mm",
      },
      {
        model: "17-76",
        inlet: '2" BSP Male',
        chamberL: "1320mm",
        chamberW: "130mm",
        chamberH: "145mm",
      },
    ],
    icon: "Zap",
    color: "#7B2FBE",
  },
];

// ─── Products — Spares & Equipments Division ──────────────────────────────────
export const sparesProducts = [
  {
    slug: "water-testing-kits",
    name: "Water Testing Kits & Equipments",
    division: "spares",
    shortDescription:
      "Comprehensive water testing kits covering 30+ parameters plus microbe detection devices and digital equipment.",
    description:
      "Complete water testing solution with chemical test kits for 30+ parameters, BACTASLYDE microbe detection device for 8 microbial types, and digital testing equipment for pH, TDS, conductivity and more.",
    testingParameters: [
      "Total Hardness",
      "Calcium Hardness",
      "Chromate (Hexavalent)",
      "Tannin (For Boiler Water)",
      "Free Chlorine (DPD)",
      "Chlorine (Iodometric)",
      "Nitrite (High Level)",
      "Nitrite (Low Level)",
      "Dissolved Oxygen",
      "Chloride",
      "Sulphate",
      "Fluoride",
      "Alkalinity",
      "Sulphite",
      "Acidity",
      "Hydrazine",
      "Zinc",
      "pH",
      "Hydrogen Peroxide",
      "Orthophosphate (High Level)",
      "Orthophosphate (Low Level)",
      "Silica",
      "Silica (Low level)",
      "Silica (Medium Level)",
      "Silica (High Level)",
      "Iron (Low Level)",
      "Iron (High Level)",
      "Phosphonate / Sequestrant",
      "Amine (For Boiler Water)",
      "Chlorine Dioxide",
      "Ammonium",
      "Nitrate",
      "Copper",
      "Turbidity",
      "Molybdate",
      "Chlorine (O. T Method)",
    ],
    microbeDetection: [
      {
        code: "BS-101",
        type: "YEAST & FUNGI + TBC",
        industries:
          "Food, Soft Drink & Ice-cream, Dairy, Breweries, Pharma, Hospitals, Paper & Pulp, Paint & Pigment, Metal Working Fluids.",
      },
      {
        code: "BS-102",
        type: "E.COLI + TBC",
        industries:
          "Food, Soft Drink and Ice-cream, Pharma, Dairy, Water & Waste Water Treatment",
      },
      {
        code: "BS-103",
        type: "PSEUDOMONAS + TBC",
        industries:
          "Food, Soft Drink and Ice-cream, Pharma, Dairy, Paper & Pulp, Paint & Pigment, Cooling Tower Water, Metal Working Fluids.",
      },
      {
        code: "BS-115",
        type: "SULPHATE REDUCING BACTERIA (SRB/SGB)",
        industries:
          "Paper & Pulp, Cooling Tower Water, Metal Working Fluids.",
      },
      {
        code: "BS-PP1",
        type: "IRON BACTERIA",
        industries:
          "Cooling Waters, Open Ponds, Water Outfalls from Pipelines, Metal Working Fluids.",
      },
      {
        code: "BS-PP2",
        type: "SALMONELLA",
        industries: "Food, Eggs, Egg Powder, Spices, Fisheries, Hospitals",
      },
      {
        code: "BS-PP3",
        type: "STAPHYLOCOCCUS AUREUS",
        industries:
          "Food, Milk Products, Fresh Fish, Meat, Sauces, Canned Foods, Hospitals.",
      },
      {
        code: "BS-PP4",
        type: "VIBRIO",
        industries:
          "Food, Fisheries, Processed Fish viz. Cooked deep frozen Prawns & Shrimps.",
      },
    ],
    icon: "TestTube",
    color: "#2A9D8F",
  },
  {
    slug: "filtration-cartridges-housings",
    name: "Filtration Cartridges and Housings",
    division: "spares",
    shortDescription:
      "Full range of filter cartridges from 0.2 to 100 micron in PP, PES, PTFE, Nylon, SS and Activated Carbon.",
    description:
      "Comprehensive range of filtration cartridges and housings for all industrial and commercial water treatment applications.",
    cartridges: [
      {
        name: "String Wound Depth Filter Cartridge",
        micron: "0.5, 1, 5, 10, 25, 50",
        config:
          "Std Dia 2.5\"x10\", 20\" and 40\" | Jumbo - 4\"x10\" & 20\"",
        flow: "Std 16 LPM and Jumbo 50 LPM at 2.5 bar",
      },
      {
        name: "Spun PP Depth Filter Cartridge",
        micron: "0.5, 1, 5, 10, 25, 50",
        config: "Std Dia 2.5\"x10\", 20\", 30\" and 40\" | Jumbo - 4\"x10\" & 20\"",
        flow: "Std 16 LPM and Jumbo 50 LPM at 2.5 bar",
      },
      {
        name: "High Efficiency Pleated PP Filter Cartridge",
        micron: "0.2, 0.45, 1, 5, 10, 25",
        media: "PP, PES, PTFE, Nylon",
        lengths: "5, 9, 10, 20, 30, 40 inches",
      },
      {
        name: "Grooved Spun PP Depth Filter Cartridge",
        micron: "0.5, 1, 5, 10",
        config: "Std Dia 2.5\"x10\", 20\", 30\"",
        flow: "Std 16 LPM at 2.5 bar",
      },
      {
        name: "Nominal Pleated PP Filter Cartridge",
        micron: "0.5, 1, 5, 10, 25, 50",
        config: "Std Dia 2.5\"x10\", 20\", 30\" and 40\" | Jumbo - 4\"x10\" & 20\"",
        flow: "Std 16 LPM and Jumbo 50 LPM at 2.5 bar",
      },
      {
        name: "SS Filter Cartridge",
        micron: "5, 10, 15, 25, 40, 50, 80, 100 um",
        config:
          "Std Dia 2.5\"x10\", 20\", 30\" & 40\", Jumbo 4\"x10\", 20\", 30\" & 40\"",
        flow: "Std 30 LPM and Jumbo 50 LPM at 2.5 bar",
      },
      {
        name: "Activated Carbon Filter Cartridge",
        micron: "5 um",
        config: "Std Dia 2.5\"x10\" & 20\" | Jumbo 4.5\"x10\" & 20\"",
        flow: "16 LPM for Std 10\" and 30 LPM for Jumbo 10\"",
      },
      {
        name: "Plastic Filter Housings",
        micron: '1/2", 3/4", 1" and 1.5"',
        note: "Suitable for Single 2.5\"x10\", 20\" and Jumbo 4.5\"x10\" cartridges",
      },
      {
        name: "Filter Bags",
        micron: "1, 5, 10, 25, 50, 75, 100 um",
        config: 'BP: Dia 4"x10" & 20" & RSB: Dia 7"x17" & 32"',
        flow: "100 LPM for 10 BP Series and 200 LPM for 17\" RSB at 2.5 bar",
      },
      {
        name: "Bag Filter Assembly",
        micron: '1.5" BSP F',
        config: "Std Dia 4.5\"x10\" & 20\" with 1.5\" BSP female threaded connection",
        flow: "100 LPM for raw water at 2.5 bar",
      },
      {
        name: "Washable Net Cartridges",
        micron: "30, 80",
        config: "Std Dia 2.5\"x10\" & Jumbo 4.5\"x10\" & 20\"",
        flow: "Std 20 LPM and Jumbo 40 LPM at 2.5 bar",
      },
    ],
    icon: "Package",
    color: "#E76F51",
  },
  {
    slug: "water-treatment-plants-spares",
    name: "Water Treatment Plants Spares",
    division: "spares",
    shortDescription:
      "FRP pressure vessels, filtration media, multiport valves, distribution systems and hydro pneumatic tanks.",
    description:
      "Complete range of water treatment plant spares including FRP pressure vessels (8x35 to 63x86), filtration media, multiport valves (20 Nb to 65 Nb), distribution strainers, and hydro pneumatic tanks.",
    items: [
      {
        category: "Distribution Systems",
        description:
          "Product Range Strainers starting from 14\" to 63\" with connections from 2.5 threaded to 6\" flange. Flow ranging from 1m3/hr to 40 m3/hr.",
      },
      {
        category: "Hydro Pneumatic Tanks",
        description:
          "These tanks are ideal choice for new and replacement residential installations and pressure boosting applications.",
      },
      {
        category: "FRP Pressure Vessels",
        description:
          "Available in sizes 8x35 to 63x86 with volumes from 25 to 3280 litres.",
      },
      {
        category: "Filtration Media",
        description:
          "River Gravel (0.5-1 inch), Fine Gravel (2-5mm, 3-6mm), Angular Gravel (15-20mm), Pebble Stones (5-6 inch), Filtration Gravel (9-13mm), River Sand (0.5-1.5mm), Natural Sand (1-3mm), Coarse Sand (2-5mm), Ion Exchange Resin, Activated Carbon, Anthesite.",
      },
      {
        category: "Multiport Valves",
        description:
          "Ex-stock availability of different sizes of Multiport Valve, manual as well as automatic. Sizes From 20 Nb To 65 Nb.",
      },
    ],
    icon: "Wrench",
    color: "#6D6875",
  },
];

// ─── Application Areas (Industries) ──────────────────────────────────────────
export const applicationAreas = [
  {
    slug: "cooling-towers",
    name: "Cooling Towers",
    icon: "Wind",
    description:
      "Complete water treatment solutions for open loop and closed loop cooling systems to control scale, corrosion, fouling, and biological growth.",
    problems: ["Scale formation", "Corrosion", "Fouling", "Microbiological contamination"],
    solutions: [
      "UNI-TREAT® Cooling Tower Chemicals",
      "Biocides (Non-oxidizing & Oxidizing)",
      "Scale & Corrosion Inhibitors",
      "Online Cleaners",
    ],
    products: ["cooling-towers-open-loop", "closed-loop-cooling-chillers"],
    color: "#0077B6",
    stats: "40% energy savings possible with proper treatment",
  },
  {
    slug: "boilers",
    name: "Boilers & Steam Systems",
    icon: "Flame",
    description:
      "Boiler water treatment chemicals to prevent scale and corrosion, optimize steam output, and extend boiler life in industrial plants.",
    problems: ["Scale deposits on tubes", "Oxygen pitting corrosion", "Sludge buildup", "pH imbalance"],
    solutions: [
      "UNI-TREAT® Boiler Antiscalant",
      "Oxygen Scavengers",
      "pH Boosters",
      "Sludge Conditioners",
      "Multipurpose Boiler Chemicals",
    ],
    products: ["boiler-water-treatment", "fire-side-chemicals"],
    color: "#E63946",
    stats: "Up to 10% fuel savings with scale-free boilers",
  },
  {
    slug: "pharmaceutical",
    name: "Pharmaceutical Industry",
    icon: "Pill",
    description:
      "High purity water systems, purified water, WFI-grade systems and effluent treatment for pharmaceutical manufacturing.",
    problems: ["Microbial contamination", "High TDS in process water", "ETP compliance"],
    solutions: [
      "RO Systems (UNITREAT® R.O.)",
      "DM Plants",
      "UV Disinfection Systems",
      "Water Testing Kits",
    ],
    products: ["reverse-osmosis-ro-plant", "demineralization-dm-plant", "uv-disinfection-system"],
    color: "#2A9D8F",
    stats: "GMP-compliant water treatment systems",
  },
  {
    slug: "sugar-industry",
    name: "Sugar Industry",
    icon: "Factory",
    description:
      "Specialized sugar process chemicals for evaporators, spray ponds, and pan boiling, plus water treatment for all sugar mill utilities.",
    problems: ["Scale in evaporators", "High viscosity of massecuite", "Boiler scaling", "ETP compliance"],
    solutions: [
      "UNI-TREAT® Sugar Process Chemicals",
      "Evaporator Antiscalant",
      "Viscosity Reducer",
      "Sugar Extractor",
      "Bagasse Fire Mate",
    ],
    products: ["sugar-process-chemicals", "boiler-water-treatment"],
    color: "#8338EC",
    stats: "Proven formulations for sugar mills across India",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    icon: "Coffee",
    description:
      "Safe, food-grade water treatment solutions for food processing plants, breweries, dairy, and beverage manufacturing.",
    problems: ["Microbial contamination", "Scale in process equipment", "Water quality compliance"],
    solutions: [
      "UV Disinfection Systems",
      "RO Systems",
      "Water Softening Plants",
      "Water Testing Kits",
    ],
    products: [
      "reverse-osmosis-ro-plant",
      "uv-disinfection-system",
      "water-testing-kits",
    ],
    color: "#F4A261",
    stats: "FSSAI-compliant water treatment",
  },
  {
    slug: "textile-dyeing",
    name: "Textile & Dyeing",
    icon: "Shirt",
    description:
      "Soft water systems, ETP treatment chemicals, and defoamers for textile dyeing, printing and finishing processes.",
    problems: ["Hard water affecting dyeing", "ETP color removal", "Boiler scaling"],
    solutions: [
      "Water Softening Plant",
      "RO Systems",
      "Boiler Treatment Chemicals",
      "UNI-TREAT® Speciality Chemicals",
    ],
    products: ["water-softening-plant", "boiler-water-treatment", "speciality-chemicals"],
    color: "#E76F51",
    stats: "Soft water improves dye uptake by 20%",
  },
  {
    slug: "power-plants",
    name: "Power Plants",
    icon: "Zap",
    description:
      "Comprehensive water treatment for cooling towers, boilers, and makeup water systems in thermal power plants.",
    problems: ["Turbine scale deposits", "Condenser fouling", "High makeup water TDS"],
    solutions: [
      "Cooling Tower Chemicals",
      "DM Plants",
      "RO Systems",
      "Boiler Treatment Chemicals",
    ],
    products: ["cooling-towers-open-loop", "demineralization-dm-plant", "boiler-water-treatment"],
    color: "#E9C46A",
    stats: "Zero liquid discharge solutions available",
  },
  {
    slug: "hotels-hospitals",
    name: "Hotels & Hospitals",
    icon: "Building2",
    description:
      "Safe drinking water, cooling tower maintenance, and hot water system treatment for hospitality and healthcare facilities.",
    problems: ["Legionella risk in cooling towers", "Scale in hot water systems", "Drinking water quality"],
    solutions: [
      "UV Disinfection Systems",
      "Cooling Tower Chemicals",
      "Water Softening Plants",
      "Domestic RO Systems",
    ],
    products: ["uv-disinfection-system", "cooling-towers-open-loop", "domestic-ro-system"],
    color: "#48CAE4",
    stats: "WHO-compliant water treatment programs",
  },
  {
    slug: "construction-buildings",
    name: "Construction & Buildings",
    icon: "Building",
    description:
      "Water treatment systems for construction camps, commercial complexes, and building utilities including cooling and hot water systems.",
    problems: ["Hard water scaling", "Corrosion in piping", "Drinking water quality"],
    solutions: [
      "Water Softening Plants",
      "Domestic RO Systems",
      "UV Systems",
      "Hydro Pneumatic Tanks",
    ],
    products: ["water-softening-plant", "domestic-ro-system", "water-treatment-plants-spares"],
    color: "#6D6875",
    stats: "Complete building water management",
  },
  {
    slug: "automotive-engineering",
    name: "Automotive & Engineering",
    icon: "Cog",
    description:
      "Cooling water treatment, boiler chemicals, and soft water systems for automobile manufacturing and engineering industries.",
    problems: ["Scale in heat exchangers", "Corrosion in process equipment", "Cooling tower efficiency"],
    solutions: [
      "Cooling Tower Chemicals",
      "Descaling Products",
      "Water Softening Plants",
      "RO Systems",
    ],
    products: ["cooling-towers-open-loop", "descaling-products", "water-softening-plant"],
    color: "#264653",
    stats: "Serving Kirloskar, Exide & other leading manufacturers",
  },
];

// ─── Clients Data ─────────────────────────────────────────────────────────────
export const clientsData = {
  title: "Our Esteemed Clients",
  subtitle: "Trusted by Leading Industries Across India",
  description:
    "Unique Aqua Systems & Chemical Industries is trusted by leading industrial establishments, multinational corporations, and prestigious institutions across India for their complete water treatment needs.",
  clients: [
    { name: "Advanced Enzymes", logo: "/clients/advanced-enzymes.png" },
    { name: "Jindal Saw Ltd.", logo: "/clients/jindal-saw.png" },
    { name: "Princeware", logo: "/clients/princeware.png" },
    { name: "YORK", logo: "/clients/york.png" },
    { name: "GenRx Healthcare", logo: null },
    { name: "Crompton Greaves", logo: "/clients/crompton-greaves.png" },
    { name: "Parle", logo: "/clients/parle.png" },
    { name: "Sam Consultech", logo: null },
    { name: "FDC", logo: "/clients/fdc.png" },
    { name: "Garware", logo: "/clients/garware.png" },
    { name: "Mylan Pharmaceuticals", logo: "/clients/mylan-pharmaceuticals.png" },
    { name: "KARE", logo: null },
    { name: "Eaton", logo: "/clients/eaton.png" },
    { name: "Religare Pharma", logo: "/clients/religare.png" },
    { name: "Sequence Biotech", logo: null },
    { name: "IndianOil", logo: "/clients/indianoil.png" },
    { name: "E&G", logo: null },
    { name: "Sun Pharmaceuticals", logo: "/clients/sun-pharmaceuticals.png" },
    { name: "Express by Holiday Inn", logo: "/clients/express-by-holiday-inn.png" },
    { name: "Amhol Nayantara", logo: null },
    { name: "Nashik Polytechnic", logo: null },
    { name: "Ramada International", logo: "/clients/ramada-international.png" },
    { name: "General Mills", logo: "/clients/general-mills.png" },
    { name: "Ring & Aqua", logo: null },
    { name: "Nilkamal", logo: "/clients/nilkamal.png" },
    { name: "ADF Foods Ltd.", logo: "/clients/adf-foods.png" },
    { name: "Sun-n-Sand", logo: "/clients/sun-n-sand.png" },
    { name: "Hardy Spicer", logo: null },
    { name: "Cable Corporation of India Ltd.", logo: "/clients/cable-corporation-of-india.png" },
    { name: "Kitply", logo: "/clients/kitply.png" },
    { name: "Harman", logo: "/clients/harman.png" },
    { name: "Mungi Engineers Pvt. Ltd.", logo: null },
    { name: "EXIDE", logo: "/clients/exide.png" },
    { name: "Kirloskar", logo: "/clients/kirloskar.png" },
    { name: "SULA Vineyards", logo: "/clients/sula-vineyards.png" },
    { name: "UB Group", logo: "/clients/ub-group.png" },
  ],
  sectors: [
    "Pharmaceuticals",
    "Food & Beverage",
    "Manufacturing",
    "Hospitality",
    "Engineering",
    "FMCG",
    "Oil & Gas",
    "Education",
    "Healthcare",
    "Beverages",
  ],
};

// ─── Navigation structure ─────────────────────────────────────────────────────
export const navItems = {
  company: {
    label: "Company",
    dropdown: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Quality Policy", href: "/company/quality-policy" },
      { label: "Our Mission", href: "/company/our-mission" },
    ],
  },
  products: {
    label: "Products",
    megaMenu: [
      {
        division: "Chemical Water Treatment Division",
        slug: "chemical",
        items: [
          {
            label: "Open Loop Cooling Water Systems (Cooling Towers)",
            href: "/products/chemical/cooling-towers-open-loop",
          },
          {
            label: "Closed Loop Cooling Systems (Chillers)",
            href: "/products/chemical/closed-loop-cooling-chillers",
          },
          {
            label: "Boiler Water Treatment",
            href: "/products/chemical/boiler-water-treatment",
          },
          {
            label: "Descaling Products",
            href: "/products/chemical/descaling-products",
          },
          {
            label: "UNI-TREAT® Speciality Chemicals",
            href: "/products/chemical/speciality-chemicals",
          },
          {
            label: "UNI-TREAT® Fire Side System Chemicals",
            href: "/products/chemical/fire-side-chemicals",
          },
          {
            label: "UNI-TREAT® Sugar Process Chemicals",
            href: "/products/chemical/sugar-process-chemicals",
          },
        ],
      },
      {
        division: "Mechanical Water Treatment Division",
        slug: "mechanical",
        items: [
          {
            label:
              "Multi Grade Sand Filters, ACF and Iron Removal Filters",
            href: "/products/mechanical/sand-carbon-iron-filters",
          },
          {
            label: "Water Softening Plant",
            href: "/products/mechanical/water-softening-plant",
          },
          {
            label: "Demineralization Systems (D. M. Plant)",
            href: "/products/mechanical/demineralization-dm-plant",
          },
          {
            label: "Reverse Osmosis System (R. O. Plant)",
            href: "/products/mechanical/reverse-osmosis-ro-plant",
          },
          {
            label: "Domestic R. O. System",
            href: "/products/mechanical/domestic-ro-system",
          },
          {
            label: "Ultra Violet Dis-Infection System",
            href: "/products/mechanical/uv-disinfection-system",
          },
        ],
      },
      {
        division: "Spares & Equipments",
        slug: "spares",
        items: [
          {
            label: "Water Testing Kits & Equipments",
            href: "/products/spares/water-testing-kits",
          },
          {
            label: "Filtration Cartridges and Housings",
            href: "/products/spares/filtration-cartridges-housings",
          },
          {
            label: "Water Treatment Plants Spares",
            href: "/products/spares/water-treatment-plants-spares",
          },
        ],
      },
    ],
  },
  applicationAreas: {
    label: "Application Areas",
    href: "/application-areas",
    dropdown: applicationAreas.map((a) => ({
      label: a.name,
      href: `/application-areas/${a.slug}`,
    })),
  },
  clients: { label: "Clients", href: "/clients" },
  newsEvents: { label: "News & Events", href: "/news-events" },
  contact: { label: "Contact", href: "/contact" },
};

// ─── Helper functions ─────────────────────────────────────────────────────────
export function getProductBySlug(slug) {
  return (
    chemicalProducts.find((p) => p.slug === slug) ||
    mechanicalProducts.find((p) => p.slug === slug) ||
    sparesProducts.find((p) => p.slug === slug)
  );
}

export function getProductsByDivision(division) {
  if (division === "chemical") return chemicalProducts;
  if (division === "mechanical") return mechanicalProducts;
  if (division === "spares") return sparesProducts;
  return [];
}

export function getApplicationAreaBySlug(slug) {
  return applicationAreas.find((a) => a.slug === slug);
}
