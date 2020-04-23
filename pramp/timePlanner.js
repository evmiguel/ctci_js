// naive solution is to loop through scheduleA i
    // loop through scheduleB to find scheduleB[j][0] = scheduleA[i][0]

// success case
// [60, 120], [60, 70]


// fail case
// [10, 50], [0, 15]

// start with pointer A and pointer B at 0
// if dur <= duration(slotA[i]) && dur <= duration(slotB[j])
    // if start(A) === start(B)
        // return start(A)+dur
// else
    // aPtr++, bPtr++
function timeSlotAvailable(scheduleA, scheduleB, dur){
    let aPtr = 0, bPtr = 0;

    function duration(point) {
        return point[1] - point[0];
    }
    while (aPtr < scheduleA.length && bPtr < scheduleB.length) {
        let start = Math.max(scheduleA[aPtr][0], scheduleB[bPtr][0]);
        let end = Math.min(scheduleA[aPtr][1], scheduleB[bPtr][1]);

        if (start + dur <= end) return [start, start+dur];

        if (scheduleA[aPtr][1] < scheduleB[bPtr][1]) {
            aPtr++
        } else {
            bPtr++;
        }
    }

    return [];
}

console.log(timeSlotAvailable([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 8));
console.log(timeSlotAvailable([[10, 50], [60, 120], [140, 210]], [[0, 15], [60, 70]], 12));