/******************** 
 * Ttracetest3 Test *
 ********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'tTraceTest3';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var thisExp;
var win;
var event;
var shuffle;
var pi;
var sin;
var cos;
var sqrt;
var trialClock;
var trialMouse;
var trialCursor;
var trialTarget1;
var trialTarget2;
var trialTarget3;
var trialTargetA;
var trialTargetB;
var trialTargetC;
var trialText1;
var trialText2;
var trialText3;
var trialTextA;
var trialTextB;
var trialTextC;
var trialBrush;
var gettrialBrush;
var trialBrushReset;
var trialBrushCurrentShape;
var trialBrushBrushPos;
var trialBrushPointer;
var trialBrushAtStartPoint;
var trialBrushShapes;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  sqrt = Math.sqrt;
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialMouse = new core.Mouse({
    win: psychoJS.window,
  });
  trialMouse.mouseClock = new util.Clock();
  trialCursor = new visual.Polygon ({
    win: psychoJS.window, name: 'trialCursor', 
    edges: 180, size:[0.025, 0.025],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  trialTarget1 = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTarget1', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  trialTarget2 = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTarget2', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  trialTarget3 = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTarget3', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  trialTargetA = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTargetA', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  trialTargetB = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTargetB', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  trialTargetC = new visual.Polygon ({
    win: psychoJS.window, name: 'trialTargetC', 
    edges: 180, size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  trialText1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText1',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  trialText2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -11.0 
  });
  
  trialText3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText3',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -12.0 
  });
  
  trialTextA = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialTextA',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -13.0 
  });
  
  trialTextB = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialTextB',
    text: 'B',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -14.0 
  });
  
  trialTextC = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialTextC',
    text: 'C',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -15.0 
  });
  
  trialBrush = {};
  gettrialBrush = function() {
    return ( new visual.ShapeStim({
      win: psychoJS.window,
      vertices: [[0, 0]],
      lineWidth: 1.5,
      lineColor: new util.Color([1, 1, 1]),
      opacity: '1',
      closeShape: false,
      autoLog: false
      }))
  }
  
  trialBrushReset = function() {
    if (trialBrushShapes.length > 0) {
      for (let shape of trialBrushShapes) {
        shape.setAutoDraw(false);
      }
    }
    trialBrushAtStartPoint = false;
    trialBrushShapes = [];
    trialBrushCurrentShape = -1;
  }
  
  trialBrushCurrentShape = -1;
  trialBrushBrushPos = [];
  trialBrushPointer = new core.Mouse({win: psychoJS.window});
  trialBrushAtStartPoint = false;
  trialBrushShapes = [];
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'tTraceCond1.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var gotValidClick;
var response1;
var response2;
var response3;
var responseA;
var responseB;
var responseC;
var targetOpac1;
var targetOpac2;
var targetOpac3;
var targetOpacA;
var targetOpacB;
var targetOpacC;
var trialStep;
var steps;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // setup some python lists for storing info about the trialMouse
    // current position of the mouse:
    trialMouse.x = [];
    trialMouse.y = [];
    trialMouse.leftButton = [];
    trialMouse.midButton = [];
    trialMouse.rightButton = [];
    trialMouse.time = [];
    gotValidClick = false; // until a click is received
    trialMouse.mouseClock.reset();
    trialCursor.pos = [1.5, 1.5];
    trialMouse.pos = [1.5, 1.5];
    response1 = false;
    response2 = true;
    response3 = true;
    responseA = true;
    responseB = true;
    responseC = true;
    targetOpac1 = 0.3;
    targetOpac2 = 0.3;
    targetOpac3 = 0.3;
    targetOpacA = 0.3;
    targetOpacB = 0.3;
    targetOpacC = 0.3;
    trialStep = 1;
    steps = [];
    
    trialTarget1.setPos([pos1, pos2]);
    trialTarget2.setPos([pos5, pos6]);
    trialTarget3.setPos([pos9, pos10]);
    trialTargetA.setPos([pos3, pos4]);
    trialTargetB.setPos([pos7, pos8]);
    trialTargetC.setPos([pos11, pos12]);
    trialText1.setPos([pos1, pos2]);
    trialText2.setPos([pos5, pos6]);
    trialText3.setPos([pos9, pos10]);
    trialTextA.setPos([pos3, pos4]);
    trialTextB.setPos([pos7, pos8]);
    trialTextC.setPos([pos11, pos12]);
    trialBrushReset();
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialMouse);
    trialComponents.push(trialCursor);
    trialComponents.push(trialTarget1);
    trialComponents.push(trialTarget2);
    trialComponents.push(trialTarget3);
    trialComponents.push(trialTargetA);
    trialComponents.push(trialTargetB);
    trialComponents.push(trialTargetC);
    trialComponents.push(trialText1);
    trialComponents.push(trialText2);
    trialComponents.push(trialText3);
    trialComponents.push(trialTextA);
    trialComponents.push(trialTextB);
    trialComponents.push(trialTextC);
    trialComponents.push(trialBrush);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var CursorTargetDistance1;
var CursorTargetDistance2;
var CursorTargetDistance3;
var CursorTargetDistanceA;
var CursorTargetDistanceB;
var CursorTargetDistanceC;
function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *trialMouse* updates
    if (t >= 0.0 && trialMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialMouse.tStart = t;  // (not accounting for frame time here)
      trialMouse.frameNStart = frameN;  // exact frame index
      
      trialMouse.status = PsychoJS.Status.STARTED;
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (trialMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      let buttons = trialMouse.getPressed();
      const xys = trialMouse.getPos();
      trialMouse.x.push(xys[0]);
      trialMouse.y.push(xys[1]);
      trialMouse.leftButton.push(buttons[0]);
      trialMouse.midButton.push(buttons[1]);
      trialMouse.rightButton.push(buttons[2]);
      trialMouse.time.push(trialMouse.mouseClock.getTime());
    }
    CursorTargetDistance1 = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTarget1.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTarget1.pos[1]), 2)));
    CursorTargetDistance2 = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTarget2.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTarget2.pos[1]), 2)));
    CursorTargetDistance3 = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTarget3.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTarget3.pos[1]), 2)));
    CursorTargetDistanceA = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTargetA.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTargetA.pos[1]), 2)));
    CursorTargetDistanceB = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTargetB.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTargetB.pos[1]), 2)));
    CursorTargetDistanceC = Math.sqrt((Math.pow((trialCursor.pos[0] - trialTargetC.pos[0]), 2) + Math.pow((trialCursor.pos[1] - trialTargetC.pos[1]), 2)));
    steps.append(trialStep);
    if ((! response1)) {
        trialStep = 1;
        if ((CursorTargetDistance1 < 0.05)) {
            targetOpac1 = 0;
            response1 = true;
            responseA = false;
            console.log(((("Target get" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if ((! responseA)) {
        trialStep = 2;
        if ((CursorTargetDistanceA < 0.05)) {
            targetOpacA = 0;
            responseA = true;
            response2 = false;
            console.log(((("Target get" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if ((! response2)) {
        trialStep = 3;
        if ((CursorTargetDistance2 < 0.05)) {
            targetOpac2 = 0;
            response2 = true;
            responseB = false;
            console.log(((("Target get" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if ((! responseB)) {
        trialStep = 4;
        if ((CursorTargetDistanceB < 0.05)) {
            targetOpacB = 0;
            responseB = true;
            response3 = false;
            console.log(((("Target get" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if ((! response3)) {
        trialStep = 5;
        if ((CursorTargetDistance3 < 0.05)) {
            targetOpac3 = 0;
            response3 = true;
            responseC = false;
            console.log(((("Target get" + " (") + globalClock.getTime().toString()) + ")"));
        }
    }
    if ((! responseC)) {
        trialStep = 6;
        if ((CursorTargetDistanceC < 0.05)) {
            targetOpacC = 0;
            responseC = true;
            console.log(((("Target get" + " (") + globalClock.getTime().toString()) + ")"));
            continueRoutine = false;
        }
    }
    
    
    // *trialCursor* updates
    if (t >= 0.0 && trialCursor.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialCursor.tStart = t;  // (not accounting for frame time here)
      trialCursor.frameNStart = frameN;  // exact frame index
      
      trialCursor.setAutoDraw(true);
    }

    
    if (trialCursor.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialCursor.setPos([trialMouse.getPos()[0], trialMouse.getPos()[1]]);
    }
    
    // *trialTarget1* updates
    if (t >= 0.0 && trialTarget1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTarget1.tStart = t;  // (not accounting for frame time here)
      trialTarget1.frameNStart = frameN;  // exact frame index
      
      trialTarget1.setAutoDraw(true);
    }

    
    if (trialTarget1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTarget1.setOpacity(targetOpac1);
    }
    
    // *trialTarget2* updates
    if (t >= 0.0 && trialTarget2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTarget2.tStart = t;  // (not accounting for frame time here)
      trialTarget2.frameNStart = frameN;  // exact frame index
      
      trialTarget2.setAutoDraw(true);
    }

    
    if (trialTarget2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTarget2.setOpacity(targetOpac2);
    }
    
    // *trialTarget3* updates
    if (t >= 0.0 && trialTarget3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTarget3.tStart = t;  // (not accounting for frame time here)
      trialTarget3.frameNStart = frameN;  // exact frame index
      
      trialTarget3.setAutoDraw(true);
    }

    
    if (trialTarget3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTarget3.setOpacity(targetOpac3);
    }
    
    // *trialTargetA* updates
    if (t >= 0.0 && trialTargetA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTargetA.tStart = t;  // (not accounting for frame time here)
      trialTargetA.frameNStart = frameN;  // exact frame index
      
      trialTargetA.setAutoDraw(true);
    }

    
    if (trialTargetA.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTargetA.setOpacity(targetOpacA);
    }
    
    // *trialTargetB* updates
    if (t >= 0.0 && trialTargetB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTargetB.tStart = t;  // (not accounting for frame time here)
      trialTargetB.frameNStart = frameN;  // exact frame index
      
      trialTargetB.setAutoDraw(true);
    }

    
    if (trialTargetB.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTargetB.setOpacity(targetOpacB);
    }
    
    // *trialTargetC* updates
    if (t >= 0.0 && trialTargetC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTargetC.tStart = t;  // (not accounting for frame time here)
      trialTargetC.frameNStart = frameN;  // exact frame index
      
      trialTargetC.setAutoDraw(true);
    }

    
    if (trialTargetC.status === PsychoJS.Status.STARTED){ // only update if being drawn
      trialTargetC.setOpacity(targetOpacC);
    }
    
    // *trialText1* updates
    if (t >= 0.0 && trialText1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText1.tStart = t;  // (not accounting for frame time here)
      trialText1.frameNStart = frameN;  // exact frame index
      
      trialText1.setAutoDraw(true);
    }

    
    // *trialText2* updates
    if (t >= 0.0 && trialText2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText2.tStart = t;  // (not accounting for frame time here)
      trialText2.frameNStart = frameN;  // exact frame index
      
      trialText2.setAutoDraw(true);
    }

    
    // *trialText3* updates
    if (t >= 0.0 && trialText3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText3.tStart = t;  // (not accounting for frame time here)
      trialText3.frameNStart = frameN;  // exact frame index
      
      trialText3.setAutoDraw(true);
    }

    
    // *trialTextA* updates
    if (t >= 0.0 && trialTextA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTextA.tStart = t;  // (not accounting for frame time here)
      trialTextA.frameNStart = frameN;  // exact frame index
      
      trialTextA.setAutoDraw(true);
    }

    
    // *trialTextB* updates
    if (t >= 0.0 && trialTextB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTextB.tStart = t;  // (not accounting for frame time here)
      trialTextB.frameNStart = frameN;  // exact frame index
      
      trialTextB.setAutoDraw(true);
    }

    
    // *trialTextC* updates
    if (t >= 0.0 && trialTextC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialTextC.tStart = t;  // (not accounting for frame time here)
      trialTextC.frameNStart = frameN;  // exact frame index
      
      trialTextC.setAutoDraw(true);
    }

    if (trialBrushPointer.getPressed()[0] === 1 && trialBrushAtStartPoint != true) {
      trialBrushAtStartPoint = true;
      trialBrushBrushPos = [];
      trialBrushShapes.push(gettrialBrush());
      trialBrushCurrentShape += 1;
      trialBrushShapes[trialBrushCurrentShape].setAutoDraw(true);
    }
    if (trialBrushPointer.getPressed()[0] === 1) {
      trialBrushBrushPos.push(trialBrushPointer.getPos());
      trialBrushShapes[trialBrushCurrentShape].setVertices(trialBrushBrushPos);
    } else {
      trialBrushAtStartPoint = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('trialMouse.x', trialMouse.x);
    psychoJS.experiment.addData('trialMouse.y', trialMouse.y);
    psychoJS.experiment.addData('trialMouse.leftButton', trialMouse.leftButton);
    psychoJS.experiment.addData('trialMouse.midButton', trialMouse.midButton);
    psychoJS.experiment.addData('trialMouse.rightButton', trialMouse.rightButton);
    psychoJS.experiment.addData('trialMouse.time', trialMouse.time);
    
    thisExp.addData("step", steps);
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  document.documentElement.style.cursor = 'auto';
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
