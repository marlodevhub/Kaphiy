// Clase Libro
class Libro {
    constructor(titulo, autor, año, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }

    // Método para obtener una descripción del libro
    obtenerDescripcion() {
        return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} en ${this.año}.`;
    }
}

// Clase Biblioteca
class Biblioteca {
    constructor(nombre) {
        this.nombre = nombre;
        this.libros = [];
    }

    // Método para añadir un libro a la biblioteca
    añadirLibro(libro) {
        if (libro instanceof Libro) {
            this.libros.push(libro);
        } else {
            console.log("Solo se pueden añadir objetos de tipo Libro.");
        }
    }

    // Método para mostrar todos los libros de la biblioteca
    mostrarLibros() {
        console.log(`Libros en la biblioteca "${this.nombre}":`);
        this.libros.forEach((libro) => {
            console.log(libro.obtenerDescripcion());
        });
    }

    // Método para buscar un libro por título
    buscarLibroPorTitulo(titulo) {
        return this.libros.find(
            (libro) => libro.titulo.toLowerCase() === titulo.toLowerCase()
        );
    }
}

// Ejemplo de uso
const libro1 = new Libro(
    "Cien Años de Soledad",
    "Gabriel García Márquez",
    1967,
    "Realismo Mágico"
);
const libro2 = new Libro("1984", "George Orwell", 1949, "Distopía");

const miBiblioteca = new Biblioteca("Mi Biblioteca Personal");
miBiblioteca.añadirLibro(libro1);
miBiblioteca.añadirLibro(libro2);

miBiblioteca.mostrarLibros();

// Búsqueda de un libro
const libroBuscado = miBiblioteca.buscarLibroPorTitulo("1984");
console.log(
    libroBuscado ? libroBuscado.obtenerDescripcion() : "Libro no encontrado."
);
