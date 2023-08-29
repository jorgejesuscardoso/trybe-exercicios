export function calc(b: string): number {
  const [day, months, year] = b.split('/');
  const birthDate = new Date(+year, +months - 1, +day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}
