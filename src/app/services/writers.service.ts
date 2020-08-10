import { Injectable } from '@angular/core';
import { Writer } from '../interfaces/iWriter.interface';
import { Router } from '@angular/router';

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
      born: 'Sevilla',
      phrases: ['En el corazón tenía la espina de una pasión. Logré arrancármela un día: ya no siento el corazón.',
                'Aprende a dudar y acabarás dudando de tu propia duda; de este modo premia Dios al escéptico y al creyente.',
                'Despacito y buena letra, que el hacer las cosas bien, importa más que el hacerlas.',
                'Converso con el hombre que siempre va conmigo. Quien habla solo, espera hablar con Dios un día.',
                'Cuatro principios a tener en cuenta: Lo contrario es también frecuente. No basta mover para renovar. No basta renovar para mejorar. No hay nada que sea absolutamente empeorable.',
                'Dicen que el hombre no es hombre mientras no oye su nombre de labios de una mujer.',
                'Hay dos clases de hombres: los que viven hablando de las virtudes y los que se limitan a tenerlas.',
                'Hoy es siempre todavía.',
                'La verdad es lo que es, y sigue siendo verdad aunque se piense al revés.',
                'Para dialogar, preguntad primero; después... escuchad.'
      ]
    },
    {
      name: 'Federico García Lorca',
      bio: 'En el transcurso de la «Edad de Plata» (1900-1936), la literatura española recuperó aquel dinamismo innovador que parecía perdido desde su Siglo de Oro; tal periodo tuvo su culminación en la obra poética de la Generación del 27, así llamada por el rebelde homenaje que sus miembros rindieron a Luis de Góngora con motivo de su tercer centenario. Sin embargo, pese a la inmensa talla de figuras como Rafael Alberti, Pedro Salinas, Jorge Guillén, Gerardo Diego, Dámaso Alonso, Luis Cernuda o el premio Nobel Vicente Aleixandre, ningún miembro del grupo alcanzaría tanta proyección internacional como Federico García Lorca.',
      img: 'assets/img/Federico-Garcia-Lorca.png',
      birthday: '5/06/1898',
      daydeath: '18/08/1936',
      born: 'Fuente Vaqueros, Granada',
      phrases: ['La poesía no quiere adeptos, quiere amantes.',
                'Porque tú crees que el tiempo cura y que las paredes tapan, y no es verdad, no es verdad.',
                'Desechad tristezas y melancolías. La vida es amable, tiene pocos días y tan sólo ahora la hemos de gozar.',
                'Como no me he preocupado de nacer, no me preocupo de morir.',
                'La suerte viene a quien menos la aguarda.',
                'Sólo el misterio nos hace vivir. Sólo el misterio.',
                'El más terrible de todos los sentimientos es el sentimiento de tener la esperanza muerta.',
                'El que quiere arañar la luna, se arañará el corazón.',
                'Siento mi pecho lleno de corazoncillos, como de cascabeles.',
                '¡Libros! ¡Libros! He aquí una palabra mágica que equivale a decir “amor, amor”, y que debían los pueblos pedir como piden pan.'
      ]
    },
    {
      name: 'Francisco de Quevedo',
      bio: 'Los padres de Francisco de Quevedo desempeñaban altos cargos en la corte, por lo que desde su infancia estuvo en contacto con el ambiente político y cortesano. Estudió en el colegio imperial de los jesuitas, y, posteriormente, en las Universidades de Alcalá de Henares y de Valladolid, ciudad ésta donde adquirió su fama de gran poeta y se hizo famosa su rivalidad con Góngora.',
      img: 'assets/img/Francisco-de-Quevedo.png',
      birthday: '14/09/1580',
      daydeath: '08/09/1645',
      born: 'Madrid',
      phrases: ['La guerra es de por vida en los hombres, porque es guerra la vida, y vivir y militar es una misma cosa.',
                'La posesión de la salud es como la de la hacienda, que se goza gastándola, y si no se gasta, no se goza.',
                'Por nuestra codicia lo mucho es poco; por nuestra necesidad lo poco es mucho.',
                'Es la vida un dolor en que se empieza el de la muerte, que dura mientras dura ella.',
                'Lo que en la juventud se aprende, toda la vida dura.',
                'Todos deseamos llegar a viejos; y todos negamos que hemos llegado.',
                'Menos mal hacen los delincuentes que un mal juez.',
                'Virtud envidiada es dos veces virtud.',
                'El valiente tiene miedo del contrario; el cobarde, de su propio temor.',
                'Lo mucho se vuelve poco con sólo desear otro poco más.'
      ]
    },
    {
      name: 'Gustavo Adolfo Bécquer',
      bio: 'Junto con Rosalía de Castro, es el máximo representante de la poesía posromántica, tendencia que tuvo como rasgos distintivos la temática intimista y una aparente sencillez expresiva, alejada de la retórica vehemencia del romanticismo.​',
      img: 'assets/img/Gustavo-Adolfo-Becquer.png',
      birthday: '17/02/1836',
      daydeath: '22/12/1870',
      born: 'Sevilla',
      phrases: ['La soledad es el imperio de la conciencia.',
                'Y el pensamiento es necesario ejercitarlo, se debe cada día y de nuevo y de nuevo pensar, para conservar la vida del pensamiento.',
                'Todo es mentira: la gloria, el oro. Lo que yo adoro sólo es verdad: ¡la Libertad!',
                'El amor es un rayo de luna.',
                'El alma que hablar puede con los ojos también puede besar con la mirada.',
                'El que tiene imaginación con qué facilidad saca de la nada un mundo.',
                'Mi cerebro es el caos, mis ojos la destrucción, mi esencia la nada.',
                'La soledad es muy hermosa… cuando se tiene alguien a quien decírselo.',
                'Podrá nublarse el sol eternamente, podrá secarse por un instante el mar, podrá romperse el eje de la tierra como un débil cristal… ¡Todo sucederá! Podrá la muerte cubrirme con su fúnebre crespón, pero jamás podrá apagarse en mi la llama de tu amor.',
                'Hoy la tierra y los cielos me sonríen, hoy llega al fondo de mi alma el sol, hoy la he visto… La he visto y me ha mirado…. ¡Hoy creo en Dios!'
      ]
    },
    {
      name: 'Lope de Vega',
      bio: 'Procedente de una familia humilde, la vida de Lope de Vega fue sumamente agitada y repleta de lances amorosos. Estudió en los jesuitas de Madrid (1574) y cursó estudios universitarios en Alcalá (1576), aunque no consiguió el grado de bachiller.',
      img: 'assets/img/Lope-de-Vega.png',
      birthday: '25/11/1562',
      daydeath: '27/08/1635',
      born: 'Madrid',
      phrases: ['Lo que cuenta no es mañana, sino hoy. Hoy estamos aquí, mañana tal vez, nos hayamos marchado.',
                'Que pobreza no es vileza mientras no hace cosas malas.',
                'Pero la vida es corta: viviendo, todo falta; muriendo, todo sobra.',
                'Celos son hijos del amor, mas son bastardos, te confieso.',
                '¡Oh, libertad gran tesoro! porque no hay buena prisión, aunque fuese en grillos de oro.',
                '¡Dios me libre de enemistades de amigos!',
                'No hay placer que no tenga por límite el pesar.',
                'No hay cosa más fácil que dar consejo ni más difícil que saberlo tomar.',
                'No hay en el mundo palabras tan eficaces ni oradores tan elocuentes como las lágrimas.',
                'Son celos cierto temor tan delgado y tan sutil, que si no fuera tan vil, pudiera llamarse amor.'
      ]
    },
    {
      name: 'Miguel de Cervantes',
      bio: 'Don Quijote de la Mancha ha sido unánimemente definido como la obra cumbre de la literatura universal y una de las máximas creaciones del ingenio humano. Considerado asimismo el arranque de la novela moderna y concebido inicialmente por Cervantes como una parodia de los libros de caballerías, el Quijote es un libro externamente cómico e íntimamente triste, un retrato de unos ideales admirables burlescamente enfrentados a la mísera realidad; no son pocos los paralelos que se han querido establecer con la España imperial de los Austrias, potencia hegemónica destinada a gobernar el mundo en el siglo XVI y a derrumbarse en el XVII, y con la vida de su autor, gloriosamente herido en el triunfo de Lepanto y abocado luego a toda suerte de desdichas.',
      img: 'assets/img/Miguel-de-Cervantes.png',
      birthday: '29/09/1547',
      daydeath: '22/04/1616',
      born: 'Alcalá de Henares',
      phrases: ['En un lugar de la Mancha, de cuyo nombre no quiero acordarme.',
                'Una retirada no es una derrota.',
                'Dad crédito a las obras y no a las palabras',
                '¿Qué locura o desatino me lleva a contar las ajenas faltas, teniendo tanto que decir de las mías?',
                'Más vale la pena en el rostro que la mancha en el corazón.',
                'Hacer bien a villanos es echar agua en el mar.',
                'La abundancia de las cosas, aunque sean buenas, hace que no se estimen, y la carestía, aún de las malas, se estima en algo.',
                'Ayer lloraba el que hoy ríe y hoy llora el que ayer rió.',
                'Amor y deseo son dos cosas diferentes; que no todo lo que se ama se desea, ni todo lo que se desea se ama.',
                'Si los celos son señales de amor, es como la calentura en el hombre enfermo: que el tenerla es señal de tener vida, pero vida enferma y mal dispuesta.'
      ]
    },
    {
      name: 'Miguel de Unamuno',
      bio: 'Entre 1880 y 1884 estudió filosofía y letras en la Universidad de Madrid, época durante la cual leyó a Thomas Carlyle, Herbert Spencer, Friedrich Hegel y Karl Marx. Se doctoró con la tesis Crítica del problema sobre el origen y prehistoria de la raza vasca, y poco después accedió a la cátedra de lengua y literatura griega en la Universidad de Salamanca, en la que desde 1901 fue rector y catedrático de historia de la lengua castellana.',
      img: 'assets/img/Miguel-de-Unamuno.png',
      birthday: '29/09/1864',
      daydeath: '31/12/1936',
      born: 'Bilbao',
      phrases: ['Primero la verdad que la paz.',
                'A veces, el silencio es la peor mentira.',
                'Amor definido deja de serlo.',
                'Todo acto de bondad es una demostración de poderío.',
                'Cada nuevo amigo que ganamos en la carrera de la vida nos perfecciona y enriquece más aún por lo que de nosotros mismos nos descubre, que por lo que de él mismo nos da.',
                '¿De qué te sirve meterte a definir la felicidad si no logra uno con ello ser feliz?',
                'El modo de dar una vez en el clavo, es dar cien veces en la herradura.',
                'El nacionalismo es la chifladura de exaltados echados a perder por indigestiones de mala historia.',
                'Es débil porque no ha dudado bastante y ha querido llegar a conclusiones.',
                'Es muy triste no sentirse amado, pero es mucho más triste no ser capaz de amar.'
      ]
    }
  ];

  constructor(private router: Router) {
  }

  getWriters(): Writer[] {
    return this.writers;
  }

  getWriter( i: number ): Writer {
    return this.writers[i];
  }

  showWriter(id: number): any {
    this.router.navigate(['/writer', id]);
  }

  searchWriters( value: string): Writer[] {
    let writersArr: Writer[] = [];
    value = value.toLowerCase();

    for ( let i = 0; i < this.writers.length; i++ ) {
      if ( this.writers[i].name.toLowerCase().indexOf(value) >= 0 ) {
        this.writers[i].id = i;
        writersArr.push(this.writers[i]);
      }
    }
    return writersArr;
  }
}
