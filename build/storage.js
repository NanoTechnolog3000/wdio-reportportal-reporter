"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Storage = void 0;
class Storage {
    constructor() {
        this.testItems = new Map();
        this.allTestItems = new Array();
        this.suites = new Array();
    }
    getCurrentSuite() {
        const currentSuite = this.suites[this.suites.length - 1];
        return currentSuite ? currentSuite : null;
    }
    getCurrentTest() {
        const activeTests = Array.from(this.testItems.values());
        if (activeTests.length === 0) {
            return null;
        }
        return activeTests[activeTests.length - 1];
    }
    addSuite(value) {
        this.suites.push(value);
    }
    removeSuite() {
        this.suites.pop();
    }
    addTest(uid, value) {
        this.testItems.set(uid, value);
        this.allTestItems.push(value);
    }
    removeTest(item) {
        return this.testItems.delete(item.wdioEntity.uid);
    }
    getStartedTests() {
        const tests = this.allTestItems || [];
        return tests.slice();
    }
}
exports.Storage = Storage;
