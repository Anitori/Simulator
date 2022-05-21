
let ver = document.getElementById("btnSave").addEventListener("click", (e) => {
    e.preventDefault()
   
    const lista = document.getElementById("Ciclo-lectivo"); // Se referencia la lista
    const indiceSeleccionado = lista.selectedIndex; // Se obtiene el indice de la opción seleccionada
    const opcionSeleccionada = lista.options[indiceSeleccionado]; // Con el indice y el array obtener la opción
    const valorSeleccionado = opcionSeleccionada.value; // Se obtiene el valor de la opción



    if (valorSeleccionado == 1) {
        document.getElementById("boxFinal").textContent = `Su regularidad venció en marzo del 2021`
    } else if (valorSeleccionado == 2){
        document.getElementById("boxFinal").textContent = `Su regularidad venció en marzo del 2021`
    } else if (valorSeleccionado == 3){
        document.getElementById("boxFinal").textContent = `Su regularidad venció en marzo del 2022`
    } else if (valorSeleccionado == 4){
        document.getElementById("boxFinal").textContent = `Su regularidad vence en marzo del 2023`
    } else if (valorSeleccionado == 5){
        document.getElementById("boxFinal").textContent = `Su regularidad vence en marzo del 2024`
    } else if (valorSeleccionado == 6){
        document.getElementById("boxFinal").textContent = `Su regularidad vence en marzo del 2025`
    }


})