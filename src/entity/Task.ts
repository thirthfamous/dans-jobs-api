import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name: string

    @Column({
        nullable: true
    })
    description?: string

    @Column({
        default: 0
    })
    done?: boolean
}
