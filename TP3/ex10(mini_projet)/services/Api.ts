export class ApiService {
    static async fetchBooks() {
        return new Promise<any[]>((resolve) => {
        setTimeout(() => {resolve([
            { titre: "1984", auteur: "George Orwell", annee: 1949 },
            { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", annee: 1943 },
            { titre: "Dune", auteur: "Frank Herbert", annee: 1965 },]
            );},500);
        });
    }
}