let data = axios.get("../../data/elements.json");

data.then((res) => {
  let elements = res.data.elements;
  elements.map((element) => {
    let ele_div = document.createElement("div");
    let ele_number = document.createElement("div");
    let ele_symbol = document.createElement("div");
    let ele_name = document.createElement("div");
    let ele_atomicMass = document.createElement("div");
 
    
    ele_div.onclick = () => {
      window.location.href = `/pages/element-details.html?number=${element.number}`;
    };
    
    let temp = element.category.split(" ");
    let category = temp.join("_");
    ele_div.classList.add(category);
    ele_div.classList.add("atomic_element");
    ele_div.style.gridRow = element.ypos;
    ele_div.style.gridColumn = element.xpos;
    ele_symbol.style.margin = '0.3rem 0'

    ele_number.className = "atomic_element-number"	
    ele_symbol.className = "atomic_element-symbol"	
    ele_name.className = "atomic_element-name"	
    ele_atomicMass.className = "atomic_element-atomicMass"	

    ele_number.innerText = element.number;
    ele_symbol.innerText = element.symbol;
    ele_name.innerText = element.name;
    ele_atomicMass.innerText = element.atomic_mass;

    ele_div.append(ele_number, ele_symbol, ele_name, ele_atomicMass);
    // ele_div.append(ele_number, ele_symbol);
    let periodic_table = document.getElementById("periodic_table");
    periodic_table.appendChild(ele_div);
  });
});


let flag = false;

function onHamburgerClick(){
  let ham = document.getElementById("hamburger")
  let slider = document.getElementById("slider");
  let close = document.getElementById("close");	
  if(flag){
    ham.style.display = "none"
    slider.style.display = "block";
    close.style.display = "block";
    flag = false 
  }
  else{
    ham.style.display = "block"
    slider.style.display = "none";
    close.style.display = "none";
    flag = true
  }
}