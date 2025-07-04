import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true
    })
    title: string;

    @Column('float', {
        default: 0
    })
    price: number

    @Column('text', {
        nullable: true
    })
    descrption: string

    @Column('text', {
        unique: true
    })
    slug: string

    @Column('numeric', {
        default: 0
    })
    stock: number
    
    @Column('text', {
        array: true
    })
    sizes: string[]

    @Column('text')
    gender: string

    @BeforeInsert()
    checkSlogInsert(){
        if( !this.slug ) {
            this.slug = this.title
        }

        this.slug = this.slug
        .toLowerCase()
        .replaceAll(' ', '_')
        .replaceAll("'", '')
    }
}
