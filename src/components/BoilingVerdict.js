export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p>Water will boil</p>;
    }
    return <p>Water will not boil</p>;
}
