export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    };
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    };

    getAllBooks = async () => {
        return this.getResource('/books');
    };
    getBook = async (id) => {
        return this.getResource(`/books/${id}`);
    };

    getAllHouses = async () => {
        return this.getResource('/houses?page=5&pageSize=10');
    };
    getHouse = async (id) => {
        return this.getResource(`/houses/${id}`);
    };

    _transformCharacter(char) {
        const id = char.url.match(/\/([0-9]+)$/)[1]; // ← ID из URL
        return {
            id,
            name: char.name || 'Unknoun',
            gender: char.gender || 'Unknoun',
            born: char.born || 'Unknoun',
            died: char.died || 'Unknoun',
            culture: char.culture || 'Unknoun',
        };
    }

    _transformHouse(house) {
        return {
            name: house.name || 'Unknoun',
            region: house.region || 'Unknoun',
            words: house.words || 'Unknoun',
            overlord: house.overlord || 'Unknoun',
            ancestralWeapons: house.ancestralWeapons || 'Unknoun',
        };
    }

    _transformBook(book) {
        const id = book.url.match(/\/([0-9]+)$/)[1];
        return {
            id,
            name: book.name || 'Unknoun',
            numberOfPages: book.numberOfPages || 'Unknoun',
            publisher: book.publisher || 'Unknoun',
            released: book.released || 'Unknoun',
        };
    }
}

// const got = new GotService();

// got.getAllBooks().then((res) =>
//     res.forEach((item) => console.log(item.name))
// );
// got.getBook(10).then((res) => console.log(res));

// got.getAllHouses().then((res) =>
//     res.forEach((item) => console.log(item.name))
// );
// got.getHouse(10).then((res) => console.log(res));
