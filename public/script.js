const convertBtn = document.querySelector(".convert-button");
const URLInput = document.querySelector(".URL-input");

convertBtn.addEventListener("click", () => {
  console.log(`URL: ${URLInput.value}`);
  sendURL(URLInput.value);
});

const sendURL = (URL) => {
  // for Test using fetch
  //   fetch(`http://localhost:3030/download?URL=${URL}`, {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  window.location.href = `http://localhost:3030/download?URL=${URL}`;
};
