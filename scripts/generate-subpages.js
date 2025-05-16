const fs = require('fs');
const path = require('path');

// Define the subpages to create
const subpages = [
  // About subpages
  {
    filename: 'about/mission.mdx',
    title_fr: 'Notre Mission',
    title_ar: 'مهمتنا',
    description_fr: 'La mission de la Fondation pour la Promotion des Droits',
    description_ar: 'مهمة مؤسسة تعزيز الحقوق',
  },
  {
    filename: 'about/vision.mdx',
    title_fr: 'Notre Vision',
    title_ar: 'رؤيتنا',
    description_fr: 'La vision de la Fondation pour la Promotion des Droits',
    description_ar: 'رؤية مؤسسة تعزيز الحقوق',
  },
  {
    filename: 'about/team.mdx',
    title_fr: 'Notre Équipe',
    title_ar: 'فريقنا',
    description_fr: 'L\'équipe de la Fondation pour la Promotion des Droits',
    description_ar: 'فريق مؤسسة تعزيز الحقوق',
  },
  {
    filename: 'about/history.mdx',
    title_fr: 'Notre Histoire',
    title_ar: 'تاريخنا',
    description_fr: 'L\'histoire de la Fondation pour la Promotion des Droits',
    description_ar: 'تاريخ مؤسسة تعزيز الحقوق',
  },
  
  // Programs subpages
  {
    filename: 'programs/training.mdx',
    title_fr: 'Formation & Renforcement',
    title_ar: 'التدريب وبناء القدرات',
    description_fr: 'Notre programme de formation et renforcement des capacités',
    description_ar: 'برنامجنا للتدريب وبناء القدرات',
  },
  {
    filename: 'programs/advocacy.mdx',
    title_fr: 'Plaidoyer & Sensibilisation',
    title_ar: 'المناصرة والتوعية',
    description_fr: 'Notre programme de plaidoyer et sensibilisation',
    description_ar: 'برنامجنا للمناصرة والتوعية',
  },
  {
    filename: 'programs/research.mdx',
    title_fr: 'Recherche & Documentation',
    title_ar: 'البحث والتوثيق',
    description_fr: 'Notre programme de recherche et documentation',
    description_ar: 'برنامجنا للبحث والتوثيق',
  },
];

// Generate template files for each subpage
subpages.forEach((page) => {
  const filePath = path.join(__dirname, '..', 'content', 'pages', page.filename);
  
  // Create directory if it doesn't exist
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Skip if the file already exists
  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${page.filename}`);
    return;
  }
  
  const content = `---
title_fr: "${page.title_fr}"
title_ar: "${page.title_ar}"
description_fr: "${page.description_fr}"
description_ar: "${page.description_ar}"
header_image: "/images/${page.filename.replace('.mdx', '').replace('/', '-')}-header.jpg"
---

## ${page.title_fr}

Contenu de la page ${page.title_fr} à éditer.

## ${page.title_ar}

محتوى الصفحة ${page.title_ar} للتحرير.
`;
  
  fs.writeFileSync(filePath, content);
  console.log(`Created template: ${page.filename}`);
});

console.log('All subpage templates generated successfully!'); 