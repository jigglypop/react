import React, {
    useMemo,
    useState,
    useCallback,
    useRef,
    useEffect,
} from "react";

const getAverage = (numbers) => {
    console.log("평균값 계산중");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

export default function Average() {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    const InputEl = useRef(null);

    useEffect(() => {
        InputEl.current.focus();
    }, []);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        setList(list.concat(parseInt(number)));
        setNumber("");
        InputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={InputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
                {/* <b>평균값:</b> {getAverage(list)} */}
            </div>
        </div>
    );
}
