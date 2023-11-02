function Har() {
    const [dsa, setDsa] = useState([123, 234, 345, 456]);
    const qwe = (ert) => {
      setDsa([ert, ...dsa]);
    };
    const wer = (rty) => {
      zxc(dsa.filter((x) => x !== rty));
    };
    return (
      <div>
        <h2>{JSON.stringify(dsa)}</h2>
        <button onClick={() => qwe(567)}>EWQ</button>
        <button onClick={() => wer(234)}>REW</button>
      </div>
    );
  }
  export default Har;