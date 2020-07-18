#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.3),
    on July 18, 2020, at 14:47
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.3'
expName = 'tTraceTest3'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\Andrew\\Documents\\Work\\Projects\\tTraceTest3\\tTraceTest3_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "setup"
setupClock = core.Clock()

# Initialize components for Routine "trial"
trialClock = core.Clock()
trialMouse = event.Mouse(win=win)
x, y = [None, None]
trialMouse.mouseClock = core.Clock()
trialCursor = visual.Polygon(
    win=win, name='trialCursor',
    edges=180, size=(0.025, 0.025),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-2.0, interpolate=True)
trialTarget1 = visual.Polygon(
    win=win, name='trialTarget1',
    edges=180, size=(0.05, 0.05),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1.0, depth=-3.0, interpolate=True)
trialTarget2 = visual.Polygon(
    win=win, name='trialTarget2',
    edges=180, size=(0.05, 0.05),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1.0, depth=-4.0, interpolate=True)
trialTarget3 = visual.Polygon(
    win=win, name='trialTarget3',
    edges=180, size=(0.05, 0.05),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1.0, depth=-5.0, interpolate=True)
trialTargetA = visual.Polygon(
    win=win, name='trialTargetA',
    edges=180, size=(0.05, 0.05),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1.0, depth=-6.0, interpolate=True)
trialTargetB = visual.Polygon(
    win=win, name='trialTargetB',
    edges=180, size=(0.05, 0.05),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1.0, depth=-7.0, interpolate=True)
trialTargetC = visual.Polygon(
    win=win, name='trialTargetC',
    edges=180, size=(0.05, 0.05),
    ori=0, pos=[0,0],
    lineWidth=1, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1.0, depth=-8.0, interpolate=True)
# Set experiment start values for variable component trialStep
trialStep = 0
trialStepContainer = []
trialText1 = visual.TextStim(win=win, name='trialText1',
    text='1',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-10.0);
trialText2 = visual.TextStim(win=win, name='trialText2',
    text='2',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-11.0);
trialText3 = visual.TextStim(win=win, name='trialText3',
    text='3',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-12.0);
trialTextA = visual.TextStim(win=win, name='trialTextA',
    text='A',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-13.0);
trialTextB = visual.TextStim(win=win, name='trialTextB',
    text='B',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-14.0);
trialTextC = visual.TextStim(win=win, name='trialTextC',
    text='C',
    font='Arial',
    pos=[0,0], height=0.03, wrapWidth=None, ori=0, 
    color='black', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-15.0);
trialBrush = visual.Brush(win=win, name='trialBrush',
   lineWidth=1.5,
   lineColor=[1,1,1],
   lineColorSpace='rgb',
   opacity='1')

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "setup"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
setupComponents = []
for thisComponent in setupComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
setupClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "setup"-------
while continueRoutine:
    # get current time
    t = setupClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=setupClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in setupComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "setup"-------
for thisComponent in setupComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "setup" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('tTraceCond1.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    # update component parameters for each repeat
    # setup some python lists for storing info about the trialMouse
    trialMouse.x = []
    trialMouse.y = []
    trialMouse.leftButton = []
    trialMouse.midButton = []
    trialMouse.rightButton = []
    trialMouse.time = []
    gotValidClick = False  # until a click is received
    trialMouse.mouseClock.reset()
    trialCursor.pos = (1.5,1.5)
    trialMouse.pos = (1.5,1.5)
    
    response1 = False
    response2 = True
    response3 = True
    responseA = True
    responseB = True
    responseC = True
    
    targetOpac1 = 0.3
    targetOpac2 = 0.3
    targetOpac3 = 0.3
    targetOpacA = 0.3
    targetOpacB = 0.3
    targetOpacC = 0.3
    
    trialStep = 1
    steps = []
    trialTarget1.setPos((pos1, pos2))
    trialTarget2.setPos((pos5, pos6))
    trialTarget3.setPos((pos9, pos10))
    trialTargetA.setPos((pos3, pos4))
    trialTargetB.setPos((pos7, pos8))
    trialTargetC.setPos((pos11, pos12))
    trialText1.setPos((pos1, pos2))
    trialText2.setPos((pos5, pos6))
    trialText3.setPos((pos9, pos10))
    trialTextA.setPos((pos3, pos4))
    trialTextB.setPos((pos7, pos8))
    trialTextC.setPos((pos11, pos12))
    trialBrush.reset()
    # keep track of which components have finished
    trialComponents = [trialMouse, trialCursor, trialTarget1, trialTarget2, trialTarget3, trialTargetA, trialTargetB, trialTargetC, trialText1, trialText2, trialText3, trialTextA, trialTextB, trialTextC, trialBrush]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *trialMouse* updates
        if trialMouse.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialMouse.frameNStart = frameN  # exact frame index
            trialMouse.tStart = t  # local t and not account for scr refresh
            trialMouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialMouse, 'tStartRefresh')  # time at next scr refresh
            trialMouse.status = STARTED
            prevButtonState = [0, 0, 0]  # if now button is down we will treat as 'new' click
        if trialMouse.status == STARTED:  # only update if started and not finished!
            x, y = trialMouse.getPos()
            trialMouse.x.append(x)
            trialMouse.y.append(y)
            buttons = trialMouse.getPressed()
            trialMouse.leftButton.append(buttons[0])
            trialMouse.midButton.append(buttons[1])
            trialMouse.rightButton.append(buttons[2])
            trialMouse.time.append(trialMouse.mouseClock.getTime())
        CursorTargetDistance1 = sqrt((trialCursor.pos[0]-trialTarget1.pos[0])**2 + (trialCursor.pos[1]-trialTarget1.pos[1])**2)
        CursorTargetDistance2 = sqrt((trialCursor.pos[0]-trialTarget2.pos[0])**2 + (trialCursor.pos[1]-trialTarget2.pos[1])**2)
        CursorTargetDistance3 = sqrt((trialCursor.pos[0]-trialTarget3.pos[0])**2 + (trialCursor.pos[1]-trialTarget3.pos[1])**2)
        CursorTargetDistanceA = sqrt((trialCursor.pos[0]-trialTargetA.pos[0])**2 + (trialCursor.pos[1]-trialTargetA.pos[1])**2)
        CursorTargetDistanceB = sqrt((trialCursor.pos[0]-trialTargetB.pos[0])**2 + (trialCursor.pos[1]-trialTargetB.pos[1])**2)
        CursorTargetDistanceC = sqrt((trialCursor.pos[0]-trialTargetC.pos[0])**2 + (trialCursor.pos[1]-trialTargetC.pos[1])**2)
        
        steps.append(trialStep)
        
        if not response1:
            trialStep = 1
            if (CursorTargetDistance1 < .05):
                targetOpac1 = 0
                response1 = True
                responseA = False
                print('Target get'+' ('+str(globalClock.getTime())+')')
                
        if not responseA:
            trialStep = 2
            if (CursorTargetDistanceA < .05):
                targetOpacA = 0
                responseA = True
                response2 = False
                print('Target get'+' ('+str(globalClock.getTime())+')')
                
        if not response2:
            trialStep = 3
            if (CursorTargetDistance2 < .05):
                targetOpac2 = 0
                response2 = True
                responseB = False
                print('Target get'+' ('+str(globalClock.getTime())+')')
        
        if not responseB:
            trialStep = 4
            if (CursorTargetDistanceB < .05):
                targetOpacB = 0
                responseB = True
                response3 = False
                print('Target get'+' ('+str(globalClock.getTime())+')')
        
        if not response3:
            trialStep = 5
            if (CursorTargetDistance3 < .05):
                targetOpac3 = 0
                response3 = True
                responseC = False
                print('Target get'+' ('+str(globalClock.getTime())+')')
                
        if not responseC:
            trialStep = 6
            if (CursorTargetDistanceC < .05):
                targetOpacC = 0
                responseC = True
                print('Target get'+' ('+str(globalClock.getTime())+')')
                continueRoutine = False
        
        # *trialCursor* updates
        if trialCursor.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialCursor.frameNStart = frameN  # exact frame index
            trialCursor.tStart = t  # local t and not account for scr refresh
            trialCursor.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialCursor, 'tStartRefresh')  # time at next scr refresh
            trialCursor.setAutoDraw(True)
        if trialCursor.status == STARTED:  # only update if drawing
            trialCursor.setPos((trialMouse.getPos()[0], trialMouse.getPos()[1]), log=False)
        
        # *trialTarget1* updates
        if trialTarget1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTarget1.frameNStart = frameN  # exact frame index
            trialTarget1.tStart = t  # local t and not account for scr refresh
            trialTarget1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTarget1, 'tStartRefresh')  # time at next scr refresh
            trialTarget1.setAutoDraw(True)
        if trialTarget1.status == STARTED:  # only update if drawing
            trialTarget1.setOpacity(targetOpac1, log=False)
        
        # *trialTarget2* updates
        if trialTarget2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTarget2.frameNStart = frameN  # exact frame index
            trialTarget2.tStart = t  # local t and not account for scr refresh
            trialTarget2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTarget2, 'tStartRefresh')  # time at next scr refresh
            trialTarget2.setAutoDraw(True)
        if trialTarget2.status == STARTED:  # only update if drawing
            trialTarget2.setOpacity(targetOpac2, log=False)
        
        # *trialTarget3* updates
        if trialTarget3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTarget3.frameNStart = frameN  # exact frame index
            trialTarget3.tStart = t  # local t and not account for scr refresh
            trialTarget3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTarget3, 'tStartRefresh')  # time at next scr refresh
            trialTarget3.setAutoDraw(True)
        if trialTarget3.status == STARTED:  # only update if drawing
            trialTarget3.setOpacity(targetOpac3, log=False)
        
        # *trialTargetA* updates
        if trialTargetA.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTargetA.frameNStart = frameN  # exact frame index
            trialTargetA.tStart = t  # local t and not account for scr refresh
            trialTargetA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTargetA, 'tStartRefresh')  # time at next scr refresh
            trialTargetA.setAutoDraw(True)
        if trialTargetA.status == STARTED:  # only update if drawing
            trialTargetA.setOpacity(targetOpacA, log=False)
        
        # *trialTargetB* updates
        if trialTargetB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTargetB.frameNStart = frameN  # exact frame index
            trialTargetB.tStart = t  # local t and not account for scr refresh
            trialTargetB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTargetB, 'tStartRefresh')  # time at next scr refresh
            trialTargetB.setAutoDraw(True)
        if trialTargetB.status == STARTED:  # only update if drawing
            trialTargetB.setOpacity(targetOpacB, log=False)
        
        # *trialTargetC* updates
        if trialTargetC.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTargetC.frameNStart = frameN  # exact frame index
            trialTargetC.tStart = t  # local t and not account for scr refresh
            trialTargetC.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTargetC, 'tStartRefresh')  # time at next scr refresh
            trialTargetC.setAutoDraw(True)
        if trialTargetC.status == STARTED:  # only update if drawing
            trialTargetC.setOpacity(targetOpacC, log=False)
        
        # *trialText1* updates
        if trialText1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialText1.frameNStart = frameN  # exact frame index
            trialText1.tStart = t  # local t and not account for scr refresh
            trialText1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialText1, 'tStartRefresh')  # time at next scr refresh
            trialText1.setAutoDraw(True)
        
        # *trialText2* updates
        if trialText2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialText2.frameNStart = frameN  # exact frame index
            trialText2.tStart = t  # local t and not account for scr refresh
            trialText2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialText2, 'tStartRefresh')  # time at next scr refresh
            trialText2.setAutoDraw(True)
        
        # *trialText3* updates
        if trialText3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialText3.frameNStart = frameN  # exact frame index
            trialText3.tStart = t  # local t and not account for scr refresh
            trialText3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialText3, 'tStartRefresh')  # time at next scr refresh
            trialText3.setAutoDraw(True)
        
        # *trialTextA* updates
        if trialTextA.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTextA.frameNStart = frameN  # exact frame index
            trialTextA.tStart = t  # local t and not account for scr refresh
            trialTextA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTextA, 'tStartRefresh')  # time at next scr refresh
            trialTextA.setAutoDraw(True)
        
        # *trialTextB* updates
        if trialTextB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTextB.frameNStart = frameN  # exact frame index
            trialTextB.tStart = t  # local t and not account for scr refresh
            trialTextB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTextB, 'tStartRefresh')  # time at next scr refresh
            trialTextB.setAutoDraw(True)
        
        # *trialTextC* updates
        if trialTextC.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialTextC.frameNStart = frameN  # exact frame index
            trialTextC.tStart = t  # local t and not account for scr refresh
            trialTextC.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialTextC, 'tStartRefresh')  # time at next scr refresh
            trialTextC.setAutoDraw(True)
        
        # *trialBrush* updates
        if trialBrush.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            trialBrush.frameNStart = frameN  # exact frame index
            trialBrush.tStart = t  # local t and not account for scr refresh
            trialBrush.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(trialBrush, 'tStartRefresh')  # time at next scr refresh
            trialBrush.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for trials (TrialHandler)
    trials.addData('trialMouse.x', trialMouse.x)
    trials.addData('trialMouse.y', trialMouse.y)
    trials.addData('trialMouse.leftButton', trialMouse.leftButton)
    trials.addData('trialMouse.midButton', trialMouse.midButton)
    trials.addData('trialMouse.rightButton', trialMouse.rightButton)
    trials.addData('trialMouse.time', trialMouse.time)
    trials.addData('trialMouse.started', trialMouse.tStartRefresh)
    trials.addData('trialMouse.stopped', trialMouse.tStopRefresh)
    thisExp.addData('step', steps)
    trials.addData('trialCursor.started', trialCursor.tStartRefresh)
    trials.addData('trialCursor.stopped', trialCursor.tStopRefresh)
    trials.addData('trialTarget1.started', trialTarget1.tStartRefresh)
    trials.addData('trialTarget1.stopped', trialTarget1.tStopRefresh)
    trials.addData('trialTarget2.started', trialTarget2.tStartRefresh)
    trials.addData('trialTarget2.stopped', trialTarget2.tStopRefresh)
    trials.addData('trialTarget3.started', trialTarget3.tStartRefresh)
    trials.addData('trialTarget3.stopped', trialTarget3.tStopRefresh)
    trials.addData('trialTargetA.started', trialTargetA.tStartRefresh)
    trials.addData('trialTargetA.stopped', trialTargetA.tStopRefresh)
    trials.addData('trialTargetB.started', trialTargetB.tStartRefresh)
    trials.addData('trialTargetB.stopped', trialTargetB.tStopRefresh)
    trials.addData('trialTargetC.started', trialTargetC.tStartRefresh)
    trials.addData('trialTargetC.stopped', trialTargetC.tStopRefresh)
    trials.addData('trialText1.started', trialText1.tStartRefresh)
    trials.addData('trialText1.stopped', trialText1.tStopRefresh)
    trials.addData('trialText2.started', trialText2.tStartRefresh)
    trials.addData('trialText2.stopped', trialText2.tStopRefresh)
    trials.addData('trialText3.started', trialText3.tStartRefresh)
    trials.addData('trialText3.stopped', trialText3.tStopRefresh)
    trials.addData('trialTextA.started', trialTextA.tStartRefresh)
    trials.addData('trialTextA.stopped', trialTextA.tStopRefresh)
    trials.addData('trialTextB.started', trialTextB.tStartRefresh)
    trials.addData('trialTextB.stopped', trialTextB.tStopRefresh)
    trials.addData('trialTextC.started', trialTextC.tStartRefresh)
    trials.addData('trialTextC.stopped', trialTextC.tStopRefresh)
    trials.addData('trialBrush.started', trialBrush.tStartRefresh)
    trials.addData('trialBrush.stopped', trialBrush.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
