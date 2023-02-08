export const numberPage = (universe, RESIDENT_PERPAGER) => {
    const quantityPages = Math.ceil(universe?.residents.length / RESIDENT_PERPAGER);
    const arrayPages = []

    for (let i = 1; i <= quantityPages; i++) {
        arrayPages.push(i)
    }

    return arrayPages
}