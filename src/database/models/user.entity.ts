import { ApiProperty } from '@nestjs/swagger';
import { UUIDV4 } from 'sequelize';
import {
    Table,
    Column,
    Model,
    PrimaryKey,
    Default,
    DataType,
    Sequelize,
    CreatedAt,
    UpdatedAt,
    AllowNull,
} from 'sequelize-typescript';

@Table
export class User extends Model {
    @ApiProperty()
    @Default(UUIDV4())
    @PrimaryKey
    @Column(DataType.UUID)
    id!: string;

    @ApiProperty()
    @Column(DataType.STRING)
    firstName!: string;

    @ApiProperty()
    @Column(DataType.STRING)
    lastName!: string;

    @ApiProperty()
    @Column(DataType.STRING)
    email!: string;

    @ApiProperty()
    @Default('')
    @Column
    password!: string;

    @Column
    profileId!: string;

    @Column
    provider!: string;

    @Column
    role!: string;

    @Column
    profileImage!: string;

    @Column
    userHasCompany!: boolean;

    @Column
    timezone!: string;

    @ApiProperty()
    @Default(false)
    @Column(DataType.BOOLEAN)
    verified!: boolean;

    @Default(false)
    @Column(DataType.BOOLEAN)
    appTwoFactorEnabled!: boolean;

    @AllowNull(true)
    @Default(null)
    @Column(DataType.STRING)
    appTwoFactorSecret!: string | null;

    @Default(false)
    @Column(DataType.BOOLEAN)
    emailTwoFactorEnabled!: boolean;

    @AllowNull(true)
    @Default(null)
    @Column(DataType.STRING)
    emailTwoFactorSecret!: string | null;

    @CreatedAt
    @Default(Sequelize.fn('NOW'))
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Default(Sequelize.fn('NOW'))
    @Column(DataType.DATE)
    updatedAt!: Date;
}
