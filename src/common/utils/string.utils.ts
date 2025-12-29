import { RegexUtils } from './regex.utils';

export class StringUtils {
  static normalizedWork(string: string): string {
    return string
      .replace(RegexUtils.regexIdentifiesWords, (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      })
      .trim();
  }

  static onlyNumbers(string: string): string {
    return string.replace(RegexUtils.regexOnlyNumbers, '');
  }
}
