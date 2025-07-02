import { faker } from '@faker-js/faker'

export class UserBuilder {
    addName() {
        this.userName = faker.internet.username()
        return this
    }

    addEmail() {
        this.email = faker.internet.email()
        return this
    }

    addPassword() {
        this.password = faker.internet.password()
        return this
    }

    generate() {
        return {
            name: this.userName,
            email: this.email,
            password: this.password,   
        }
    };
};