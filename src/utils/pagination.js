export const pagination = (RESIDENT_PERPAGER, universe, page) => {
    const maxLimit = RESIDENT_PERPAGER * page
    const minLimit = maxLimit - RESIDENT_PERPAGER
    const newResidents = universe?.residents.slice(minLimit, maxLimit);

    return newResidents
}