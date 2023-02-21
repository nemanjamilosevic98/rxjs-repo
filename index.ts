import './style.css';
import { observables } from './observables/observables';
import { hotVsColdObservables } from './observables/hot-vs-cold-observables';
import { subjects } from './subjects/subjects';
import { behaviorSubjects } from './subjects/behavior-subjects';
import { replaySubjects } from './subjects/replay-subjects';
import * as CreationOperators from './operators/creation/creation-operators';
import * as JoinCreationOperators from './operators/join-creation/join-creation-operators';
import * as TransformationOperators from './operators/transformation/transformation-operators';
import * as MulticastingOperators from './operators/multicasting/multicasting-operators';

init();

function init() {
  addBasicsListeners();
  addCreationOperatorsListeners();
  addJoinCreationOperatorsListeners();
  addTransformationOperatorsListeners();
  addMulticastingOperatorsListeners();
}

// basics listeners
function addBasicsListeners() {
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
}

// creation operators
function addCreationOperatorsListeners() {
  document
    .getElementById('creation-of')
    .addEventListener('click', CreationOperators.operatorOf);
  document
    .getElementById('creation-range')
    .addEventListener('click', CreationOperators.operatorRange);
  document
    .getElementById('creation-from')
    .addEventListener('click', CreationOperators.operatorFrom);
  document
    .getElementById('creation-fromEvent')
    .addEventListener('click', CreationOperators.operatorFromEvent);
  document
    .getElementById('creation-fromEventPattern')
    .addEventListener('click', CreationOperators.operatorFromEventPattern);
  document
    .getElementById('creation-timer')
    .addEventListener('click', CreationOperators.operatorTimer);
  document
    .getElementById('creation-interval')
    .addEventListener('click', CreationOperators.operatorInterval);
  document
    .getElementById('creation-generate')
    .addEventListener('click', CreationOperators.operatorGenerate);
  document
    .getElementById('creation-iif')
    .addEventListener('click', CreationOperators.operatorIif);
  document
    .getElementById('creation-ajax')
    .addEventListener('click', CreationOperators.operatorAjax);
  document
    .getElementById('creation-bindCallback')
    .addEventListener('click', CreationOperators.operatorBindCallback);
  document
    .getElementById('creation-throwError')
    .addEventListener('click', CreationOperators.operatorThrowError);
}

// join-creation operators
function addJoinCreationOperatorsListeners() {
  document
    .getElementById('join-creation-combineLatest')
    .addEventListener('click', JoinCreationOperators.operatorCombineLatest);
  document
    .getElementById('join-creation-concat')
    .addEventListener('click', JoinCreationOperators.operatorConcat);
  document
    .getElementById('join-creation-forkJoin')
    .addEventListener('click', JoinCreationOperators.operatorForkJoin);
  document
    .getElementById('join-creation-merge')
    .addEventListener('click', JoinCreationOperators.operatorMerge);
  document
    .getElementById('join-creation-partition')
    .addEventListener('click', JoinCreationOperators.operatorPartition);
  document
    .getElementById('join-creation-race')
    .addEventListener('click', JoinCreationOperators.operatorRace);
  document
    .getElementById('join-creation-zip')
    .addEventListener('click', JoinCreationOperators.operatorZip);
}

// transformation operators
function addTransformationOperatorsListeners() {
  document
    .getElementById('transformation-buffer')
    .addEventListener('click', TransformationOperators.operatorBuffer);
  document
    .getElementById('transformation-bufferCount')
    .addEventListener('click', TransformationOperators.operatorBufferCount);
  document
    .getElementById('transformation-bufferTime')
    .addEventListener('click', TransformationOperators.operatorBufferTime);
  document
    .getElementById('transformation-bufferToggle')
    .addEventListener('click', TransformationOperators.operatorBufferToggle);
  document
    .getElementById('transformation-bufferWhen')
    .addEventListener('click', TransformationOperators.operatorBufferWhen);
}

// multicasting operators
function addMulticastingOperatorsListeners() {
  document
    .getElementById('multicasting-share')
    .addEventListener('click', MulticastingOperators.operatorShare);
}
