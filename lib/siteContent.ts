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
  tagline: 'AI-powered crop disease intelligence for faster field decisions.',
  overview:
    'CropIntel helps farmers, crop advisors, and agricultural operators identify likely crop disease earlier by combining photo-based AI diagnosis, crop-specific disease guidance, regional awareness, and outbreak monitoring.',
  mission:
    'Help growers respond to crop health issues earlier with practical, accessible intelligence that turns field photos into clear next steps.',
  vision:
    'A resilient agricultural network where disease pressure is detected sooner, shared faster, and managed with better local context.',
  contactEmail: 'hello@cropintel.ai',
  contactPhone: '+1 (479) 555-0148',
  location: 'Russellville, Arkansas',
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
    name: 'Maya Benton',
    role: 'Chief Executive Officer',
    bio: 'Agriculture operator and product strategist focused on bringing dependable decision support into field workflows.',
  },
  {
    name: 'Dr. Elias Moreno',
    role: 'Head of Plant Intelligence',
    bio: 'Plant pathology and machine learning lead guiding model evaluation, disease taxonomy, and crop-specific validation.',
  },
  {
    name: 'Priya Shah',
    role: 'Engineering Lead',
    bio: 'Full-stack engineer responsible for CropIntel’s prediction experience, secure upload flow, and product architecture.',
  },
  {
    name: 'Caleb Turner',
    role: 'Field Operations Lead',
    bio: 'Works with growers and advisors to shape onboarding, outbreak reporting, and practical scouting workflows.',
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
    question: 'What happens after account creation?',
    answer:
      'Users enter the CropIntel app area where they can run diagnosis, review history, register a farm profile, and monitor outbreak reports.',
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
      { href: '/signup', label: 'Create account' },
      { href: '/app', label: 'Launch app' },
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
  {
    title: 'Legal',
    links: [
      { href: '/contact', label: 'Privacy placeholder' },
      { href: '/contact', label: 'Terms placeholder' },
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
