#!/usr/bin/env node

import { greetUser, runGame } from '../src/index.js';
import evenGame from '../src/games/even.js';

const userName = greetUser();
runGame(evenGame, userName);
