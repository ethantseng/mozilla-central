/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is OEone Calendar Code, released October 31st, 2001.
 *
 * The Initial Developer of the Original Code is
 * OEone Corporation.
 * Portions created by the Initial Developer are Copyright (C) 2001
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

/*
 * Utility functions used by all calendar hosts (Sunbird, Lightning, etc.).
 * Functions in this file must _not_ depend on functions in any other files.
 */

function getCalendarManager()
{
    return Components.classes["@mozilla.org/calendar/manager;1"].getService(Components.interfaces.calICalendarManager);
}

function openCalendarWizard(callback)
{
    openDialog("chrome://calendar/content/calendarCreation.xul", "caEditServer", "chrome,titlebar,modal", callback);
}

function makeURL(uriString)
{
    var ioservice = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
    return ioservice.newURI(uriString, null, null);
}

var calIDateTime = Components.interfaces.calIDateTime;

var calIEvent = Components.interfaces.calIEvent;
var calITodo = Components.interfaces.calITodo;

var calIRecurrenceInfo = Components.interfaces.calIRecurrenceInfo;
var calIRecurrenceRule = Components.interfaces.calIRecurrenceRule;
var calIRecurrenceDate = Components.interfaces.calIRecurrenceDate;

var calRecurrenceInfo = Components.Constructor("@mozilla.org/calendar/recurrence-info;1", calIRecurrenceInfo);
var calRecurrenceRule = Components.Constructor("@mozilla.org/calendar/recurrence-rule;1", calIRecurrenceRule);
var calRecurrenceDate = Components.Constructor("@mozilla.org/calendar/recurrence-date;1", calIRecurrenceDate);

function createEvent()
{
    return Components.classes["@mozilla.org/calendar/event;1"].createInstance(Components.interfaces.calIEvent);
}

function createToDo()
{
    return Components.classes["@mozilla.org/calendar/todo;1"].createInstance(Components.interfaces.calITodo);
}

function createRecurrenceInfo()
{
    return Components.classes["@mozilla.org/calendar/recurrence-info;1"].createInstance(Components.interfaces.calIRecurrenceInfo);
}

function createDateTime()
{
    return Components.classes["@mozilla.org/calendar/datetime;1"].createInstance(Components.interfaces.calIDateTime);
}

function createAttendee()
{
    return Components.classes["@mozilla.org/calendar/attendee;1"].createInstance(Components.interfaces.calIAttendee);
}

function createAttachment()
{
    return Components.classes["@mozilla.org/calendar/attachment;1"].createInstance(Components.interfaces.calIAttachment);
}

function jsDateToDateTime(date)
{
    var newDate = createDateTime();
    newDate.jsDate = date;
    debug ("date: " + date + " newDate: " + newDate + " newDate.jsDate: "+ newDate.jsDate + "\n");
    return newDate;
}

function isEvent(aObject)
{
   return aObject instanceof Components.interfaces.calIEvent;
}


function isToDo(aObject)
{
   return aObject instanceof Components.interfaces.calITodo;
}

