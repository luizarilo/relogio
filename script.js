let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let dia = date.getDate();
  let mes = date.getMonth();
  let ano = date.getFullYear();
  let mesCorrigido = mes + 1

  dia = dia < 10 ? "0" + dia : dia
  mesCorrigido = mesCorrigido < 10 ? "0" + mesCorrigido : mesCorrigido
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins}:${secs}\n ${dia}/${mesCorrigido}/${ano}`;

  document.getElementById("clock").innerText = time;
};

clock();