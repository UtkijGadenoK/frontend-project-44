#!/usr/bin/env node

import { greetUser, runGame } from '../src/index.js';
import gcdGame from '../src/games/gcd.js';

const userName = greetUser();
runGame(gcdGame, userName);
