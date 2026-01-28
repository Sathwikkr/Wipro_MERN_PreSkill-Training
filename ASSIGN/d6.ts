interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}


class ContactManager {
   
    private contacts: Contact[] = [];

  
    addContact(contact: Contact): void {
      
        const existingContact = this.contacts.find(c => c.id === contact.id);
        if (existingContact) {
            console.error(`Error: A contact with ID ${contact.id} already exists.`);
            return;
        }

        this.contacts.push(contact);
        console.log(`Success: Contact '${contact.name}' added successfully.`);
    }

    viewContacts(): Contact[] {
        return this.contacts;
    }

    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const index = this.contacts.findIndex(c => c.id === id);

        if (index === -1) {
            console.error(`Error: Contact with ID ${id} not found. Cannot modify.`);
            return;
        }

        this.contacts[index] = { ...this.contacts[index], ...updatedContact };
        console.log(`Success: Contact with ID ${id} modified successfully.`);
    }

    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);

        if (index === -1) {
            console.error(`Error: Contact with ID ${id} not found. Cannot delete.`);
            return;
        }

        const deletedName = this.contacts[index].name;
        this.contacts.splice(index, 1);
        console.log(`Success: Contact '${deletedName}' (ID: ${id}) deleted successfully.`);
    }
}


console.log("--- Initializing Contact Manager ---");
const myContactManager = new ContactManager();

console.log("\n--- Adding Contacts ---");
myContactManager.addContact({ id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890" });
myContactManager.addContact({ id: 2, name: "Bob Smith", email: "bob@example.com", phone: "987-654-3210" });


console.log("\n--- Viewing Contacts ---");
const allContacts = myContactManager.viewContacts();
console.table(allContacts); 

console.log("\n--- Modifying Contact (ID: 1) ---");

myContactManager.modifyContact(1, { phone: "555-555-5555" });


console.log("Current List after modification:");
console.table(myContactManager.viewContacts());


console.log("\n--- Deleting Contact (ID: 2) ---");
myContactManager.deleteContact(2);

console.log("Current List after deletion:");
console.table(myContactManager.viewContacts());


console.log("\n--- Testing Error Handling ---");
myContactManager.modifyContact(99, { name: "Ghost" }); 
myContactManager.deleteContact(99); 