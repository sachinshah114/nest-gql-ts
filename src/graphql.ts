
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
    phone?: Nullable<string>;
}

export class AddressInput {
    address1: string;
    address2?: Nullable<string>;
    city: string;
    postcode: string;
}

export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    isVerified: boolean;
    verificationCode?: Nullable<string>;
    address?: Nullable<Address>;
    phone?: Nullable<string>;
    isBlocked: boolean;
}

export class Address {
    address1: string;
    address2?: Nullable<string>;
    city: string;
    postcode: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
