export function Format3Digits(str) {
  return ("00" + str)?.slice(-3);
}
export function RemoveCaracteresEspeciais(str) {
    str = str.replace('',' ')
    console.log('str')
  return str.replace('\n',' ')
}
export function UpperCaseFirstLetter(str) {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
}
