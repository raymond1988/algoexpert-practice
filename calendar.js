let calendar1 = [
  ['9:00', '10:30'],
  ['12:00', '13:00'],
  ['16:00', '18:00']
]
let dailyBounds1 = ['9:00', '20:00']
let calendar2 = [
  ['10:00', '11:30'],
  ['12:30', '14:30'],
  ['14:30', '15:00'],
  ['16:00', '17:00']
]
let dailyBounds2 = ['10:00', '18:30']
let meetingDuration = 30

function calendarMatching (
  calendar1,
  dailyBounds1,
  calendar2,
  dailyBounds2,
  meetingDuration
) {
  //updatedCalendar
  const updatedCalendar1 = updateCalendar(dailyBounds1, calendar1)
  const updatedCalendar2 = updateCalendar(dailyBounds2, calendar2)
  const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2)
  const flattenedCalendar = flattenCalendar(mergedCalendar)
  return getMatchingAvailabilities(flattenedCalendar, meetingDuration)
}

function updateCalendar (dailyBounds, calendar) {
  const updatedCalendar = [
    ['0:00', dailyBounds[0]],
    ...calendar,
    [dailyBounds[1], '23:59']
  ]
  return updatedCalendar.map(meeting => meeting.map(timeToMinutes))
}

function mergeCalendars (calendar1, calendar2) {
  //merge sort
  const merged = []
  let i,
    j = 0
  while (i < calendar1.length && j < calendar2.length) {
    const meeting1 = calendar1[i]
    const meeting2 = calendar2[j]
    if (meeting1[0] < meeting2[0]) {
      merged.push(meeting1)
      i++
    } else {
      merged.push(meeting2)
      j++
    }
  }
  while (i < calendar1.length) merged.push(calendar1[i++])
  while (j < calendar2.length) merged.push(calendar2[j++])

  return merged
}

function timeToMinutes (meeting) {
  let [hours, minutes] = meeting.split(':').map(str => parseInt(str))
  return hours * 60 + minutes
}

function flattenCalendar (calendar) {
  const flattened = [calendar[0].slice()]
  for (let index = 1; index < calendar.length; index++) {
    const currentMeeting = calendar[index]
    const previousMeeting = flattened[flattened.length - 1]
    const [currentStart, currentEnd] = currentMeeting
    const [previousStart, previousEnd] = previousMeeting
    if (previousEnd >= currentStart) {
      const newPreviousMeeting = [
        previousStart,
        Math.max(previousEnd, currentEnd)
      ]
      flattened[flattened.length - 1] = newPreviousMeeting
    } else {
      flattened.push(currentMeeting.slice())
    }
  }
  return flattened
}

function getMatchingAvailabilities (calendar, meetingDuration) {
  const matchingAvailabilities = []
  for (let i = 1; i < calendar.length; i++) {
    const start = calendar[i - 1][1]
    const end = calendar[i][0]
    const availableDuration = end - start
    if (availableDuration >= meetingDuration) {
      matchingAvailabilities.push([start, end])
    }
  }
  return matchingAvailabilities.map(meeting => meeting.map(minutesToTime))
}

function minutesToTime (minutes) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const hoursString = hours.toString()
  const minutesString = mins < 10 ? '0' + mins.toString() : mins.toString()
  return hoursString + ':' + minutesString
}

console.log(
  calendarMatching(
    calendar1,
    dailyBounds1,
    calendar2,
    dailyBounds2,
    meetingDuration
  )
)
