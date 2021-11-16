document.addEventListener(
  "DOMContentLoaded",
  () => {
    const createBtn = document.getElementById("create-btn");
    createBtn.onclick = async function () {
      const name = document.getElementById("name").value;
      const propellers = document.getElementById("propellers").value;
      const maxSpeed = document.getElementById("maxSpeed").value;
      const allInputs = { name, propellers, maxSpeed };
      await axios({
        method: "POST",
        url: "/drones/create",
        data: allInputs,
      });
      window.location.assign("/drones");
    };

    console.log("lab-express-drones JS imported successfully!");
  },
  false
);
