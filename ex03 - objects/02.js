function worker(obj) {

    if (obj.dizziness) {

        obj.levelOfHydrated += obj.weight * obj.experience * 0.1;

        obj.dizziness = false;

    }

    return obj;

}

console.log(worker({ weight: 80,

    experience: 1,
    
    levelOfHydrated: 0,
    
    dizziness: true }));