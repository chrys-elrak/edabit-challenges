const { fiscalCode } = require('./app');

describe("Testing fiscal code", function () {
    test("Should return CHEBND61T01", function () {
        expect(
            fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" })
        )
            .toBe('CHEBND61T01');
    });

    test("Should return YUXHLN50T41", function () {
        expect(
            fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" })
        )
            .toBe('YUXHLN50T41');
    });

    test("Should return CPNLAX99A17", function () {
        expect(
            fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" })
        )
            .toBe('CPNLAX99A17');
    });

    test("Should return MSOMCK28A16", function () {
        expect(
            fiscalCode({ name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928" })
        )
            .toBe('MSOMCK28A16');
    });

    test("Should return CRUMRA67S47", function () {
        expect(
            fiscalCode({ name: "Marie", surname: "Curie", gender: "F", dob: "7/11/1867" })
        )
            .toBe('CRUMRA67S47');
    });
});