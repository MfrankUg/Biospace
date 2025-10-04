# **App Name**: BioSpace Explorer

## Core Features:

- CSV Data Parsing and Storage: Parse the uploaded SB_publication_PMC.csv file and store each record in Firebase Firestore.
- AI Summarization and Tagging: Use Gemini AI to generate a 2-3 sentence summary and extract relevant keywords (organism, mission, research topic) for each publication. Store this metadata in Firestore.
- Interactive Web Dashboard - Home Page: Display overview stats (total studies, organisms, research areas) and charts showing distribution by topic/organism using Chart.js/Plotly.js.
- Interactive Web Dashboard - Research Explorer: Display research publications in a table with Title, Summary, Keywords, and Link. Allow filtering by organism, keyword, or mission. Present summary of the search to the user, including reasoning used to reach conclusion; Gemini is used as a tool for this.
- Interactive Web Dashboard - BioAI Chat: Implement an AI chat interface (BioAI) powered by Gemini. BioAI handles semantic search, matches relevant records from Firestore, and generates summarized responses to user queries.
- Data Visualization: Use Chart.js or Plotly.js to create visualizations such as bar charts (studies per organism) and pie charts (distribution by topic).

## Style Guidelines:

- Primary color: Cyan (#00C3FF) for a futuristic and technological feel, referencing space exploration.
- Background color: Deep space blue (#001F3F), providing a dark, immersive background reminiscent of outer space. Desaturated from the primary.
- Accent color: White (#FFFFFF) for clear contrast and highlights, ensuring readability and highlighting key elements.
- Body and headline font: 'Poppins' (sans-serif) for a clean, modern, and readable style.
- Use minimalistic, vector-based icons to represent data categories and navigation elements.
- Card-based content blocks with rounded edges, creating a clean and organized interface. Top navigation bar for Home, Explorer, BioAI, and About pages.
- Subtle transitions and animations for loading data and updating charts, providing a smooth user experience.