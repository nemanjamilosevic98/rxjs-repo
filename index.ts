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

function showObservables() {
  observables();
}

function showHotVsColdObservables() {
  hotVsColdObservables();
}

function showSubjects() {
  subjects();
}

function showBehaviorSubjects() {
  behaviorSubjects();
}

function showReplaySubjects() {
  replaySubjects();
}

function showCreationOperators() {
  creationOperators();
}

function showJoinCreationOperators() {
  joinCreationOperators();
}

function showTransformationOperators() {
  transformatonOperators();
}

function showFilteringOperators() {
  filteringOperators();
}

function showJoinOperators() {
  joinOperators();
}

function showMulticastingOperators() {
  multicastingOperators();
}

function showErrorHandlingOperators() {
  errorHandlingOperators();
}

function showUtilityOperators() {
  utilityOperators();
}

function showConditionalAndBooleanOperators() {
  conditionalAndBooleanOperators();
}

function showMathAndAggregOperators() {
  mathAndAggregOperators();
}
