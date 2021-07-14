const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Matheus',
    email: 'matheus@gmail.com',
    phone: '90909099',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
