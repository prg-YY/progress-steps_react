import { Form } from "react-bootstrap"
import React, { useState } from "react"

export const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || "")

  const handleChange = (value) => {
    setCurrentValue(value)
    onChange(value, item.value)
  }

  switch (item.type) {
    case "text":
      return (
        <React.Fragment>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </React.Fragment>
      )
      break
    case "password":
      return (
        <React.Fragment>
          <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
          />
        </React.Fragment>
      )
      break
    case "information":
      return <p>{item.label}</p>
    case "select":
      return (
        <div className="mt-2">
          <Form.Select
            aria-label={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
          >
            <option>{item.label}</option>
            {item.options.map((opt, index) => {
              return <option value={opt}>{opt}</option>
            })}
          </Form.Select>
        </div>
      )
  }
}
