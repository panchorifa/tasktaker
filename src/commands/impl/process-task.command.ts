export class ProcessTaskCommand {
  constructor(
    public readonly priority: number,
    public readonly skills: string[]
  ) {}
}
