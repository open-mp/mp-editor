import React from 'react'
import { Design } from '../common/components/index'

class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is 12:00.</h2>
          <Button type="primary">Primary</Button>
        </div>
      );
    }
  }

  export default Clock