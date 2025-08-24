import { GitCompare, Globe, Shield, ShieldCheck, Users } from "lucide-react";

import { ReactNode } from "react";

export type ServiceType = {
  id: string;
  hero: {
    pillText: string;
    title: string;
    text: string;
    src: string;
  };
  overview: {
    heading: string;
    description: string;
    points: {
      icon: ReactNode;
      iconColor: string;
      title: string;
      text: string;
    }[];
  };
  modules: {
    src: string;
    icon: ReactNode;
    title: string;
    text: string;
    points: string[];
  }[];
  capabilities: {
    icon: ReactNode;
    title: string;
    points: (
      | {
          type: "list";
          name: string;
          value: string;
        }
      | {
          type: "checks";
          text: string;
        }
    )[];
  }[];
  CTA: {
    title: string;
    description: string;
  };
};

const C4ISRService: ServiceType = {
  id: "c4isr",
  hero: {
    src: "/services/c4isr/hero.png",
    pillText: "Network-Centric Warfare",
    title: "C4ISR Systems",
    text: "Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance systems",
  },
  overview: {
    heading: "Empowering Defense with Next-Generation C4ISR Solutions",
    description:
      "C4ISR forms the technological backbone of modern defense systems, enabling real-time situational awareness and decision superiority. Our systems integrate all types of sensors (radar, EW, IR, UAVs) to form a self-healing, self-forming intelligent network that permits upward, downward and lateral flow of information to bring all tiers of command at the same level of situational awareness.",
    points: [
      {
        icon: <Globe className="size-full" />,
        iconColor: "#4D7C0F",
        title: "Multi-Domain",
        text: "Land, Air, Sea and Space integration",
      },
      {
        icon: <GitCompare className="size-full" />,
        iconColor: "#10B981",
        title: "Self-Healing",
        text: "Intelligent Network Formation",
      },
      {
        icon: <Users className="size-full" />,
        iconColor: "#047857",
        title: "All Command Tiers",
        text: "Unified Situational Awareness",
      },
    ],
  },
  modules: [
    {
      src: "/services/c4isr/modules/0.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Multi-Sensor Fusion",
      text: "Fuses inputs from heterogeneous radars and passive sensors (e.g., ADS-B) to generate a Recognized Air Picture (RAP) at any C4ISR tier. Interfaces with Flight Information Centers for automated identification and high-accuracy tracking.",
      points: [
        "Can fuse data from multiple radar and sensor types",
        "Tracks up to 10,000 objects simultaneously",
        "High update rate for real-time awareness",
        "Multiple inputs: radar, IFF, ADS-B, manual reports",
        "Low-latency, high-accuracy plot-fusion architecture",
        "Tracks maneuvering targets up to 8G",
      ],
    },
    {
      src: "/services/c4isr/modules/1.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Man-Machine Interface - Recognized Air Picture",
      text: "NATO MIL-STD-compliant C4I display producing Air, Land, and Surface pictures with full GIS support and command/control capabilities.",
      points: [
        "MIL-STD-2525C compliant with GIS",
        "Displays targets from multiple radar sources",
        "Handles 10,000 tracks, 15,000 symbols, 65,000 vector areas",
        "Supports vector and raster map overlays",
        "Operational planning tools",
        "Command and control functions",
      ],
    },
    {
      src: "/services/c4isr/modules/2.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Decision Support System (TEWA)",
      text: "Evaluates threats, prioritizes assets, and assigns optimal weapons using a rule-based engine.",
      points: [
        "Automated situational awareness",
        "Threat level evaluation and assignment",
        "Asset prioritization based on risk",
        "Weapon selection ranked by kill probability",
        "Fighter guidance for interception",
        "Multiple operation modes (manual, automatic, trial)",
      ],
    },
    {
      src: "/services/c4isr/modules/3.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Sensors Integration",
      text: "Integrates new sensors into C4ISR with multi-interface and multi-format compatibility.",
      points: [
        "Supports radar, IFF, EW integration",
        "Interfaces: landline, microwave, satellite, SDR",
        "Handles standard & proprietary formats",
        "Scalable to future sensors",
      ],
    },
    {
      src: "/services/c4isr/modules/4.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Auxiliary Systems",
      text: "Supporting modules enabling operational C4ISR deployments.",
      points: [
        "Voice Switching System for command center-field communication",
        "Audio Video Recording System for tracks, audio, and video logs",
        "Radar Registration Module for calibration and reference alignment",
        "Seamless integration with other C4I systems",
        "War Gaming",
        "Radar Upgrade",
      ],
    },
    // {
    //   src: "/services/c4isr/modules/5.png",
    //   icon: <ShieldCheck className="size-full" />,
    //   title: "Audio Video Recording System",
    //   text: "State-of-the-art digital data logging for reliable audio and video recording in mission critical systems.",
    //   points: [
    //     "Live recording, storage and replay capability",
    //     "Seamless integration with C4l system",
    //     "Flexible design for large data input",
    //     "Simultaneous recording and playback",
    //     "Recording media state indication",
    //     "Standalone module for commercial applications",
    //   ],
    // },
  ],
  capabilities: [
    {
      title: "System Performance",
      icon: (
        <svg
          className="size-full"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M12 13.725q-.25 0-.488-.062t-.462-.188l-8.45-4.6q-.275-.15-.388-.375T2.1 8t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 2.275t.488.063t.462.187l8.45 4.6q.275.15.388.375t.112.5t-.112.5t-.388.375l-8.45 4.6q-.225.125-.462.188t-.488.062m0-2L18.825 8L12 4.275L5.175 8zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 13.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 17.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087z"
          />
        </svg>
      ),
      points: [
        {
          type: "list",
          name: "Simultaneous Tracks",
          value: "10,000+",
        },
        {
          type: "list",
          name: "Maneuver Tracking",
          value: "7G Sustained",
        },
        {
          type: "list",
          name: "Vector Areas",
          value: "65000+",
        },
        {
          type: "list",
          name: "Symbols",
          value: "15000+",
        },
      ],
    },
    {
      title: "Standards Compliance",
      icon: <Shield className="size-full" />,
      points: [
        {
          type: "checks",
          text: "MIL-STD-2525C Symbology",
        },
        {
          type: "checks",
          text: "NATO STANAG Protocols",
        },
        {
          type: "checks",
          text: "MIL-STD-810E Environmental",
        },
        {
          type: "checks",
          text: "MIL-STD-461 EMI/EMC",
        },
      ],
    },
  ],
  CTA: {
    title: "Ready to Deploy Advanced C41SR?",
    description:
      "Contact our C41SR experts to discuss how our proven systems can enhance your command and control capabilities.",
  },
};

const SDRService: ServiceType = {
  id: "sdr",
  hero: {
    src: "/services/sdr/hero.png",
    pillText: "TACTICAL COMMUNICATIONS",
    title: "Software Defined Radio",
    // text: "Versatile Communication Platform with Dynamic Configuration",
    text: "",
  },
  overview: {
    heading: "Versatile Communication Platform with Dynamic Configuration",
    description:
      "Software Defined Radio (SDR) represents a paradigm shift in radio communications by shifting signal processing from rigid hardware to flexible software. Our SDR platforms enable mission-critical, real-time communication over a broad spectrum, supporting voice, video, and data through reconfigurable architectures designed to meet modern military and aerospace demands.",
    points: [
      {
        icon: <Globe className="size-full" />,
        iconColor: "#4D7C0F",
        title: "200 MHz Bandwidth",
        text: "Wideband signal handling capability",
      },
      {
        icon: <GitCompare className="size-full" />,
        iconColor: "#10B981",
        title: "Multi-Band",
        text: "VHF, UHF, L, and S band support",
      },
      {
        icon: <Shield className="size-full" />,
        iconColor: "#047857",
        title: "Quantum-Safe",
        text: "Advanced encryption protocols",
      },
    ],
  },
  modules: [
    {
      src: "/services/sdr/modules/0.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Multiband Operation",
      text: "Operates across VHF, IJHF, L, and S bands, enabling a single platform to handle diverse mission requirements.",
      points: [
        "VHF: 30-300 MHz frequency range",
        "UHF: 300 MHz - 3 GHz frequency range",
        "L-band: 1-2 GHz specialized operations",
        "S-band: 2-4 GHz high-performance communications",
        "Single platform multi-band",
        "Reduced equipment complexity",
      ],
    },
    {
      src: "/services/sdr/modules/1.jpeg",
      icon: <ShieldCheck className="size-full" />,
      title: "Fast Frequency Hopping",
      text: "High-speed frequency hopping for robust anti-jam and low-probability-of-intercept (LPI) communication.",
      points: [
        "Millisecond frequency switching",
        "Anti-jamming protection",
        "Low probability of intercept (LPI)",
        "Secure battlefield operations",
        "Adaptive hopping patterns",
        "Electronic protection measures",
      ],
    },
    {
      src: "/services/sdr/modules/2.png",
      icon: <ShieldCheck className="size-full" />,
      title: "GPS-Based Synchronization",
      text: "Precise time and frequency alignment across distributed nodes using GPS-disciplined oscillators.",
      points: [
        "GPS-disciplined oscillators",
        "Precise time synchronization",
        "Frequency alignment across nodes",
        "Coherent networked communications",
        "Time-sensitive operations support",
        "Distributed network coordination",
      ],
    },
    {
      src: "/services/sdr/modules/3.jpeg",
      icon: <ShieldCheck className="size-full" />,
      title: "Custom Waveform Support",
      text: "Field-programmable to deploy and run proprietary or mission-specific waveforms.",
      points: [
        "Field-programmable capability",
        "Proprietary waveform support",
        "Mission-specific protocols",
        "National algorithm integration",
        "Classified protocol support",
        "No hardware changes required",
      ],
    },
    {
      src: "/services/sdr/modules/4.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Multi-Domain Communication",
      text: "Enables ground-to-ground (G2G), ground-to-air (G2A), and air-to-air (A2A) connectivity.",
      points: [
        "Ground-to-Ground (G2G) links",
        "Ground-to-Air (G2A) connectivity",
        "Air-to-Air (A2A) communications",
        "Joint operations support",
        "Multi-domain integration",
        "End-to-end connectivity",
      ],
    },
    {
      src: "/services/sdr/modules/5.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Advanced Security",
      text: "Advanced encryption algorithms and quantum-safe key exchange for maximum security.",
      points: [
        "AES-512 encryption support",
        "National algorithm compatibility",
        "Quantum-safe key exchange",
        "Data confidentiality assurance",
        "Authentication protocols",
        "Secure key management",
      ],
    },
  ],
  capabilities: [
    {
      title: "RF Performance",
      icon: <Shield className="size-full" />,
      points: [
        { type: "list", name: "Instantaneous Bandwidth", value: "200 MHz" },
        { type: "list", name: "Frequency Range", value: "VHF to s-band" },

        { type: "list", name: "Frequency Hopping Rate", value: "High-speed" },
        { type: "list", name: "Signal Processing", value: "Real-time" },
      ],
    },
    {
      title: "Communication Modes",
      icon: <Shield className="size-full" />,
      points: [
        { type: "list", name: "Video Communication", value: "Full-duplex" },

        { type: "list", name: "Video Streaming", value: "Real-time HD" },
        { type: "list", name: "Video Communication", value: "High-throughput" },

        { type: "list", name: "High-throughput", value: "Full-duplex" },
      ],
    },
    {
      title: "Standards Compliance",
      icon: <Shield className="size-full" />,
      points: [
        { type: "checks", text: "Environmental: MIL-STD-810" },
        { type: "checks", text: "EMI/EMC: MIL-STD-461" },
        { type: "checks", text: "Ruggedness: Military grade" },
        { type: "checks", text: "Reliability: Mission critical" },
      ],
    },
  ],
  CTA: {
    title: "Ready to Deploy Advanced SDR Solutions?",
    description:
      "Contact our SDR specialists to discuss how our battle-tested software defined radio systems can enhance your tactical communications.",
  },
};

const EWService: ServiceType = {
  id: "ew",
  hero: {
    src: "/services/ew/hero.png",
    pillText: "ELECTROMAGNETIC SPECTRUM OPERATIONS",
    title: "Electronic Warfare",
    // text: "Detect, Disrupt, Deceive, and Deny Enemy Electronic Systems",
    text: "",
  },
  overview: {
    heading: "Detect, Disrupt, Deceive, and Deny Enemy Electronic Systems",
    description:
      "Electronic Warfare (EW) involves the use of electromagnetic spectrum to detect, disrupt, deceive, or deny enemy electronic systems - a vital Network-Centric Warfare technology mastered by the DefendiX team. Our designed systems have been deployed on multiple aerial and ground platforms, providing critical situational awareness to our esteemed customers.",
    points: [
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#4D7C0F",
        title: "Detect",
        text: "Signal intelligence gathering",
      },
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#10B981",
        title: "Disrupt",
        text: "Electronic countermeasures",
      },
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#047857",
        title: "Deceive",
        text: "False signal generation",
      },
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#4D7C0F",
        title: "Deny",
        text: "Access prevention",
      },
    ],
  },
  modules: [
    {
      src: "/services/ew/modules/0.png",
      icon: <ShieldCheck className="size-full" />,
      title: "ELINT (Electronic Intelligence)",
      text: "Advanced electronic intelligence gathering and analysis systems for comprehensive threat assessment.",
      points: [
        "Enemy radar signal detection and analysis",
        // "Communication signal interception",
        "Threat library development and maintenance",
        "Real-time signal classification",
        "Multi-platform integration capability",
        "Automated threat identification",
      ],
    },
    {
      src: "/services/ew/modules/1.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Signal Intelligence Gathering",
      text: "Sophisticated signal collection and processing systems for battlefield intelligence.",
      points: [
        "Wideband RF signal capture",
        "Real-time signal processing",
        "Multi-channel simultaneous monitoring",
        "Advanced signal analysis algorithms",
        "Threat pattern recognition",
        "Intelligence database integration",
      ],
    },
    {
      src: "/services/ew/modules/2.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Threat Detection & Analysis",
      text: "Real-time threat detection with advanced analysis capabilities for immediate response.",
      points: [
        "Automated threat detection",
        "Real-time threat assessment",
        "Priority-based threat ranking",
        "Threat behavior analysis",
        "Predictive threat modeling",
        // "Multi-sensor data fusion",
      ],
    },
    {
      src: "/services/ew/modules/3.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Electronic Protection",
      text: "Comprehensive electronic protection measures against enemy EW systems.",
      points: [
        "Jamming resistance techniques",
        "Frequency agility implementation",
        "Spread spectrum protection",
        "Anti-jamming algorithms",
        "Electronic counter-countermeasures",
        "Adaptive protection protocols",
      ],
    },
  ],
  capabilities: [
    {
      title: "Aerial Platforms",
      icon: <Shield className="size-full" />,
      points: [
        { type: "checks", text: "Fighter aircraft integration" },
        { type: "checks", text: "UAV/drone platforms" },
        { type: "checks", text: "Helicopter installations" },
        { type: "checks", text: "Transport aircraft systems" },
        { type: "checks", text: "Specialized EW aircraft" },
      ],
    },
    {
      title: "Ground Platforms",
      icon: <Shield className="size-full" />,
      points: [
        { type: "checks", text: "Mobile EW vehicles" },
        { type: "checks", text: "Fixed installation systems" },
        { type: "checks", text: "Portable field units" },
        { type: "checks", text: "Command center integration" },
        { type: "checks", text: "Border surveillance systems" },
      ],
    },
    {
      title: "Naval Platforms",
      icon: <Shield className="size-full" />,
      points: [
        { type: "checks", text: "Warship installations" },
        { type: "checks", text: "Patrol boat systems" },
        { type: "checks", text: "Coastal surveillance" },
        { type: "checks", text: "Maritime patrol aircraft" },
        { type: "checks", text: "Port security systems" },
      ],
    },
  ],
  CTA: {
    title: "Ready to Deploy Advanced EW Systems?",
    description:
      "Contact our Electronic Warfare specialists to discuss how our proven EW systems can enhance your electromagnetic spectrum operations.",
  },
};

const PARTService: ServiceType = {
  id: "part",
  hero: {
    src: "/services/part/hero.png",
    pillText: "ADVANCED RADAR SYSTEMS",
    title: "Phased Array Radar Technologies",
    // text: "Turning complex radar challenges into clear focused solutions",
    text: "",
  },
  overview: {
    heading: "Turning complex radar challenges into clear focused solutions",
    description:
      "Phased Array Radar technologies have revolutionized modern radar systems by enabling multiple functions through electronic beam steering. These functions include simultaneous surveillance, guidance, and tracking by making independent beams for each function. DefendiX team has over a decade of experience in Phased Array Radar technologies, from system design to critical component development.",
    points: [
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#4D7C0F",
        title: "Electronic Steering",
        text: "No mechanical movement required",
      },
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#10B981",
        title: "Multi-Function",
        text: "Simultaneous multiple operations",
      },
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#047857",
        title: "Scalable Design",
        text: "Modular architecture",
      },
    ],
  },
  modules: [
    {
      src: "/services/part/modules/0.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Transmit/Receive (T/R) Modules",
      text: "Foundational building blocks of modern phased array radar systems, delivering high performance across multiple frequency bands.",
      points: [
        "S-band, C-band, and Ku-band frequency support",
        "Configurable power profiles for different applications",
        "Integrated power amplifiers and low-noise amplifiers",
        "Phase shifters and variable attenuators",
        "Thermal management solutions",
        "Fully digital T/R modules (DTRM) for digital beamforming",
      ],
    },
    {
      src: "/services/part/modules/1.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Phased Array Antennas",
      text: "Active electronically scanned array (AESA) antennas optimized for multi-function radar missions with rapid electronic beam steering.",
      points: [
        "Densely packed T/R module integration",
        "Planar and conformal geometries",
        "Dynamic beam shaping capability",
        "Multiple simultaneous beams",
        "Low side-lobe levels",
        "Anechoic chamber characterization",
      ],
    },
    {
      src: "/services/part/modules/2.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Beamforming Controller",
      text: "Intelligence behind the phased array, coordinating phase and amplitude settings for real-time electronically steered beams.",
      points: [
        "High-speed digital control loops",
        "Adaptive algorithms implementation",
        "Calibration techniques",
        "Stable beam patterns",
        "Environmental adaptation",
        "Real-time beam optimization",
      ],
    },
    {
      src: "/services/part/modules/3.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Control & Signal Processing",
      text: "High-speed FPGAs and host processors in ruggedized backplane for comprehensive radar signal processing.",
      points: [
        "FPGA-based dedicated processing",
        "Waveform generation capability",
        "Pre-processing and signal processing",
        "Information extraction algorithms",
        "Target tracking software",
        "Modular and scalable architecture",
      ],
    },
    {
      src: "/services/part/modules/4.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Man-Machine Interface (MMI)",
      text: "Intuitive and mission-configurable interfaces providing operators with real-time situational awareness and full radar control.",
      points: [
        "Real-time target information display",
        "Multiple video modes (raw, MTI, detected)",
        "Synthetic target reports (plots and tracks)",
        "Overlay maps and symbols",
        "Vector areas display",
        "Touchscreen and remote control support",
      ],
    },
    {
      src: "/services/part/modules/5.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Passive RF Modules",
      text: "Precision-engineered combiners and splitters for signal distribution across high-density T/R modules.",
      points: [
        "Minimal insertion loss design",
        "Phase mismatch minimization",
        "Broad frequency band operation",
        "Robust and compact construction",
        "Custom configurations available",
        "Optimized load matching",
      ],
    },
  ],
  capabilities: [
    {
      title: "Signal Processing",
      icon: <Shield className="size-full" />,
      points: [
        { type: "checks", text: "Pulse Compression" },
        { type: "checks", text: "Doppler Filtering" },
        { type: "checks", text: "Monopulse Processing" },
        { type: "checks", text: "CFAR Processing" },
        { type: "checks", text: "Digital Beamforming" },
        { type: "checks", text: "Adaptive Filtering" },
      ],
    },
    {
      title: "Target Processing",
      icon: <Shield className="size-full" />,
      points: [
        { type: "checks", text: "Kalman Filtering" },
        { type: "checks", text: "Target Classification" },
        { type: "checks", text: "Track Initiation" },
        { type: "checks", text: "Track Maintenance" },
        { type: "checks", text: "Multi-Target Tracking" },
        { type: "checks", text: "Clutter Suppression" },
      ],
    },
    {
      title: "System Control",
      icon: <Shield className="size-full" />,
      points: [
        { type: "checks", text: "Beam Scheduling" },
        { type: "checks", text: "Resource Management" },
        { type: "checks", text: "Mode Control" },
        { type: "checks", text: "Calibration Algorithms" },
        { type: "checks", text: "Fault Detection" },
        { type: "checks", text: "Performance Optimization" },
      ],
    },
  ],
  CTA: {
    title: "Ready to Deploy Advanced Phased Array Radar?",
    description:
      "Contact our radar experts to discuss how our proven phased array radar systems can enhance your mission capabilities.",
  },
};

const RCPPService: ServiceType = {
  id: "rcpp",
  hero: {
    src: "/services/rcpp/hero.png",
    pillText: "HIGH-PERFORMANCE COMPUTING",
    title: "Ruggedized Control and Processing Platforms",
    // text: "OpenVPX-Based Modular Systems for Mission-Critical Applications",
    text: "",
  },
  overview: {
    heading: "OpenVPX-Based Modular Systems for Mission-Critical Applications",
    description:
      "Our OpenVPX-based ruggedized processing platform is engineered for high-performance, real-time signal processing in harsh defense and aerospace environments. Built around a modular and scalable architecture, the system leverages multiple high-end FPGAs interconnected via Serial RapidIO for low-latency, high-bandwidth communication essential for beamforming, sensor fusion, and high-speed data acquisition.",
    points: [
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#4D7C0F",
        title: "OpenVPX Standard",
        text: "Modular and scalable architecture",
      },
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#10B981",
        title: "MIL-STD Compliant",
        text: "Defense-grade reliability",
      },
      {
        icon: <ShieldCheck className="size-full" />,
        iconColor: "#047857",
        title: "Real-Time Processing",
        text: "Low-latency signal processing",
      },
    ],
  },
  modules: [
    {
      src: "/services/rcpp/modules/0.png",
      icon: <ShieldCheck className="size-full" />,
      title: "OpenVPX-Based Backplane",
      text: "High-speed, ruggedized OpenVPX backplane designed for defense-grade reliability and modular scalability.",
      points: [
        "Standardized framework for module interconnection",
        "Dedicated planes for data, control, expansion, and power",
        "Serial RapidIO for high-speed data communication",
        "Ethernet-based control plane",
        "PCIe expansion capabilities",
        "MIL-STD environmental compliance",
      ],
    },
    {
      src: "/services/rcpp/modules/1.png",
      icon: <ShieldCheck className="size-full" />,
      title: "FPGA-Based Processing Modules",
      text: "High-performance FPGA carrier boards with multiple daughter modules for versatile signal processing applications.",
      points: [
        "High-end FPGAs for intensive processing",
        "A/D and converter daughter cards",
        "Digital and analog I/O modules",
        "RapidIO and PCIe interconnects",
        "Reconfigurable logic for customization",
        "Application-specific optimization",
      ],
    },
    {
      src: "/services/rcpp/modules/2.png",
      icon: <ShieldCheck className="size-full" />,
      title: "OpenVPX-based RF Front End",
      text: "Flexible RF front-end module for receiving and digitizing multiple low-power RF signals up to C-band frequency.",
      points: [
        "Direct RF reception up to C-band",
        "High-linearity wideband receivers",
        "Low-noise amplifiers (LNAs)",
        "High-speed ADCs with DDCs",
        "Multi-channel parallel processing",
        "Mission-specific customization",
      ],
    },
    {
      src: "/services/rcpp/modules/3.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Timing Synchronization Module",
      text: "GPS-disciplined timing synchronization module for coherent operation across the entire system.",
      points: [
        "GPS-disciplined oscillators",
        "Precise timing distribution",
        "Clock signal generation",
        "Deterministic latency control",
        "Phase coherence maintenance",
        "Multi-sensor synchronization",
      ],
    },
    {
      src: "/services/rcpp/modules/4.png",
      icon: <ShieldCheck className="size-full" />,
      title: "System Software",
      text: "Robust system software stack providing real-time resource management and hardware abstraction.",
      points: [
        "Linux OS foundation",
        "Board support packages (BSPs)",
        "Hardware drivers and middleware",
        "System orchestration capabilities",
        "Remote control and diagnostics",
        "Cybersecurity compliance",
      ],
    },
    {
      src: "/services/rcpp/modules/5.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Application Development Kit",
      text: "Complete development environment with libraries, APIs, and tools for rapid application development.",
      points: [
        "C/C++, LabVIEW, and Python APIs",
        "Real-time data visualization tools",
        "Simulation environment support",
        "Example projects and templates",
        "Diagnostic and integration tools",
        "Reduced development time",
      ],
    },
  ],
  capabilities: [
    {
      title: "Environmental Compliance",
      icon: <Shield className="size-full" />,
      points: [
        { type: "list", name: "Temperature Range", value: "MIL-STD-810" },
        { type: "list", name: "Vibration/Shock", value: "MIL-STD-810" },
        { type: "list", name: "EMI/EMC", value: "MIL-STD-461" },
        { type: "list", name: "Humidity", value: "MIL-STD-810" },
      ],
    },
    {
      title: "Performance Specifications",
      icon: <Shield className="size-full" />,
      points: [
        { type: "list", name: "Data Throughput", value: "High-speed" },
        { type: "list", name: "Processing Power", value: "Multi-FPGA" },
        { type: "list", name: "Latency", value: "Low-latency" },
        { type: "list", name: "Scalability", value: "Modular" },
      ],
    },
    {
      title: "System Architecture",
      icon: <Shield className="size-full" />,
      points: [
        { type: "list", name: "Backplane", value: "OpenVPX" },
        { type: "list", name: "Cooling", value: "Conduction" },
        { type: "list", name: "Connectors", value: "MIL-grade" },
        { type: "list", name: "Form Factor", value: "Ruggedized" },
      ],
    },
  ],
  CTA: {
    title: "Ready to Deploy Ruggedized Processing Platforms?",
    description:
      "Contact our platform specialists to discuss how our OpenVPX-based ruggedized systems can accelerate your mission-critical applications with high-performance processing capabilities.",
  },
};

// const updateModuleImages = (service: ServiceType) => {
//   service.modules.forEach((module, index) => {
//     module.src = `/services/c4isr/modules/${index}.png`;
//   });
// };

// [SDRService, EWService, PARTService, RCPPService].forEach(updateModuleImages);

export const services: ServiceType[] = [
  C4ISRService,
  SDRService,
  EWService,
  PARTService,
  RCPPService,
];
