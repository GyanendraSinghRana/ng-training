import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    let articleDetails = [
      {id: 1, title: 'The Alchemist', category: 'Literature', writer: 'Paulo Coelho'},
      {id: 2, title: 'War and Peace', category: 'Literature', writer: 'Leo Tolstoy'},
      {id: 3, title: 'Resurrection ', category: 'Literature', writer: 'Leo Tolstoy'}
    ];
    return { articles: articleDetails };
  } 
} 