export class ApiService {
    static async fetchBooks() {
        return new Promise<any[]>((resolve) => {
        setTimeout(() => {resolve([
            { id=1 , title: "1984", author: "George Orwell", year: 1949, available: true },
            { id=2 , title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", year: 1943, available: true },
            { id=3 , title: "Dune", author: "Frank Herbert", year: 1965, available: true },]
            );},500);
        });
    }

}
