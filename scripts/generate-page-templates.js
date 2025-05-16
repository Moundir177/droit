const fs = require('fs');
const path = require('path');

// Define the pages to create
const pages = [
  {
    filename: 'gallery.mdx',
    title_fr: 'Galerie',
    title_ar: 'معرض الصور',
    description_fr: 'Explorez notre galerie de photos et d\'images',
    description_ar: 'استكشف معرض الصور والصور لدينا',
  },
  {
    filename: 'resources.mdx',
    title_fr: 'Ressources',
    title_ar: 'الموارد',
    description_fr: 'Accédez à nos ressources et publications',
    description_ar: 'الوصول إلى مواردنا ومنشوراتنا',
  },
  {
    filename: 'testimonials.mdx',
    title_fr: 'Témoignages',
    title_ar: 'الشهادات',
    description_fr: 'Découvrez les témoignages de nos bénéficiaires et partenaires',
    description_ar: 'اكتشف شهادات المستفيدين والشركاء',
  },
  {
    filename: 'review.mdx',
    title_fr: 'Revue',
    title_ar: 'مراجعة',
    description_fr: 'Notre revue annuelle des activités et réalisations',
    description_ar: 'مراجعتنا السنوية للأنشطة والإنجازات',
  },
  {
    filename: 'collaborations-ong.mdx',
    title_fr: 'Collaborations ONG',
    title_ar: 'تعاون مع المنظمات',
    description_fr: 'Nos collaborations avec d\'autres organisations non gouvernementales',
    description_ar: 'تعاوننا مع منظمات غير حكومية أخرى',
  },
];

// Create the pages directory if it doesn't exist
const pagesDir = path.join(__dirname, '..', 'content', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Generate template files for each page
pages.forEach((page) => {
  const filePath = path.join(pagesDir, page.filename);
  
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
header_image: "/images/${page.filename.replace('.mdx', '')}-header.jpg"
---

## ${page.title_fr}

Contenu de la page ${page.title_fr} à éditer.

## ${page.title_ar}

محتوى الصفحة ${page.title_ar} للتحرير.
`;
  
  fs.writeFileSync(filePath, content);
  console.log(`Created template: ${page.filename}`);
});

console.log('All page templates generated successfully!'); 