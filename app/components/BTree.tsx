import React from 'react'

export default function BTree({ func }: { func: string }) {
  if (func.length === 0) return <div></div>
  if (func.length === 1)
    return (
      <li>
        <a href="#">{func}</a>
      </li>
    )

  if (func[0] === '(') {
    let cnt: number = 0
    for (let i = 0; i < func.length; i++) {
      if (func[i] === '(') cnt++
      if (func[i] === ')') cnt--
      if (cnt === 0) {
        if (i === func.length - 1)
          return <BTree func={func.slice(1, func.length - 1)} />
      }
    }
  }

  let cnt: number = 0
  for (let i = func.length - 1; i >= 0; --i) {
    if (func[i] === ')') cnt++
    if (func[i] === '(') cnt--
    if (cnt === 0) {
      if (func[i] === '+') {
        return (
          <li>
            <a href="#">+</a>
            <ul>
              <BTree func={func.slice(0, i)} />
              <BTree func={func.slice(i + 1)} />
            </ul>
          </li>
        )
      } else if (func[i] === '-') {
        return (
          <li>
            <a href="#">-</a>
            <ul>
              <BTree func={func.slice(0, i)} />
              <BTree func={func.slice(i + 1)} />
            </ul>
          </li>
        )
      }
    }
  }

  cnt = 0
  for (let i = func.length - 1; i >= 0; --i) {
    if (func[i] === ')') cnt++
    if (func[i] === '(') cnt--
    if (cnt === 0) {
      if (func[i] === '*') {
        return (
          <li>
            <a href="#">*</a>
            <ul>
              <BTree func={func.slice(0, i)} />
              <BTree func={func.slice(i + 1)} />
            </ul>
          </li>
        )
      } else if (func[i] === '/') {
        return (
          <li>
            <a href="#">/</a>
            <ul>
              <BTree func={func.slice(0, i)} />
              <BTree func={func.slice(i + 1)} />
            </ul>
          </li>
        )
      }
    }
  }

  return <p>ERROR</p>
}
