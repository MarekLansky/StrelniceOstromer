getText("text.txt");

async function getText(file) {
  const res = await fetch(file);
  const text = await res.text();

  // rozdělíme text podle našich oddělovačů
  const parts = parseSections(text);

  // a vložíme jednotlivé části na stránku – jen pokud element existuje
  const aktuality = document.getElementById("aktuality");
  if (aktuality) aktuality.innerHTML = parts.AKTUALITY || "";

  const souteze = document.getElementById("souteze");
  if (souteze) souteze.innerHTML = parts.SOUTEZE || "";

  const vysledky = document.getElementById("vysledky");
  if (vysledky) vysledky.innerHTML = parts.VYSLEDKY || "";

  const kontakty = document.getElementById("kontakty");
  if (kontakty) kontakty.innerHTML = parts.KONTAKTY || "";

  const datum = document.getElementById("datum");
  if (datum) datum.innerHTML = parts.DATUM || "";

  const dalsisouteze = document.getElementById("dalsisouteze");
  if (dalsisouteze) dalsisouteze.innerHTML = parts.DALSISOUTEZE || "";
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

const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("link");

  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
