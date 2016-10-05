const isIntString = value => ! isNaN(value) && value.indexOf && value.indexOf('.') === -1;
const isDateString = value => ! isNaN( Date.parse(value) );
const isFloatString = value => ! isNaN(value) && value.indexOf && value.indexOf('.') > -1;
const isObject = value => Object(value) === value;

const objectParser = module.exports.objectParser = (object) => {
  return fp.mapo((value, key) => parse(value), object)
}

const arrayParser = module.exports.arrayParser = (array) => {
  return array.map(value => parse(value))
}

const parse = (value) => {
  if (Number.isInteger(value)) return value;
  if (Array.isArray(value)) return arrayParser(value);
  if (value instanceof Date) return value;
  if (isObject(value)) return objectParser(value);
  if (isIntString(value)) return parseInt(value);
  if (isFloatString(value)) return parseFloat(value)
  if (isDateString(value)) return Date(value);
  return value;
}