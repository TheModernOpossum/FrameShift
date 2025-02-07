module.exports = {
  mode: 'jit',
  purge: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};

document.getElementById("stateButton").addEventListener("click", function () {
  this.innerText = "Clicked!";
  this.disabled = true;
  setTimeout(() => {
    this.innerText = "Click Me";
    this.disabled = false;
  }, 2000);
});