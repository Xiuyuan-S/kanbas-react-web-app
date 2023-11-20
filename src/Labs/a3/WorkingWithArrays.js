const WorkingWithArrays = () => {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
       functionScoped,   blockScoped,
       constant1,        numberArray1,   stringArray1
    ];
    console.log("Working with Arrays:");
    console.log("functionScoped:", functionScoped);
    console.log("blockScoped:", blockScoped);
    console.log("constant1:", constant1);
    console.log("numberArray1:", numberArray1);
    console.log("stringArray1:", stringArray1);
    console.log("variableArray1:", variableArray1);

    return (
        <div>
            <h2>Working with Arrays</h2>
            <p>numberArray1: {numberArray1.join('')}</p>
            <p>stringArray1: {stringArray1.join('')}</p>
            <p>variableArray1: {variableArray1.join('')}</p>
        </div>
    );
};

export default WorkingWithArrays;