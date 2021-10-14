import React, {useState, useMemo} from 'react'
import {useBattery} from 'react-use';
import useInput from './Hooks/useInput';

// function factorialOf(n) {
//     console.log('factorial started')
//     return n <= 0 ? 1 : n * factorialOf(n - 1)
// }

// export default function UseMemo() {

//     const [number, setNumber] = useState(1)
//     const [inc, setInc] = useState(0)
//     const [result, setResult] = useState(1)

//     // let factorial = factorialOf(number)
//     let factorial = useMemo(() => {
//         setResult(factorialOf(number))
//     }, [number])

//     const onClick = () => setInc(inc => inc + 1)

//     return (
//         <div>
//             Factorial of <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
//             <p>result: {factorial} {result}</p>
//             <button onClick={onClick}>Rerender</button>
//             <span>Render count{inc}</span>
//         </div>
//     )
// }

//  export default function UseMemo() {
//     const batteryState = useBattery();
  
//     if (!batteryState.isSupported) {
//       return (
//         <div>
//           <strong>Battery sensor</strong>: <span>not supported</span>
//         </div>
//       );
//     }
  
//     if (!batteryState.fetched) {
//       return (
//         <div>
//           <strong>Battery sensor</strong>: <span>supported</span> <br />
//           <strong>Battery state</strong>: <span>fetching</span>
//         </div>
//       );
//     }
  
//     return (
//       <div>
//         <strong>Battery sensor</strong>:&nbsp;&nbsp; <span>supported</span> <br />
//         <strong>Battery state</strong>: <span>fetched</span> <br />
//         <strong>Charge level</strong>:&nbsp;&nbsp; <span>{ (batteryState.level * 100).toFixed(0) }%</span> <br />
//         <strong>Charging</strong>:&nbsp;&nbsp; <span>{ batteryState.charging ? 'yes' : 'no' }</span> <br />
//         <strong>Charging time</strong>:&nbsp;&nbsp;
//         <span>{ batteryState.chargingTime ? batteryState.chargingTime : 'finished' }</span> <br />
//         <strong>Discharging time</strong>:&nbsp;&nbsp; <span>{ batteryState.dischargingTime }</span>
//       </div>
//     );
//   };

export default function UseMemo() {
    let rules = {
        required : true,
        min: 5,
        max: 10
    }
    const name = useInput('Jhon', rules)
    // const lastname = useInput('Doe', false)
    let getErrors = () => {
        let errors = []
        for (const key in name.error) {
            if (Object.hasOwnProperty.call(name.error, key)) {
                const element = name.error[key];
                errors.push(
                        <p key={key}>{key}: {element}</p>
                )
            }
        }
        return errors
    }

    return (
        <div>
            <input type="text" {...name} />
            <div>{getErrors()}</div>
            <br />
            {/* <input type="text" {...lastname} />
            {lastname.error && <span style={{color: 'red'}}>{lastname.error}</span>} */}
        </div>
    )
}