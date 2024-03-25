export class Project {
  constructor(
    public id: string,
    public year: number,
    public type: string,
    public image: string,
    public title: string,
    public madeBy: string,
    public description: string,
    public builtWith: string,
    public code: string,
    public project: string
  ) {}
}
