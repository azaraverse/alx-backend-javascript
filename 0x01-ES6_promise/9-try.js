export default function guardrail(mathFunction) {
  const array = [];
  try {
    const result = mathFunction();
    array.push(result);
  } catch (error) {
    array.push(`Error: ${error.message}`);
  } finally {
    array.push('Guardrail was processed');
  }

  return array;
}
