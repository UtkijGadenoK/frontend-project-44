#!/usr/bin/env node

import { greetUser, runGame } from '../src/index.js';
import calcGame from '../src/games/calc.js';

const userName = greetUser();
runGame(calcGame, userName);
