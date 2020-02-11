export class ProcessTaskCommand {
  constructor(
    public readonly id: number,
    public readonly priority: boolean,
    public readonly skills: string[],
  ) {}
}
