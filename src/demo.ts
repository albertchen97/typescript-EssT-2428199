interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
};

// Make ContactName an alias of the string type
type ContactName = string;
