import {
  Activity,
  BarChart3,
  Camera,
  CheckCircle2,
  CloudSun,
  Leaf,
  MapPinned,
  Microscope,
  ShieldCheck,
  Sprout,
  Users,
  Wheat,
} from 'lucide-react'

export const company = {
  name: 'CropIntel',
  tagline: 'Agricultural intelligence for faster field decisions.',
  overview:
    'CropIntel is an agricultural intelligence company building practical tools for farmers, crop advisors, and agricultural operators to understand crop health, regional disease pressure, and field risk sooner.',
  mission:
    'Help growers respond to crop health issues earlier with practical, accessible intelligence built around real field workflows.',
  vision:
    'A resilient agricultural network where disease pressure is detected sooner, shared faster, and managed with better local context.',
  contactEmail: 'hello@cropintel.ai',
  location: 'Bentonville, Arkansas',
}

export const navLinks = [
  { href: '/product', label: 'Product' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
]

export const crops = [
  {
    name: 'Corn',
    detail: 'Rust, blight, gray leaf spot, and healthy leaf classification.',
    accent: 'bg-[#d6a441]',
  },
  {
    name: 'Soybean',
    detail: 'Powdery mildew, bacterial blight, sudden death syndrome, mosaic signals, and healthy leaves.',
    accent: 'bg-[#6f8f3f]',
  },
  {
    name: 'Wheat',
    detail: 'Leaf rust, stem rust, powdery mildew, stripe rust, and healthy crop checks.',
    accent: 'bg-[#c48a3a]',
  },
  {
    name: 'Rice',
    detail: 'Rice blast, bacterial leaf blight, brown spot, and healthy leaf classification.',
    accent: 'bg-[#78946d]',
  },
]

export const valuePoints = [
  {
    icon: Camera,
    title: 'Photo-based diagnosis',
    text: 'Upload a crop leaf image and route it to crop-specific AI models for disease prediction.',
  },
  {
    icon: BarChart3,
    title: 'Confidence scoring',
    text: 'Review ranked disease labels with confidence levels so results are easier to interpret.',
  },
  {
    icon: ShieldCheck,
    title: 'Treatment guidance',
    text: 'Surface disease descriptions, severity context, treatment options, and prevention practices.',
  },
  {
    icon: MapPinned,
    title: 'Outbreak awareness',
    text: 'Track reported disease pressure and connect local observations to wider regional context.',
  },
]

export const workflow = [
  { title: 'Upload photo', text: 'Capture a clear leaf image from the field or scouting workflow.', icon: Camera },
  { title: 'Select crop', text: 'Choose corn, soybean, wheat, or rice to route analysis correctly.', icon: Wheat },
  { title: 'Run AI analysis', text: 'Crop-specific TensorFlow Lite models evaluate visible disease patterns.', icon: Microscope },
  { title: 'Review prediction', text: 'See likely disease, confidence, health status, and ranked alternatives.', icon: Activity },
  { title: 'Act with guidance', text: 'Use treatment and prevention notes to decide the next field response.', icon: CheckCircle2 },
  { title: 'Monitor risk', text: 'Use outbreak reporting and regional filters to understand nearby pressure.', icon: MapPinned },
]

export const features = [
  'Crop-specific AI models for corn, soybean, wheat, and rice',
  'Fast image upload and prediction workflow',
  'Disease descriptions with treatment and prevention guidance',
  'Confidence-based results and ranked alternatives',
  'Outbreak reporting and map-based awareness',
  'Farmer profile and verification-oriented onboarding',
  'Prediction history for repeated scouting workflows',
  'Regional crop and state disease filtering',
]

export const benefits = [
  {
    title: 'Earlier issue detection',
    text: 'Give teams a practical first read on disease symptoms while there is still time to scout, confirm, and respond.',
  },
  {
    title: 'Reduced uncertainty',
    text: 'Translate photos into structured disease signals, confidence scores, and next-step guidance.',
  },
  {
    title: 'Scalable monitoring',
    text: 'Support repeatable crop health checks across fields, operators, and regions.',
  },
]

export const values = [
  {
    icon: Sprout,
    title: 'Field practical',
    text: 'CropIntel is built around real scouting workflows, not abstract dashboards.',
  },
  {
    icon: ShieldCheck,
    title: 'Trustworthy by design',
    text: 'Results include confidence context and guidance, keeping human judgment in the loop.',
  },
  {
    icon: CloudSun,
    title: 'Regional awareness',
    text: 'Disease risk depends on place, season, and crop. The platform reflects that context.',
  },
  {
    icon: Users,
    title: 'Grower-centered',
    text: 'The product favors fast, usable decisions for farmers and agricultural operators.',
  },
]

export const team = [
  {
    name: 'Jaithra Polavarapu',
    role: 'Product & Engineering Lead',
    bio: 'Guiding CropIntel’s product direction and technical execution, Jaithra helps shape the disease detection workflow, automation strategy, and real-world presentation of the platform. A senior at Bentonville West High School and an Ignite Professional Studies Technology student, he brings Walmart Global Tech externship experience in automation and vulnerability management along with web administration work to building practical tools with real agricultural impact.',
    linkedin: 'https://www.linkedin.com/in/jaithra-polavarapu/',
    image: '/team/jaithra-polavarapu.jpeg',
  },
  {
    name: 'Rakshith Jayakarthikeyan',
    role: 'Operations & Strategy Lead',
    bio: 'Keeping the team organized and focused, Rakshith supports CropIntel through project planning, communication, execution, and presentation readiness. A senior at Bentonville West High School and an Ignite Technology student, he brings experience from the International Walmart Global Technology team, academic tutoring, athletics, and community leadership to help the team move from idea to polished product.',
    linkedin: 'https://www.linkedin.com/in/rakshith-jayakarthikeyan/',
    image: '/team/rakshith-jayakarthikeyan.jpg',
  },
  {
    name: 'Aditya Ramani',
    role: 'AI Systems Researcher',
    bio: 'Connecting computer science research with product logic, Aditya contributes to CropIntel’s engineering decisions, AI workflow thinking, and system optimization. A senior at Bentonville High School and an Ignite Technology student, he brings experience from debate, volunteer work, and a Salesforce ROI Strategy internship at Arvest Bank to help approach technical problems with structure and analysis.',
    linkedin: 'https://www.linkedin.com/in/aditya-ramani-3b7373383/',
    image: '/team/aditya-ramani.jpeg',
  },
  {
    name: 'Havish Kunchanapalli',
    role: 'AI/ML & App Developer',
    bio: 'Building across the model and application layers, Havish works on CropIntel’s disease detection, AI/ML direction, and alert workflows that turn field observations into shared risk signals. A senior at Bentonville West High School and an Ignite Technology student, he brings Walmart Global Tech SMO externship experience along with a strong background in AI/ML, physics, and web/app development.',
    linkedin: 'https://www.linkedin.com/in/havish-kunchanapalli-9b24a9293/',
    image: '/team/havish-kunchanapalli.jpeg',
  },
]

export const faqs = [
  {
    question: 'Does CropIntel replace an agronomist?',
    answer:
      'No. CropIntel provides AI-assisted disease intelligence and guidance to support faster triage. Important crop health decisions should still be verified with local agronomy expertise.',
  },
  {
    question: 'Which crops are supported today?',
    answer: 'The current product supports corn, soybean, wheat, and rice.',
  },
  {
    question: 'When will the app be available?',
    answer:
      'CropIntel for iOS is being prepared for App Store publication. The download page will be updated when the listing is live.',
  },
]

export const platformStats = [
  { label: 'Supported crops', value: '4' },
  { label: 'Model approach', value: 'TFLite' },
  { label: 'Target response', value: '<2s' },
  { label: 'Architecture', value: 'EfficientNet' },
]

export const footerColumns = [
  {
    title: 'Product',
    links: [
      { href: '/product', label: 'Platform' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/download', label: 'Download' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/team', label: 'Team' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export const productCapabilities = [
  {
    icon: Leaf,
    title: 'Disease intelligence',
    text: 'Crop-specific models classify likely disease patterns from leaf imagery and surface confidence-based results.',
  },
  {
    icon: MapPinned,
    title: 'Field risk context',
    text: 'State and crop filters plus outbreak reporting help teams connect observations to regional pressure.',
  },
  {
    icon: CheckCircle2,
    title: 'Action guidance',
    text: 'Disease pages explain symptoms, severity, treatment options, and prevention practices in plain language.',
  },
]
