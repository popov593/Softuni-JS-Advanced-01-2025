export const planYourTrip = {
    choosingDestination(destination, season, year) {
        if (year != 2024) {
            throw new Error(`Invalid Year!`);
        } else {
            if (destination == "Ski Resort") {

                if (season === "Winter") {
                    return `Great choice! The ${season} is the perfect time to visit the ${destination}.`;
                } else {
                    return `Consider visiting during the Winter for the best experience at the ${destination}.`;
                }
            }else{
                
                throw new Error(`This destination is not what you are looking for.`);
            }
        }
    },

    exploreOptions(activities, activityIndex) {

        let result = [];

        if (!Array.isArray(activities) || !Number.isInteger(activityIndex) || activityIndex < 0 || activityIndex >= activities.length) {
            throw new Error("Invalid Information!");
        }
        for (let i = 0; i < activities.length; i++) {
            if (i !== activityIndex) {
                result.push(activities[i]);
            }
        }
        return result.join(", ");
    },

    estimateExpenses(distanceInKilometers, fuelCostPerLiter) {

        let totalCost = (distanceInKilometers * fuelCostPerLiter).toFixed(2);

        if (typeof distanceInKilometers !== "number" || distanceInKilometers <= 0 ||
            typeof fuelCostPerLiter !== "number" || fuelCostPerLiter <= 0) {
            throw new Error("Invalid Information!");
        } else if (totalCost <= 500) {
            return `The trip is budget-friendly, estimated cost is $${totalCost}.`;
        } else {
            return `The estimated cost for the trip is $${totalCost}, plan accordingly.`;
        }
    }
}