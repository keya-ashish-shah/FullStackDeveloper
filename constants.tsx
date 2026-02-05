
import { Project, Certification, Skill, Education } from './types';

export const SKILLS: Skill[] = [
  { name: 'HTML5', icon: 'https://img.icons8.com/color/48/html-5--v1.png' },
  { name: 'CSS3', icon: 'https://img.icons8.com/color/48/css3.png' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/javascript--v1.png' },
  { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/bootstrap.png' },
  { name: 'Tailwind CSS', icon: 'https://img.icons8.com/color/48/tailwind_css.png' },
  { name: 'PHP', icon: 'https://img.icons8.com/officel/48/php-logo.png' },
  { name: 'Python', icon: 'https://img.icons8.com/color/48/python--v1.png' },
  // { name: 'Django', icon: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-django-logo-color-tal-revivo.png' },
  { name: 'MySQL', icon: 'https://img.icons8.com/color/48/mysql-logo.png' },
  { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/mongodb.png' },
  { name: 'Express.js', icon: 'https://img.icons8.com/office40/1200/express-js.jpg' },
  { name: 'React', icon: 'https://img.icons8.com/color/48/react-native.png' },
  { name: 'Node.js', icon: 'https://img.icons8.com/color/48/nodejs.png' },
];

export const EDUCATION: Education[] = [
  {
    school: 'K. S. School of Business Management & IT',
    degree: 'B.Sc. (CA & IT)',
    period: '2021 - 2024',
    cgpa: '4.19 / 5 CGPA',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1478173942logo%20image.jpg'
  },
  {
    school: 'K. S. School of Business Management & IT',
    degree: 'M.Sc. (CA & IT)',
    period: '2024 - 2026',
    cgpa: '4.19 / 5 CGPA',
    logo: 'https://image-static.collegedunia.com/public/college_data/images/logos/1478173942logo%20image.jpg'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Lavish Weddingz',
    description: 'Connecting couples with trusted wedding vendors effortlessly. Includes vendor booking, location filters, and a powerful admin panel.',
    image: 'https://i.pinimg.com/736x/22/18/1c/22181c57b1732997fdfbfe7a2303931a.jpg',
    link: 'https://github.com/keya-ashish-shah/Lavish_Weddings'
  },
  {
    title: 'Social Media Clone',
    description: 'A platform inspired by Facebook, offering user profiles, friend requests, news feed, real-time chat, and notifications.',
    image: 'https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049579.jpg?semt=ais_hybrid&w=740&q=80',
    link: 'https://github.com/keya-ashish-shah/Social-Media-Clone'
  },
  {
    title: 'Share Market Analyzer',
    description: 'A smart analyzer tracking stock trends, providing real-time data, technical analysis, and portfolio management tools.',
    image: 'https://images.timesnownews.com/thumb/msid-151515613,width-1280,height-720,resizemode-75/151515613.jpg',
    link: 'https://github.com/keya-ashish-shah/Share-Market-Analyzer'
  },
  {
    title: 'Multi-Disease Prediction',
    description: 'Fuzzy logic system predicting Diabetes, Heart Disease, Thyroid, PCOD, and Anxiety with real-time risk classification.',
    image: 'https://img.freepik.com/premium-vector/male-doctor-medical-check-up_828072-392.jpg',
    link: 'https://github.com/keya-ashish-shah/Medical_Diagnosis_System'
  },
  {
    title: 'YouTube Sentiment',
    description: 'Real-time sentiment analyzer using Python and Streamlit to analyze user sentiments based on YouTube comments.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPmjy4kuqTBuJAiTmvPPMS9EeQwaz7Xbh8g&s',
    link: 'https://github.com/keya-ashish-shah/YoutubeCommentSentimentAnalyzer'
  },
  {
    title:'ManageMate ~ Event Management Mobile Application',
    description: 'ManageMate is a comprehensive mobile application designed to simplify event management for both creators and participants.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iuL5D2vnYCbr9jy-5MQRAZfHJXII8Aq7LQ&s',
    link:'https://github.com/keya-ashish-shah/ManageMate.git'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Create a Website Using WordPress',
    issuerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAxIzs2yRTPxONA1yBwMZdhkNwlqmIpxFug&s',
    link: 'https://www.coursera.org/account/accomplishments/certificate/M7TWC4DEQ4GT'
  },
  {
    title: 'Full Stack with MERN & Gen AI',
    issuerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLpnKx5WgsOa4w5Ofo17bmKPhEFbMk9cJig&s',
    link: 'https://www.udemy.com/certificate/UC-b661a635-e7f2-44e9-9d59-d0e02077d267/'
  },
  {
    title: 'The Complete Python Bootcamp',
    issuerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKQOZPpk7J8Zy72VMx4HTBowLyJtsRaQ3rw&s',
    link: 'https://www.udemy.com/certificate/UC-ac1730ce-a325-4231-9bce-91203b201773/'
  },
  {
    title: 'Python Django Basics',
    issuerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKQOZPpk7J8Zy72VMx4HTBowLyJtsRaQ3rw&s',
    link: 'https://rathank.com/tutor-certificate/?cert_hash=73c4fed7d66f7994'
  },
  {
    title: 'Full Stack Web Dev Mastery',
    issuerLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCLpnKx5WgsOa4w5Ofo17bmKPhEFbMk9cJig&s',
    link: 'https://www.udemy.com/certificate/UC-59ffbc5d-a2c5-43ea-adfd-3d4774b33c44/'
  },
  {
    title: 'NoSql Essential Course',
    issuerLogo: 'https://www.javacodegeeks.com/wp-content/uploads/2018/12/3-300x300.png',
    link: 'https://www.linkedin.com/learning/certificates/dd23dc3d539923893dbafd485aab96c26b809f54e5e439ad500fe44643809042'
  }
];
