import Item from "./item";

export default class SearchResponse {
    author;
    categories;
    items;

    constructor(data) {
        this.author = {
            name: 'Ernesto',
            lastname: 'Melian'
        };
        this.categories = this.filters2Categories(data.filters);
        this.items = data.results.map(x=> {
            return new Item(x);
        });
    }

    filters2Categories(filters) {
        const categoryFilter = filters.find(x => x.id === 'category');
        let categories = [];
        for (const value of categoryFilter.values) {
            categories = [...categories,...value.path_from_root];
        }
        return categories;
    }

}
