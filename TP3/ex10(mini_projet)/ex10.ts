import { Repository } from './utils/repository';
import { Library } from './services/library';
import { Person,Role } from './models/person.ts';
import { Livre } from './models/book.ts';
import { ApiService } from './services/Api.ts';
async function main() {
  const library = new Library();

  const livres = await ApiService.fetchBooks();

  livres.forEach(l => library.ajouter(l));

  console.log(library);

}
