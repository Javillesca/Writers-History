import { Injectable } from '@angular/core';
import { Writer } from '../interfaces/iWriter.interface';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  private writers: Writer[] = [
    {
      name: 'Antonio Machado',
      bio: 'Aunque influido por el modernismo y el simbolismo, su obra es expresión lírica del ideario de la Generación del 98. Hijo del folclorista Antonio Machado y Álvarez y hermano menor del también poeta Manuel Machado, pasó su infancia en Sevilla y en 1883 se instaló con su familia en Madrid.',
      img: 'assets/img/Antonio-Machado.png',
      birthday: '26/07/1875',
      daydeath: '22/02/1939',
      born: 'Sevilla'
    },
    {
      name: 'Federico García Lorca',
      bio: 'En el transcurso de la «Edad de Plata» (1900-1936), la literatura española recuperó aquel dinamismo innovador que parecía perdido desde su Siglo de Oro; tal periodo tuvo su culminación en la obra poética de la Generación del 27, así llamada por el rebelde homenaje que sus miembros rindieron a Luis de Góngora con motivo de su tercer centenario. Sin embargo, pese a la inmensa talla de figuras como Rafael Alberti, Pedro Salinas, Jorge Guillén, Gerardo Diego, Dámaso Alonso, Luis Cernuda o el premio Nobel Vicente Aleixandre, ningún miembro del grupo alcanzaría tanta proyección internacional como Federico García Lorca.',
      img: 'assets/img/Federico-Garcia-Lorca.png',
      birthday: '5/06/1898',
      daydeath: '18/08/1936',
      born: 'Fuente Vaqueros, Granada'
    },
    {
      name: 'Francisco de Quevedo',
      bio: 'Los padres de Francisco de Quevedo desempeñaban altos cargos en la corte, por lo que desde su infancia estuvo en contacto con el ambiente político y cortesano. Estudió en el colegio imperial de los jesuitas, y, posteriormente, en las Universidades de Alcalá de Henares y de Valladolid, ciudad ésta donde adquirió su fama de gran poeta y se hizo famosa su rivalidad con Góngora.',
      img: 'assets/img/Francisco-de-Quevedo.png',
      birthday: '14/09/1580',
      daydeath: '08/09/1645',
      born: 'Madrid'
    },
    {
      name: 'Gustavo Adolfo Bécquer',
      bio: 'Junto con Rosalía de Castro, es el máximo representante de la poesía posromántica, tendencia que tuvo como rasgos distintivos la temática intimista y una aparente sencillez expresiva, alejada de la retórica vehemencia del romanticismo.​',
      img: 'assets/img/Gustavo-Adolfo-Becquer.png',
      birthday: '17/02/1836',
      daydeath: '22/12/1870',
      born: 'Sevilla'
    },
    {
      name: 'Lope de Vega',
      bio: 'Procedente de una familia humilde, la vida de Lope de Vega fue sumamente agitada y repleta de lances amorosos. Estudió en los jesuitas de Madrid (1574) y cursó estudios universitarios en Alcalá (1576), aunque no consiguió el grado de bachiller.',
      img: 'assets/img/Lope-de-Vega.png',
      birthday: '25/11/1562',
      daydeath: '27/08/1635',
      born: 'Madrid'
    },
    {
      name: 'Miguel de Cervantes',
      bio: 'Don Quijote de la Mancha ha sido unánimemente definido como la obra cumbre de la literatura universal y una de las máximas creaciones del ingenio humano. Considerado asimismo el arranque de la novela moderna y concebido inicialmente por Cervantes como una parodia de los libros de caballerías, el Quijote es un libro externamente cómico e íntimamente triste, un retrato de unos ideales admirables burlescamente enfrentados a la mísera realidad; no son pocos los paralelos que se han querido establecer con la España imperial de los Austrias, potencia hegemónica destinada a gobernar el mundo en el siglo XVI y a derrumbarse en el XVII, y con la vida de su autor, gloriosamente herido en el triunfo de Lepanto y abocado luego a toda suerte de desdichas.',
      img: 'assets/img/Miguel-de-Cervantes.png',
      birthday: '29/09/1547',
      daydeath: '22/04/1616',
      born: 'Alcalá de Henares'
    },
    {
      name: 'Miguel de Unamuno',
      bio: 'Entre 1880 y 1884 estudió filosofía y letras en la Universidad de Madrid, época durante la cual leyó a Thomas Carlyle, Herbert Spencer, Friedrich Hegel y Karl Marx. Se doctoró con la tesis Crítica del problema sobre el origen y prehistoria de la raza vasca, y poco después accedió a la cátedra de lengua y literatura griega en la Universidad de Salamanca, en la que desde 1901 fue rector y catedrático de historia de la lengua castellana.',
      img: 'assets/img/Miguel-de-Unamuno.png',
      birthday: '29/09/1864',
      daydeath: '31/12/1936',
      born: 'Bilbao'
    }
  ];

  constructor() {
    console.log('Servicio funcionando');
  }


  getWriters(): Writer[] {
    return this.writers;
  }
}
