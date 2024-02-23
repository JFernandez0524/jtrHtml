const bodyEl = document.getElementsByTagName('a');

console.log(bodyEl);

for (let index = 0; index < bodyEl.length; index++) {
  const element = bodyEl[index];
  console.log(element);

  element.addEventListener('mouseenter', (e) => {
    if (e.target.hasChildNodes()) {
      console.log(e.target);

      //add background Color
      e.target.style.cssText = `
    background-color: yellow;
    font-size: 2em;
    `;
      element.addEventListener('mouseout', (e) => {
        console.log(e.target);

        //add background Color
        e.target.style.cssText = '';
      });
    }
  });
}
