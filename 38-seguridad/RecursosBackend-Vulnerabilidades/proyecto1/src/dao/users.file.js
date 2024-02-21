import fs from 'fs'; // A06 Vulnerable and Outdated components
import __dirname from '../utils.js';

export default class UserService {
    constructor() {
        this.path(`${__dirname}/files/users.json`)
    }
}s