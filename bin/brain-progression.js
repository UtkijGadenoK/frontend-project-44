#!/usr/bin/env node

import { greetUser, runGame } from '../src/index.js';
import progressionGame from '../src/games/progression.js';

const userName = greetUser();
runGame(progressionGame, userName);