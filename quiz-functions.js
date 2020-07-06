export function confirmedYes(word) {
    const firstLetter = word.charAt(0);
    const isY = firstLetter ==='y' || firstLetter ==='Y';

    return isY;
}