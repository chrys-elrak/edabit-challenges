
/**
 * 
 * @param {{ name: string, surname: string, gender: string, dob: string }} person 
 */
function fiscalCode(person) {

	const vowels = 'aeyuio'.split("");
	const consonants = 'qwrtpsdfghjklzxcvbnm'.split("");
	const months = {
		1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
		7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T"
	}

	let code1 = '', code2 = '', code3 = '';

	// Generate 3 capital letters from the surname
	const surname = person.surname
		.toLocaleLowerCase()
		.split("")
		.filter(c => consonants.includes(c));
	code1 = surname.slice(0, 3).join("");

	const vows1 = person.surname.toLocaleLowerCase()
		.split("").filter(c => vowels.includes(c));

	for (let i = 0; i < 3; i++) {
		if (code1.length < 3) {
			code1 += vows1[i] || 'x';
		}
	}

	// Generate 3 capital letters from the name
	const name = person.name
		.toLocaleLowerCase()
		.split("")
		.filter(c => consonants.includes(c));


	const vows2 = person.name.toLocaleLowerCase()
		.split("").filter(c => vowels.includes(c));

	code2 = name.join('');

	if (code2.length > 3) {
		code2 = name[0] + name[2] + name[3];
	}
	if (code2.length < 3) {
		for (let i = 0; i < 3 - name.length; i++) {
			code2 += vows2[i] || 'x';
		}
	}

	// Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender
	let [d, m, y] = person.dob.split('/');

	let yy = y.slice(-2);
	const mm = months[m];

	if (person.gender === 'M') {
		if (+d < 10) {
			d = '0' + d;
		}
	} else {
		d = +d + 40;
	}

	code3 = yy + mm + d;

	return code1.toUpperCase() + code2.toUpperCase() + code3;
}

module.exports = {
	fiscalCode
};
