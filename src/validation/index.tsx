export const carNumberValidation = (carNumber: string) => (
  /^[A-ZА-Я]{2}[0-9]{4}[A-ZА-Я]{2}$/.test(carNumber)
);
