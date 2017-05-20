import React from "react"

/*
  A higher-order component is a function that receives a component as a parameter,
  and returns another component
*/
const withRouter = (InnerComponent) => {
  const OuterComponent = (props, context) => (
     <InnerComponent
       router =  {context.router}
      {...props}
    />)

  OuterComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  return OuterComponent
}

export default withRouter
