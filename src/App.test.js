"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const react_1 = require("@testing-library/react");
const App_1 = __importDefault(require("./App"));
(0, vitest_1.describe)('App', () => {
    (0, vitest_1.it)('Render hello world', () => {
        //ARRANGE
        (0, react_1.render)(<App_1.default />);
        //ACT
        expect(react_1.screen.getByRole('heading', {
            level: 3
        })).toHaveTextContent('Hello Test World');
        //EXPECT
    });
});
