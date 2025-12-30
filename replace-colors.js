const fs = require('fs');
const path = require('path');

const replacements = {
  '#3D1D4E': '#722F37',
  '#2D1538': '#5C242B',
  '#2A1036': '#4A1E23',
  '#1a0a24': '#2D1215',
  'rgba(61,29,78': 'rgba(114,47,55'
};

const files = [
  'src/components/Footer.jsx',
  'src/components/Hero.jsx',
  'src/components/About.jsx',
  'src/components/Solution.jsx',
  'src/components/Mastermind.jsx',
  'src/components/PodcastForm.jsx',
  'src/components/Podcast.jsx',
  'src/components/Testimonials.jsx',
  'src/pages/Home.jsx',
  'src/pages/HighTicketClosing.jsx',
  'src/pages/Coaching.jsx',
  'src/pages/Consulting.jsx',
  'src/pages/Programs.jsx',
  'src/pages/Book.jsx',
  'src/pages/Contact.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  Object.entries(replacements).forEach(([from, to]) => {
    content = content.split(from).join(to);
  });
  
  fs.writeFileSync(filePath, content);
  console.log('Updated:', file);
});

console.log('Done!');
