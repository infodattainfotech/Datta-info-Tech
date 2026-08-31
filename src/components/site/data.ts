import {
  ShieldCheck,
  Fingerprint,
  Landmark,
  Briefcase,
  Award,
  Globe2,
  Users,
  Lock,
  Flag,
  Mic,
  Search,
  Lightbulb,
} from "lucide-react";

export const CONTACT = {
  phone: "+91 76809 20411",
  phoneHref: "tel:+917680920411",
  whatsapp: "https://wa.me/917680920411",
  email: "info.dattainfotech@gmail.com",
  emailHref: "mailto:info.dattainfotech@gmail.com",
  address: "Nalgonda, Telangana, India",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "CEO", href: "#ceo" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Cyber Security Consulting",
    body: "Advanced cyber defense strategies, security assessments, cyber risk management, security architecture, and advisory services.",
    points: ["Security assessments", "Cyber risk management", "Security architecture"],
  },
  {
    icon: Fingerprint,
    title: "Digital Forensics & Investigation",
    body: "Digital evidence analysis, cybercrime investigation support, forensic consulting, and incident response services.",
    points: ["Digital evidence analysis", "Cybercrime investigation support", "Incident response"],
  },
  {
    icon: Landmark,
    title: "Homeland Security Solutions",
    body: "Security consulting, public safety enhancement, critical infrastructure protection, risk intelligence, and strategic security planning.",
    points: ["Critical infrastructure protection", "Risk intelligence", "Strategic security planning"],
  },
  {
    icon: Briefcase,
    title: "Government & Enterprise Advisory",
    body: "Policy guidance, governance consulting, strategic planning, institutional security advisory, and resilience programs.",
    points: ["Policy guidance", "Governance consulting", "Resilience programs"],
  },
];

export const ACHIEVEMENTS = [
  { icon: Award, title: "Homeland Security Technology Award Recipient", body: "Recognised for contributions to security technology and public safety innovation." },
  { icon: Globe2, title: "International Security Recognition", body: "Globally acknowledged expertise across cyber security and national security domains." },
  { icon: ShieldCheck, title: "Public Safety Excellence Awards", body: "Honoured for initiatives that strengthen community safety and awareness." },
  { icon: Lock, title: "Cybercrime Prevention Contributions", body: "Advisory and awareness programs supporting cybercrime prevention efforts." },
  { icon: Flag, title: "National Security Support Initiatives", body: "Strategic support for national security programs and institutional resilience." },
  { icon: Mic, title: "International Conference Speaker", body: "Invited speaker at global forums on security, forensics, and digital resilience." },
  { icon: Search, title: "Digital Forensics Excellence Recognition", body: "Recognition for forensic investigation methodology and case support." },
  { icon: Lightbulb, title: "Leadership in Security Innovation", body: "Leading innovation-driven approaches to modern security challenges." },
];

export const COUNTERS = [
  { value: 15, suffix: "+", label: "Years of Security Expertise" },
  { value: 250, suffix: "+", label: "Consulting Engagements" },
  { value: 40, suffix: "+", label: "Awards & Recognitions" },
  { value: 100, suffix: "+", label: "Speaking Engagements" },
];

export const WHY_US = [
  { icon: ShieldCheck, title: "Proven Security Expertise", body: "Extensive experience in security consulting and strategic advisory services." },
  { icon: Globe2, title: "International Recognition", body: "Globally acknowledged contributions to security and public safety." },
  { icon: Landmark, title: "Government Advisory Experience", body: "Professional expertise supporting government and institutional initiatives." },
  { icon: Lock, title: "Trusted Security Solutions", body: "Reliable and effective solutions tailored to organizational needs." },
  { icon: Users, title: "Professional Consulting Team", body: "Experienced professionals dedicated to excellence." },
  { icon: Flag, title: "Commitment to Public Safety", body: "Focused on strengthening security and protecting communities." },
];

export const CEO_HIGHLIGHTS = [
  "International Cyber Security Expert",
  "Digital Forensics Specialist",
  "Homeland Security Professional",
  "National Security Consultant",
  "Public Safety Advocate",
  "Award-Winning Security Professional",
  "International Speaker and Advisor",
  "Strategic Security Expert",
];

export const CEO_TIMELINE = [
  { period: "Leadership", title: "Founder & CEO, Datta Infotech Consultants", body: "Leads a specialised consulting practice serving government, enterprise, and institutional clients." },
  { period: "Recognition", title: "Homeland Security Technology Award", body: "Recognised for advancing security technology and public safety outcomes." },
  { period: "Advisory", title: "National Security & Public Safety Support", body: "Advises institutions on security policy, resilience, and cybercrime prevention." },
  { period: "Global Platform", title: "International Conferences & Forums", body: "Speaks and advises internationally on cyber security and digital forensics." },
];

export const CERTIFICATIONS = [
  "Cyber Security Consulting",
  "Digital Forensics & Investigation",
  "Homeland Security Practice",
  "Information Security Governance",
  "Incident Response & Advisory",
  "Public Safety Programs",
];

export const MEDIA_ITEMS = [
  { tag: "Newspaper Publications", title: "Regional dailies feature security awareness initiatives", body: "Coverage of cyber safety programs and community outreach for citizens, students, and institutions." },
  { tag: "Awards & Honors", title: "Homeland Security Technology Award felicitation", body: "Recognition ceremony highlighting contributions to security technology and public safety." },
  { tag: "International Conferences", title: "Keynote sessions on cyber resilience", body: "Participation in international forums addressing cybercrime, forensics, and national security." },
  { tag: "Security Leadership", title: "Leadership recognition in security innovation", body: "Acknowledgement of advisory leadership across security and governance programs." },
  { tag: "Public Safety", title: "Community cyber safety campaigns", body: "Workshops and advisory sessions strengthening digital safety awareness." },
  { tag: "Event Participation", title: "Panels with institutions and enterprises", body: "Engagement with agencies and organizations on security strategy and preparedness." },
];

export const TESTIMONIALS = [
  { quote: "A highly professional advisory engagement — clear assessments, practical recommendations, and dependable follow-through.", name: "Institutional Client", role: "Public Sector Programme" },
  { quote: "Deep security expertise combined with an ability to translate technical risk into decisions leadership can act on.", name: "Enterprise Client", role: "Information Security Team" },
  { quote: "Trusted advisory support during a sensitive investigation, handled with discretion and methodological rigour.", name: "Investigation Partner", role: "Digital Forensics Support" },
  { quote: "Their public safety contributions and awareness programs have made a measurable difference in our community.", name: "Community Organisation", role: "Public Safety Initiative" },
  { quote: "Industry excellence and consistent client satisfaction — a genuinely reliable security consulting partner.", name: "Corporate Client", role: "Risk & Compliance" },
  { quote: "Strategic, calm, and thorough. Exactly the standard expected for security and governance advisory work.", name: "Advisory Client", role: "Governance Programme" },
];
