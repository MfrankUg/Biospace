import type { Publication } from './types';

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Mice in Bion-M 1 space mission: training and selection',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5451632/',
    summary: 'This study describes the selection and pre-flight training of mice for the Bion-M1 biosatellite mission, focusing on habituation to the spaceflight environment and hardware to ensure animal welfare and data quality.',
    keywords: ['animal model', 'space flight', 'stress', 'training'],
    organism: 'Mice',
    topic: 'Animal Models',
    mission: 'Bion-M1'
  },
  {
    id: '2',
    title: 'Microgravity induces pelvic bone loss through RANKL-mediated osteoclastogenesis',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4079361/',
    summary: 'Research on mice aboard the ISS reveals that microgravity leads to significant bone loss in the pelvis, driven by an increase in osteoclasts. The study identifies RANKL as a key molecule in this process, suggesting potential therapeutic targets.',
    keywords: ['bone loss', 'microgravity', 'osteoclasts', 'RANKL'],
    organism: 'Mice',
    topic: 'Bone Loss',
    mission: 'ISS'
  },
  {
    id: '3',
    title: 'Stem Cell Health and Tissue Regeneration in Microgravity',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4624847/',
    summary: 'This review discusses the impact of spaceflight on stem cells, highlighting altered differentiation and regenerative capacities. Understanding these changes is crucial for astronaut health and future space colonization.',
    keywords: ['stem cells', 'regeneration', 'microgravity', 'astronaut health'],
    organism: 'Human',
    topic: 'Stem Cells',
    mission: 'ISS'
  },
  {
    id: '4',
    title: 'Microgravity validation of a novel system for plant growth',
    link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3253308/',
    summary: 'A new plant growth system, the VEGGIE hardware, was validated on the ISS. It successfully grew lettuce, demonstrating a viable method for food production in space and supporting future long-duration missions.',
    keywords: ['plant growth', 'VEGGIE', 'food production', 'space cultivation'],
    organism: 'Plants',
    topic: 'Plant Biology',
    mission: 'ISS'
  },
  {
    id: '5',
    title: 'Space radiation and its impact on living organisms',
    link: 'https://www.example.com/rad-impact',
    summary: 'This paper reviews the types of radiation encountered in space and their biological effects, including increased cancer risk and DNA damage. It emphasizes the need for effective shielding and countermeasures for deep space exploration.',
    keywords: ['radiation', 'DNA damage', 'cancer risk', 'deep space'],
    organism: 'Various',
    topic: 'Radiation',
    mission: 'General'
  },
  {
    id: '6',
    title: 'Arabidopsis gene responses under microgravity',
    link: 'https://www.example.com/arabidopsis-genes',
    summary: 'Genomic analysis of Arabidopsis thaliana grown in space reveals significant changes in gene expression related to stress, cell walls, and hormone pathways. This provides insight into how plants adapt to the absence of gravity.',
    keywords: ['Arabidopsis', 'gene expression', 'plant adaptation', 'hormones'],
    organism: 'Plants',
    topic: 'Plant Biology',
    mission: 'ISS'
  },
    {
    id: '7',
    title: 'The effect of microgravity on the cardiovascular system',
    link: 'https://www.example.com/cardio-microgravity',
    summary: 'This study investigates cardiovascular deconditioning in astronauts during long-duration spaceflight. It highlights fluid shifts, cardiac atrophy, and orthostatic intolerance upon return to Earth.',
    keywords: ['cardiovascular', 'astronaut health', 'fluid shifts', 'cardiac atrophy'],
    organism: 'Human',
    topic: 'Cardiovascular System',
    mission: 'ISS'
  },
  {
    id: '8',
    title: 'Behavioral and cognitive performance in space',
    link: 'https://www.example.com/cog-space',
    summary: 'An overview of the psychological challenges of spaceflight, including isolation, confinement, and sleep disruption. The paper assesses their impact on crew cognitive function and team dynamics.',
    keywords: ['psychology', 'cognition', 'isolation', 'sleep'],
    organism: 'Human',
    topic: 'Psychology',
    mission: 'ISS'
  },
  {
    id: '9',
    title: 'Zebrafish as a model for studying muscle atrophy in space',
    link: 'https://www.example.com/zebrafish-muscle',
    summary: 'Zebrafish larvae were used to model muscle atrophy in microgravity. The study found rapid muscle degradation and identified key genetic pathways involved, offering a scalable model for countermeasure screening.',
    keywords: ['zebrafish', 'muscle atrophy', 'genetic pathways', 'animal model'],
    organism: 'Zebrafish',
    topic: 'Muscle Atrophy',
    mission: 'N/A'
  }
];
