export class PeliculasDB {
    constructor(){
    }

    establecerConexion(){  //devuelve los datos de la tabla Peliculas, sino hay ninguna la crea
        let peliculasDB;

        const tablaPeliculas = JSON.parse(localStorage.getItem('peliculas'));
    
        if (tablaPeliculas) {
            peliculasDB = tablaPeliculas;
    
        } else {
            //en caso de no encontrar ninguna base de datos pelicula creamos una
            const nuevaPelicula = [
                {   codigo: 0,
                    nombre: 'Oppenheimer',
                    categoria: 'pelicula',
                    genero: 'drama',
                    publicado: true,
                    destacada: true,
                    img_portada: '/img/peliculas/portadas/Oppenheimer_portada.jpg',
                    img_fondo: '/img/peliculas/fondos/Oppenheimer_fondo.jpg',
                    url_trailer: 'https://youtu.be/yLYbOe914ZU?si=s86bPU_fgA0AjQi1'
                }
            ];
    
            localStorage.setItem('peliculas', JSON.stringify(nuevaPelicula));
            peliculasDB =JSON.parse(localStorage.getItem('peliculas'));
        }
    
        return peliculasDB;    
    }

    obtenerCodigo(){ //obtiene el siguiente codigo segun la base de datos de peliculas
        const datos = this.establecerConexion();
        const ultimoElemento = datos.length - 1;
        return datos[ultimoElemento].codigo + 1;
    }

    agregarPelicula(objPelicula){ 

        const nuevaPelicula = {
            codigo: objPelicula.codigo,
            nombre: objPelicula.nombre,
            categoria: objPelicula.categoria,
            genero: objPelicula.genero,
            publicado: objPelicula.publicado,
            destacada: objPelicula.destacada,
            img_portada: objPelicula.img_portada,
            img_fondo: objPelicula.img_fondo,
            url_trailer: objPelicula.url_trailer
        };

        let peliculasDB = this.establecerConexion();
 
        peliculasDB.push(nuevaPelicula);
        //Actualizo la nueva base de datos
        localStorage.setItem('peliculas', JSON.stringify(peliculasDB));
    }


    buscarPelicula(){

    }

    mostrarPeliculas(){

    }
}