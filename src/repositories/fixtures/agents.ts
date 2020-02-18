import { Agent } from '../../models/agent.model'

const agent1 = new Agent(1, 'one', ['skill1'])
const agent2 = new Agent(2, 'two', ['skill1', 'skill2'])
const agent3 = new Agent(3, 'three', ['skill1', 'skill2', 'skill3'])

export const agents = [agent1, agent2, agent3]
