function solve() {
  let text = document.getElementById("input").value.split(".");
  const sentences = text.filter(el => el.length > 0);
  const output = document.getElementById("output");
  
  const chunkSize = 3;
  for (let i = 0; i < sentences.length; i += chunkSize) {
      const chunk = sentences.slice(i, i + chunkSize);
      let p = document.createElement('p');
      p.textContent = chunk.join(".") + ".";
      output.appendChild(p);
  }
}