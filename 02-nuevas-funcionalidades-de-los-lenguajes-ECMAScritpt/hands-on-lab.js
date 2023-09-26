class TicketManager {
  #priceBase = 0.15;
  constructor() {
    this.events = [];
  }

  getEvents() {
    return this.events;
  }

  addEvent(name, address, price, capacity = 50, date = new Date()) {
    this.events.push({
      id: this.events.length + 1,
      name,
      address,
      price: price + (this.#priceBase * price),
      capacity,
      date,
      participants: [],
    });
    console.log('Event added');
  }

  addParticipant(eventId, participant) {
    let event = this.events.find(event => event.id === eventId);
    if (!event) {
      console.log('Event not found');
      return;
    }
    if(event.participants.includes(participant)) {
      console.log('Participant already registered');
      return;
    }
    event.participants.push(participant);
    console.log('Participant added');
  }

  putEventOnTour(eventId, address, date = new Date()) {
    let event = this.events.find(event => event.id === eventId);
    if (!event) {
      console.log('Event not found');
      return;
    }
    this.events.push({
      ...event,
      id: this.events.length + 1,
      address,
      date,
      participants: [],
    });
  }
}

let ticketManager = new TicketManager();

ticketManager.addEvent('Concierto de rock', 'Av. Siempre viva 123', 100, 1000);

console.log(ticketManager.getEvents());

ticketManager.addParticipant(1, 'Juan');
ticketManager.addParticipant(1, 'Pedro');
ticketManager.addParticipant(1, 'Juan');

console.log(ticketManager.getEvents());

ticketManager.putEventOnTour(1, 'Av. Siempre viva 456', new Date('2021-12-31'));

console.log(ticketManager.getEvents());