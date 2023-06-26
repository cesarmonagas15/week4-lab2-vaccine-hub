class ExpressError extends Error {
    constructor(message, status) {
      super()
      this.message = message
      this.status = status
    }
  }

class BadRequestError extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Bad request"
        this.status = 400
    }
}
class UnauthorizedError extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Unauthorized"
        this.status = 401
    }
}
class ForbiddenError extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Forbidden"
        this.status = 403
    }
}
class NotFoundError extends ExpressError{
    constructor(message, status){
        super()
        this.message = "Not found"
        this.status = 404
    }
}

module.exports = {ExpressError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError}
