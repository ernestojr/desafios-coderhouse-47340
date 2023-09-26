(function (run) {
  if (!run) return;

  let userData = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 32,
    email: 'jp@email.com',
  };

  console.log('userData -> Object.entries', Object.entries(userData));
  console.log('userData -> Object.keys', Object.keys(userData));
  console.log('userData -> Object.values', Object.values(userData));

})(false);

(function (run) {
  if (!run) return;

  let taxes = {
    tax1: 0.16,
    tax2: 0.18,
    tax3: 0.20,
    tax4: 0.22,
  };

  let taxesValues = Object.values(taxes);

  let totalTaxes = taxesValues.reduce((total, tax) => {
    return total + tax;
  }, 0);

  console.log('totalTaxes', totalTaxes);
})(true);