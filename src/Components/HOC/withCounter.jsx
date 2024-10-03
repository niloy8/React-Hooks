import React from "react";


const withCounter = (OrginalComponent) => {
    class Newcomponent extends React.Component {
        state = {
            count: 0
        }

        increment = () => {
            this.setState((prev) => ({ count: prev.count + 1 }))
        }
        render() {
            const { count } = this.state
            return <OrginalComponent count={count} increment={this.increment}></OrginalComponent>
        }
    }

    return Newcomponent
}

export default withCounter