const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

const ImpliedReturn = () => (
    <>
        <h3>Implied return</h3>
        <p>
            fourTimesFive = {fourTimesFive} <br />
            multiply(4, 5) = {multiply(4, 5)}
        </p>
    </>
);

export default ImpliedReturn;