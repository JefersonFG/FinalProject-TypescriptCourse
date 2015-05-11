//The painterSummary class holds the key/value pairs for the items to be displayed on the dropdown list

export class painterSummary {
    //Fields
    
    title: string;
    text: string;
    
    //Constructor
    
    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }
} 