#!/usr/bin/env node

import { greetUser, runGame } from '../src/index.js';
import primeGame from '../src/games/prime.js';

const userName = greetUser();
runGame(primeGame, userName);
