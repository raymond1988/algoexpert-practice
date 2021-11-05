const taskAssignment = (k, tasks) => {
  const pairedTasks = []
  const taskDurationToIndices = getTaskDurationToIndices(tasks)

  const sortedTasks = [...tasks].sort((a, b) => a - b)
  for (let idx = 0; idx < k; idx++) {
      const taskDuration = sortedTasks[idx]
      const indicesWithTask1Duration = taskDurationToIndices[taskDuration]
      const task1Index = indicesWithTask1Duration.pop()

      //MUST BE COMPLETED
      
  }
}

const getTaskDurationToIndices = tasks => {
  const taskDurationToIndices = {}

  for (let idx = 0; idx < tasks.length; idx++) {
    const taskDuration = tasks[idx]
    if (taskDuration in taskDurationToIndices) {
      taskDurationToIndices[taskDuration].push(idx)
    } else {
      taskDurationToIndices[taskDuration] = [idx]
    }
  }
  return taskDurationToIndices
}
