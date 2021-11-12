export class Challenge {
  private _id:number;
  private _timestamp_creation:Date;
  private _challenged:number;
  private _challenger:number;
  private _deadline:number;
  private _description:string;
  private _evaluator:number
  private _title:string;
  private _status:string;
  private _timestamp_acceptance:Date;
  private _result:string;

  constructor(id: number, timestamp_creation: Date, challenged: number, challenger: number, deadline: number, description: string, evaluator: number, title:string, status:string, timestamp_acceptance:Date, result:string) {
    this._id = id;
    this._timestamp_creation = timestamp_creation;
    this._challenged = challenged;
    this._challenger = challenger;
    this._deadline = deadline;
    this._description = description;
    this._evaluator = evaluator;
    this._title = title;
    this._status = status;
    this._timestamp_acceptance = timestamp_acceptance;
    this._result = result;

  }


  get result(): string {
    return this._result;
  }

  set result(value: string) {
    this._result = value;
  }

  get timestamp_acceptance(): Date {
    return this._timestamp_acceptance;
  }

  set timestamp_acceptance(value: Date) {
    this._timestamp_acceptance = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get timestamp_creation(): Date {
    return this._timestamp_creation;
  }

  set timestamp_creation(value: Date) {
    this._timestamp_creation = value;
  }

  get challenged(): number {
    return this._challenged;
  }

  set challenged(value: number) {
    this._challenged = value;
  }

  get challenger(): number {
    return this._challenger;
  }

  set challenger(value: number) {
    this._challenger = value;
  }

  get deadline(): number {
    return this._deadline;
  }

  set deadline(value: number) {
    this._deadline = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get evaluator(): number {
    return this._evaluator;
  }

  set evaluator(value: number) {
    this._evaluator = value;
  }
}
