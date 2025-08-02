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
    points: ({
      type: "list"
      name: string
      value: string
    } | {
      type: "checks"
      text: string
    })[];
  }[];
};


const C4ISRService: ServiceType = {
  id: "c4isr",
  hero: {
    src: "/services/c4isr/hero.png",
    pillText: "Network-Centric Warfare",
    title: "C4ISR Systems",
    text: "Command, Control, Communications, Computers, Intelligence, Surveillance & Reconnaissance systems"
  },
  overview: {
    heading: "Empowering Defense with Next-Generation C4ISR Solutions",
    description: "C4ISR forms the technological backbone of modern defense systems, enabling real-time situational awareness and decision superiority. Our systems integrate all types of sensors (radar, EW, IR, UAVs) to form a self-healing, self-forming intelligent network that permits upward, downward and lateral flow of information to bring all tiers of command at the same level of situational awareness.",
    points: [
      {
        icon: <Globe className="size-full" />,
        iconColor: "#A855F7",
        title: "Multi-Domain",
        text: "Land, Air, Sea and Space integration"
      },
      {
        icon: <GitCompare className="size-full" />,
        iconColor: "#0EA5E9",
        title: "Self-Healing",
        text: "Intelligent Network Formation"
      },
      {
        icon: <Users className="size-full" />,
        iconColor: "#EC4899",
        title: "All Command Tiers",
        text: "Unified Situational Awareness"
      },
    ]
  },
  modules: [
    {
      src: "/services/c4isr/modules/0.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Multi-Radar Multi-Target Tracker (Sensor Fusion)",
      text: "Fuses information from multiple radars to generate Recognized Air Picture (RAP) useful at any tier within C4ISR.",
      points: [
        "Handle up to 10,000 system tracks simultaneously",
        "Track maneuvers of up to 7 sustained Gs",
        "Interactive Multiple Models (IMM) with 7 models",
        "Kalman Filter based prediction engine",
        "Dual mode association (NN and JPDA algorithms)",
        "Centralized/distributed tracking and fusion",
      ]
    },
    {
      src: "/services/c4isr/modules/1.png",
      icon: <ShieldCheck className="size-full" />,
      title: "MMI - Common Operating Picture (COP) Display System",
      text: "Man Machine Interface to interact with C4ISR, fully compliant with NATO MIL-STD for interoperability.",
      points: [
        "Mil-Std-2525C compliant C4l display with GIS support",
        "Handle 10,000 tracks, 10,000 symbols, 65000+ vector areas",
        "Multiple vector and raster maps overlay",
        "Picture in picture view for live UAV video",
        "Operational planning capabilities",
        "Automatic interception profile generation",
      ]
    },
    {
      src: "/services/c4isr/modules/2.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Threat Evaluation and Weapon Assignment (TEWA)",
      text: "Intelligent Decision Support System designed to evaluate threats and engage weapons automatically.",
      points: [
        "Automatic battlefield air situation assessment",
        "Hostile track detection and threat level assignment",
        "Vital points and areas threat score calculation",
        "Suitable weapons determination and assignment",
        "Fighter guidance for interception",
        "Multiple operation modes (manual, automatic, trial)",
      ]
    },
    {
      src: "/services/c4isr/modules/3.png",
      icon: <ShieldCheck className="size-full" />,
      title: "War Gaming",
      text: "Models all major battlefield elements providing complete war gaming solution for training and tactics evaluation.",
      points: [
        "Real-time adversarial head-to-head paradigm",
        "Accurate models of aircraft, radars, SAMS, AD guns",
        "Scalable architecture for easy model addition",
        "Recording and scenario saving options",
        "Support for 250+ players per team",
        "250+ referees for game monitoring",
      ]
    },
    {
      src: "/services/c4isr/modules/4.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Sensors Gateway",
      text: "Highly reliable air-to-ground, ground-to-ground, and intercom communications for military controllers.",
      points: [
        "UHF, VHF and HF radio connectivity",
        "PSTN and defense network connectivity",
        "Human interface for communication control",
        "Operator control for channel switching",
        "Flexible user configurable GUl",
        "Safe and efficient communication control",
      ]
    },
    {
      src: "/services/c4isr/modules/5.png",
      icon: <ShieldCheck className="size-full" />,
      title: "Audio Video Recording System",
      text: "State-of-the-art digital data logging for reliable audio and video recording in mission critical systems.",
      points: [
        "Live recording, storage and replay capability",
        "Seamless integration with C4l system",
        "Flexible design for large data input",
        "Simultaneous recording and playback",
        "Recording media state indication",
        "Standalone module for commercial applications",
      ]
    },
  ],
  capabilities: [
    {
      title: "System Performance",
      icon: <svg className="size-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 13.725q-.25 0-.488-.062t-.462-.188l-8.45-4.6q-.275-.15-.388-.375T2.1 8t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 2.275t.488.063t.462.187l8.45 4.6q.275.15.388.375t.112.5t-.112.5t-.388.375l-8.45 4.6q-.225.125-.462.188t-.488.062m0-2L18.825 8L12 4.275L5.175 8zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 13.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087zm0 4l7.85-4.275q.05-.025.475-.125q.425 0 .713.288t.287.712q0 .275-.125.5t-.4.375l-7.85 4.275q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188L3.2 17.2q-.275-.15-.4-.375t-.125-.5q0-.425.288-.712t.712-.288q.125 0 .238.038t.237.087z"/></svg>,
      points: [
        {
          type: "list",
          name: "Simultaneous Tracks",
          value: "10,000+"
        },
        {
          type: "list",
          name: "Maneuver Tracking",
          value: "65,000+"
        },
        {
          type: "list",
          name: "Vector Areas",
          value: "7G Sustained"
        },
        {
          type: "list",
          name: "War Game Players",
          value: "250+ per team"
        },
      ]
    },
    {
      title: "Standards Compliance",
      icon: <Shield className="size-full" />,
      points: [
        {
          type: "checks",
          text: "MIL-STD-2525C Symbology"
        },          
        {
          type: "checks",
          text: "NATO STANAG Protocols"
        },          
        {
          type: "checks",
          text: "MIL-STD-810E Environmental"
        },        
        {
          type: "checks",
          text: "MIL-STD-461 EMI/EMC"
        },          
      ]
    }
  ]
}

export const services: ServiceType[] = [
  C4ISRService
]
