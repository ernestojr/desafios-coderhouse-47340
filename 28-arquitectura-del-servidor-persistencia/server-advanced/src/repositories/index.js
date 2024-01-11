import { contactDao } from '../dao/factory.js';

import ContactsRepository from './contacts.repository.js';

export const contactsRepository = new ContactsRepository(contactDao);
