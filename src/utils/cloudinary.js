const defaultCloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "pak-solutions";

/**
 * Returns a Cloudinary image URL or direct HTTP URL if already fully qualified.
 */
export function getCloudinaryUrl(publicId, width = 800, quality = 'auto') {
  if (!publicId) {
    return "https://masterbundles.com/wp-content/uploads/2023/04/billboard_3--143-2048x1365.jpg";
  }
  if (publicId.startsWith('http://') || publicId.startsWith('https://')) {
    return publicId;
  }
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || defaultCloudName;
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_${quality},w_${width}/${publicId}.jpg`;
}

/**
 * Curated high-resolution visual fallback helper ensuring verified photography mapping across Pexels and free high-res CDNs.
 */
export function getImageWithFallback(publicId, categorySlug, subcategorySlug = '', width = 800) {
  if (publicId && (publicId.startsWith('http://') || publicId.startsWith('https://'))) {
    return publicId;
  }

  const subcategoryFallbacks = {
    // Medical
    'respiratory-critical-care': 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=1000&auto=format&fit=crop',
    'diagnostic-monitoring': 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1000&auto=format&fit=crop',
    'ward-ot-furniture': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    'consumables-specialty-papers': 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&auto=format&fit=crop',
    'radiology-laboratory': 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop',
    
    // Office & Stationery
    'workplace-computing-hardware': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
    'commercial-printers-power': 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=800&auto=format&fit=crop',
    'executive-furniture': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&auto=format&fit=crop',
    'bulk-stationery-utilities': 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&auto=format&fit=crop',
    'conference-presentation': 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&auto=format&fit=crop',
    
    // Commercial Printing (EXACT USER REQUESTED IMAGES)
    'signage-large-format': 'https://masterbundles.com/wp-content/uploads/2023/04/billboard_3--143-2048x1365.jpg',
    'corporate-collateral-smartcards': 'https://tse3.mm.bing.net/th/id/OIP.CsasNelRlclboRfKfm4DFwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'branded-merchandise-swag': 'https://allen-signs.co.uk/wp-content/uploads/2024/08/custom-branded-merchandise-set-png.webp',
    'hospital-specialty-printing': 'https://5.imimg.com/data5/SELLER/Default/2022/1/DK/EQ/LG/109307757/letterhead-envelop-visiting-card-id-card-1-1000x1000.jpg',
    
    // Apparel & Linen (EXACT USER REQUESTED IMAGES)
    'healthcare-apparel-packs': 'http://workdayz.in/static/media/healthcare.e86df28ee2391ab2e83a.png',
    'ward-bedding-textiles': 'https://yintextextile.com/wp-content/uploads/2025/05/Spotlessly-clean-hospital-bed-with-fresh-white-bedding-emphasizing-hygiene-and-patient-ready-environment.webp',
    'industrial-ppe-safety': 'https://img.freepik.com/premium-photo/blue-safety-helmet-with-earphones-goggles-isolated-white-background_488220-50279.jpg',
    'corporate-hospitality-uniforms': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop',
    
    // Civil Works
    'fitouts-drywall-ceilings': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop',
    'architectural-fabrication': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    'mep-civil-procurement': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop',
    
    // IT Services
    'custom-software-web': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
    'ai-workflow-automation': 'https://moringaschool.com/wp-content/uploads/2025/10/AI-Automation.jpg',
    
    // Security & Facilities
    'security-surveillance-access': 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&auto=format&fit=crop',
    'telecommunications-radio': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
    'solar-energy-backup': 'https://tse2.mm.bing.net/th/id/OIP.ZBJ-IIaatrXCRj0Jx9WH2gHaGN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    
    // Institutional Polymers & Facilities (EXACT USER REQUESTED IMAGES)
    'industrial-pharma-polymers': 'https://img2.exportersindia.com/product_images/bc-full/2022/1/3630844/pharma-containers-1642829462-6168892.jpeg',
    'campus-facilities-seating': 'https://p.turbosquid.com/ts-thumb/8w/KxvKJN/ABv4Wl0j/airport_seating_01/jpg/1377698386/1920x1080/fit_q87/58eed87c06d33fb7aca6813e184d58f2ba03f92c/airport_seating_01.jpg',
    'safety-fire-emergency': 'https://tse4.mm.bing.net/th/id/OIP.TdoLNG3kCbjrFNEDBnanGQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'sports-recreation-gear': 'https://tse4.mm.bing.net/th/id/OIP.janh1Rl2FjeR5NSCwzsKiwHaFa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
  };

  const fallbacks = {
    'medical-supplies': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&auto=format&fit=crop',
    'stationery': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop',
    'printing': 'https://masterbundles.com/wp-content/uploads/2023/04/billboard_3--143-2048x1365.jpg',
    'clothing-linen': 'https://yintextextile.com/wp-content/uploads/2025/05/Spotlessly-clean-hospital-bed-with-fresh-white-bedding-emphasizing-hygiene-and-patient-ready-environment.webp',
    'civil-works': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format&fit=crop',
    'it-services': 'https://moringaschool.com/wp-content/uploads/2025/10/AI-Automation.jpg',
    'security-facilities': 'https://tse2.mm.bing.net/th/id/OIP.ZBJ-IIaatrXCRj0Jx9WH2gHaGN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'institutional-polymers': 'https://img2.exportersindia.com/product_images/bc-full/2022/1/3630844/pharma-containers-1642829462-6168892.jpeg'
  };

  if (subcategorySlug && subcategoryFallbacks[subcategorySlug]) {
    return subcategoryFallbacks[subcategorySlug];
  }

  if (categorySlug && fallbacks[categorySlug]) {
    return fallbacks[categorySlug];
  }

  return getCloudinaryUrl(publicId, width);
}
