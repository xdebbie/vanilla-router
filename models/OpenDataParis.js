export default class OpendDataParis {
	constructor() {
		this.urlBase = `https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-`;
	}

	getAll(
		keyword = '',
		dateStart = new Date().getFullYear(),
		sort = '',
		rows = 20
	) {
		//console.log(`${this.urlBase}&rows=${rows}&q=${keyword}&refine.date_start=${dateStart}&sort=${sort}`);
		return fetch(
			`${this.urlBase}&rows=${rows}&q=${keyword}&refine.date_start=${dateStart}&sort=${sort}`
		)
			.then((response) => response.json())
			.then((data) => {
				// En utilisant array.map trier les résultats pour retouner uniqument les infos nécessaires
				return data.records.map((element) => {
					return {
						name: element.fields.title,
						address: {
							name: element.fields.address_name,
							street: element.fields.address_street,
							zipcode: element.fields.address_zipcode,
							city: element.fields.address_city,
						},
						image: {
							url: element.fields.cover_url,
							alt: element.fields.cover_alt,
						},
						date: element.fields.date_description,
					};
				});
			});
	}
}
