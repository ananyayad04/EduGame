import React, { createContext, useState, useContext } from 'react';

// Translation data for different languages
const translations = {
  en: {
    title: 'Bored? Study with Games',
    subtitle: 'Learn Smarter, Play Harder!',
    math: 'Mathematics Quests',
    wordJourney: 'शब्द यात्रा',
    grammar: 'Grammar Guardians',
    science: 'Science Explorer',
    startAdventure: 'Start Your Adventure!',
    selectLanguage: 'Select Language',
    leaderboard: 'Leaderboard',
    home: 'Home',
    profile: 'Profile',
    register: 'Register',
    login: 'Login',
    name: 'Name:',
    schoolName: 'School Name:',
    class: 'Class:',
    phone: 'Phone Number:',
    password: 'Password:',
    haveAccount: 'Already Have An Account?',
    noAccount: 'Don\'t have an account?',
  },
  hi: {
    title: 'ऊब गए हैं? खेलों से पढ़ाई करें',
    subtitle: 'स्मार्ट सीखें, और जोर से खेलें!',
    math: 'गणित खोज',
    wordJourney: 'शब्द यात्रा',
    grammar: 'व्याकरण रक्षक',
    science: 'विज्ञान अन्वेषक',
    startAdventure: 'अपना साहसिक कार्य शुरू करें!',
    selectLanguage: 'भाषा चुनें',
    leaderboard: 'लीडरबोर्ड',
    home: 'होम',
    profile: 'प्रोफ़ाइल',
    register: 'रजिस्टर',
    login: 'लॉग इन करें',
    name: 'नाम:',
    schoolName: 'विद्यालय का नाम:',
    class: 'कक्षा:',
    phone: 'फ़ोन नंबर:',
    password: 'पासवर्ड:',
    haveAccount: 'पहले से ही एक खाता है?',
    noAccount: 'खाता नहीं है?',
  },
  or: {
    title: 'ବୋର ହେଉଛନ୍ତି? ଖେଳ ସହିତ ପଢନ୍ତୁ',
    subtitle: 'ସ୍ମାର୍ଟ ଶିଖନ୍ତୁ, ହାର୍ଡ ଖେଳନ୍ତୁ!',
    math: 'ଗଣିତ କ୍ୱେଷ୍ଟ୍',
    wordJourney: 'ଶବ୍ଦ ଯାତ୍ରା',
    grammar: 'ବ୍ୟାକରଣ ଗାର୍ଡିଆନ୍',
    science: 'ବିଜ୍ଞାନ ଏକ୍ସପ୍ଲୋରର୍',
    startAdventure: 'ଆପଣଙ୍କର ଦୁଃସାହସ ଆରମ୍ଭ କରନ୍ତୁ!',
    selectLanguage: 'ଭାଷା ବାଛନ୍ତୁ',
    leaderboard: 'ଲିଡରବୋର୍ଡ',
    home: 'ହୋମ୍',
    profile: 'ପ୍ରୋଫାଇଲ୍',
    register: 'ରେଜିଷ୍ଟର୍',
    login: 'ଲଗଇନ୍ କରନ୍ତୁ',
    name: 'ନାମ:',
    schoolName: 'ବିଦ୍ୟାଳୟର ନାମ:',
    class: 'ଶ୍ରେଣୀ:',
    phone: 'ଫୋନ ନମ୍ବର:',
    password: 'ପାସୱାର୍ଡ:',
    haveAccount: 'ଆଗରୁ ଖାତା ଅଛି?',
    noAccount: 'ଖାତା ନାହିଁ?',
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);