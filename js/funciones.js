const paises = {
  mexico: {
      estados: {
          Hidalgo: {
            municipios: {
                actopan: ["Actopan Centro", "El Rosario", "La Palma", "Lázaro Cárdenas", "San Antonio", "Santa María"],
                aguasBlancas: ["Ahuacatlán", "Atlzayanca", "Cerro Blanco", "El Bosque", "Metepec", "San Juanico", "Xinantécatl"],
                ajacuba: ["Ajacuba Centro", "Barrio de Guadalupe", "Barrio de San Pedro", "La Estancia", "San Antonio el Grande"],
                almoloya: ["Almoloya Centro", "Barrio de San Francisco", "Barrio de Santa Cruz", "La Rosa", "San Miguel"],
                apam: ["Apam Centro", "Barrio de la Palma", "Barrio de San Juan", "El Mirador", "San Nicolás", "San Vicente"],
                atitalaquia: ["Atitalaquia Centro", "Barrio de Guadalupe", "Barrio de San Francisco", "La Mora", "San Juanico"],
                atlapexco: ["Atlapexco Centro", "Barrio de San Francisco", "Barrio de Santa María", "Barrio de Santo Domingo", "San Antonio"],
                atotonilcoDeTula: ["Atotonilco de Tula Centro", "Barrio de San Francisco", "Barrio de San Miguel", "El Moral", "San José"],
                atotonilcoElGrande: ["Atotonilco el Grande Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                calnali: ["Calnali Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                chapantongo: ["Chapantongo Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                chapulhuacan: ["Chapulhuacan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                elArenal: ["El Arenal Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huehuetla: ["Huehuetla Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huejutlaDeReyes: ["Huejutla de Reyes Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huazalingo: ["Huazalingo Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huazalingo: ["Huazalingo Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huauchinango: ["Huauchinango Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huehuetla: ["Huehuetla Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huejutlaDeReyes: ["Huejutla de Reyes Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huazalingo: ["Huazalingo Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huazalingo: ["Huazalingo Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                huauchinango: ["Huauchinango Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                ixtacamaxtitlan: ["Ixtacamaxtitlan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                ixcatlan: ["Ixcatlan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                metepec: ["Metepec Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                nicolasFlores: ["Nicolas Flores Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                pacula: ["Pacula Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                pachucaDeSoto: ["Pachuca de Soto Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                progresoDeObregon: ["Progreso de Obregon Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                sanAgustinTlaxiaca: ["San Agustin Tlaxiaca Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                sanAgustinMetzquititlan: ["San Agustin Metzquititlan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                sanBartoloTutotepec: ["San Bartolo Tutotepec Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                sanFelipeOrizatlan: ["San Felipe Orizatlan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                sanSalvador: ["San Salvador Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                santiagoDeAnaya: ["Santiago de Anaya Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                santiagoTulantepec: ["Santiago Tulantepec Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                singuilucan: ["Singuilucan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tasquillo: ["Tasquillo Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tecozautla: ["Tecozautla Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tenangoDeDoria: ["Tenango de Doria Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tepeapulco: ["Tepeapulco Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tepetitlan: ["Tepetitlan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tetepango: ["Tetepango Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tezontepecDeAldama: ["Tezontepec de Aldama Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tianguistengo: ["Tianguistengo Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tizayuca: ["Tizayuca Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuelilpan: ["Tlahuelilpan Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlahuiltepa: ["Tlahuiltepa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
                tlanalapa: ["Tlanalapa Centro", "Barrio de San Francisco", "Barrio de San Juan", "Barrio de Santo Domingo", "San Miguel"],
              }
            },
            
          cdmx: {
              municipios: {
                  cuauhtemoc: ["Colonia 1", "Colonia 2", "Colonia 3"],
                  benitoJuarez: ["Colonia A", "Colonia B", "Colonia C"],
                  miguelHidalgo: ["Colonia X", "Colonia Y", "Colonia Z"]
              }
          }
      }
  },
  espana: {
      estados: {
          madrid: {
              municipios: {
                  centro: ["Barrio 1", "Barrio 2", "Barrio 3"],
                  alcorcon: ["Barrio A", "Barrio B", "Barrio C"],
                  leganes: ["Barrio X", "Barrio Y", "Barrio Z"]
              }
          },
          cataluna: {
              municipios: {
                  barcelona: ["Distrito 1", "Distrito 2", "Distrito 3"],
                  badalona: ["Distrito A", "Distrito B", "Distrito C"],
                  hospitalet: ["Distrito X", "Distrito Y", "Distrito Z"]
              }
          }
      }
  }
};

function cargarEstados() {
  const paisSeleccionado = document.getElementById("pais").value;
  const estadoSelect = document.getElementById("estado");
  estadoSelect.innerHTML = "<option value=''>Seleccione un estado</option>";

  if (paisSeleccionado in paises) {
      const estados = paises[paisSeleccionado].estados;
      for (const estado in estados) {
          const option = document.createElement("option");
          option.value = estado;
          option.textContent = estado.charAt(0).toUpperCase() + estado.slice(1);
          estadoSelect.appendChild(option);
      }
  }
}

function cargarMunicipios() {
  const paisSeleccionado = document.getElementById("pais").value;
  const estadoSeleccionado = document.getElementById("estado").value;
  const municipioSelect = document.getElementById("municipio");
  municipioSelect.innerHTML = "<option value=''>Seleccione un municipio</option>";

  if (paisSeleccionado in paises && estadoSeleccionado in paises[paisSeleccionado].estados) {
      const municipios = paises[paisSeleccionado].estados[estadoSeleccionado].municipios;
      for (const municipio in municipios) {
          const option = document.createElement("option");
          option.value = municipio;
          option.textContent = municipio.charAt(0).toUpperCase() + municipio.slice(1);
          municipioSelect.appendChild(option);
      }
  }
}

function cargarLocalidades() {
  const paisSeleccionado = document.getElementById("pais").value;
  const estadoSeleccionado = document.getElementById("estado").value;
  const municipioSeleccionado = document.getElementById("municipio").value;
  const localidadSelect = document.getElementById("localidad");
  localidadSelect.innerHTML = "<option value=''>Seleccione una localidad</option>";

  if (paisSeleccionado in paises && estadoSeleccionado in paises[paisSeleccionado].estados) {
      const localidades = paises[paisSeleccionado].estados[estadoSeleccionado].municipios[municipioSeleccionado];
      if (localidades) {
          for (const localidad of localidades) {
              const option = document.createElement("option");
              option.value = localidad;
              option.textContent = localidad.charAt(0).toUpperCase() + localidad.slice(1);
              localidadSelect.appendChild(option);
          }
      }
  }
}
function enviarMensaje() {
  const paisSeleccionado = document.getElementById("pais").value;
  const estadoSeleccionado = document.getElementById("estado").value;
  const municipioSeleccionado = document.getElementById("municipio").value;
  const localidadSeleccionada = document.getElementById("localidad").value;

  // Comprobamos que se hayan seleccionado todos los niveles
  if (paisSeleccionado && estadoSeleccionado && municipioSeleccionado && localidadSeleccionada) {
      const mensaje = `País: ${paisSeleccionado}, Estado: ${estadoSeleccionado}, Municipio: ${municipioSeleccionado}, Localidad: ${localidadSeleccionada}`;
      alert(mensaje); // Puedes cambiar esto por la lógica que necesites para enviar el mensaje.
  } else {
      alert("Por favor, seleccione todas las opciones antes de enviar.");
  }
}
