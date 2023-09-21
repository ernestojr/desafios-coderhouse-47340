let usuario = { nombre: 'Pedro López', edad: 34 };

let body = 'Hola ' + usuario.nombre + ' espero te encuetres muy bien.\n' +
  'Queremos avisarte de nuestas nuevas ofertas de seguro de vida.\n' +
  'Hemos visto que cumpliras un año más muy pronto, y queremos darte un obsequio.';

const edadFutura = usuario => usuario.edad + 1;

let bodyV2 = `Hola ${usuario.nombre} espero te encuetres muy bien.
Queremos avisarte de nuestas nuevas ofertas de seguro de vida.
Hemos visto que cumpliras ${edadFutura(usuario)} años muy pronto, y queremos darte un obsequio.`;

console.log(bodyV2);