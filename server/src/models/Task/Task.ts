class Task {
    private id: string;
    private name: string;
    private hours: number;
    private minutes: number;
    private finished: boolean

    constructor(name: string, hours: number, minutes: number);
    constructor(name: string, hours: number, minutes: number, id: string);
    constructor(name: string, hours: number, minutes: number, id: string, finished: boolean);

    public constructor(name: string, hours: number, minutes: number, id?: string, finished?: boolean) {

        if (id) this.id = id;
        else  this.id = crypto.randomUUID();

        if (finished) this.finished = finished;
        else this.finished = false;

        this.name = name;
        this.hours = hours;
        this.minutes = minutes;
    }

    public getData(): object {
        return {
            id: this.id,
            name: this.name,
            hours: this.hours,
            minutes: this.minutes,
            finished: this.finished
        }
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setHours(hours: number): void {
        this.hours = hours;
    }

    public setMinutes(minutes: number): void {
        this.minutes = minutes;
    }

    public makeFinished(): void {
        this.finished = true;
    }

    public makeUnFinished(): void {
        this.finished = false;
    }

    public setTime(hours: number, minutes: number): void {
        this.hours = hours;
        this.minutes = minutes;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getHours(): number {
        return this.hours;
    }

    public getMinutes(): number {
        return this.minutes;
    }

    public getFinished(): boolean {
        return this.finished;
    }

    display(): void {
        console.log("Id : " + this.id + "name : " + this.name + ", duration : " + this.hours + "h" +
            this.minutes + "min" + (this.finished ? " is finished" : "is not finished"));
    }
}


export default Task;