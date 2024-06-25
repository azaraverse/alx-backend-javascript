function getCurrentyear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentyear()}`]: income,
    [`gdp-${getCurrentyear()}`]: gdp,
    [`capita-${getCurrentyear()}`]: capita,
  };

  return budget;
}
