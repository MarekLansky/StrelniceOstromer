getText("text.txt");

async function getText(file) {
  const res = await fetch(file);
  const text = await res.text();

  // rozdělíme text podle našich oddělovačů
  const parts = parseSections(text);

  // a vložíme jednotlivé části na stránku
  document.getElementById("aktuality").innerHTML = parts.AKTUALITY;
  document.getElementById("souteze").innerHTML = parts.SOUTEZE;

}

function parseSections(text) {
  const sections = {};
  const regex = /#(\w+)\s*([\s\S]*?)(?=#\w+|$)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    sections[key] = value;
  }
  return sections;
}