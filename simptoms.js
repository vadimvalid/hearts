(function () {
  const toggles = document.querySelectorAll(
    ".simptoms__items__item__toggle input"
  );
  const appointmentList = document.querySelector(".appointment__list");

  let appointmentContent = [];

  // loop through all toggles and find checked
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      if (toggle.checked) {
        let text = toggle.parentElement.previousElementSibling.textContent;

        // Push text to array
        appointmentContent.push(text);
        // Join array into string
        appointmentList.textContent = `${appointmentContent.join(", ")} ?`;
        console.log(appointmentContent.length);
      } else {
        let text = toggle.parentElement.previousElementSibling.textContent;

        if (appointmentContent.length > 1) {
          // Remove text from array
          appointmentContent = appointmentContent.filter(
            (item) => item !== text
          );
          // Join array into string
          appointmentList.textContent = `${appointmentContent.join(", ")} ?`;
        } else {
          appointmentList.textContent = "";
        }
      }
    });
  });
})();
