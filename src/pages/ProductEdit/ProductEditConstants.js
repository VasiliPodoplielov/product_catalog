export const fieldErrors = {
  require: 'Поле обязательно для заполнения.',
  tooShort: length => `Длина поля должна быть не меньше ${length} символов.`,
  tooBig: length => `Значение должно быть не больше ${length}.`,
  tooSmall: length => `Значение должно быть не меньше ${length}.`,
  mustBeInteger: 'Число должно быть целым'
};