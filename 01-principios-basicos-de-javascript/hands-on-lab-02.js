class Counter {

  static globalCount = 0;

  constructor(responsible) {
    this.responsible = responsible;
    this.count = 0;
  }

  increment() {
    this.count++;
    Counter.globalCount++;
  }

  getIndividualCount() {
    return this.count;
  }

  getResponsible() {
    return this.responsible;
  }

  static getGlobalCount() {
    return Counter.globalCount;
  }
}

const counter1 = new Counter('Juan');
counter1.increment();
counter1.increment();
counter1.increment();

const counter2 = new Counter('María');
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();

console.log(`✅ Contador de ${counter1.getResponsible()}: ${counter1.getIndividualCount()}`);
console.log(`✅ Contador de ${counter2.getResponsible()}: ${counter2.getIndividualCount()}`);

console.log(`✅ Contador Global: ${Counter.getGlobalCount()}`);