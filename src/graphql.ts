
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateUserInput {
    name: string;
    email: string;
    password: string;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
