const arrayExample = [
  "Oficina",
  "Computadora",
  "Perro",
  "Gato",
  "Telefono",
  "Celular",
  "Mesa",
  "Escritorio",
];

const search = "to";

(function modeEasy() {
  const result2 = arrayExample?.filter((value) => value?.includes(search));
  console.log("Modo Facil:", result2);
})()

(function binarySearch() {
  const query = search.split("");

  arrayExample.map((value) => {
    //Ordenante
    const strToArr = value.split("");
    //Asendente

    const asendent = strToArr.indexOf(query[0]);

    if (asendent) {
      for (var i = 0; query.length > i; i++) {
        if (strToArr[asendent + i] == query[i]) {
          console.log("Resultado:", value);
        }
      }
    }

    return asendent;
  });
})();
