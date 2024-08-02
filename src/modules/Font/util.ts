import type { FontFamilyType } from './font';

class FontUtility {
  static getFontClass(font: FontFamilyType): string {
    switch (font) {
      case 'DM Sans':
        return 'font-dm-sans';
      case 'Inter':
        return 'font-inter';
      case 'Roboto':
        return 'font-roboto';
      case 'Nunito':
        return 'font-nunito';
      case 'Poppins':
        return 'font-poppins';
      case 'Open Sans':
        return 'font-open-sans';
      case 'Lato':
        return 'font-lato';
      case 'Montserrat':
        return 'font-montserrat';
      case 'Raleway':
        return 'font-raleway';
      case 'Oswald':
        return 'font-oswald';
      default:
        return '';
    }
  }
}

export default FontUtility;
