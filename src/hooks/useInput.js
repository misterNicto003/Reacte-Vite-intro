import React, { useState } from 'react'

export const useInput = (defaultValue = '') => {
  const[value,setValue] = useState(defaultValue)
  console.log(value);
return {
  value,
  onChange:(e) => setValue(e.target.value)
}
}
