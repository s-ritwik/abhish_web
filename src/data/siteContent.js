export const profile = {
  name: "Dr. Abhishek",
  title: "Professor",
  department: "Department of Aerospace Engineering",
  institute: "Indian Institute of Technology Kanpur",
  email: "abhish(at)iitk.ac.in",
  phone: "+91-512-2597515 (O)",
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
  latestImage: "/assets/images/sabal-20.jpg",
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
    src: "/assets/images/sabal-20.jpg",
    alt: "Sabal 20 unmanned logistics drone",
    caption: "Sabal 20 logistics UAV",
  },
  {
    src: "/assets/images/mav-collage.jpg",
    alt: "MAV and UAV collage",
    caption: "MAV/UAV prototypes",
  },
  {
    src: "/assets/images/tailsitter-hover.jpg",
    alt: "Quadrotor biplane tailsitter in hover mode",
    caption: "Biplane tailsitter hover",
  },
  {
    src: "/assets/images/tailsitter-forward-flight.jpg",
    alt: "Quadrotor biplane tailsitter in forward flight mode",
    caption: "Biplane tailsitter forward flight",
  },
  {
    src: "/assets/images/tiltrotor.jpg",
    alt: "Quadrotor convertiplane prototype",
    caption: "VTOL quadrotor convertiplane",
  },
  {
    src: "/assets/images/variable-pitch-quadrotor.jpg",
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
    status: "Designed and flight tested",
    image: "/assets/images/sabal-20.jpg",
    summary:
      "A tandem rotor UAV platform developed at IIT Kanpur for payload transport and autonomous stabilization using in-house guidance and control software.",
  },
  {
    title: "High Efficiency VTOL Quadrotor Convertiplane",
    area: "Hybrid VTOL aircraft",
    status: "Prototype flight tested in hover",
    image: "/assets/images/tiltrotor.jpg",
    summary:
      "A quadrotor convertiplane with tilting wing-propeller segments intended to improve hover efficiency and support transition to aircraft-like forward flight.",
  },
  {
    title: "Biplane Quadrotor Tailsitter",
    area: "Payload delivery UAV",
    status: "Hover and forward-flight configurations",
    image: "/assets/images/tailsitter-hover.jpg",
    summary:
      "A VTOL airplane concept combining variable-pitch quadrotor agility with compact biplane fixed wings for efficient cruise.",
  },
  {
    title: "Project NAAVIK",
    area: "Autonomous navigation",
    status: "Tested on multiple platforms",
    image: "/assets/images/ruav-iitk.jpg",
    summary:
      "A cross-platform autopilot project for UAV/MAV applications, including loiter, path following, return-to-home, height hold, and VTOL landing modes.",
  },
  {
    title: "Micro Coaxial Autonomous Heli",
    area: "Micro air vehicles",
    status: "Autonomous hover research",
    image: "/assets/images/micav2.jpg",
    summary:
      "A hover-capable micro air vehicle platform instrumented with optic-flow, IMU, infrared, and sonar sensors.",
  },
  {
    title: "Vertical Axis Wind Turbine",
    area: "Wind energy",
    status: "Lab-scale prototype",
    image: "/assets/images/vawt-cad.jpg",
    summary:
      "A variable-pitch VAWT design with aerodynamic braking, intended to improve performance across wind-speed and wind-direction changes.",
  },
];

export const studentGroups = [
  {
    group: "PhD",
    members: [
      {
        name: "Kuldeep Kumar Dhiman",
        role: "PhD, since Dec 2013",
        research: "Flapping wing micro air vehicles; hover-capable micro air vehicles",
        email: "dhims(at)iitk.ac.in",
        hobbies: "Meditation, yoga",
      },
      {
        name: "Rahul Ramanujam",
        role: "PhD, since Jan 2016",
        research: "Helicopter blade morphing, smart materials, compound helicopter",
        email: "rahulram(at)iitk.ac.in",
        hobbies: "Cricket, football, web surfing",
      },
      {
        name: "M. Rama Krishna",
        role: "PhD, since Aug 2019",
        research: "Design of rotary wing and VTOL UAV/MAVs",
        email: "rkrishna(at)iitk.ac.in",
        hobbies: "Aeromodelling and volleyball",
      },
      {
        name: "Ram D Gadekar",
        role: "PhD, since Aug 2015",
        research: "Control, navigation and guidance, micro air vehicle design",
        email: "ramd(at)iitk.ac.in",
        hobbies: "Programming, computer gaming, cricket, working out",
      },
      {
        name: "Yonas Gebre",
        role: "PhD, since Aug 2013",
        research: "Wind turbines",
        thesis:
          "Experimental and analytical investigation of vertical axis wind turbine",
        email: "yonasg(at)iitk.ac.in",
      },
    ],
  },
  {
    group: "M.Tech, UG and Research Assistants",
    members: [
      {
        name: "Ankur Duhoon",
        role: "Research Engineer",
        research:
          "Design and development of UAVs, transmission design, composite development, material manufacturing, structural dynamic testing and CAD modelling",
        email: "aduhoonpal(at)gmail.com",
        hobbies:
          "Playing badminton, watching movies and nature documentaries, reading science and technology blogs",
      },
      {
        name: "Naveen Gupta",
        role: "BT/MT",
        research: "Rotary wing MAV design, flapping wing MAV",
        email: "nvngupta(at)iitk.ac.in",
        hobbies: "Puzzle solving, strategy games, music, football",
      },
      {
        name: "Prashant Singh",
        role: "BT/MT",
        research: "Design and control of VTOL UAVs",
        email: "singhpra(at)iitk.ac.in",
        hobbies: "Aeromodelling, painting and reading",
      },
      {
        name: "Praveen Kumar",
        role: "Research Engineer",
        research: "",
        email: "ranjanpk(at)iitk.ac.in",
      },
      {
        name: "Shubham",
        role: "BT/MT",
        research: "",
        email: "kshubham(at)iitk.ac.in",
      },
    ],
  },
];

export const phdAlumni = [
  {
    name: "Raghavendra Prasad",
    program: "PhD 2018",
    current: "Bell - Textron India, Bangalore",
    thesis:
      "Inverse flight dynamic analysis for prediction of helicopter rotor blade loads in unsteady maneuvering flight",
  },
  {
    name: "Sagar Setu",
    program: "PhD 2019",
    current: "Milky Way AI, Singapore",
    thesis:
      "Modeling, hardware-in-the-loop simulation and flight controller development for rotary wing UAVs - from first flight to autonomous autorotation",
  },
  {
    name: "Nidhish Raj",
    program: "PhD 2019",
    current: "Post Doctoral Researcher, IIT Kanpur",
    thesis: "Control of agile rotorcrafts: a geometric approach",
  },
];

export const degreeAlumni = [
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
