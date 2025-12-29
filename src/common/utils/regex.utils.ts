export class RegexUtils {
  static regexPassword: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  static regexIdentifiesWords: RegExp = /\p{L}[\p{L}\p{M}'’-]*/gu;
  static regexOnlyNumbers: RegExp = /[^0-9]/g;
}
