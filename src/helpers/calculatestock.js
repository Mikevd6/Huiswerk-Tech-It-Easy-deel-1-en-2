export function calculatestock(inventory) {
    return inventory.reduce((total, tv) => total + tv.originalStock, 0);
}
