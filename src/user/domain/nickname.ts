export class Nickname {
    public readonly value: string;

    constructor(value: string) {
        if (value.length > 10)
            throw new Error("Nickname is too long");
        this.value = value;
    }
}