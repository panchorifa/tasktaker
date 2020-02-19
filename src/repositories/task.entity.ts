import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
// import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { AgentEntity } from './agent.entity';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(type => AgentEntity, agent => agent.tasks)
  agent: AgentEntity;

  @Column({type: 'smallint', nullable: false})
  priority: number;

  @CreateDateColumn({nullable: false})
  created_at: Date;

  @Column({nullable: true})
  started_at: null | Date;

  @Column({nullable: true})
  completed_at: null | Date;

  // @BeforeInsert()
  // hashStarted () {
  //   if(!this.agent.current_task)
  //   this.started_at = cryptoPassword(this.password)
  // }

}
