import './style.css';
import { observables } from './observables/observables';
import { hotVsColdObservables } from './observables/hot-vs-cold-observables';
import { subjects } from './subjects/subjects';
import { behaviorSubjects } from './subjects/behavior-subjects';
import { replaySubjects } from './subjects/replay-subjects';
import { creationOperators } from './operators/creation/creation-operators';
import { joinCreationOperators } from './operators/join-creation/join-creation-operators';
import { transformatonOperators } from './operators/transformation/transformation-operators';
import { filteringOperators } from './operators/filtering/filtering-operators';
import { joinOperators } from './operators/join/join-operators';
import { multicastingOperators } from './operators/multicasting/multicasting-operators';
import { errorHandlingOperators } from './operators/error-handling/error-handling-operators';
import { utilityOperators } from './operators/utility/utility-operators';
import { conditionalAndBooleanOperators } from './operators/conditional-boolean/conditional-boolean-operators';
import { mathAndAggregOperators } from './operators/mathematical-aggregate/math-aggreg-operators';

document.getElementById('observables').addEventListener('click', observables);

document
  .getElementById('hotVsColdObservables')
  .addEventListener('click', hotVsColdObservables);

document.getElementById('subjects').addEventListener('click', subjects);

document
  .getElementById('behaviorSubjects')
  .addEventListener('click', behaviorSubjects);

document
  .getElementById('replaySubjects')
  .addEventListener('click', replaySubjects);

document
  .getElementById('creationOperators')
  .addEventListener('click', creationOperators);

document
  .getElementById('joinCreationOperators')
  .addEventListener('click', joinCreationOperators);

document
  .getElementById('transformationOperators')
  .addEventListener('click', transformatonOperators);

document
  .getElementById('filteringOperators')
  .addEventListener('click', filteringOperators);

document
  .getElementById('joinOperators')
  .addEventListener('click', joinOperators);

document
  .getElementById('multicastingOperators')
  .addEventListener('click', multicastingOperators);

document
  .getElementById('errorHandlingOperators')
  .addEventListener('click', errorHandlingOperators);

document
  .getElementById('utilityOperators')
  .addEventListener('click', utilityOperators);

document
  .getElementById('conditionalAndBooleanOperators')
  .addEventListener('click', conditionalAndBooleanOperators);

document
  .getElementById('mathAndAggregOperators')
  .addEventListener('click', mathAndAggregOperators);
