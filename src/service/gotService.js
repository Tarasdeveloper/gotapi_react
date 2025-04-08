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
        const book = await this.getResource('/books');
        return book.map(this._transformBook);
    };
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    };

    getAllHouses = async () => {
        const res = await this.getResource('/houses?page=5&pageSize=10');
        return res.map(this._transformHouse);
    };
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
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
        const id = house.url.match(/\/([0-9]+)$/)[1];
        return {
            id,
            name: house.name || 'Unknoun',
            region: house.region || 'Unknoun',
            titles: house.titles || 'Unknoun',
            coatOfArms: house.coatOfArms || 'Unknoun',
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
