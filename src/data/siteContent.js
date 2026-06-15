export const profile = {
  name: "Dr. Abhishek",
  title: "AVM Harjinder Singh, VSM, Chair Professor",
  department: "Department of Aerospace Engineering",
  lab: "Helicopter and VTOL Laboratory",
  institute: "Indian Institute of Technology Kanpur",
  address: "Kanpur 208016, India",
  email: "abhish(at)iitk.ac.in",
  phone: "+91 - (0)512 - 6797515 (O)",
  phones: [
    "+91 - (0)512 - 6797515 (O)",
    "+91 - 7318018894 (M)",
    "+91 - 8765069138 (M)",
  ],
  image: "/assets/images/abhishek.jpg",
  professionalInterest:
    "A commitment to education through teaching and research in broad areas of rotary wing aeromechanics, Vertical Take Off and Landing systems, autonomous and intelligent rotary wing MAV/UAV platforms, and inverse flight dynamics simulation with applications to experimentation, analysis, and design.",
  education: [
    "Ph.D., Aerospace Engineering (Rotorcraft Dynamics), University of Maryland, College Park",
    "M.S., Aerospace Engineering (Rotorcraft Dynamics), University of Maryland, College Park",
    "B.Tech., Aerospace Engineering, Indian Institute of Technology Kharagpur",
  ],
};

export const lab = {
  name: "Helicopter and VTOL Laboratory",
  shortDescription:
    "The lab works on rotorcraft, VTOL systems, autonomous aerial vehicles, aeromechanics, flight dynamics, and unconventional air vehicle design.",
  latest:
    "Sabal 20 is an unmanned logistic drone with 20 kg payload lifting capacity. The original design study was carried out in the lab at IIT Kanpur and later manufactured and tested by EndureAir Systems Pvt. Ltd.",
  latestImage: "/assets/images/marquee/sabal-20.jpg",
  latestVideo: "https://www.youtube.com/embed/TolzhZOXuPk?si=mA91SxMwD2jNDqgw",
};

export const researchInterests = [
  "Unmanned Aerial Systems",
  "Aeromechanics and Design",
  "Inverse flight dynamics simulation for helicopters",
  "Autonomous hover-capable MAV and UAV design",
  "Unconventional VTOL/STOL systems",
  "Adaptive rotors",
  "Wind turbines",
  "Finite Element Analysis and Multibody Dynamics",
];

export const galleryImages = [
  {
    src: "/assets/images/marquee/sabal-20.jpg",
    alt: "Sabal 20 unmanned logistics drone",
    caption: "Sabal 20 logistics UAV",
  },
  {
    src: "/assets/images/marquee/mav-collage.jpg",
    alt: "MAV and UAV collage",
    caption: "MAV/UAV prototypes",
  },
  {
    src: "/assets/images/marquee/tailsitter-hover.jpg",
    alt: "Quadrotor biplane tailsitter in hover mode",
    caption: "Biplane tailsitter hover",
  },
  {
    src: "/assets/images/marquee/tailsitter-forward-flight.jpg",
    alt: "Quadrotor biplane tailsitter in forward flight mode",
    caption: "Biplane tailsitter forward flight",
  },
  {
    src: "/assets/images/marquee/tiltrotor.jpg",
    alt: "Quadrotor convertiplane prototype",
    caption: "VTOL quadrotor convertiplane",
  },
  {
    src: "/assets/images/marquee/variable-pitch-quadrotor.jpg",
    alt: "Variable pitch quadrotor prototype",
    caption: "Variable pitch quadrotor",
  },
];

export const marqueeImages = [
  {
    src: "/assets/images/marquee/sabal-20.jpg",
    alt: "Sabal 20 unmanned logistics drone",
    caption: "Sabal 20 logistics UAV",
  },
  {
    src: "/assets/images/marquee/uav_landing.png",
    alt: "Autonomous UAV landing experiment",
    caption: "Autonomous UAV landing",
  },
  {
    src: "/assets/images/marquee/mav-collage.jpg",
    alt: "MAV and UAV collage",
    caption: "MAV/UAV prototypes",
  },
  {
    src: "/assets/images/marquee/tailsitter-hover.jpg",
    alt: "Quadrotor biplane tailsitter in hover mode",
    caption: "Biplane tailsitter hover",
  },
  {
    src: "/assets/images/marquee/uav_sway.png",
    alt: "UAV moving deck sway experiment",
    caption: "Moving-deck landing experiment",
  },
  {
    src: "/assets/images/marquee/tailsitter-forward-flight.jpg",
    alt: "Quadrotor biplane tailsitter in forward flight mode",
    caption: "Biplane tailsitter forward flight",
  },
  {
    src: "/assets/images/marquee/tiltrotor.jpg",
    alt: "Quadrotor convertiplane prototype",
    caption: "VTOL quadrotor convertiplane",
  },
  {
    src: "/assets/images/marquee/variable-pitch-quadrotor.jpg",
    alt: "Variable pitch quadrotor prototype",
    caption: "Variable pitch quadrotor",
  },
];

export const researchFocus = [
  "Rotary wing aeromechanics",
  "VTOL and STOL vehicle design",
  "Autonomous flight control",
  "Micro air vehicles",
  "UAV logistics platforms",
  "Wind turbine mechanisms",
];

export const researchProjects = [
  {
    title: "High Endurance Tandem Rotor UAV",
    area: "Aerial logistics",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Designed and flight tested",
    image: "/assets/images/marquee/sabal-20.jpg",
    summary:
      "A tandem rotor UAV platform developed at IIT Kanpur for payload transport and autonomous stabilization using in-house guidance and control software.",
    details:
      "The platform work focused on payload transport, autonomous stabilization, and flight testing for logistics applications.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "High Efficiency VTOL Quadrotor Convertiplane",
    area: "Hybrid VTOL aircraft",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Prototype flight tested in hover",
    image: "/assets/images/marquee/tiltrotor.jpg",
    summary:
      "A quadrotor convertiplane with tilting wing-propeller segments intended to improve hover efficiency and support transition to aircraft-like forward flight.",
    details:
      "This project explored tilting wing-propeller modules for efficient hover and aircraft-like forward flight transition.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Biplane Quadrotor Tailsitter",
    area: "Payload delivery UAV",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "completed",
    status: "Hover and forward-flight configurations",
    image: "/assets/images/marquee/tailsitter-hover.jpg",
    summary:
      "A VTOL airplane concept combining variable-pitch quadrotor agility with compact biplane fixed wings for efficient cruise.",
    details:
      "The biplane tailsitter concept combines vertical takeoff capability with fixed-wing cruise efficiency for payload delivery.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Project NAAVIK",
    area: "Autonomous navigation",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "ongoing",
    status: "Tested on multiple platforms",
    image: "/assets/images/ruav-iitk.jpg",
    summary:
      "A cross-platform autopilot project for UAV/MAV applications, including loiter, path following, return-to-home, height hold, and VTOL landing modes.",
    details:
      "NAAVIK supports cross-platform autonomy experiments for guidance, navigation, control, and VTOL landing modes.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "RL-Optimised UAV Quadrotor Landing On A Heaving Ship-Deck Emulator With CBF-Safety Filtering",
    area: "Autonomous Landing",
    authors: ["Ritwik Shankar"],
    phase: "ongoing",
    status: "RL landing policy with CBF safety filtering",
    image: "/assets/images/projects/rl-heave-landing.png",
    summary:
      "Trained an RL landing policy to land a UAV Quadrotor on heave-dominant Z-axis deck motion using GRU-based reinforcement learning with privileged critic information.",
    details:
      "Trained an RL landing policy to land a UAV Quadrotor on heave-dominant Z-axis deck motion using GRU-based reinforcement learning with privileged critic information. Derived a descent-phase Control Barrier Function from relative clearance and stopping margin to provide crash-proof safety filtering during landing.",
    experimentVideos: [
      { label: "Heaving deck landing experiment", href: "https://youtu.be/ytcI675lGTQ" },
      { label: "CBF-filtered landing experiment", href: "https://youtu.be/iTDNAP14bmY" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "RL-Optimised UAV Quadrotor Landing On A Moving Ship-Deck Emulator",
    area: "Autonomous Landing",
    authors: ["Ritwik Shankar"],
    phase: "ongoing",
    status: "PX4-compatible RL landing stack",
    image: "/assets/images/projects/rl-moving-deck-landing.png",
    summary:
      "Built a PX4-compatible reinforcement learning stack in IsaacSim with a parallelisable PX4-like cascaded controller for quadrotors.",
    details:
      "Built a PX4-compatible reinforcement learning stack in IsaacSim with a parallelisable PX4-like cascaded controller for quadrotors. Demonstrated autonomous landings on a moving platform under sinusoidal motion up to 0.2 Hz frequency and 55 cm amplitude.",
    experimentVideos: [
      { label: "Moving deck landing experiment", href: "https://www.youtube.com/watch?v=cQChESdLzrM" },
      { label: "Moving platform landing experiment", href: "https://www.youtube.com/watch?v=pRaUoR9tWNc" },
    ],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Micro Coaxial Autonomous Heli",
    area: "Micro air vehicles",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "ongoing",
    status: "Autonomous hover research",
    image: "/assets/images/micav2.jpg",
    summary:
      "A hover-capable micro air vehicle platform instrumented with optic-flow, IMU, infrared, and sonar sensors.",
    details:
      "The micro coaxial helicopter platform is used for autonomous hover research with compact onboard sensing.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
  {
    title: "Vertical Axis Wind Turbine",
    area: "Wind energy",
    authors: ["Helicopter and VTOL Laboratory"],
    phase: "ongoing",
    status: "Lab-scale prototype",
    image: "/assets/images/vawt-cad.jpg",
    summary:
      "A variable-pitch VAWT design with aerodynamic braking, intended to improve performance across wind-speed and wind-direction changes.",
    details:
      "This work studies variable-pitch vertical-axis wind turbine mechanisms and aerodynamic braking at lab scale.",
    experimentVideos: [],
    paperLinks: [],
    relatedLinks: [],
  },
];

export const teachingCourses = [
  {
    id: "fall-2018-ae686",
    term: "Fall 2018",
    code: "AE686",
    title: "Helicopter Theory",
    role: "Instructor",
    resources: [{ label: "Course content", href: "/assets/documents/ae_686.pdf" }],
  },
  {
    id: "fall-2017-ae670",
    term: "Fall 2017",
    code: "AE670",
    title: "Preliminary Design of Helicopters",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2017-ae686",
    term: "Fall 2017",
    code: "AE686",
    title: "Helicopter Theory",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2016-ae462",
    term: "Spring 2016",
    code: "AE462",
    title: "Aircraft Design - II",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2016-ae630",
    term: "Spring 2016",
    code: "AE630",
    title: "Autonomous Unmanned Aerial Systems",
    role: "Instructor",
    resources: [{ label: "Course content", href: "/assets/documents/ae-630.pdf" }],
  },
  {
    id: "fall-2015-ae688",
    term: "Fall 2015",
    code: "AE688",
    title: "Dynamics and Vibration",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2015-ae462",
    term: "Spring 2015",
    code: "AE462",
    title: "Aircraft Design - II",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2014-ae668",
    term: "Fall 2014",
    code: "AE668",
    title: "Helicopter Theory",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2013-ae688",
    term: "Fall 2013",
    code: "AE688",
    title: "Dynamics and Vibration",
    role: "Instructor",
    resources: [],
  },
  {
    id: "spring-2013-ae462",
    term: "Spring 2013",
    code: "AE462",
    title: "Aircraft Design - II",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2012-ae670",
    term: "Fall 2012",
    code: "AE670",
    title: "Aircraft Structural Analysis",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2012-eso209",
    term: "Fall 2012",
    code: "ESO209",
    title: "Dynamics",
    role: "Tutor",
    resources: [],
  },
  {
    id: "spring-2012-ae660",
    term: "Spring 2012",
    code: "AE660",
    title: "Preliminary Design of Helicopters",
    role: "Instructor",
    resources: [{ label: "Course content", href: "/assets/documents/ae660.pdf" }],
  },
  {
    id: "spring-2012-eso204",
    term: "Spring 2012",
    code: "ESO204",
    title: "Mechanics of Solids",
    role: "Tutor",
    resources: [],
  },
  {
    id: "fall-2011-ae688",
    term: "Fall 2011",
    code: "AE688",
    title: "Dynamics and Vibration",
    role: "Instructor",
    resources: [],
  },
  {
    id: "fall-2011-ae321",
    term: "Fall 2011",
    code: "AE321",
    title: "Flight Mechanics",
    role: "Co-Instructor",
    resources: [],
  },
];

export const currentPeopleGroups = [
  {
    group: "PhD",
    members: [],
  },
  {
    group: "MTech",
    members: [],
  },
  {
    group: "Undergraduate and BT-MT",
    members: [
      {
        name: "Ritwik Shankar",
        year: "Y21 BT-MT",
        image: "/assets/images/people/ritwik-shankar.jpg",
        contacts: {
          email: "ritwikshankar03@gmail.com",
          linkedin: "https://www.linkedin.com/in/s-ritwik/",
          homepage: "https://s-ritwik.github.io/homepage/",
        },
      },
    ],
  },
  {
    group: "Research Assistant",
    members: [],
  },
];

export const calendarEvents = [
  {
    id: "lab-calendar-placeholder",
    title: "Lab calendar",
    date: "",
    time: "",
    location: "Helicopter and VTOL Laboratory",
    description: "Calendar entries can be added here as lab events are finalized.",
  },
];

export const phdAlumni = [
  {
    name: "Kuldeep Kumar Dhiman",
    program: "PhD, since Dec 2013",
    current: "",
    thesis: "Flapping wing micro air vehicles; hover-capable micro air vehicles",
    contacts: { email: "dhims(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Rahul Ramanujam",
    program: "PhD, since Jan 2016",
    current: "",
    thesis: "Helicopter blade morphing, smart materials, compound helicopter",
    contacts: { email: "rahulram(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "M. Rama Krishna",
    program: "PhD, since Aug 2019",
    current: "",
    thesis: "Design of rotary wing and VTOL UAV/MAVs",
    contacts: { email: "rkrishna(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Ram D Gadekar",
    program: "PhD, since Aug 2015",
    current: "",
    thesis: "Control, navigation and guidance, micro air vehicle design",
    contacts: { email: "ramd(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Yonas Gebre",
    program: "PhD, since Aug 2013",
    current: "",
    thesis: "Experimental and analytical investigation of vertical axis wind turbine",
    contacts: { email: "yonasg(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Raghavendra Prasad",
    program: "PhD 2018",
    current: "Bell - Textron India, Bangalore",
    thesis:
      "Inverse flight dynamic analysis for prediction of helicopter rotor blade loads in unsteady maneuvering flight",
    contacts: { email: "", linkedin: "", homepage: "" },
  },
  {
    name: "Sagar Setu",
    program: "PhD 2019",
    current: "Milky Way AI, Singapore",
    thesis:
      "Modeling, hardware-in-the-loop simulation and flight controller development for rotary wing UAVs - from first flight to autonomous autorotation",
    contacts: { email: "", linkedin: "", homepage: "" },
  },
  {
    name: "Nidhish Raj",
    program: "PhD 2019",
    current: "Post Doctoral Researcher, IIT Kanpur",
    thesis: "Control of agile rotorcrafts: a geometric approach",
    contacts: { email: "", linkedin: "", homepage: "" },
  },
];

export const degreeAlumni = [
  {
    name: "Ankur Duhoon",
    program: "Research Engineer",
    current: "",
    research:
      "Design and development of UAVs, transmission design, composite development, material manufacturing, structural dynamic testing and CAD modelling",
    contacts: { email: "aduhoonpal(at)gmail.com", linkedin: "", homepage: "" },
  },
  {
    name: "Naveen Gupta",
    program: "BT/MT",
    current: "",
    research: "Rotary wing MAV design, flapping wing MAV",
    contacts: { email: "nvngupta(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Prashant Singh",
    program: "BT/MT",
    current: "",
    research: "Design and control of VTOL UAVs",
    contacts: { email: "singhpra(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Praveen Kumar",
    program: "Research Engineer",
    current: "",
    research: "",
    contacts: { email: "ranjanpk(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  {
    name: "Shubham",
    program: "BT/MT",
    current: "",
    research: "",
    contacts: { email: "kshubham(at)iitk.ac.in", linkedin: "", homepage: "" },
  },
  { name: "Akshay Sharma", program: "MTech 2019", current: "Klearexpress India Pvt. Ltd." },
  { name: "Balachandar D.", program: "MTech 2019", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Basab Adhyapak", program: "MTech 2019", current: "Bell - Textron India, Bangalore" },
  { name: "Pankaj Patil", program: "BT/MT 2019", current: "Deutsche Bank" },
  {
    name: "Rama Krishna Mendu",
    program: "BT/MT 2019",
    current: "Pursuing PhD, IIT Kanpur; Co-Founder, EndureAir Systems Pvt. Ltd.",
  },
  { name: "Sourav Sinha", program: "BT/MT 2019", current: "Pursuing PhD, Virginia Tech" },
  { name: "N. C. Kaushik", program: "BT/MT 2019", current: "Pursuing PhD, RPI" },
  { name: "Praveen Ranjan", program: "BT/MT 2019", current: "Research Engineer, IIT Kanpur" },
  { name: "Karthik S.", program: "M.Tech 2018", current: "HAL RWR&DC, Bangalore" },
  { name: "Naba Kishore Routray", program: "M.Tech 2018", current: "HAL RWR&DC, Bangalore" },
  { name: "Diksha Aggarwal", program: "M.Tech 2018", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Sakshi Gupta", program: "M.Tech 2018", current: "Eaton Technologies Pvt. Limited" },
  { name: "K. Anjenayulu", program: "M.Tech 2017", current: "HAL RWR&DC, Bangalore" },
  {
    name: "Vishnu Chipade",
    program: "BT/MT 2017",
    current: "Pursuing PhD at University of Michigan, Ann Arbor",
  },
  { name: "B. Sai Tharun", program: "M.Tech 2017", current: "Pursuing PhD, TAMU" },
  {
    name: "Praneet Vayalali",
    program: "M.Tech 2016",
    current: "Pursuing PhD, Rensselaer Polytechnic Institute (RPI)",
  },
  { name: "Sangith Rajasegar", program: "M.Tech 2016", current: "" },
  { name: "Namrata Gupta", program: "BT/MT 2016", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Ran Vijay Singh", program: "BT/MT 2016", current: "" },
  { name: "Shyamal Rao", program: "M.Tech 2015", current: "Bell - Textron India, Bangalore" },
  { name: "Md. Afzal", program: "M.Tech 2015", current: "Cognizant Technology Solutions" },
  { name: "Abhijit Verma", program: "BT/MT 2015", current: "" },
  { name: "Naman Rawal", program: "BT/MT 2015", current: "Honeywell Pvt. Ltd." },
  { name: "Rahul R.", program: "M.Tech 2014", current: "Pursuing PhD at IIT Kanpur" },
  { name: "Prashanth Nagaraj", program: "M.Tech 2014", current: "Eaton Technologies Pvt. Ltd." },
  { name: "Palash Jain", program: "BT/MT 2014", current: "Pursuing PhD at Univ. of Texas at Austin" },
  { name: "Anant Goel", program: "BT/MT 2014", current: "" },
  { name: "Sagar Setu", program: "BT/MT 2013", current: "Pursuing PhD at IIT Kanpur" },
  { name: "Aishwarya P.", program: "M.Tech 2013", current: "WS Atkin India Pvt. Ltd." },
];

export const summerTrainees = [
  {
    year: "2014",
    people: [
      "Suresh Sharma, Amrita School of Engineering, Amrita Vishwavidyapeetham",
      "Carolyn Walther, Texas A&M",
    ],
  },
  {
    year: "2013",
    people: [
      "Rohit Gupta, BESU Shibpur - pursuing MS at UIUC",
      "Swastik Basu, Jadavpur University - pursuing PhD at RPI",
      "Jose Flores, Texas A&M",
    ],
  },
  {
    year: "2012",
    people: [
      "Nidhish Raj, NIT Warangal - pursuing PhD at IITK",
      "Anubhav Dwivedi, IIT Kanpur",
      "Emily Boster, Texas A&M",
      "Abhijit Verma, IIT Kanpur",
      "Siddhartha Srivastava, IIT Kanpur",
    ],
  },
  {
    year: "2011",
    people: [
      "Nidhish Raj, NIT Warangal - pursuing PhD at IITK",
      "Shamayita Mukherjee, NIT Durgapur",
    ],
  },
];
