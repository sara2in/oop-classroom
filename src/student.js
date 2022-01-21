class Student {
    constructor (name, skillLevel) {
        this.name = name
        this.skillLevel = skillLevel
        this.assignments = []
      }
    study () {
        if (this.skillLevel !== 100) this.skillLevel++
        return this
    }
    doHomework (homework) {
        for (homework of this.assignments) {
            if (!homework && homework.completed === false) {
                doHomework(homework);
            }
        }
        
        if (!homework.skillLevel || homework.skillLevel > 100) return;
        
        this.assignments.push(homework)

        if ((this.skillLevel > homework.skillLevel)) {
            let completed = {completed: true}
            Object.assign(homework, completed)
        } else {
            let completed = {completed: false}
            Object.assign(homework, completed)
        }
    }    
}

module.exports = Student
