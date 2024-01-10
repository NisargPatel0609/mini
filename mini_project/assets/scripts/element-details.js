let url = new URL(window.location.href);
let number = url.searchParams.get("number");

let data = axios.get("../../data/elements.json");
data.then((res) => {
  let ele = res.data.elements.find((e) => {
    if (e.number == +number) {
      return e;
    }
  });

  let ele_symbol = document.getElementById("element-details_symbol");
  let ele_number = document.getElementById("element-details_number");
  let ele_category = document.getElementById("element-details_category");
  let ele_discoveredBy = document.getElementById(
    "element-details_discoveredby"
  );
  let ele_namedBy = document.getElementById("element-details_namedby");
  let ele_name = document.getElementById("element-details_name");
  let ele_atomic_mass = document.getElementById(
    "element-details_atomicMass-content"
  );
  let ele_density = document.getElementById("element-details_density-content");
  let ele_3d_model = document.getElementById("element-details_3d-model");
  let ele_img_div = document.getElementById("element-details_image");
  let ele_description = document.getElementById("element-details_description");
  let ele_electron_configuration = document.getElementById(
    "element-details_electornConfiguration-content"
  );
  let ele_more_details = document.getElementById(
    "element-details_more-details_link"
  );

  ele_symbol.innerText += ele.symbol;
  ele_number.innerText += ele.number;
  ele_category.innerText += ele.category;
  ele_discoveredBy.innerText += ele.discovered_by;
  ele_namedBy.innerHTML += ele.named_by;
  ele_name.innerHTML += ele.name;
  ele_atomic_mass.innerText += ele.atomic_mass;
  ele_density.innerText += ele.density;
  ele_3d_model.src = ele.bohr_model_3d;
  ele_img_div.src = ele.image.url;
  ele_description.innerText += ele.summary;
  ele_electron_configuration.innerText += ele.electron_configuration;
  ele_more_details.href = ele.source;
});
