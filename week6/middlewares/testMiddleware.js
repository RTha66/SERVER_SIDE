const testMiddleware = (rr = undefined) => {
    return (req, res, next) => {
    console.log("Authen")
    console.log(rr)
    req.user=1
    next()
  }
}
export default testMiddleware