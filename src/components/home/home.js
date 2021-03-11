import * as React from "react";
import SearchResponse from "../../models/search-response";

export default class Home extends React.Component {
    async doQuery(query) {
        const promise = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
        return await promise.json();
    }

    constructor() {
        super();
        this.state = { data: [] };
    }

    async componentDidMount() {
        const datos = await this.doQuery('Apple ipod');
        const response = new SearchResponse(datos);
        this.setState({ data: response });
        console.log(response);
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        return (
            <div>
                Hola
            </div>
        );
    }
}
